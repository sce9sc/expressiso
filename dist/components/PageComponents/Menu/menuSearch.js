"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var MenuSearch = React.createClass({
    displayName: "MenuSearch",

    getInitialState: function getInitialState() {
        return { treeActiveState: false };
    },
    render: function render() {

        return React.createElement(
            "form",
            { action: "#", method: "get", className: "sidebar-form" },
            React.createElement(
                "div",
                { className: "input-group" },
                React.createElement("input", { type: "text", name: "q", className: "form-control", placeholder: "Search..." }),
                React.createElement(
                    "span",
                    { className: "input-group-btn" },
                    React.createElement(
                        "button",
                        { type: "submit", name: "search", id: "search-btn", className: "btn btn-flat" },
                        React.createElement("i", {
                            className: "fa fa-search" })
                    )
                )
            )
        );
    }
});

module.exports = MenuSearch;