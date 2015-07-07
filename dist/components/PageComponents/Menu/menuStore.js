'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _altInstance = require('../../altInstance');

var _altInstance2 = _interopRequireDefault(_altInstance);

var _MenuActions = require('./MenuActions');

var _MenuActions2 = _interopRequireDefault(_MenuActions);

var MenuStore = (function () {
    function MenuStore() {
        _classCallCheck(this, MenuStore);

        this.bindListeners({
            updateMenuActive: _MenuActions2['default'].toggleMenuActive
        });

        this.menu = {
            active: 'about',
            menuBtns: [{
                type: 'TreeView',
                name: 'Stavros',
                className: 'fa-table',
                links: ['about', 'dashboard']
            }, {
                type: 'MenuBtn',
                name: 'Table',
                className: 'fa-th',
                link: 'table'
            }, {
                type: 'MenuBtn',
                name: 'Charts',
                className: 'fa-th',
                link: 'charts'
            }, {
                type: 'MenuBtn',
                name: 'Modal',
                className: 'fa-th',
                link: 'modal'
            }]
        };
    }

    _createClass(MenuStore, [{
        key: 'updateMenuActive',
        value: function updateMenuActive(link) {

            console.log('updateMenuActive');
            console.log(this.menu.active);
            console.log(link);
            //console.log(this.menu.menuActive);
            this.menu.active = link;
        }
    }]);

    return MenuStore;
})();

exports['default'] = _altInstance2['default'].createStore(MenuStore, 'MenuStore');
module.exports = exports['default'];