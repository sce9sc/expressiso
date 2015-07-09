'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var _actionsDashboardActions = require('./actions/dashboardActions');

var _actionsDashboardActions2 = _interopRequireDefault(_actionsDashboardActions);

var DashboardStore = (function () {
    function DashboardStore() {
        _classCallCheck(this, DashboardStore);

        this.bindListeners({
            save: _actionsDashboardActions2['default'].save,
            saveCurrent: _actionsDashboardActions2['default'].saveCurrent
        });
        this.dashboard = {};
    }

    _createClass(DashboardStore, [{
        key: 'save',
        value: function save(tab) {
            this.dashboard = {};
        }
    }, {
        key: 'saveCurrent',
        value: function saveCurrent(tab) {}
    }]);

    return DashboardStore;
})();

exports['default'] = _altInstance2['default'].createStore(DashboardStore, 'DashboardStore');
module.exports = exports['default'];