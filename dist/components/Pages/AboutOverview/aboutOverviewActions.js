'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var AboutOverviewActions = function AboutOverviewActions() {
    _classCallCheck(this, AboutOverviewActions);

    this.generateActions('save', 'saveCurrent');
};

exports['default'] = _altInstance2['default'].createActions(AboutOverviewActions);
module.exports = exports['default'];