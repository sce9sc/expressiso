var express = require('express');
var router = express.Router();

/* GET Api page. */
router.get('/', function (req, res) {
    if(!req.user){
        res.redirect('/login.asp');
        //res.status(401).send('Unauthorized');
        return
    }
    if(req.user.aud =='admin@dashboard.minimob.com')
    {
        //res.redirect( req.protocol + '://' + req.get('host') + '/offervault/admin');
        res.redirect('./admin/');
    }else {
        res.render('api', {
            title: 'Minimob - API',
            pageName: 'Api',
            apikey: req.user.apikey,
            sub: req.user.sub,
            aud: req.user.aud,
            email: req.user.email,
            assetsPath:'./',
            admin:false,
            hasAllOffers:req.user.hasAllOffers,
            isChildAccount:req.user.isChildAccount
        });
    }
});

module.exports = router;