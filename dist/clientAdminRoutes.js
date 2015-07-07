'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;

var App = require('./components/app');
var NotFound = require('./components/Pages/notfound');
//var About = require('./components/about');
//var Dashboard = require('./components/dashboard');

var alt = require('./components/altInstance');
var Iso = require('iso');

var routes = React.createElement(
    Route,
    { name: 'home', path: '/', handler: App },
    React.createElement(Route, { name: 'dashboard', path: 'dashboard', handler: require('react-router-proxy!./components/Pages/dashboard.jsx') }),
    React.createElement(Route, { name: 'about', path: 'about', handler: require('react-router-proxy!./components/Pages/about.jsx') }),
    React.createElement(Route, { name: 'table', path: 'table', handler: require('react-router-proxy!./components/Pages/table.jsx') }),
    React.createElement(Route, { name: 'charts', path: 'charts', handler: require('react-router-proxy!./components/Pages/charts.jsx') }),
    React.createElement(Route, { name: 'modal', path: 'modal', handler: require('react-router-proxy!./components/Pages/modal.jsx') }),
    React.createElement(Route, { name: 'sortable', path: 'sortable', handler: require('react-router-proxy!./components/Pages/sortable.jsx') }),
    React.createElement(DefaultRoute, { name: 'default', handler: require('react-router-proxy!./components/Pages/dashboard.jsx') }),
    React.createElement(NotFoundRoute, { handler: NotFound })
);

if (typeof window !== 'undefined') {
    window.onload = function () {
        Iso.bootstrap(function (state, _, container) {
            alt.bootstrap(state);

            ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler) {
                var node = React.createElement(Handler);
                React.render(node, container);
            });
        });
    };
}