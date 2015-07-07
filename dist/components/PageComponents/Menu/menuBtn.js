'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MenuBtn = React.createClass({
    displayName: 'MenuBtn',

    getInitialState: function getInitialState() {
        return { treeActiveState: false };
    },
    toggleActiveState: function toggleActiveState(event) {
        this.setState({ treeActiveState: !this.state.treeActiveState });
    },
    testClick: function testClick(link) {
        console.log('you clicked a link : ' + link);
    },
    render: function render() {
        var name = this.props.name;
        var link = this.props.link;
        var focus = this.props.focus == link ? 'active' : '';
        return React.createElement(
            'li',
            { className: focus },
            React.createElement(
                Link,
                { onClick: this.testClick.bind(this, link), to: link },
                React.createElement('i', { className: 'fa ' + this.props.className }),
                ' ',
                React.createElement(
                    'span',
                    null,
                    name
                ),
                ' ',
                React.createElement(
                    'small',
                    { className: 'label pull-right bg-green' },
                    'Hot'
                )
            )
        );
    }
});

module.exports = MenuBtn;