'use strict';

var React = require('react');
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

var routes = React.createElement(
    Route,
    { name: 'home', path: '/', handler: App },
    React.createElement(Route, { name: 'dashboard', path: '/dashboard', handler: Dashboard }),
    React.createElement(Route, { name: 'about', path: '/about', handler: About }),
    React.createElement(Route, { name: 'aboutOverview', path: '/aboutOverview/:name', handler: AboutOverview }),
    React.createElement(Route, { name: 'table', path: '/table', handler: Table }),
    React.createElement(Route, { name: 'charts', path: '/charts', handler: Charts }),
    React.createElement(Route, { name: 'modal', path: '/modal', handler: Modal }),
    React.createElement(Route, { name: 'sortable', path: '/sortable', handler: Sortable }),
    React.createElement(DefaultRoute, { name: 'default', handler: Dashboard }),
    React.createElement(NotFoundRoute, { handler: NotFound })
);

module.exports = routes;