"use strict";

var React = require("react");

var Footer = React.createClass({
    displayName: "Footer",

    render: function render() {
        return React.createElement(
            "footer",
            { className: "main-footer" },
            React.createElement(
                "div",
                { className: "pull-right hidden-xs" },
                React.createElement(
                    "b",
                    null,
                    "Version"
                ),
                " 2.0"
            ),
            React.createElement(
                "strong",
                null,
                "Copyright © 2014-2015 ",
                React.createElement(
                    "a",
                    { href: "http://almsaeedstudio.com" },
                    "Almsaeed Studio"
                ),
                "."
            ),
            " All rights reserved."
        );
    }
});

module.exports = Footer;