"use strict";

var React = require("react"),
    Menu = require("./PageComponents/Menu/menu"),
    Footer = require("./footer"),
    SideBar = require("./sidebar"),
    Header = require("./header"),
    Tabs = require("./PageComponents/tabs");

var Router = require("react-router"),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Navigation = Router.Navigation;

var App = React.createClass({
    displayName: "App",

    mixins: [Navigation],
    componentDidMount: function componentDidMount() {
        console.log("App-componentDidMount");
    },
    render: function render() {

        console.log(JSON.stringify(this.props));
        return React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(Header, null),
            React.createElement(Menu, null),
            React.createElement(
                "div",
                { className: "content-wrapper" },
                React.createElement(Tabs, null),
                React.createElement(RouteHandler, null)
            ),
            React.createElement(Footer, null),
            React.createElement(SideBar, null),
            React.createElement("div", { className: "control-sidebar-bg" })
        );
    }
});

module.exports = App;