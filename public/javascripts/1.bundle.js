webpackJsonp([1],{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _aboutActions = __webpack_require__(160);

	var _aboutActions2 = _interopRequireDefault(_aboutActions);

	var _aboutStore = __webpack_require__(176);

	var _aboutStore2 = _interopRequireDefault(_aboutStore);

	var React = __webpack_require__(2);
	var ReactRouter = __webpack_require__(177);
	var Link = ReactRouter.Link;
	var TabsActions = __webpack_require__(216);

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

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _altInstance = __webpack_require__(161);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	var AboutActions = function AboutActions() {
	    _classCallCheck(this, AboutActions);

	    this.generateActions('save', 'saveCurrent');
	};

	exports['default'] = _altInstance2['default'].createActions(AboutActions);
	module.exports = exports['default'];

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _altInstance = __webpack_require__(161);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	var _aboutActions = __webpack_require__(160);

	var _aboutActions2 = _interopRequireDefault(_aboutActions);

	var AboutStore = (function () {
	    function AboutStore() {
	        _classCallCheck(this, AboutStore);

	        this.bindListeners({
	            save: _aboutActions2['default'].save,
	            saveCurrent: _aboutActions2['default'].saveCurrent
	        });
	        this.about = { current: { input: '' } };
	    }

	    _createClass(AboutStore, [{
	        key: 'save',
	        value: function save(data) {
	            this.about = {};
	        }
	    }, {
	        key: 'saveCurrent',
	        value: function saveCurrent(data) {
	            this.about = { current: data };
	        }
	    }]);

	    return AboutStore;
	})();

	exports['default'] = _altInstance2['default'].createStore(AboutStore, 'AboutStore');
	module.exports = exports['default'];

/***/ }

});