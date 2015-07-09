var React = require("react");
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;

var App = require('./components/app');
var Dashboard = require('./components/Pages/Dashboard/dashboard');
var About = require('./components/Pages/About/about');
var AboutOverview = require('./components/Pages/AboutOverview/aboutOverview');

var Table = require('./components/Pages/table');
var Charts = require('./components/Pages/charts');
var Modal = require('./components/Pages/modal');
var Sortable = require('./components/Pages/sortable');
var NotFound = require('./components/Pages/notfound');


var routes = (
    <Route name="home" path="/" handler={App}>
        <Route  name="dashboard"  path="/dashboard" handler={Dashboard}/>
        <Route  name="about"  path="/about" handler={About}/>
        <Route  name="aboutOverview"  path="/aboutOverview/:name" handler={AboutOverview}/>
        <Route  name="table"  path="/table" handler={Table}/>
        <Route  name="charts"  path="/charts" handler={Charts}/>
        <Route  name="modal"  path="/modal" handler={Modal}/>
        <Route  name="sortable"  path="/sortable" handler={Sortable}/>
        <DefaultRoute name="default" handler={Dashboard}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);


module.exports =  routes;