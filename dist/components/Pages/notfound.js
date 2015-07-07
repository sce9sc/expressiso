"use strict";

var React = require("react");

var NotFoundPage = React.createClass({
    displayName: "NotFoundPage",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "section",
                { className: "content-header" },
                React.createElement(
                    "h1",
                    null,
                    "NotFound",
                    React.createElement(
                        "small",
                        null,
                        "it all starts here"
                    )
                ),
                React.createElement(
                    "ol",
                    { className: "breadcrumb" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { className: "fa fa-dashboard" }),
                            " Home"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Examples"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "active" },
                        "Blank page"
                    )
                )
            ),
            React.createElement(
                "section",
                { className: "content" },
                React.createElement(
                    "div",
                    null,
                    "sadad"
                ),
                React.createElement(
                    "div",
                    { className: "box" },
                    React.createElement(
                        "div",
                        { className: "box-header with-border" },
                        React.createElement(
                            "h3",
                            { className: "box-title" },
                            "Title"
                        ),
                        React.createElement(
                            "div",
                            { className: "box-tools pull-right" },
                            React.createElement(
                                "button",
                                { className: "btn btn-box-tool", "data-widget": "collapse", "data-toggle": "tooltip", title: "Collapse" },
                                React.createElement("i", { className: "fa fa-minus" })
                            ),
                            React.createElement(
                                "button",
                                { className: "btn btn-box-tool", "data-widget": "remove", "data-toggle": "tooltip", title: "Remove" },
                                React.createElement("i", { className: "fa fa-times" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "box-body" },
                        "Start creating your amazing application!"
                    ),
                    React.createElement(
                        "div",
                        { className: "box-footer" },
                        "Footer"
                    )
                )
            )
        );
    }
});

module.exports = NotFoundPage;