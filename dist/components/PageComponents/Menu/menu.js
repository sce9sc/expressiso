'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

//Import Flux Related

var _altUtilsConnectToStores = require('alt/utils/connectToStores');

var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);

var _MenuStore = require('./MenuStore');

var _MenuStore2 = _interopRequireDefault(_MenuStore);

var _MenuActions = require('./MenuActions');

var _MenuActions2 = _interopRequireDefault(_MenuActions);

var _UsersUserStore = require('../Users/userStore');

var _UsersUserStore2 = _interopRequireDefault(_UsersUserStore);

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var State = ReactRouter.State;

//Import UI
var TreeView = require('./treeview');
var MenuBtn = require('./menuBtn');
var MenuUserInfo = require('./menuUserInfo');
var MenuSearch = require('./menuSearch');

var Menu = React.createClass({
    displayName: 'Menu',

    mixins: [State],

    getInitialState: function getInitialState() {
        var storeState = _UsersUserStore2['default'].getState();
        var menuState = _MenuStore2['default'].getState();
        console.log(menuState);
        var initfocus = this.getRoutes()[1].name;
        return {
            user: storeState.user,
            focus: initfocus,
            menuBtns: menuState.menu.menuBtns
        };
    },

    handleResize: function handleResize(e) {
        console.log('resized');
    },

    testme: function testme(t) {
        console.log('testme==');
        _MenuActions2['default'].toggleMenuActive(t);
    },

    _onChange: function _onChange() {
        console.log('_onchange');
    },

    componentDidMount: function componentDidMount() {
        $(this.getDOMNode());
        _MenuStore2['default'].listen(this._onChange);
        //window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function componentWillUnmount() {
        _MenuStore2['default'].unlisten(this._onChange);
        // window.removeEventListener('resize', this.handleResize);
    },

    clickme: function clickme(event) {
        console.log('was clicked');
        console.log(event.target);
    },

    createMenu: function createMenu(focus) {
        var menu = this.state.menuBtns.map(function (m, i) {
            if (m.type == 'TreeView') {
                return React.createElement(TreeView, { key: m.name, name: m.name, focus: focus, className: m.className, links: m.links });
            }
            if (m.type == 'MenuBtn') {
                return React.createElement(MenuBtn, { key: m.name, name: m.name, focus: focus, className: 'fa-th', link: m.link });
            }
        });
        return menu;
    },

    render: function render() {

        //var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var focus = this.getRoutes()[1].name;
        var menu = this.createMenu(focus);

        console.log('rendering menu :focus = ' + focus);

        return React.createElement(
            'aside',
            { className: 'main-sidebar' },
            React.createElement(
                'section',
                { className: 'sidebar' },
                React.createElement(MenuUserInfo, null),
                React.createElement(MenuSearch, null),
                React.createElement(
                    'ul',
                    { className: 'sidebar-menu' },
                    React.createElement(
                        'li',
                        { className: 'header' },
                        'MAIN NAVIGATION'
                    ),
                    menu,
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', onClick: this.testme.bind(this, 'dashboard') },
                            React.createElement('i', { className: 'fa fa-calendar' }),
                            ' ',
                            React.createElement(
                                'span',
                                null,
                                'Calendar'
                            ),
                            React.createElement(
                                'small',
                                { className: 'label pull-right bg-red' },
                                '3'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: 'AdminLTE-2.1.1/documentation/index.html' },
                            React.createElement('i', { className: 'fa fa-book' }),
                            ' ',
                            React.createElement(
                                'span',
                                null,
                                'Documentation'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'header' },
                        'LABELS'
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#' },
                            React.createElement('i', { className: 'fa fa-circle-o text-red' }),
                            ' ',
                            React.createElement(
                                'span',
                                null,
                                'Important'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#' },
                            React.createElement('i', { className: 'fa fa-circle-o text-yellow' }),
                            ' ',
                            React.createElement(
                                'span',
                                null,
                                'Warning'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#' },
                            React.createElement('i', { className: 'fa fa-circle-o text-aqua' }),
                            ' ',
                            React.createElement(
                                'span',
                                null,
                                'Information'
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = Menu;
//this.setState({windowWidth: window.innerWidth});
//var menuActive = MenuStore.getState().menu;
//this.setState({focus:menuActive.active})
//console.log(menuActive)