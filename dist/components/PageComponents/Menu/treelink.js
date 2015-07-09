'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../Tabs/tabsActions');

var MenuBtn = React.createClass({
    displayName: 'MenuBtn',

    getInitialState: function getInitialState() {
        return { treeActiveState: false };
    },
    linkClick: function linkClick(link) {
        TabsActions.setTabs({ name: link, link: '/' + link, active: true });
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
                { onClick: this.linkClick.bind(this, link), to: link },
                React.createElement('i', { className: 'fa fa-circle-o' }),
                link
            )
        );
    }
});

module.exports = MenuBtn;