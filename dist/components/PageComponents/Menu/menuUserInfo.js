"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var MenuUserInfo = React.createClass({
    displayName: "MenuUserInfo",

    getInitialState: function getInitialState() {
        return { treeActiveState: false };
    },
    render: function render() {

        return React.createElement(
            "div",
            { className: "user-panel" },
            React.createElement(
                "div",
                { className: "pull-left image" },
                React.createElement("img", { src: "AdminLTE-2.1.1/dist/img/user2-160x160.jpg", className: "img-circle",
                    alt: "User Image" })
            ),
            React.createElement(
                "div",
                { className: "pull-left info" },
                React.createElement(
                    "p",
                    null,
                    "Alexander Pierce"
                ),
                React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "fa fa-circle text-success" }),
                    " Online"
                )
            )
        );
    }
});

module.exports = MenuUserInfo;