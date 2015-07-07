"use strict";

var React = require("react");
var HeaderNav = require("./PageComponents/headerNav");

var Header = React.createClass({
    displayName: "Header",

    render: function render() {
        return React.createElement(
            "header",
            { className: "main-header" },
            React.createElement(
                "a",
                { href: "AdminLTE-2.1.1/index2.html", className: "logo" },
                React.createElement(
                    "span",
                    { className: "logo-mini" },
                    React.createElement(
                        "b",
                        null,
                        "A"
                    ),
                    "LT"
                ),
                React.createElement(
                    "span",
                    { className: "logo-lg" },
                    React.createElement(
                        "b",
                        null,
                        "Admin"
                    ),
                    "LTE"
                )
            ),
            React.createElement(HeaderNav, null)
        );
    }
});

module.exports = Header;