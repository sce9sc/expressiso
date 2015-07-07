'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
//var createActiveRouteComponent = require('react-router-active-component');

var MenuBtn = React.createClass({
    displayName: 'MenuBtn',

    getInitialState: function getInitialState() {
        return { treeActiveState: false };
    },
    render: function render() {
        var treestate = this.state.treeActiveState ? 'active' : '';
        var link = this.props.link;
        var treestate = this.props.focus == link ? 'active' : '';
        return React.createElement(
            'li',
            { className: treestate },
            React.createElement(
                Link,
                { to: link },
                React.createElement('i', { className: 'fa fa-circle-o' }),
                link
            )
        );
    }
});

module.exports = MenuBtn;