webpackJsonp([1],{

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(157);
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
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4 col-sm-6 col-xs-12" },
	                            React.createElement(
	                                "div",
	                                { className: "info-box" },
	                                React.createElement(
	                                    "span",
	                                    { className: "info-box-icon bg-aqua" },
	                                    React.createElement("i", { className: "ion ion-ios-gear-outline" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "info-box-content" },
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-text" },
	                                        "Offers"
	                                    ),
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-number" },
	                                        "9099"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4 col-sm-6 col-xs-12" },
	                            React.createElement(
	                                "div",
	                                { className: "info-box" },
	                                React.createElement(
	                                    "span",
	                                    { className: "info-box-icon bg-red" },
	                                    React.createElement("i", { className: "fa fa-google-plus" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "info-box-content" },
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-text" },
	                                        "Products"
	                                    ),
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-number" },
	                                        "41"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement("div", { className: "clearfix visible-sm-block" }),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4 col-sm-6 col-xs-12" },
	                            React.createElement(
	                                "div",
	                                { className: "info-box" },
	                                React.createElement(
	                                    "span",
	                                    { className: "info-box-icon bg-green" },
	                                    React.createElement("i", { className: "fa fa-money" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "info-box-content" },
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-text" },
	                                        "Budget"
	                                    ),
	                                    React.createElement(
	                                        "span",
	                                        { className: "info-box-number" },
	                                        "760"
	                                    )
	                                )
	                            )
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

/***/ }

});