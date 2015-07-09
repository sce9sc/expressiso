'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var _tabsActions = require('./tabsActions');

var _tabsActions2 = _interopRequireDefault(_tabsActions);

var TabsStore = (function () {
    function TabsStore() {
        _classCallCheck(this, TabsStore);

        this.bindListeners({
            addTabs: _tabsActions2['default'].addTabs,
            removeTabs: _tabsActions2['default'].removeTabs,
            setTabs: _tabsActions2['default'].setTabs,
            setActive: _tabsActions2['default'].setActive
        });
        this.tabs = [];
    }

    _createClass(TabsStore, [{
        key: 'setActive',
        value: function setActive(tab) {
            for (var n = 0; n < this.tabs.length; n++) {
                this.tabs[n].active = false;
                if (this.tabs[n].name == tab.name) {
                    this.tabs[n].active = true;
                }
            }
        }
    }, {
        key: 'setTabs',
        value: function setTabs(tab) {
            this.tabs = [tab];
        }
    }, {
        key: 'addTabs',
        value: function addTabs(tab) {
            var exists = false;
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].active = false;
                if (this.tabs[i].name == tab.name) {
                    this.tabs[i].active = true;
                    exists = true;
                }
            }

            if (exists) {
                return;
            }

            this.tabs.push({ name: tab.name, link: tab.link, params: tab.params, active: true });
        }
    }, {
        key: 'removeTabs',
        value: function removeTabs(tab) {
            for (var n = 0; n < this.tabs.length; n++) {
                if (this.tabs[n].name == tab.name) {
                    var removedObject = this.tabs.splice(n, 1);
                    removedObject = null;
                    break;
                }
            }
            this.tabs[this.tabs.length - 1].active = true;
        }
    }], [{
        key: 'getTabIndex',
        value: function getTabIndex(name) {
            var state = this.getState();
            for (var n = 0; n < state.tabs.length; n++) {
                if (state.tabs[n].name == name) {
                    return n;
                }
            }
        }
    }, {
        key: 'getPreviousTab',
        value: function getPreviousTab() {
            var state = this.getState();
            var currentIndex = null;
            for (var n = 0; n < state.tabs.length; n++) {
                if (state.tabs[n].active == true) {
                    currentIndex = n;
                }
            }
            if (currentIndex == 0) {
                return { tab: {}, index: currentIndex - 1 };
            }
            return { prevTab: state.tabs[currentIndex - 1],
                currentTab: state.tabs[currentIndex],
                index: currentIndex - 1 };
        }
    }, {
        key: 'getTabs',
        value: function getTabs() {
            var state = this.getState();
            return state;
        }
    }]);

    return TabsStore;
})();

exports['default'] = _altInstance2['default'].createStore(TabsStore, 'TabsStore');
module.exports = exports['default'];