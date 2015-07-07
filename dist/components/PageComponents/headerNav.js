"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
//var $ = require('jquery')

var HeaderNav = React.createClass({
    displayName: "HeaderNav",

    getInitialState: function getInitialState() {
        return { btnActive: false,
            screenSizes: {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200
            } };
    },
    toggleActiveState: function toggleActiveState(e) {
        console.log("test");
        e.preventDefault();

        if ($(window).width() > this.state.screenSizes.sm - 1) {
            $("body").toggleClass("sidebar-collapse");
        }
        //Handle sidebar push menu for small screens
        else {
            if ($("body").hasClass("sidebar-open")) {
                $("body").removeClass("sidebar-open");
                $("body").removeClass("sidebar-collapse");
            } else {
                $("body").addClass("sidebar-open");
            }
        }

        this.setState({ btnActive: !this.state.btnActive });
    },
    render: function render() {

        return React.createElement(
            "nav",
            { className: "navbar navbar-static-top", role: "navigation" },
            React.createElement(
                "a",
                { href: "javascript:;", onClick: this.toggleActiveState, className: "sidebar-toggle", "data-toggle": "offcanvas", role: "button" },
                React.createElement(
                    "span",
                    { className: "sr-only" },
                    "Toggle navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
            ),
            React.createElement(
                "div",
                { className: "navbar-custom-menu" },
                React.createElement(
                    "ul",
                    { className: "nav navbar-nav" },
                    React.createElement(
                        "li",
                        { className: "dropdown messages-menu" },
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("i", { className: "fa fa-envelope-o" }),
                            React.createElement(
                                "span",
                                { className: "label label-success" },
                                "4"
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu" },
                            React.createElement(
                                "li",
                                { className: "header" },
                                "You have 4 messages"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "ul",
                                    { className: "menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement(
                                                "div",
                                                { className: "pull-left" },
                                                React.createElement("img", { src: "AdminLTE-2.1.1/dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" })
                                            ),
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Support Team",
                                                React.createElement(
                                                    "small",
                                                    null,
                                                    React.createElement("i", { className: "fa fa-clock-o" }),
                                                    " 5 mins"
                                                )
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Why not buy a new awesome theme?"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "footer" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "See All Messages"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "dropdown notifications-menu" },
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("i", { className: "fa fa-bell-o" }),
                            React.createElement(
                                "span",
                                { className: "label label-warning" },
                                "10"
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu" },
                            React.createElement(
                                "li",
                                { className: "header" },
                                "You have 10 notifications"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "ul",
                                    { className: "menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-users text-aqua" }),
                                            " 5 new members joined today"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "footer" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "View all"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "dropdown tasks-menu" },
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("i", { className: "fa fa-flag-o" }),
                            React.createElement(
                                "span",
                                { className: "label label-danger" },
                                "9"
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu" },
                            React.createElement(
                                "li",
                                { className: "header" },
                                "You have 9 tasks"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "ul",
                                    { className: "menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement(
                                                "h3",
                                                null,
                                                "Design some buttons",
                                                React.createElement(
                                                    "small",
                                                    { className: "pull-right" },
                                                    "20%"
                                                )
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "progress xs" },
                                                React.createElement(
                                                    "div",
                                                    { className: "progress-bar progress-bar-aqua", style: { "width": "20%" }, role: "progressbar", "aria-valuenow": "20", "aria-valuemin": "0", "aria-valuemax": "100" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "sr-only" },
                                                        "20% Complete"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "footer" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "View all tasks"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "dropdown user user-menu" },
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("img", { src: "AdminLTE-2.1.1/dist/img/user2-160x160.jpg", className: "user-image", alt: "User Image" }),
                            React.createElement(
                                "span",
                                { className: "hidden-xs" },
                                "Alexander Pierce"
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu" },
                            React.createElement(
                                "li",
                                { className: "user-header" },
                                React.createElement("img", { src: "AdminLTE-2.1.1/dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "Alexander Pierce - Web Developer",
                                    React.createElement(
                                        "small",
                                        null,
                                        "Member since Nov. 2012"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "user-body" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-4 text-center" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Followers"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-xs-4 text-center" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Sales"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-xs-4 text-center" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Friends"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "user-footer" },
                                React.createElement(
                                    "div",
                                    { className: "pull-left" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn btn-default btn-flat" },
                                        "Profile"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "pull-right" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn btn-default btn-flat" },
                                        "Sign out"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#", "data-toggle": "control-sidebar" },
                            React.createElement("i", { className: "fa fa-gears" })
                        )
                    )
                )
            )
        );
    }
});

module.exports = HeaderNav;