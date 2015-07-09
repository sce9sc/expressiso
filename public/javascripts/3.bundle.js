webpackJsonp([3],{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _aboutOverviewActions = __webpack_require__(242);

	var _aboutOverviewActions2 = _interopRequireDefault(_aboutOverviewActions);

	var _aboutOverviewStore = __webpack_require__(243);

	var _aboutOverviewStore2 = _interopRequireDefault(_aboutOverviewStore);

	var React = __webpack_require__(2);
	var ReactRouter = __webpack_require__(177);
	var Link = ReactRouter.Link;
	var State = ReactRouter.State;
	var Navigation = ReactRouter.Navigation;
	var TabsActions = __webpack_require__(216);
	var TabsStore = __webpack_require__(234);

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

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _altInstance = __webpack_require__(161);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	var AboutOverviewActions = function AboutOverviewActions() {
	    _classCallCheck(this, AboutOverviewActions);

	    this.generateActions('save', 'saveCurrent');
	};

	exports['default'] = _altInstance2['default'].createActions(AboutOverviewActions);
	module.exports = exports['default'];

/***/ },

/***/ 243:
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

	var _aboutOverviewActions = __webpack_require__(242);

	var _aboutOverviewActions2 = _interopRequireDefault(_aboutOverviewActions);

	var AboutOverviewStore = (function () {
	    function AboutOverviewStore() {
	        _classCallCheck(this, AboutOverviewStore);

	        this.bindListeners({
	            save: _aboutOverviewActions2['default'].save,
	            saveCurrent: _aboutOverviewActions2['default'].saveCurrent
	        });
	        this.about = { current: { input: '' } };
	    }

	    _createClass(AboutOverviewStore, [{
	        key: 'save',
	        value: function save(tab) {
	            this.about = {};
	        }
	    }, {
	        key: 'saveCurrent',
	        value: function saveCurrent(data) {
	            this.about = { current: data };
	        }
	    }]);

	    return AboutOverviewStore;
	})();

	exports['default'] = _altInstance2['default'].createStore(AboutOverviewStore, 'AboutOverviewStore');
	module.exports = exports['default'];

/***/ }

});