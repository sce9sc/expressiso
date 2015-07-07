var jwt = require('jsonwebtoken');
var logger = require("../../utils/logger");
var config = require("../../config/config");
var request = require('request');
var async = require('async');

function auth(req, res, next) {
    //preview.minimob.com
    //var secret = 'MsS5n1VUpBZHkL1H8ZV3-ACu'; //this is the preview (dev) secret. we must use the production when we deploy to production. see readme.md
    var db = req.app.get("app_config");
    var redis = db.redisSiteRepository
    var mongo = db.mongoCluster.randomSlaveRepository();
    //dashboard.minimob.com
    var secret =  req.app.settings.config.secret;  //req.secret; //this is the preview (dev) secret. we must use the production when we deploy to production. see readme.md

        var authCookie = req.cookies['x-minimob-authorization'];
        if (!authCookie) {
            next();
            return
        } else {
            var jwtToken = unescape(authCookie).split(' ')[1];
            jwt.verify(jwtToken, secret, function (err, decoded) {
                logger.info("**** jwt =" + JSON.stringify(decoded) + " ****");
                if (err) {
                    res.clearCookie("x-minimob-authorization");
                    res.redirect('http://dashboard.minimob.com/login.asp');
                    //res.redirect(req.protocol + '://' + req.get('host') + '/login.asp');
                    //res.redirect('/login.asp');
                    return
                }else {
                    var isAdmin = (decoded.aud=="admin@dashboard.minimob.com")?true:false;

                    decoded.exp = 86400 + Math.floor(new Date() / 1000);// one day 24 hours
                    decoded.iat = Math.floor(new Date() / 1000);

                   //if(!decoded.paymentInfo) {
                        /*var reqUrl = config.server + '/api/payments/GetPartnerPaymentInfo?userId=' + decoded.sub;

                        if(decoded.useas!=undefined && decoded.useas.userid){
                            reqUrl = config.server + '/api/payments/GetPartnerPaymentInfo?userId=' + decoded.useas.userid;
                        }*/
                    var userId = decoded.sub;

                    var checkSettings = (!isAdmin) ? true : false;

                    if(isAdmin && decoded.useas!=undefined && decoded.useas.userid){
                        userId = decoded.useas.userid;
                        checkSettings = true;

                    }

                    if(checkSettings)
                    {
                        async.parallel(
                            {
                                redis: function (callback) {
                                    redis.hash_userid_toparent_userid().GetValueFromHash(userId, callback)
                                },
                                mongo: function (callback) {
                                    mongo.TrafficSourceAdminSettings().findOne({'userId': userId}, {"hasAllOffers": 1}, callback)
                                }
                            },
                            function (err, results) {
                                if (!err) {
                                    var redisRes = results.redis;
                                    var mongoRes = results.mongo;
                                    decoded.isChildAccount = (redisRes) ? true : false;//(decoded.paymentInfo.isChildAccount==undefined)?false:decoded.paymentInfo.isChildAccount;
                                    decoded.hasAllOffers = (mongoRes != null) ? (mongoRes.hasAllOffers) ? true : false : false;
                                    var updated_token = jwt.sign(decoded, secret);
                                    res.cookie("x-minimob-authorization", "Bearer " + updated_token);
                                    req.user = decoded;
                                    next();
                                } else {
                                    var redisRes = (results.redis != undefined && results.redis != null) ? true : false;
                                    var mongoRes = (results.mongo != undefined) ? (results.mongo) ? true : false : false;
                                    decoded.hasAllOffers = mongoRes; //TODO: when fixed in Mongo change this
                                    decoded.isChildAccount = redisRes; //(decoded.paymentInfo.isChildAccount==undefined)?false:decoded.paymentInfo.isChildAccount;
                                    var updated_token = jwt.sign(decoded, secret);
                                    res.cookie("x-minimob-authorization", "Bearer " + updated_token);
                                    req.user = decoded;
                                    next();
                                }
                            });
                    }else{
                        decoded.isChildAccount = false;
                        decoded.hasAllOffers =  false;
                        var updated_token = jwt.sign(decoded, secret);
                        res.cookie("x-minimob-authorization", "Bearer " + updated_token);
                        req.user = decoded;
                        next();
                    }
                }
            });
        }

    
}

module.exports = auth;