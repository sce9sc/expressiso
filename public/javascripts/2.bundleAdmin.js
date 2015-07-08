webpackJsonp([2],{

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(157);
	var Link = ReactRouter.Link;
	var TabsActions = __webpack_require__(220);

	var AboutPage = React.createClass({
	    displayName: 'AboutPage',

	    onLinkClick: function onLinkClick(link) {
	        console.log(link);
	        TabsActions.addTabs(link);
	    },
	    render: function render() {
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
	                        'Start creating your amazing application!',
	                        React.createElement(
	                            Link,
	                            { to: 'dashboard', onClick: this.onLinkClick.bind(this, { name: 'dashboard', link: '/dashboard' }) },
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

/***/ }

});