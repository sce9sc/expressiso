'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var State = ReactRouter.State;
var TabsActions = require('./tabsActions');
var TabsStore = require('./tabsStore');

var Tabs = React.createClass({
    displayName: 'Tabs',

    mixins: [State],

    getInitialState: function getInitialState() {
        var route = this.getRoutes()[1];
        var tab = { name: route.name, link: route.path, params: {}, active: true };
        var params = this.getParams();
        if (params) {
            tab.params = params;
        }

        TabsActions.addTabs(tab);
        return { tabs: [tab] };
    },
    _onChange: function _onChange() {
        console.log('_onchange');
        var tabs = TabsStore.getState().tabs;
        this.setState({ tabs: tabs });
    },
    componentDidMount: function componentDidMount() {
        //$(this.getDOMNode())
        TabsStore.listen(this._onChange);
        //window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function componentWillUnmount() {
        TabsStore.unlisten(this._onChange);
        // window.removeEventListener('resize', this.handleResize);
    },
    setActive: function setActive(tab) {
        TabsActions.setActive(tab);
    },
    render: function render() {
        var tabs = this.state.tabs;
        var setActive = this.setActive;
        var _this = this;
        var tabLinks = tabs.map(function (tab, index) {
            var active = tab.active ? 'active' : '';
            return React.createElement(
                'li',
                { key: tab.name, className: active },
                React.createElement(
                    Link,
                    { onClick: setActive.bind(_this, tab), to: tab.link, params: tab.params },
                    tab.name
                )
            );
        });

        return React.createElement(
            'div',
            { className: 'tabMenu clearfix' },
            React.createElement(
                'ol',
                { className: 'clearfix' },
                tabLinks
            )
        );
    }
});

module.exports = Tabs;
//console.log(menuActive)