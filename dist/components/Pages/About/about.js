'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _aboutActions = require('./aboutActions');

var _aboutActions2 = _interopRequireDefault(_aboutActions);

var _aboutStore = require('./aboutStore');

var _aboutStore2 = _interopRequireDefault(_aboutStore);

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../../PageComponents/Tabs/tabsActions');

var AboutPage = React.createClass({
    displayName: 'AboutPage',

    getInitialState: function getInitialState() {
        var aboutState = _aboutStore2['default'].getState();
        return {
            about: { current: aboutState.about.current }
        };
    },
    onLinkClick: function onLinkClick(link) {
        console.log(link);
        TabsActions.addTabs(link);
    },
    componentWillUnmount: function componentWillUnmount() {
        _aboutActions2['default'].saveCurrent(this.state.about.current);
    },
    handleChange: function handleChange(event) {
        this.setState({ about: { current: { input: event.target.value } } });
    },
    onClose: function onClose() {
        this.setState({ about: { current: { input: '' } } });
    },
    render: function render() {

        var aboutCurrentData = this.state.about.current.input;
        console.log('dataAbout ' + aboutCurrentData);
        return React.createElement(
            'div',
            null,
            React.createElement(
                'section',
                { className: 'content-header' },
                React.createElement(
                    'h1',
                    null,
                    'About Page',
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
                            Link,
                            { to: 'aboutOverview', params: { name: 'testParam' }, onClick: this.onLinkClick.bind(this, { name: 'aboutOverview', link: '/aboutOverview/:name', params: { name: 'testParam' }, active: true }) },
                            'Click me to go to dashboard'
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

module.exports = AboutPage;