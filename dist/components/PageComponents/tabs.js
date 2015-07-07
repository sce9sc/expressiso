"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var State = ReactRouter.State;

var Tabs = React.createClass({
    displayName: "Tabs",

    mixins: [State],

    getInitialState: function getInitialState() {
        var name = this.getRoutes()[1].name;

        return { tabs: [name] };
    },
    render: function render() {
        var name = this.state.tabs[0];
        return React.createElement(
            "div",
            null,
            name
        );
    }
});

module.exports = Tabs;