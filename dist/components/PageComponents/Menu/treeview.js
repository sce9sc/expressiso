'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TreeLink = require('./treelink');

var TreeView = React.createClass({
    displayName: 'TreeView',

    getInitialState: function getInitialState() {
        var links = this.props.links;
        var focus = this.props.focus;
        var treestate = links.indexOf(focus) > -1 ? 'active' : '';
        return {
            treeActiveState: treestate,
            togglePressed: false
        };
    },
    toggleActiveState: function toggleActiveState(event) {
        this.setState({
            treeActiveState: !this.state.treeActiveState,
            togglePressed: !this.state.tooglePressed
        });
    },
    render: function render() {
        var links = this.props.links;
        var name = this.props.name;
        var focus = this.props.focus;
        var treestate = this.state.treeActiveState ? 'active' : '';
        var treestateBool = links.indexOf(focus) > -1;
        console.log(treestateBool + '=' + treestate);
        if (treestateBool && !this.state.togglePressed) {
            treestate = 'active';
        }

        return React.createElement(
            'li',
            { className: 'treeview ' + treestate },
            React.createElement(
                'a',
                { href: 'javascript:;', onClick: this.toggleActiveState },
                React.createElement('i', { className: 'fa ' + this.props.className }),
                ' ',
                React.createElement(
                    'span',
                    null,
                    name
                ),
                ' ',
                React.createElement('i', { className: 'fa fa-angle-left pull-right' })
            ),
            React.createElement(
                'ul',
                { className: 'treeview-menu' },
                links.map(function (link, index) {
                    var keyName = name + link;
                    return React.createElement(TreeLink, { key: keyName, focus: focus, name: name, link: link });
                })
            )
        );
    }
});

module.exports = TreeView;