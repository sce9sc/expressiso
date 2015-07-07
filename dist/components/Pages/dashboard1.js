"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var DashBoardPage = React.createClass({
    displayName: "DashBoardPage",

    timeoutFn: function timeoutFn() {
        this.setState({ data: "test" });
        this.setState({ display: true });
        console.log("loaded");
    },
    getInitialState: function getInitialState() {
        return { data: [], clicked: false, display: true };
    },
    componentDidMount: function componentDidMount() {
        console.log("DashBoard-componentDidMount");

        //(this.timeoutFn,6000)
    },
    componentWillMount: function componentWillMount() {
        console.log("DashBoard-componentWillMount");
    },
    componentWillUnmount: function componentWillUnmount() {
        console.log("DashBoard-componentWillUnmount");
    },
    handleClick: function handleClick(event) {
        this.setState({ clicked: !this.state.clicked });
    },
    render: function render() {
        var clicked = this.state.clicked ? "true" : "false";

        var displayContent = this.state.display ? "block" : "none";
        var displayLoading = this.state.display ? "none" : "block";
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { style: { "display": displayLoading } },
                "Loading Please Wait"
            ),
            React.createElement(
                "div",
                { style: { "display": displayContent } },
                React.createElement(
                    "section",
                    { className: "content-header" },
                    React.createElement(
                        "h1",
                        null,
                        "DashBoard",
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
                                Link,
                                { to: "home" },
                                " Home"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "active" },
                            React.createElement(
                                Link,
                                { to: "home" },
                                " DashBoard"
                            )
                        )
                    )
                ),
                React.createElement(
                    "section",
                    { className: "content" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { onClick: this.handleClick },
                            "Dashboard (click me)(currently ",
                            clicked,
                            ")"
                        )
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
            )
        );
    }
});

module.exports = DashBoardPage;