'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var _aboutOverviewActions = require('./aboutOverviewActions');

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