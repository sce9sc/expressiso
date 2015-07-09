'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _aboutOverviewActions = require('./aboutOverviewActions');

var _aboutOverviewActions2 = _interopRequireDefault(_aboutOverviewActions);

var _aboutOverviewStore = require('./aboutOverviewStore');

var _aboutOverviewStore2 = _interopRequireDefault(_aboutOverviewStore);

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var State = ReactRouter.State;
var Navigation = ReactRouter.Navigation;
var TabsActions = require('../../PageComponents/Tabs/tabsActions');
var TabsStore = require('../../PageComponents/Tabs/tabsStore');

var AboutOverviewPage = React.createClass({
    displayName: 'AboutOverviewPage',

    mixins: [State, Navigation],

    getInitialState: function getInitialState() {
        var name = this.getParams().name;

        var aboutState = _aboutOverviewStore2['default'].getState();
        return {
            about: { current: aboutState.about.current },
            name: name
        };
    },
    onLinkClick: function onLinkClick(link) {
        console.log(link);
        TabsActions.addTabs(link);
    },
    componentWillUnmount: function componentWillUnmount() {
        _aboutOverviewActions2['default'].saveCurrent(this.state.about.current);
    },
    handleChange: function handleChange(event) {
        this.setState({ about: { current: { input: event.target.value } } });
    },
    onClose: function onClose() {
        //this.setState({about:{current:{input:""}}})
        this.state.about.current = { input: '' };
        console.log(TabsStore.getTabIndex('about'));
        console.log(TabsStore.getTabs());
        var prevTab = TabsStore.getPreviousTab();
        console.log(prevTab);
        TabsActions.removeTabs(prevTab.currentTab);
        if (prevTab.index != -1) {
            this.transitionTo(prevTab.prevTab.link);
        }
    },
    render: function render() {
        var name = this.state.name;
        var aboutCurrentData = this.state.about.current.input;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'section',
                { className: 'content-header' },
                React.createElement(
                    'h1',
                    null,
                    'AboutOverView Page',
                    React.createElement(
                        'small',
                        null,
                        'it all starts here'
                    )
                )
            ),
            React.createElement(
                'section',
                { className: 'content' },
                React.createElement(
                    'div',
                    null,
                    'sadad'
                ),
                React.createElement(
                    'div',
                    { className: 'box' },
                    React.createElement(
                        'div',
                        { className: 'box-header with-border' },
                        React.createElement(
                            'h3',
                            { className: 'box-title' },
                            'Title'
                        ),
                        React.createElement(
                            'div',
                            { className: 'box-tools pull-right' },
                            React.createElement(
                                'button',
                                { className: 'btn btn-box-tool', 'data-widget': 'collapse', 'data-toggle': 'tooltip', title: 'Collapse' },
                                React.createElement('i', { className: 'fa fa-minus' })
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn btn-box-tool', 'data-widget': 'remove', 'data-toggle': 'tooltip', title: 'Remove' },
                                React.createElement('i', { className: 'fa fa-times' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'box-body' },
                        React.createElement('input', { type: 'text', className: 'testInput', onChange: this.handleChange, value: aboutCurrentData }),
                        React.createElement(
                            'div',
                            null,
                            name
                        ),
                        React.createElement(
                            Link,
                            { to: 'dashboard', onClick: this.onLinkClick.bind(this, { name: 'dashboard', link: '/dashboard' }) },
                            'Click me to go to dashboard'
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.onClose },
                            'Close'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'box-footer' },
                        'Footer'
                    )
                )
            )
        );
    }
});

module.exports = AboutOverviewPage;