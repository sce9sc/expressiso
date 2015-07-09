webpackJsonp([6],{

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var ReactRouter = __webpack_require__(177);
	var Link = ReactRouter.Link;
	var Modal = __webpack_require__(291);
	var Popover = __webpack_require__(306);
	var Tooltip = __webpack_require__(307);
	var Button = __webpack_require__(308);
	var OverlayTrigger = __webpack_require__(309);

	var ModalPage = React.createClass({
	    displayName: 'ModalPage',

	    getInitialState: function getInitialState() {
	        return { showModal: false };
	    },

	    close: function close() {
	        this.setState({ showModal: false });
	    },

	    open: function open() {
	        this.setState({ showModal: true });
	    },

	    render: function render() {
	        var popover = React.createElement(
	            Popover,
	            { title: 'popover' },
	            'very popover. such engagement'
	        );
	        var tooltip = React.createElement(
	            Tooltip,
	            null,
	            'wow.'
	        );

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
	                ),
	                React.createElement(
	                    'ol',
	                    { className: 'breadcrumb' },
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            Link,
	                            { to: 'home' },
	                            ' Home'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        { className: 'active' },
	                        'About'
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
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement(
	                                'p',
	                                null,
	                                'Click to get the full Modal experience!'
	                            ),
	                            React.createElement(
	                                Button,
	                                {
	                                    bsStyle: 'primary',
	                                    bsSize: 'large',
	                                    onClick: this.open
	                                },
	                                'Launch demo modal'
	                            ),
	                            React.createElement(
	                                Modal,
	                                { show: this.state.showModal, onHide: this.close },
	                                React.createElement(
	                                    Modal.Header,
	                                    { closeButton: true },
	                                    React.createElement(
	                                        Modal.Title,
	                                        null,
	                                        'Modal heading'
	                                    )
	                                ),
	                                React.createElement(
	                                    Modal.Body,
	                                    null,
	                                    React.createElement(
	                                        'h4',
	                                        null,
	                                        'Text in a modal'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
	                                    ),
	                                    React.createElement(
	                                        'h4',
	                                        null,
	                                        'Popover in a modal'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'there is a ',
	                                        React.createElement(
	                                            OverlayTrigger,
	                                            { overlay: popover },
	                                            React.createElement(
	                                                'a',
	                                                { href: '#' },
	                                                'popover'
	                                            )
	                                        ),
	                                        ' here'
	                                    ),
	                                    React.createElement(
	                                        'h4',
	                                        null,
	                                        'Tooltips in a modal'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'there is a ',
	                                        React.createElement(
	                                            OverlayTrigger,
	                                            { overlay: tooltip },
	                                            React.createElement(
	                                                'a',
	                                                { href: '#' },
	                                                'tooltip'
	                                            )
	                                        ),
	                                        ' here'
	                                    ),
	                                    React.createElement('hr', null),
	                                    React.createElement(
	                                        'h4',
	                                        null,
	                                        'Overflowing text to show scroll behavior'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	                                    ),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
	                                    )
	                                ),
	                                React.createElement(
	                                    Modal.Footer,
	                                    null,
	                                    React.createElement(
	                                        Button,
	                                        { onClick: this.close },
	                                        'Close'
	                                    )
	                                )
	                            )
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

	module.exports = ModalPage;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsCreateChainedFunction = __webpack_require__(292);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var _BootstrapMixin = __webpack_require__(293);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _FadeMixin = __webpack_require__(296);

	var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

	var _utilsDomUtils = __webpack_require__(297);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	var _utilsEventListener = __webpack_require__(298);

	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

	var _utilsDeprecationWarning = __webpack_require__(299);

	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

	var _Portal = __webpack_require__(300);

	var _Portal2 = _interopRequireDefault(_Portal);

	var _ModalBody = __webpack_require__(302);

	var _ModalBody2 = _interopRequireDefault(_ModalBody);

	var _ModalHeader = __webpack_require__(303);

	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

	var _ModalTitle = __webpack_require__(304);

	var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

	var _ModalFooter = __webpack_require__(305);

	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

	/**
	 * Gets the correct clientHeight of the modal container
	 * when the body/window/document you need to use the docElement clientHeight
	 * @param  {HTMLElement} container
	 * @param  {ReactElement|HTMLElement} context
	 * @return {Number}
	 */
	function containerClientHeight(container, context) {
	  var doc = _utilsDomUtils2['default'].ownerDocument(context);

	  return container === doc.body || container === doc.documentElement ? doc.documentElement.clientHeight : container.clientHeight;
	}

	function getContainer(context) {
	  return context.props.container && _react2['default'].findDOMNode(context.props.container) || _utilsDomUtils2['default'].ownerDocument(context).body;
	}

	function requiredIfNot(key, type) {
	  return function (props, propName, componentName) {
	    var propType = type;

	    if (props[key] === undefined) {
	      propType = propType.isRequired;
	    }
	    return propType(props, propName, componentName);
	  };
	}

	function toChildArray(children) {
	  var result = [];
	  _react2['default'].Children.forEach(children, function (c) {
	    return result.push(c);
	  });
	  return result;
	}

	var currentFocusListener = undefined;

	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 *
	 * @param  {ReactElement|HTMLElement} context
	 * @param  {Function} handler
	 */
	function onFocus(context, handler) {
	  var doc = _utilsDomUtils2['default'].ownerDocument(context);
	  var useFocusin = !doc.addEventListener;
	  var remove = undefined;

	  if (currentFocusListener) {
	    currentFocusListener.remove();
	  }

	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function () {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function () {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }

	  currentFocusListener = { remove: remove };

	  return currentFocusListener;
	}

	var scrollbarSize = undefined;

	function getScrollbarSize() {
	  if (scrollbarSize !== undefined) {
	    return scrollbarSize;
	  }

	  var scrollDiv = document.createElement('div');

	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';

	  document.body.appendChild(scrollDiv);
	  scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);

	  scrollDiv = null;
	}

	var ModalMarkup = _react2['default'].createClass({
	  displayName: 'ModalMarkup',

	  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

	  propTypes: {
	    /**
	     * The Modal title text
	     * @deprecated Use the "Modal.Header" component instead
	     */
	    title: _react2['default'].PropTypes.node,
	    /**
	     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
	     */
	    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
	    /**
	     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
	     */
	    keyboard: _react2['default'].PropTypes.bool,

	    /**
	     * Specify whether the Modal heading should contain a close button
	     * @deprecated Use the "Modal.Header" Component instead
	     */
	    closeButton: _react2['default'].PropTypes.bool,

	    /**
	     * Open and close the Modal with a slide and fade animation.
	     */
	    animation: _react2['default'].PropTypes.bool,
	    /**
	     * A Callback fired when the header closeButton or non-static backdrop is clicked.
	     * @type {function}
	     * @required
	     */
	    onHide: requiredIfNot('onRequestHide', _react2['default'].PropTypes.func),

	    /**
	     * A Callback fired when the header closeButton or non-static backdrop is clicked.
	     * @deprecated Replaced by `onHide`.
	     */
	    onRequestHide: _react2['default'].PropTypes.func,

	    /**
	     * A css class to apply to the Modal dialog DOM node.
	     */
	    dialogClassName: _react2['default'].PropTypes.string,

	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
	     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
	     */
	    autoFocus: _react2['default'].PropTypes.bool,

	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
	     * such as screen readers.
	     */
	    enforceFocus: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'modal',
	      backdrop: true,
	      keyboard: true,
	      animation: true,
	      closeButton: true,

	      autoFocus: true,
	      enforceFocus: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {};
	  },

	  render: function render() {
	    var state = this.state;
	    var modalStyle = _extends({}, state.dialogStyles, { display: 'block' });
	    var dialogClasses = this.getBsClassSet();

	    delete dialogClasses.modal;
	    dialogClasses['modal-dialog'] = true;

	    var classes = {
	      modal: true,
	      fade: this.props.animation,
	      'in': !this.props.animation
	    };

	    var modal = _react2['default'].createElement('div', _extends({}, this.props, {
	      title: null,
	      tabIndex: '-1',
	      role: 'dialog',
	      style: modalStyle,
	      className: (0, _classnames2['default'])(this.props.className, classes),
	      onClick: this.props.backdrop === true ? this.handleBackdropClick : null,
	      ref: 'modal' }), _react2['default'].createElement('div', { className: (0, _classnames2['default'])(this.props.dialogClassName, dialogClasses) }, _react2['default'].createElement('div', { className: 'modal-content', role: 'document' }, this.renderContent())));

	    return this.props.backdrop ? this.renderBackdrop(modal, state.backdropStyles) : modal;
	  },

	  renderContent: function renderContent() {
	    var _this = this;

	    var children = toChildArray(this.props.children); // b/c createFragment is in addons and children can be a key'd object
	    var hasNewHeader = children.some(function (c) {
	      return c.type.__isModalHeader;
	    });

	    if (!hasNewHeader && this.props.title != null) {
	      (0, _utilsDeprecationWarning2['default'])('Specifying `closeButton` or `title` Modal props', 'the new Modal.Header, and Modal.Title components');

	      children.unshift(_react2['default'].createElement(_ModalHeader2['default'], { closeButton: this.props.closeButton, onHide: this._getHide() }, this.props.title && _react2['default'].createElement(_ModalTitle2['default'], null, this.props.title)));
	    }

	    return _react2['default'].Children.map(children, function (child) {
	      // TODO: use context in 0.14
	      if (child.type.__isModalHeader) {
	        return (0, _react.cloneElement)(child, {
	          onHide: (0, _utilsCreateChainedFunction2['default'])(_this._getHide(), child.props.onHide)
	        });
	      }
	      return child;
	    });
	  },

	  renderBackdrop: function renderBackdrop(modal) {
	    var classes = {
	      'modal-backdrop': true,
	      fade: this.props.animation,
	      'in': !this.props.animation
	    };

	    var onClick = this.props.backdrop === true ? this.handleBackdropClick : null;

	    return _react2['default'].createElement('div', null, _react2['default'].createElement('div', { className: (0, _classnames2['default'])(classes), ref: 'backdrop', onClick: onClick }), modal);
	  },

	  _getHide: function _getHide() {
	    if (!this.props.onHide && this.props.onRequestHide) {
	      (0, _utilsDeprecationWarning2['default'])('The Modal prop `onRequestHide`', 'the `onHide` prop');
	    }

	    return this.props.onHide || this.props.onRequestHide;
	  },

	  iosClickHack: function iosClickHack() {
	    // IOS only allows click events to be delegated to the document on elements
	    // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
	    // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
	    _react2['default'].findDOMNode(this.refs.modal).onclick = function () {};
	    _react2['default'].findDOMNode(this.refs.backdrop).onclick = function () {};
	  },

	  componentWillMount: function componentWillMount() {
	    this.checkForFocus();
	  },

	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    var doc = _utilsDomUtils2['default'].ownerDocument(this);
	    var win = _utilsDomUtils2['default'].ownerWindow(this);

	    this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);

	    this._onWindowResizeListener = _utilsEventListener2['default'].listen(win, 'resize', this.handleWindowResize);

	    if (this.props.enforceFocus) {
	      this._onFocusinListener = onFocus(this, this.enforceFocus);
	    }

	    var container = getContainer(this);

	    container.className += container.className.length ? ' modal-open' : 'modal-open';

	    this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);

	    this._originalPadding = container.style.paddingRight;

	    if (this._containerIsOverflowing) {
	      container.style.paddingRight = parseInt(this._originalPadding || 0, 10) + getScrollbarSize() + 'px';
	    }

	    if (this.props.backdrop) {
	      this.iosClickHack();
	    }

	    this.setState(this._getStyles(), //eslint-disable-line react/no-did-mount-set-state
	    function () {
	      return _this2.focusModalContent();
	    });
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (this.props.backdrop && this.props.backdrop !== prevProps.backdrop) {
	      this.iosClickHack();
	      this.setState(this._getStyles()); //eslint-disable-line react/no-did-update-set-state
	    }

	    if (this.props.container !== prevProps.container) {
	      var container = getContainer(this);
	      this._containerIsOverflowing = container.scrollHeight > containerClientHeight(container, this);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._onDocumentKeyupListener.remove();
	    this._onWindowResizeListener.remove();

	    if (this._onFocusinListener) {
	      this._onFocusinListener.remove();
	    }

	    var container = getContainer(this);

	    container.style.paddingRight = this._originalPadding;

	    container.className = container.className.replace(/ ?modal-open/, '');

	    this.restoreLastFocus();
	  },

	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }

	    this._getHide()();
	  },

	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27) {
	      this._getHide()();
	    }
	  },

	  handleWindowResize: function handleWindowResize() {
	    this.setState(this._getStyles());
	  },

	  checkForFocus: function checkForFocus() {
	    if (_utilsDomUtils2['default'].canUseDom) {
	      try {
	        this.lastFocus = document.activeElement;
	      } catch (e) {} // eslint-disable-line no-empty
	    }
	  },

	  focusModalContent: function focusModalContent() {
	    var modalContent = _react2['default'].findDOMNode(this.refs.modal);
	    var current = _utilsDomUtils2['default'].activeElement(this);
	    var focusInModal = current && _utilsDomUtils2['default'].contains(modalContent, current);

	    if (this.props.autoFocus && !focusInModal) {
	      this.lastFocus = current;

	      modalContent.focus();
	    }
	  },

	  restoreLastFocus: function restoreLastFocus() {
	    if (this.lastFocus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  },

	  enforceFocus: function enforceFocus() {
	    if (!this.isMounted()) {
	      return;
	    }

	    var active = _utilsDomUtils2['default'].activeElement(this);
	    var modal = _react2['default'].findDOMNode(this.refs.modal);

	    if (modal !== active && !_utilsDomUtils2['default'].contains(modal, active)) {
	      modal.focus();
	    }
	  },

	  _getStyles: function _getStyles() {
	    if (!_utilsDomUtils2['default'].canUseDom) {
	      return {};
	    }

	    var node = _react2['default'].findDOMNode(this.refs.modal);
	    var scrollHt = node.scrollHeight;
	    var container = getContainer(this);
	    var containerIsOverflowing = this._containerIsOverflowing;
	    var modalIsOverflowing = scrollHt > containerClientHeight(container, this);

	    return {
	      dialogStyles: {
	        paddingRight: containerIsOverflowing && !modalIsOverflowing ? getScrollbarSize() : void 0,
	        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? getScrollbarSize() : void 0
	      }
	    };
	  }
	});

	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',

	  propTypes: _extends({}, _Portal2['default'].propTypes, ModalMarkup.propTypes),

	  defaultProps: {
	    show: null
	  },

	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;

	    var props = _objectWithoutProperties(_props, ['show']);

	    var modal = _react2['default'].createElement(ModalMarkup, props, this.props.children);
	    // I can't think of another way to not break back compat while defaulting container
	    if (!this.props.__isUsedInModalTrigger && show != null) {
	      return _react2['default'].createElement(_Portal2['default'], { container: props.container }, show && modal);
	    } else {
	      return modal;
	    }
	  }
	});

	Modal.Body = _ModalBody2['default'];
	Modal.Header = _ModalHeader2['default'];
	Modal.Title = _ModalTitle2['default'];
	Modal.Footer = _ModalFooter2['default'];

	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ },

/***/ 292:
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}

	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _styleMaps = __webpack_require__(294);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var BootstrapMixin = {
	  propTypes: {
	    /**
	     * bootstrap className
	     * @private
	     */
	    bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
	    /**
	     * Style variants
	     * @type {("default"|"primary"|"success"|"info"|"warning"|"danger"|"link")}
	     */
	    bsStyle: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].STYLES),
	    /**
	     * Size variants
	     * @type {("xsmall"|"small"|"medium"|"large")}
	     */
	    bsSize: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].SIZES)
	  },

	  getBsClassSet: function getBsClassSet() {
	    var classes = {};

	    var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
	    if (bsClass) {
	      classes[bsClass] = true;

	      var prefix = bsClass + '-';

	      var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
	      if (bsSize) {
	        classes[prefix + bsSize] = true;
	      }

	      var bsStyle = this.props.bsStyle && _styleMaps2['default'].STYLES[this.props.bsStyle];
	      if (this.props.bsStyle) {
	        classes[prefix + bsStyle] = true;
	      }
	    }

	    return classes;
	  },

	  prefixClass: function prefixClass(subClass) {
	    return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
	  }
	};

	exports['default'] = BootstrapMixin;
	module.exports = exports['default'];

/***/ },

/***/ 294:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var styleMaps = {
	  CLASSES: {
	    'alert': 'alert',
	    'button': 'btn',
	    'button-group': 'btn-group',
	    'button-toolbar': 'btn-toolbar',
	    'column': 'col',
	    'input-group': 'input-group',
	    'form': 'form',
	    'glyphicon': 'glyphicon',
	    'label': 'label',
	    'thumbnail': 'thumbnail',
	    'list-group-item': 'list-group-item',
	    'panel': 'panel',
	    'panel-group': 'panel-group',
	    'pagination': 'pagination',
	    'progress-bar': 'progress-bar',
	    'nav': 'nav',
	    'navbar': 'navbar',
	    'modal': 'modal',
	    'row': 'row',
	    'well': 'well'
	  },
	  STYLES: {
	    'default': 'default',
	    'primary': 'primary',
	    'success': 'success',
	    'info': 'info',
	    'warning': 'warning',
	    'danger': 'danger',
	    'link': 'link',
	    'inline': 'inline',
	    'tabs': 'tabs',
	    'pills': 'pills'
	  },
	  addStyle: function addStyle(name) {
	    styleMaps.STYLES[name] = name;
	  },
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs'
	  },
	  GLYPHS: ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'yen', 'ruble', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up']
	};

	exports['default'] = styleMaps;
	module.exports = exports['default'];

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _toArray(arr) {
	  return Array.isArray(arr) ? arr : Array.from(arr);
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var ANONYMOUS = '<<anonymous>>';

	var CustomPropTypes = {

	  isRequiredForA11y: function isRequiredForA11y(propType) {
	    return function (props, propName, componentName) {
	      if (props[propName] === null) {
	        return new Error('The prop `' + propName + '` is required to make ' + componentName + ' accessible ' + 'for users using assistive technologies such as screen readers `');
	      }

	      return propType(props, propName, componentName);
	    };
	  },

	  /**
	   * Checks whether a prop provides a DOM element
	   *
	   * The element can be provided in two forms:
	   * - Directly passed
	   * - Or passed an object that has a `render` method
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  mountable: createMountableChecker(),

	  /**
	   * Checks whether a prop provides a type of element.
	   *
	   * The type of element can be provided in two forms:
	   * - tag name (string)
	   * - a return value of React.createClass(...)
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  elementType: createElementTypeChecker(),

	  /**
	   * Checks whether a prop matches a key of an associated object
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  keyOf: createKeyOfChecker,
	  /**
	   * Checks if only one of the listed properties is in use. An error is given
	   * if multiple have a value
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  singlePropFrom: createSinglePropFromChecker,

	  all: all
	};

	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createMountableChecker() {
	  function validate(props, propName, componentName) {
	    if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	      return new Error(errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
	    }
	  }

	  return createChainableTypeChecker(validate);
	}

	function createKeyOfChecker(obj) {
	  function validate(props, propName, componentName) {
	    var propValue = props[propName];
	    if (!obj.hasOwnProperty(propValue)) {
	      var valuesString = JSON.stringify(Object.keys(obj));
	      return new Error(errMsg(props, propName, componentName, ', expected one of ' + valuesString + '.'));
	    }
	  }
	  return createChainableTypeChecker(validate);
	}

	function createSinglePropFromChecker(arrOfProps) {
	  function validate(props, propName, componentName) {
	    var usedPropCount = arrOfProps.map(function (listedProp) {
	      return props[listedProp];
	    }).reduce(function (acc, curr) {
	      return acc + (curr !== undefined ? 1 : 0);
	    }, 0);

	    if (usedPropCount > 1) {
	      var _arrOfProps = _toArray(arrOfProps);

	      var first = _arrOfProps[0];

	      var others = _arrOfProps.slice(1);

	      var message = '' + others.join(', ') + ' and ' + first;
	      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
	    }
	  }
	  return validate;
	}

	function all(propTypes) {
	  if (propTypes === undefined) {
	    throw new Error('No validations provided');
	  }

	  if (!(propTypes instanceof Array)) {
	    throw new Error('Invalid argument must be an array');
	  }

	  if (propTypes.length === 0) {
	    throw new Error('No validations provided');
	  }

	  return function (props, propName, componentName) {
	    for (var i = 0; i < propTypes.length; i++) {
	      var result = propTypes[i](props, propName, componentName);

	      if (result !== undefined && result !== null) {
	        return result;
	      }
	    }
	  };
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName) {
	    var errBeginning = errMsg(props, propName, componentName, '. Expected an Element `type`');

	    if (typeof props[propName] !== 'function') {
	      if (_react2['default'].isValidElement(props[propName])) {
	        return new Error(errBeginning + ', not an actual Element');
	      }

	      if (typeof props[propName] !== 'string') {
	        return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	      }
	    }
	  }

	  return createChainableTypeChecker(validate);
	}

	exports['default'] = CustomPropTypes;
	module.exports = exports['default'];

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsDomUtils = __webpack_require__(297);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	// TODO: listen for onTransitionEnd to remove el
	function getElementsAndSelf(root, classes) {
	  var els = root.querySelectorAll('.' + classes.join('.'));

	  els = [].map.call(els, function (e) {
	    return e;
	  });

	  for (var i = 0; i < classes.length; i++) {
	    if (!root.className.match(new RegExp('\\b' + classes[i] + '\\b'))) {
	      return els;
	    }
	  }
	  els.unshift(root);
	  return els;
	}

	exports['default'] = {
	  _fadeIn: function _fadeIn() {
	    var els = undefined;

	    if (this.isMounted()) {
	      els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);

	      if (els.length) {
	        els.forEach(function (el) {
	          el.className += ' in';
	        });
	      }
	    }
	  },

	  _fadeOut: function _fadeOut() {
	    var els = getElementsAndSelf(this._fadeOutEl, ['fade', 'in']);

	    if (els.length) {
	      els.forEach(function (el) {
	        el.className = el.className.replace(/\bin\b/, '');
	      });
	    }

	    setTimeout(this._handleFadeOutEnd, 300);
	  },

	  _handleFadeOutEnd: function _handleFadeOutEnd() {
	    if (this._fadeOutEl && this._fadeOutEl.parentNode) {
	      this._fadeOutEl.parentNode.removeChild(this._fadeOutEl);
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    if (document.querySelectorAll) {
	      // Firefox needs delay for transition to be triggered
	      setTimeout(this._fadeIn, 20);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var els = getElementsAndSelf(_react2['default'].findDOMNode(this), ['fade']);
	    var container = this.props.container && _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;

	    if (els.length) {
	      this._fadeOutEl = document.createElement('div');
	      container.appendChild(this._fadeOutEl);
	      this._fadeOutEl.appendChild(_react2['default'].findDOMNode(this).cloneNode(true));
	      // Firefox needs delay for transition to be triggered
	      setTimeout(this._fadeOut, 20);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Get elements owner document
	 *
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLElement}
	 */
	function ownerDocument(componentOrElement) {
	  var elem = _react2['default'].findDOMNode(componentOrElement);
	  return elem && elem.ownerDocument || document;
	}

	function ownerWindow(componentOrElement) {
	  var doc = ownerDocument(componentOrElement);
	  return doc.defaultView ? doc.defaultView : doc.parentWindow;
	}

	/**
	 * get the active element, safe in IE
	 * @return {HTMLElement}
	 */
	function getActiveElement(componentOrElement) {
	  var doc = ownerDocument(componentOrElement);

	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	/**
	 * Shortcut to compute element style
	 *
	 * @param {HTMLElement} elem
	 * @returns {CssStyle}
	 */
	function getComputedStyles(elem) {
	  return ownerDocument(elem).defaultView.getComputedStyle(elem, null);
	}

	/**
	 * Get elements offset
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} DOMNode
	 * @returns {{top: number, left: number}}
	 */
	function getOffset(DOMNode) {
	  if (window.jQuery) {
	    return window.jQuery(DOMNode).offset();
	  }

	  var docElem = ownerDocument(DOMNode).documentElement;
	  var box = { top: 0, left: 0 };

	  // If we don't have gBCR, just use 0,0 rather than error
	  // BlackBerry 5, iOS 3 (original iPhone)
	  if (typeof DOMNode.getBoundingClientRect !== 'undefined') {
	    box = DOMNode.getBoundingClientRect();
	  }

	  return {
	    top: box.top + window.pageYOffset - docElem.clientTop,
	    left: box.left + window.pageXOffset - docElem.clientLeft
	  };
	}

	/**
	 * Get elements position
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} elem
	 * @param {HTMLElement?} offsetParent
	 * @returns {{top: number, left: number}}
	 */
	function getPosition(elem, offsetParent) {
	  var offset = undefined,
	      parentOffset = undefined;

	  if (window.jQuery) {
	    if (!offsetParent) {
	      return window.jQuery(elem).position();
	    }

	    offset = window.jQuery(elem).offset();
	    parentOffset = window.jQuery(offsetParent).offset();

	    // Get element offset relative to offsetParent
	    return {
	      top: offset.top - parentOffset.top,
	      left: offset.left - parentOffset.left
	    };
	  }

	  parentOffset = { top: 0, left: 0 };

	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	  if (getComputedStyles(elem).position === 'fixed') {
	    // We assume that getBoundingClientRect is available when computed position is fixed
	    offset = elem.getBoundingClientRect();
	  } else {
	    if (!offsetParent) {
	      // Get *real* offsetParent
	      offsetParent = offsetParentFunc(elem);
	    }

	    // Get correct offsets
	    offset = getOffset(elem);
	    if (offsetParent.nodeName !== 'HTML') {
	      parentOffset = getOffset(offsetParent);
	    }

	    // Add offsetParent borders
	    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
	    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
	  }

	  // Subtract parent offsets and element margins
	  return {
	    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
	    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
	  };
	}

	/**
	 * Get parent element
	 *
	 * @param {HTMLElement?} elem
	 * @returns {HTMLElement}
	 */
	function offsetParentFunc(elem) {
	  var docElem = ownerDocument(elem).documentElement;
	  var offsetParent = elem.offsetParent || docElem;

	  while (offsetParent && (offsetParent.nodeName !== 'HTML' && getComputedStyles(offsetParent).position === 'static')) {
	    offsetParent = offsetParent.offsetParent;
	  }

	  return offsetParent || docElem;
	}

	/**
	 * Cross browser .contains() polyfill
	 * @param  {HTMLElement} elem
	 * @param  {HTMLElement} inner
	 * @return {bool}
	 */
	function contains(elem, inner) {
	  function ie8Contains(root, node) {
	    while (node) {
	      if (node === root) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  }

	  return elem && elem.contains ? elem.contains(inner) : elem && elem.compareDocumentPosition ? elem === inner || !!(elem.compareDocumentPosition(inner) & 16) : ie8Contains(elem, inner);
	}

	exports['default'] = {
	  canUseDom: canUseDom,
	  contains: contains,
	  ownerWindow: ownerWindow,
	  ownerDocument: ownerDocument,
	  getComputedStyles: getComputedStyles,
	  getOffset: getOffset,
	  getPosition: getPosition,
	  activeElement: getActiveElement,
	  offsetParent: offsetParentFunc
	};
	module.exports = exports['default'];

/***/ },

/***/ 298:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * This file contains a modified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * TODO: remove in favour of solution provided by:
	 *  https://github.com/facebook/react/issues/285
	 */

	/**
	 * Does not take into account specific nature of platform.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};

	exports['default'] = EventListener;
	module.exports = exports['default'];

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = deprecationWarning;

	function deprecationWarning(oldname, newname, link) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (typeof console === 'undefined' || typeof console.warn !== 'function') {
	      return;
	    }

	    var message = '' + oldname + ' is deprecated. Use ' + newname + ' instead.';
	    console.warn(message);

	    if (link) {
	      console.warn('You can read more about it at ' + link);
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var _OverlayMixin = __webpack_require__(301);

	var Portal = _react2['default'].createClass({

	  displayName: 'Portal',

	  propTypes: {
	    /**
	     * The DOM Node that the Component will render it's children into
	     */
	    container: _utilsCustomPropTypes2['default'].mountable
	  },

	  // we use the mixin for now, to avoid duplicating a bunch of code.
	  // when the deprecation is removed we need to move the logic here from OverlayMixin
	  mixins: [_OverlayMixin.OverlayMixin],

	  renderOverlay: function renderOverlay() {
	    if (!this.props.children) {
	      return null;
	    }

	    return _react2['default'].Children.only(this.props.children);
	  },

	  render: function render() {
	    return null;
	  }
	});

	exports['default'] = Portal;
	module.exports = exports['default'];

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var _utilsDomUtils = __webpack_require__(297);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	var _utilsDeprecationWarning = __webpack_require__(299);

	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

	var OverlayMixin = {
	  propTypes: {

	    container: _utilsCustomPropTypes2['default'].mountable
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderOverlay();
	    this._mountOverlayTarget();
	  },

	  _mountOverlayTarget: function _mountOverlayTarget() {
	    if (!this._overlayTarget) {
	      this._overlayTarget = document.createElement('div');
	      this.getContainerDOMNode().appendChild(this._overlayTarget);
	    }
	  },

	  _unmountOverlayTarget: function _unmountOverlayTarget() {
	    if (this._overlayTarget) {
	      this.getContainerDOMNode().removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	  },

	  _renderOverlay: function _renderOverlay() {

	    var overlay = this.renderOverlay();

	    // Save reference to help testing
	    if (overlay !== null) {
	      this._mountOverlayTarget();
	      this._overlayInstance = _react2['default'].render(overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	      this._unmountOverlayTarget();
	    }
	  },

	  _unrenderOverlay: function _unrenderOverlay() {
	    if (this._overlayTarget) {
	      _react2['default'].unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  },

	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      return _react2['default'].findDOMNode(this._overlayInstance);
	    }

	    return null;
	  },

	  getContainerDOMNode: function getContainerDOMNode() {
	    return _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
	  }
	};

	exports.OverlayMixin = OverlayMixin;
	exports['default'] = _extends({}, OverlayMixin, {

	  componentWillMount: function componentWillMount() {
	    (0, _utilsDeprecationWarning2['default'])('Overlay mixin', 'the `<Portal/>` Component', 'http://react-bootstrap.github.io/components.html#utilities-portal');
	  }
	});

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ModalBody = (function (_React$Component) {
	  function ModalBody() {
	    _classCallCheck(this, ModalBody);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ModalBody, _React$Component);

	  _createClass(ModalBody, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName) }), this.props.children);
	    }
	  }]);

	  return ModalBody;
	})(_react2['default'].Component);

	ModalBody.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};

	ModalBody.defaultProps = {
	  modalClassName: 'modal-body'
	};

	exports['default'] = ModalBody;
	module.exports = exports['default'];

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ModalHeader = (function (_React$Component) {
	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ModalHeader, _React$Component);

	  _createClass(ModalHeader, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', _extends({}, this.props, {
	        className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName)
	      }), this.props.closeButton && _react2['default'].createElement('button', {
	        className: 'close',
	        'aria-label': this.props['aria-label'] || 'Close',
	        onClick: this.props.onHide,
	        style: { marginTop: -2 }
	      }, _react2['default'].createElement('span', { 'aria-hidden': 'true' }, '×')), this.props.children);
	    }
	  }]);

	  return ModalHeader;
	})(_react2['default'].Component);

	//used in liue of parent contexts right now to auto wire the close button
	ModalHeader.__isModalHeader = true;

	ModalHeader.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string,
	  /**
	   * Specify whether the Component should contain a close button
	   */
	  closeButton: _react2['default'].PropTypes.bool,
	  /**
	   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
	   * be propagated up to the parent Modal `onHide`.
	   */
	  onHide: _react2['default'].PropTypes.func
	};

	ModalHeader.defaultProps = {
	  modalClassName: 'modal-header',
	  closeButton: false
	};

	exports['default'] = ModalHeader;
	module.exports = exports['default'];
	//eslint-disable-line react/prop-types

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ModalTitle = (function (_React$Component) {
	  function ModalTitle() {
	    _classCallCheck(this, ModalTitle);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ModalTitle, _React$Component);

	  _createClass(ModalTitle, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('h4', _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'modal-title') }), this.props.children);
	    }
	  }]);

	  return ModalTitle;
	})(_react2['default'].Component);

	ModalTitle.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};

	ModalTitle.defaultProps = {
	  modalClassName: 'modal-title'
	};

	exports['default'] = ModalTitle;
	module.exports = exports['default'];

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ModalFooter = (function (_React$Component) {
	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ModalFooter, _React$Component);

	  _createClass(ModalFooter, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, this.props.modalClassName) }), this.props.children);
	    }
	  }]);

	  return ModalFooter;
	})(_react2['default'].Component);

	ModalFooter.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  modalClassName: _react2['default'].PropTypes.string
	};

	ModalFooter.defaultProps = {
	  modalClassName: 'modal-footer'
	};

	exports['default'] = ModalFooter;
	module.exports = exports['default'];

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable react/no-multi-comp */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _BootstrapMixin = __webpack_require__(293);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _FadeMixin = __webpack_require__(296);

	var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var Popover = _react2['default'].createClass({
	  displayName: 'Popover',

	  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

	  propTypes: {
	    /**
	     * An html id attribute, necessary for accessibility
	     * @type {string}
	     * @required
	     */
	    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),

	    /**
	     * Sets the direction the Popover is positioned towards.
	     */
	    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

	    /**
	     * The "left" position value for the Popover.
	     */
	    positionLeft: _react2['default'].PropTypes.number,
	    /**
	     * The "top" position value for the Popover.
	     */
	    positionTop: _react2['default'].PropTypes.number,
	    /**
	     * The "left" position value for the Popover arrow.
	     */
	    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * The "top" position value for the Popover arrow.
	     */
	    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * Title text
	     */
	    title: _react2['default'].PropTypes.node,
	    /**
	     * Specify whether the Popover should be use show and hide animations.
	     */
	    animation: _react2['default'].PropTypes.bool

	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right',
	      animation: true
	    };
	  },

	  render: function render() {
	    var _classes;

	    var classes = (_classes = {
	      'popover': true
	    }, _defineProperty(_classes, this.props.placement, true), _defineProperty(_classes, 'in', !this.props.animation && (this.props.positionLeft != null || this.props.positionTop != null)), _defineProperty(_classes, 'fade', this.props.animation), _classes);

	    var style = {
	      'left': this.props.positionLeft,
	      'top': this.props.positionTop,
	      'display': 'block'
	    };

	    var arrowStyle = {
	      'left': this.props.arrowOffsetLeft,
	      'top': this.props.arrowOffsetTop
	    };

	    return _react2['default'].createElement('div', _extends({ role: 'tooltip' }, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style, title: null }), _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }), this.props.title ? this.renderTitle() : null, _react2['default'].createElement('div', { className: 'popover-content' }, this.props.children));
	  },

	  renderTitle: function renderTitle() {
	    return _react2['default'].createElement('h3', { className: 'popover-title' }, this.props.title);
	  }
	});

	exports['default'] = Popover;
	module.exports = exports['default'];

	// in class will be added by the FadeMixin when the animation property is true

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable react/no-multi-comp */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _BootstrapMixin = __webpack_require__(293);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _FadeMixin = __webpack_require__(296);

	var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',

	  mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

	  propTypes: {
	    /**
	     * An html id attribute, necessary for accessibility
	     * @type {string}
	     * @required
	     */
	    id: _utilsCustomPropTypes2['default'].isRequiredForA11y(_react2['default'].PropTypes.string),

	    /**
	     * Sets the direction the Tooltip is positioned towards.
	     */
	    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

	    /**
	     * The "left" position value for the Tooltip.
	     */
	    positionLeft: _react2['default'].PropTypes.number,
	    /**
	     * The "top" position value for the Tooltip.
	     */
	    positionTop: _react2['default'].PropTypes.number,
	    /**
	     * The "left" position value for the Tooltip arrow.
	     */
	    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * The "top" position value for the Tooltip arrow.
	     */
	    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * Title text
	     */
	    title: _react2['default'].PropTypes.node,
	    /**
	     * Specify whether the Tooltip should be use show and hide animations.
	     */
	    animation: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right',
	      animation: true
	    };
	  },

	  render: function render() {
	    var _classes;

	    var classes = (_classes = {
	      'tooltip': true
	    }, _defineProperty(_classes, this.props.placement, true), _defineProperty(_classes, 'in', !this.props.animation && (this.props.positionLeft != null || this.props.positionTop != null)), _defineProperty(_classes, 'fade', this.props.animation), _classes);

	    var style = {
	      'left': this.props.positionLeft,
	      'top': this.props.positionTop
	    };

	    var arrowStyle = {
	      'left': this.props.arrowOffsetLeft,
	      'top': this.props.arrowOffsetTop
	    };

	    return _react2['default'].createElement('div', _extends({ role: 'tooltip' }, this.props, { className: (0, _classnames2['default'])(this.props.className, classes), style: style }), _react2['default'].createElement('div', { className: 'tooltip-arrow', style: arrowStyle }), _react2['default'].createElement('div', { className: 'tooltip-inner' }, this.props.children));
	  }
	});

	exports['default'] = Tooltip;
	module.exports = exports['default'];

	// in class will be added by the FadeMixin when the animation property is true

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(268);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _BootstrapMixin = __webpack_require__(293);

	var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var Button = _react2['default'].createClass({
	  displayName: 'Button',

	  mixins: [_BootstrapMixin2['default']],

	  propTypes: {
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    block: _react2['default'].PropTypes.bool,
	    navItem: _react2['default'].PropTypes.bool,
	    navDropdown: _react2['default'].PropTypes.bool,
	    componentClass: _utilsCustomPropTypes2['default'].elementType,
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'button',
	      bsStyle: 'default',
	      type: 'button'
	    };
	  },

	  render: function render() {
	    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
	    var renderFuncName = undefined;

	    classes = _extends({
	      active: this.props.active,
	      'btn-block': this.props.block
	    }, classes);

	    if (this.props.navItem) {
	      return this.renderNavItem(classes);
	    }

	    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

	    return this[renderFuncName](classes);
	  },

	  renderAnchor: function renderAnchor(classes) {

	    var Component = this.props.componentClass || 'a';
	    var href = this.props.href || '#';
	    classes.disabled = this.props.disabled;

	    return _react2['default'].createElement(Component, _extends({}, this.props, {
	      href: href,
	      className: (0, _classnames2['default'])(this.props.className, classes),
	      role: 'button' }), this.props.children);
	  },

	  renderButton: function renderButton(classes) {
	    var Component = this.props.componentClass || 'button';

	    return _react2['default'].createElement(Component, _extends({}, this.props, {
	      className: (0, _classnames2['default'])(this.props.className, classes) }), this.props.children);
	  },

	  renderNavItem: function renderNavItem(classes) {
	    var liClasses = {
	      active: this.props.active
	    };

	    return _react2['default'].createElement('li', { className: (0, _classnames2['default'])(liClasses) }, this.renderAnchor(classes));
	  }
	});

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsCreateChainedFunction = __webpack_require__(292);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var _utilsCreateContextWrapper = __webpack_require__(310);

	var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

	var _Overlay = __webpack_require__(311);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _utilsOverlayPositionUtils = __webpack_require__(313);

	var _utilsOverlayPositionUtils2 = _interopRequireDefault(_utilsOverlayPositionUtils);

	var _utilsDeprecationWarning = __webpack_require__(299);

	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

	var _reactLibWarning = __webpack_require__(16);

	var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);

	/**
	 * Check if value one is inside or equal to the of value
	 *
	 * @param {string} one
	 * @param {string|array} of
	 * @returns {boolean}
	 */
	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}

	var OverlayTrigger = _react2['default'].createClass({
	  displayName: 'OverlayTrigger',

	  propTypes: _extends({}, _Overlay2['default'].propTypes, {

	    /**
	    * Specify which action or actions trigger Overlay visibility
	    */
	    trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['manual', 'click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),

	    /**
	     * A millisecond delay amount to show and hide the Overlay once triggered
	     */
	    delay: _react2['default'].PropTypes.number,
	    /**
	     * A millisecond delay amount before showing the Overlay once triggered.
	     */
	    delayShow: _react2['default'].PropTypes.number,
	    /**
	     * A millisecond delay amount before hiding the Overlay once triggered.
	     */
	    delayHide: _react2['default'].PropTypes.number,

	    /**
	     * The initial visibility state of the Overlay, for more nuanced visibility controll consider
	     * using the Overlay component directly.
	     */
	    defaultOverlayShown: _react2['default'].PropTypes.bool,

	    /**
	     * An element or text to overlay next to the target.
	     */
	    overlay: _react2['default'].PropTypes.node.isRequired,

	    /**
	     * @private
	     */
	    onBlur: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onClick: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onFocus: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onMouseEnter: _react2['default'].PropTypes.func,
	    /**
	     * @private
	     */
	    onMouseLeave: _react2['default'].PropTypes.func,

	    //override specific overlay props
	    /**
	     * @private
	     */
	    target: function target() {},
	    /**
	    * @private
	    */
	    onHide: function onHide() {},
	    /**
	     * @private
	     */
	    show: function show() {}
	  }),

	  getDefaultProps: function getDefaultProps() {
	    return {
	      trigger: ['hover', 'focus']
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isOverlayShown: this.props.defaultOverlayShown == null ? false : this.props.defaultOverlayShown
	    };
	  },

	  show: function show() {
	    this.setState({
	      isOverlayShown: true
	    });
	  },

	  hide: function hide() {
	    this.setState({
	      isOverlayShown: false
	    });
	  },

	  toggle: function toggle() {
	    if (this.state.isOverlayShown) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    this._mountNode = document.createElement('div');
	    _react2['default'].render(this._overlay, this._mountNode);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _react2['default'].unmountComponentAtNode(this._mountNode);
	    this._mountNode = null;
	    clearTimeout(this._hoverDelay);
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    _react2['default'].render(this._overlay, this._mountNode);
	  },

	  getOverlay: function getOverlay() {
	    var _this = this;

	    var props = {
	      show: this.state.isOverlayShown,
	      onHide: this.hide,
	      rootClose: this.props.rootClose,
	      target: function target() {
	        return _react2['default'].findDOMNode(_this);
	      },
	      placement: this.props.placement,
	      container: this.props.container,
	      containerPadding: this.props.containerPadding
	    };

	    var overlay = (0, _react.cloneElement)(this.props.overlay, {
	      placement: props.placement,
	      container: props.container
	    });

	    return _react2['default'].createElement(_Overlay2['default'], props, overlay);
	  },

	  render: function render() {
	    var trigger = _react2['default'].Children.only(this.props.children);

	    var props = {
	      'aria-describedby': this.props.overlay.props.id
	    };

	    // create in render otherwise owner is lost...
	    this._overlay = this.getOverlay();

	    if (this.props.trigger !== 'manual') {

	      props.onClick = (0, _utilsCreateChainedFunction2['default'])(trigger.props.onClick, this.props.onClick);

	      if (isOneOf('click', this.props.trigger)) {
	        props.onClick = (0, _utilsCreateChainedFunction2['default'])(this.toggle, props.onClick);
	      }

	      if (isOneOf('hover', this.props.trigger)) {
	        (0, _reactLibWarning2['default'])(!(this.props.trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');

	        props.onMouseOver = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onMouseOver);
	        props.onMouseOut = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onMouseOut);
	      }

	      if (isOneOf('focus', this.props.trigger)) {
	        props.onFocus = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onFocus);
	        props.onBlur = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onBlur);
	      }
	    } else {
	      (0, _utilsDeprecationWarning2['default'])('"manual" trigger type', ' the Overlay component');
	    }

	    return (0, _react.cloneElement)(trigger, props);
	  },

	  handleDelayedShow: function handleDelayedShow() {
	    var _this2 = this;

	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

	    if (!delay) {
	      this.show();
	      return;
	    }

	    this._hoverDelay = setTimeout(function () {
	      _this2._hoverDelay = null;
	      _this2.show();
	    }, delay);
	  },

	  handleDelayedHide: function handleDelayedHide() {
	    var _this3 = this;

	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }

	    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

	    if (!delay) {
	      this.hide();
	      return;
	    }

	    this._hoverDelay = setTimeout(function () {
	      _this3._hoverDelay = null;
	      _this3.hide();
	    }, delay);
	  },

	  // deprecated Methods
	  calcOverlayPosition: function calcOverlayPosition() {
	    var overlay = this.props.overlay;

	    (0, _utilsDeprecationWarning2['default'])('OverlayTrigger.calcOverlayPosition()', 'utils/overlayPositionUtils');

	    return _utilsOverlayPositionUtils2['default'].calcOverlayPosition(overlay.props.placement || this.props.placement, _react2['default'].findDOMNode(overlay), _react2['default'].findDOMNode(this), _react2['default'].findDOMNode(overlay.props.container || this.props.container), overlay.props.containerPadding || this.props.containerPadding);
	  },

	  getPosition: function getPosition() {
	    (0, _utilsDeprecationWarning2['default'])('OverlayTrigger.getPosition()', 'utils/overlayPositionUtils');

	    var overlay = this.props.overlay;

	    return _utilsOverlayPositionUtils2['default'].getPosition(_react2['default'].findDOMNode(this), _react2['default'].findDOMNode(overlay.props.container || this.props.container));
	  }

	});

	/**
	 * Creates a new OverlayTrigger class that forwards the relevant context
	 *
	 * This static method should only be called at the module level, instead of in
	 * e.g. a render() method, because it's expensive to create new classes.
	 *
	 * For example, you would want to have:
	 *
	 * > export default OverlayTrigger.withContext({
	 * >   myContextKey: React.PropTypes.object
	 * > });
	 *
	 * and import this when needed.
	 */
	OverlayTrigger.withContext = (0, _utilsCreateContextWrapper2['default'])(OverlayTrigger, 'overlay');

	exports['default'] = OverlayTrigger;
	module.exports = exports['default'];

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	exports['default'] = createContextWrapper;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	/**
	 * Creates new trigger class that injects context into overlay.
	 */

	function createContextWrapper(Trigger, propName) {
	  return function (contextTypes) {
	    var ContextWrapper = (function (_React$Component) {
	      function ContextWrapper() {
	        _classCallCheck(this, ContextWrapper);

	        if (_React$Component != null) {
	          _React$Component.apply(this, arguments);
	        }
	      }

	      _inherits(ContextWrapper, _React$Component);

	      _createClass(ContextWrapper, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	          return this.props.context;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          // Strip injected props from below.
	          var _props = this.props;
	          var wrapped = _props.wrapped;
	          var context = _props.context;

	          var props = _objectWithoutProperties(_props, ['wrapped', 'context']);

	          return _react2['default'].cloneElement(wrapped, props);
	        }
	      }]);

	      return ContextWrapper;
	    })(_react2['default'].Component);

	    ContextWrapper.childContextTypes = contextTypes;

	    var TriggerWithContext = (function () {
	      function TriggerWithContext() {
	        _classCallCheck(this, TriggerWithContext);
	      }

	      _createClass(TriggerWithContext, [{
	        key: 'render',
	        value: function render() {
	          var props = _extends({}, this.props);
	          props[propName] = this.getWrappedOverlay();

	          return _react2['default'].createElement(Trigger, props, this.props.children);
	        }
	      }, {
	        key: 'getWrappedOverlay',
	        value: function getWrappedOverlay() {
	          return _react2['default'].createElement(ContextWrapper, {
	            context: this.context,
	            wrapped: this.props[propName]
	          });
	        }
	      }]);

	      return TriggerWithContext;
	    })();

	    TriggerWithContext.contextTypes = contextTypes;

	    return TriggerWithContext;
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable object-shorthand, react/prop-types */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Portal = __webpack_require__(300);

	var _Portal2 = _interopRequireDefault(_Portal);

	var _Position = __webpack_require__(312);

	var _Position2 = _interopRequireDefault(_Position);

	var _RootCloseWrapper = __webpack_require__(314);

	var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

	var Overlay = (function (_React$Component) {
	  function Overlay(props, context) {
	    _classCallCheck(this, Overlay);

	    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).call(this, props, context);
	  }

	  _inherits(Overlay, _React$Component);

	  _createClass(Overlay, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var container = _props.container;
	      var containerPadding = _props.containerPadding;
	      var target = _props.target;
	      var placement = _props.placement;
	      var rootClose = _props.rootClose;

	      var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'rootClose']);

	      var positionedChild = _react2['default'].createElement(_Position2['default'], { container: container, containerPadding: containerPadding, target: target, placement: placement }, this.props.children);

	      if (rootClose) {
	        positionedChild = _react2['default'].createElement(_RootCloseWrapper2['default'], { onRootClose: this.props.onHide }, positionedChild);
	      }

	      return _react2['default'].createElement(_Portal2['default'], { container: container, rootClose: rootClose, onRootClose: this.props.onHide }, props.show && positionedChild);
	    }
	  }]);

	  return Overlay;
	})(_react2['default'].Component);

	Overlay.propTypes = _extends({}, _Portal2['default'].propTypes, _Position2['default'].propTypes, {
	  /**
	   * Set the visibility of the Overlay
	   */
	  show: _react2['default'].PropTypes.bool,
	  /**
	   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
	   */
	  rootClose: _react2['default'].PropTypes.bool,
	  /**
	   * A Callback fired by the Overlay when it wishes to be hidden.
	   */
	  onHide: _react2['default'].PropTypes.func
	});

	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsDomUtils = __webpack_require__(297);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	var _utilsOverlayPositionUtils = __webpack_require__(313);

	var _utilsCustomPropTypes = __webpack_require__(295);

	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

	var Position = (function (_React$Component) {
	  function Position(props, context) {
	    _classCallCheck(this, Position);

	    _get(Object.getPrototypeOf(Position.prototype), 'constructor', this).call(this, props, context);
	    this.state = {
	      positionLeft: null,
	      positionTop: null,
	      arrowOffsetLeft: null,
	      arrowOffsetTop: null
	    };
	  }

	  _inherits(Position, _React$Component);

	  _createClass(Position, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._needsFlush = true;
	    }
	  }, {
	    key: 'componentWillRecieveProps',
	    value: function componentWillRecieveProps() {
	      this._needsFlush = true;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._maybeUpdatePosition();
	    }
	  }, {
	    key: 'componentDidUpate',
	    value: function componentDidUpate() {
	      this._maybeUpdatePosition();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var placement = _props.placement;
	      var children = _props.children;

	      var _ref = this.props.target ? this.state : {};

	      var positionLeft = _ref.positionLeft;
	      var positionTop = _ref.positionTop;

	      var arrows = _objectWithoutProperties(_ref, ['positionLeft', 'positionTop']);

	      return (0, _react.cloneElement)(_react2['default'].Children.only(children), _extends({}, arrows, {
	        placement: placement,
	        positionTop: positionTop,
	        positionLeft: positionLeft,
	        style: _extends({}, children.props.style, {
	          left: positionLeft,
	          top: positionTop
	        })
	      }));
	    }
	  }, {
	    key: '_maybeUpdatePosition',
	    value: function _maybeUpdatePosition() {
	      if (this._needsFlush) {
	        this._needsFlush = false;
	        this._updatePosition();
	      }
	    }
	  }, {
	    key: '_updatePosition',
	    value: function _updatePosition() {
	      if (this.props.target == null) {
	        return;
	      }

	      var target = _react2['default'].findDOMNode(this.props.target(this.props));
	      var container = _react2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;

	      this.setState((0, _utilsOverlayPositionUtils.calcOverlayPosition)(this.props.placement, _react2['default'].findDOMNode(this), target, container, this.props.containerPadding));
	    }
	  }]);

	  return Position;
	})(_react2['default'].Component);

	Position.propTypes = {
	  /**
	   * The target DOM node the Component is positioned next too.
	   */
	  target: _react2['default'].PropTypes.func,
	  /**
	   * The "offsetParent" of the Component
	   */
	  container: _utilsCustomPropTypes2['default'].mountable,
	  /**
	   * Distance in pixels the Component should be positioned to the edge of the Container.
	   */
	  containerPadding: _react2['default'].PropTypes.number,
	  /**
	   * The location that the overlay should be positioned to its target.
	   */
	  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	};

	Position.defaultProps = {
	  containerPadding: 0,
	  placement: 'right'
	};

	exports['default'] = Position;
	module.exports = exports['default'];

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _domUtils = __webpack_require__(297);

	var _domUtils2 = _interopRequireDefault(_domUtils);

	var utils = {

	  getContainerDimensions: function getContainerDimensions(containerNode) {
	    var width = undefined,
	        height = undefined,
	        scroll = undefined;

	    if (containerNode.tagName === 'BODY') {
	      width = window.innerWidth;
	      height = window.innerHeight;
	      scroll = _domUtils2['default'].ownerDocument(containerNode).documentElement.scrollTop || containerNode.scrollTop;
	    } else {
	      width = containerNode.offsetWidth;
	      height = containerNode.offsetHeight;
	      scroll = containerNode.scrollTop;
	    }

	    return { width: width, height: height, scroll: scroll };
	  },

	  getPosition: function getPosition(target, container) {
	    var offset = container.tagName === 'BODY' ? _domUtils2['default'].getOffset(target) : _domUtils2['default'].getPosition(target, container);

	    return _extends({}, offset, { // eslint-disable-line object-shorthand
	      height: target.offsetHeight,
	      width: target.offsetWidth
	    });
	  },

	  calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {
	    var childOffset = utils.getPosition(target, container);

	    var overlayHeight = overlayNode.offsetHeight;
	    var overlayWidth = overlayNode.offsetWidth;

	    var positionLeft = undefined,
	        positionTop = undefined,
	        arrowOffsetLeft = undefined,
	        arrowOffsetTop = undefined;

	    if (placement === 'left' || placement === 'right') {
	      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

	      if (placement === 'left') {
	        positionLeft = childOffset.left - overlayWidth;
	      } else {
	        positionLeft = childOffset.left + childOffset.width;
	      }

	      var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

	      positionTop += topDelta;
	      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
	      arrowOffsetLeft = null;
	    } else if (placement === 'top' || placement === 'bottom') {
	      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

	      if (placement === 'top') {
	        positionTop = childOffset.top - overlayHeight;
	      } else {
	        positionTop = childOffset.top + childOffset.height;
	      }

	      var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
	      positionLeft += leftDelta;
	      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
	      arrowOffsetTop = null;
	    } else {
	      throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
	    }

	    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
	  }
	};

	function getTopDelta(top, overlayHeight, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerScroll = containerDimensions.scroll;
	  var containerHeight = containerDimensions.height;

	  var topEdgeOffset = top - padding - containerScroll;
	  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

	  if (topEdgeOffset < 0) {
	    return -topEdgeOffset;
	  } else if (bottomEdgeOffset > containerHeight) {
	    return containerHeight - bottomEdgeOffset;
	  } else {
	    return 0;
	  }
	}

	function getLeftDelta(left, overlayWidth, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerWidth = containerDimensions.width;

	  var leftEdgeOffset = left - padding;
	  var rightEdgeOffset = left + padding + overlayWidth;

	  if (leftEdgeOffset < 0) {
	    return -leftEdgeOffset;
	  } else if (rightEdgeOffset > containerWidth) {
	    return containerWidth - rightEdgeOffset;
	  } else {
	    return 0;
	  }
	}
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsDomUtils = __webpack_require__(297);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	var _utilsEventListener = __webpack_require__(298);

	var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

	// TODO: Merge this logic with dropdown logic once #526 is done.

	var RootCloseWrapper = (function (_React$Component) {
	  function RootCloseWrapper(props) {
	    _classCallCheck(this, RootCloseWrapper);

	    _get(Object.getPrototypeOf(RootCloseWrapper.prototype), 'constructor', this).call(this, props);

	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
	  }

	  _inherits(RootCloseWrapper, _React$Component);

	  _createClass(RootCloseWrapper, [{
	    key: 'bindRootCloseHandlers',
	    value: function bindRootCloseHandlers() {
	      var doc = _utilsDomUtils2['default'].ownerDocument(this);

	      this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      // If the click originated from within this component, don't do anything.
	      // e.srcElement is required for IE8 as e.target is undefined
	      var target = e.target || e.srcElement;
	      if (_utilsDomUtils2['default'].contains(_react2['default'].findDOMNode(this), target)) {
	        return;
	      }

	      this.props.onRootClose();
	    }
	  }, {
	    key: 'handleDocumentKeyUp',
	    value: function handleDocumentKeyUp(e) {
	      if (e.keyCode === 27) {
	        this.props.onRootClose();
	      }
	    }
	  }, {
	    key: 'unbindRootCloseHandlers',
	    value: function unbindRootCloseHandlers() {
	      if (this._onDocumentClickListener) {
	        this._onDocumentClickListener.remove();
	      }

	      if (this._onDocumentKeyupListener) {
	        this._onDocumentKeyupListener.remove();
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.bindRootCloseHandlers();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindRootCloseHandlers();
	    }
	  }]);

	  return RootCloseWrapper;
	})(_react2['default'].Component);

	exports['default'] = RootCloseWrapper;

	RootCloseWrapper.propTypes = {
	  onRootClose: _react2['default'].PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ }

});