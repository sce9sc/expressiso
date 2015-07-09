'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var _aboutActions = require('./aboutActions');

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