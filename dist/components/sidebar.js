"use strict";

var React = require("react");

var SideBar = React.createClass({
    displayName: "SideBar",

    render: function render() {
        return React.createElement(
            "aside",
            { className: "control-sidebar control-sidebar-dark" },
            React.createElement(
                "ul",
                { className: "nav nav-tabs nav-justified control-sidebar-tabs" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#control-sidebar-home-tab", "data-toggle": "tab" },
                        React.createElement("i", { className: "fa fa-home" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#control-sidebar-settings-tab", "data-toggle": "tab" },
                        React.createElement("i", { className: "fa fa-gears" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "tab-content" },
                React.createElement(
                    "div",
                    { className: "tab-pane", id: "control-sidebar-home-tab" },
                    React.createElement(
                        "h3",
                        { className: "control-sidebar-heading" },
                        "Recent Activity"
                    ),
                    React.createElement(
                        "ul",
                        { className: "control-sidebar-menu" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement("i", { className: "menu-icon fa fa-birthday-cake bg-red" }),
                                React.createElement(
                                    "div",
                                    { className: "menu-info" },
                                    React.createElement(
                                        "h4",
                                        { className: "control-sidebar-subheading" },
                                        "Langdon's Birthday"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Will be 23 on April 24th"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement("i", { className: "menu-icon fa fa-user bg-yellow" }),
                                React.createElement(
                                    "div",
                                    { className: "menu-info" },
                                    React.createElement(
                                        "h4",
                                        { className: "control-sidebar-subheading" },
                                        "Frodo Updated His Profile"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "New phone +1(800)555-1234"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement("i", { className: "menu-icon fa fa-envelope-o bg-light-blue" }),
                                React.createElement(
                                    "div",
                                    { className: "menu-info" },
                                    React.createElement(
                                        "h4",
                                        { className: "control-sidebar-subheading" },
                                        "Nora Joined Mailing List"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "nora@example.com"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement("i", { className: "menu-icon fa fa-file-code-o bg-green" }),
                                React.createElement(
                                    "div",
                                    { className: "menu-info" },
                                    React.createElement(
                                        "h4",
                                        { className: "control-sidebar-subheading" },
                                        "Cron Job 254 Executed"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Execution time 5 seconds"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "h3",
                        { className: "control-sidebar-heading" },
                        "Tasks Progress"
                    ),
                    React.createElement(
                        "ul",
                        { className: "control-sidebar-menu" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement(
                                    "h4",
                                    { className: "control-sidebar-subheading" },
                                    "Custom Template Design",
                                    React.createElement(
                                        "span",
                                        { className: "label label-danger pull-right" },
                                        "70%"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "progress progress-xxs" },
                                    React.createElement("div", { className: "progress-bar progress-bar-danger", style: { "width": "70%" } })
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement(
                                    "h4",
                                    { className: "control-sidebar-subheading" },
                                    "Update Resume",
                                    React.createElement(
                                        "span",
                                        { className: "label label-success pull-right" },
                                        "95%"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "progress progress-xxs" },
                                    React.createElement("div", { className: "progress-bar progress-bar-success", style: { "width": "95%" } })
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement(
                                    "h4",
                                    { className: "control-sidebar-subheading" },
                                    "Laravel Integration",
                                    React.createElement(
                                        "span",
                                        { className: "label label-waring pull-right" },
                                        "50%"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "progress progress-xxs" },
                                    React.createElement("div", { className: "progress-bar progress-bar-warning", style: { "width": "50%" } })
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "javascript::;" },
                                React.createElement(
                                    "h4",
                                    { className: "control-sidebar-subheading" },
                                    "Back End Framework",
                                    React.createElement(
                                        "span",
                                        { className: "label label-primary pull-right" },
                                        "68%"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "progress progress-xxs" },
                                    React.createElement("div", { className: "progress-bar progress-bar-primary", style: { "width": "68%" } })
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tab-pane", id: "control-sidebar-stats-tab" },
                    "Stats Tab Content"
                ),
                React.createElement(
                    "div",
                    { className: "tab-pane", id: "control-sidebar-settings-tab" },
                    React.createElement(
                        "form",
                        { method: "post" },
                        React.createElement(
                            "h3",
                            { className: "control-sidebar-heading" },
                            "General Settings"
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Report panel usage",
                                React.createElement("input", { type: "checkbox", className: "pull-right", checked: "" })
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Some information about this general settings option"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Allow mail redirect",
                                React.createElement("input", { type: "checkbox", className: "pull-right", checked: true })
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Other sets of options are available"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Expose author name in posts",
                                React.createElement("input", { type: "checkbox", className: "pull-right", checked: true })
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Allow the user to show his name in blog posts"
                            )
                        ),
                        React.createElement(
                            "h3",
                            { className: "control-sidebar-heading" },
                            "Chat Settings"
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Show me as online",
                                React.createElement("input", { type: "checkbox", className: "pull-right", checked: true })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Turn off notifications",
                                React.createElement("input", { type: "checkbox", className: "pull-right" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { className: "control-sidebar-subheading" },
                                "Delete chat history",
                                React.createElement(
                                    "a",
                                    { href: "javascript::;", className: "text-red pull-right" },
                                    React.createElement("i", { className: "fa fa-trash-o" })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = SideBar;