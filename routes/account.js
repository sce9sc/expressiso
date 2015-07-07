var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var logger = require("../utils/logger");
var config = require("../config/config");

///* GET home page. */
//router.get('/', function (req, res) {
//    res.clearCookie("x-minimob-authorization");
//    var secret = 'MsS5n1VUpBZHkL1H8ZV3-ACu';
//    var token = jwt.sign({
//        iss : 'dashboard.minimob.com ',
//        aud : 'user@dashboard.minimob.com',
//        sub : '1373651944',
//        exp : 20*60 + Math.floor(new Date() / 1000),
//        iat : Math.floor(new Date() / 1000),
//        email : 'thodoris.kondilis@gmail.com',
//        apikey : '6f73386c-89fe-11e4-a3a9-6dbb8487f907'//'6c2d8fc0-89bf-11e4-8efb-905c699a4a53'
//    }, secret);

//    res.cookie("x-minimob-authorization", "Bearer " + token);
//    res.send("ok");
//});


router.get('/', function (req, res) {
    res.clearCookie("x-minimob-authorization");

    var secret = req.app.settings.config.secret//req.secret//config.jwt.secret.DEVELOPMENT; //this is the production secret. we must use the production when we deploy to production. see readme.md
    var token = jwt.sign({
        iss : 'dashboard.minimob.com ',
        aud : 'user@dashboard.minimob.com',
        sub : '1373664023',
        exp : 20 * 60 + Math.floor(new Date() / 1000),
        iat : Math.floor(new Date() / 1000),
        email : 'wasabeemini@gmail.com',
        apikey : 'f3a5b7d2-8ad4-11e4-bae5-06ef547e95f8'//'6f73386c-89fe-11e4-a3a9-6dbb8487f907'//'6c2d8fc0-89bf-11e4-8efb-905c699a4a53'
    }, secret);

    res.cookie("x-minimob-authorization", "Bearer " + token);
    res.send("ok");
});

router.get('/logout', function (req, res) {
    res.clearCookie("x-minimob-authorization");

    //dev version
    //res.send('done')

    //preview.minimob.com
    //res.redirect('http://preview.minimob.com/login.asp');

    //dashboard.minimob.com
    //res.redirect('http://dashboard.minimob.com/login.asp');
    res.redirect('/login.asp');
});

router.get('/admin', function (req, res) {
    console.log(req.app.settings)
    res.clearCookie("x-minimob-authorization");

    var secret = req.app.settings.config.secret;    //req.secret   //config.jwt.secret.DEVELOPMENT; //this is the preview (dev) secret. we must use the production when we deploy to production. see readme.md

    var token = jwt.sign({
        iss : 'dashboard.minimob.com ',
        aud : 'admin@dashboard.minimob.com',
        sub : '1373651988',
        exp : 86400 + Math.floor(new Date() / 1000),
        iat : Math.floor(new Date() / 1000),
        email : 't.kondilis@internetq.corp',
        useas:{},
        apikey : 'b6432a9e-89c8-11e4-8430-24b58487f907'//'fc1b5b7e-89c1-11e4-8fa9-8b5c699a4a53'
    }, secret);

    res.cookie("x-minimob-authorization", "Bearer " + token);
    res.send("Admin ok");
});

router.post('/setAdminCookie', function (req, res) {

    if(req.user){
        //var secret = 'MsS5n1VUpBZHkL1H8ZV3-ACu';
        var secret = req.app.settings.config.secret// req.secret//config.jwt.secret.DEVELOPMENT; //this is the preview (dev) secret. we must use the production when we deploy to production. see readme.md
        logger.info('============================================');
        logger.info(req.body.apikey);
        req.user.useas = req.body;//{'apikey':req.body.apikey, 'email': req.body.email, 'userid': ''} // {'apikey':'6c2d8fc0-89bf-11e4-8efb-905c699a4a53', 'email':'thodoris.kondilis@gmail.com', 'userid':'1373651944'}
        logger.info(JSON.stringify(req.user));
        var updated_token = jwt.sign(req.user, secret);
        res.json({"cookie":{name:"x-minimob-authorization",value:"Bearer "+updated_token}});
    }else{
        res.json({"error":"Error Updating cookie"});
    }
});

router.post('/remUseAs', function (req, res) {

    if(req.user){
        //var secret = 'MsS5n1VUpBZHkL1H8ZV3-ACu';
        var secret = req.app.settings.config.secret//req.secret//config.jwt.secret.DEVELOPMENT; //this is the preview (dev) secret. we must use the production when we deploy to production. see readme.md
        req.user.useas = {}
        var updated_token = jwt.sign(req.user, secret);
        res.json({"cookie":{name:"x-minimob-authorization",value:"Bearer "+updated_token}});
    }else{
        res.json({"error":"Error Updating cookie"});
    }
});

module.exports = router;