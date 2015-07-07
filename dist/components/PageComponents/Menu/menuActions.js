'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var MenuActions = function MenuActions() {
    _classCallCheck(this, MenuActions);

    this.generateActions('toggleMenuActive');
};

exports['default'] = _altInstance2['default'].createActions(MenuActions);
module.exports = exports['default'];