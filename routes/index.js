var express = require('express');
var router = express.Router();


var React = require("react");
var ReactRouter = require('react-router')
var routes = require("../dist/serverRoutes");

var Iso = require('iso');
var Alt = require('../dist/components/altInstance');


var menuBtns = [
    {
        type:"MenuBtn",
        name:"Dashboard",
        className:"fa-tachometer",
        link:"dashboard"
    },
    {
        type:"TreeView",
        name:"Stavros",
        className:"fa-table",
        links:["about","dashboard"]
    },
    {
        type:"MenuBtn",
        name:"Table",
        className:"fa-th",
        link:"table"
    },
    {
        type:"MenuBtn",
        name:"Charts",
        className:"fa-th",
        link:"charts"
    },
    {
        type:"MenuBtn",
        name:"Modal",
        className:"fa-th",
        link:"modal"
    },
    {
        type:"MenuBtn",
        name:"Sortable",
        className:"fa-th",
        link:"sortable"
    }
]
router.use('/AboutOverview/:name', function(req, res, next) {
    // ... maybe some additional /bar logging ...
    console.log(req.params.name)
    req.data = {overview:{name:req.params.name}}
    console.log("ended")
    next();
});

/* GET home page. */
router.get('*', function(req, res) {
    console.log(req.params)
   /* ReactRouter.run(routes,req.url,function(Handler){
        var markup = React.renderToString(React.createElement(Handler));
        res.render('index', {
            title: 'Express',
            markup: markup
        });
    })*/


try {
    //console.log(Alt.default)
    Alt.bootstrap(JSON.stringify({
        MenuStore:{menu:{active: "test",menuBtns:menuBtns}}}));
    var iso = new Iso();

    var router = ReactRouter.create({location: req.url, routes: routes})
    router.run(function (Handler, state) {
        /*
         var html = React.renderToString(<Handler/>)
         return res.render('react_page', {html: html})
         */

        var markup = React.renderToString(React.createElement(Handler));

        iso.add(markup, Alt.flush())

        res.render('index', {
            title: 'Express',
            markup: iso.render()
        });
    })
}catch(e){
    console.log(e)
}
});

module.exports = router;
