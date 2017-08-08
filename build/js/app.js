/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePage = function () {
    function BasePage() {
        _classCallCheck(this, BasePage);
    }

    _createClass(BasePage, [{
        key: "stringToTemplate",
        value: function stringToTemplate(template) {
            // return eval("`" + template + "`");
        }
    }]);

    return BasePage;
}();

exports.default = BasePage;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _about = __webpack_require__(5);

var _about2 = _interopRequireDefault(_about);

var _settings = __webpack_require__(6);

var _settings2 = _interopRequireDefault(_settings);

var _option = __webpack_require__(7);

var _option2 = _interopRequireDefault(_option);

var _option3 = __webpack_require__(8);

var _option4 = _interopRequireDefault(_option3);

var _option5 = __webpack_require__(9);

var _option6 = _interopRequireDefault(_option5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: '/', component: _about2.default }, { path: '/about', component: _about2.default }, { path: '/settings', component: _settings2.default }, { path: '/option1', component: _option2.default }, { path: '/option2', component: _option4.default }, { path: '/option3', component: _option6.default }];

exports.default = routes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(3);

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__(1);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default({
    element: 'main',
    routes: _routes2.default
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = __webpack_require__(4);

var _header2 = _interopRequireDefault(_header);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(options) {
        var _this = this;

        _classCallCheck(this, App);

        this.element = options.element;
        this.routes = options.routes;
        this.render();

        window.onhashchange = function (e) {
            _this.render();
        };
        /**
         * Click listener event
         */
        document.addEventListener('click', function (e) {
            var onClick = e.target.getAttribute('mclick');
            if (onClick) {
                var functionReplace = onClick.replace('()', '').replace('}', '').replace('{', '');
                if (typeof this.instance[functionReplace] !== 'undefined' && typeof this.instance[functionReplace] === 'function') {
                    this.instance[functionReplace](e);
                }
            }
        }.bind(this));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var endpoint = window.location.hash.replace('#', '') == '' ? '/' : window.location.hash.replace('#', '');
            this.routes.forEach(function (item, index) {
                if (item.path === endpoint) _this2.renderView(item.component);
            });
        }
    }, {
        key: 'renderView',
        value: function renderView(component) {
            var html = '';
            var header = new _header2.default();
            this.instance = new component();
            html += header.render();
            html += this.instance.render();

            document.body.innerHTML = _app2.default;
            document.getElementById(this.element).innerHTML = html;

            if (header['onViewLoaded']) header.onViewLoaded();

            if (this.instance['onViewLoaded']) this.instance.onViewLoaded();
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

var _routes = __webpack_require__(1);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_BasePage) {
    _inherits(Header, _BasePage);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.routes = _routes2.default;
        return _this;
    }

    _createClass(Header, [{
        key: 'onViewLoaded',
        value: function onViewLoaded() {
            this.menuItems = document.getElementsByClassName('menu-item');

            // SET MENU ACTIVE
            var actualEndpoint = '/' + window.location.hash;

            Array.prototype.forEach.call(this.menuItems, function (element) {
                if (actualEndpoint === element.childNodes[1].getAttribute('href')) element.classList.add('active');

                if (actualEndpoint == '/') if (element.childNodes[1].getAttribute('href') == '/#/about') element.classList.add('active');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return '<header>\n    <div class="card">\n        <div class="card-body">\n            <div class="text-right">\n                <button class="btn btn-logout btn-rounded">\n                    LOG OUT\n                </button>\n            </div>\n\n            <div class="text-center container-btn-upload visible-md">\n                <button class="btn btn-inverse">\n                    <i class="ion-ios-camera"></i> <span>Upload Cover Image</span>\n                </button>\n            </div>\n            \n                <div class="profile-photo center-xs">\n                    <img src="/src/assets/img/profile_image.jpg" width="200">\n                </div>\n\n                <div class="profile-info">\n                     <h3>Jessica Parker</h3>\n\n                     <span><i class="ion-ios-location-outline"></i> New Port Beach</span>\n                     <span><i class="ion-ios-telephone-outline"></i> (949)325-68594</span>\n                </div>\n\n                <div class="profile-stars">\n                    <i class="ion-android-star star-icon"></i>\n                    <i class="ion-android-star star-icon"></i>\n                    <i class="ion-android-star star-icon"></i>\n                    <i class="ion-android-star star-icon"></i>\n                    <i class="ion-android-star-outline star-icon"></i>\n                  <span>6 Reviews</span>\n                </div>\n            \n                <div class="profile-followers visible-xs">\n                     <i class="ion-ios-plus"></i>\n                <span>15 Folowers</span>\n           </div>\n        </div>\n\n        <div class="card-footer">\n            <ul class="menu">\n                <li class="menu-item">\n                    <a href="/#/about">ABOUT</a>\n                </li>\n\n                <li class="menu-item">\n                    <a href="/#/settings">SETTINGS</a>\n                </li>\n\n                <li class="menu-item">\n                    <a href="/#/option1">OPTION 1</a>\n                </li>\n\n                <li class="menu-item">\n                    <a href="/#/option2">OPTION 2</a>\n                </li>\n                <!--<li class="menu-item">-->\n                    <!--<a href="/#/option3">OPTION 3</a>-->\n                <!--</li>-->\n            </ul>\n            \n            \n            <div class="profile-followers visible-md">\n                <i class="ion-ios-plus"></i>\n                <span>15 Folowers</span>\n            </div>\n        </div>\n    </div>\n</header>\n';
        }
    }]);

    return Header;
}(_basepage2.default);

exports.default = Header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_BasePage) {
    _inherits(About, _BasePage);

    function About() {
        _classCallCheck(this, About);

        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

        _this.pageName = 'About';
        return _this;
    }

    _createClass(About, [{
        key: 'onViewLoaded',
        value: function onViewLoaded() {
            var buttons = document.getElementsByClassName('form-tooltip');
            var self = this;
            Array.prototype.forEach.call(buttons, function (element) {
                element.addEventListener('click', function (e) {
                    self.showTooltip(element);
                });
            });
        }
    }, {
        key: 'showForm',
        value: function showForm(e) {
            this.formMobile = document.getElementById('form-mobile');
            this.btnShowFormMobile = document.getElementById('btnShowFormMobile');
            this.formDesktop = document.getElementById('form-desktop');
            this.formActions = document.getElementsByClassName('form-actions');

            this.formDesktop.style.display = 'none';
            this.formMobile.removeAttribute('style');
            this.btnShowFormMobile.style.display = 'none';

            Array.prototype.forEach.call(this.formActions, function (element) {
                element.removeAttribute('style');
            });
        }
    }, {
        key: 'hideForm',
        value: function hideForm(e) {
            this.formMobile.style.display = 'none';
            Array.prototype.forEach.call(this.formActions, function (element) {
                element.style.display = 'none';
            });
            this.formDesktop.removeAttribute('style');
            this.btnShowFormMobile.removeAttribute('style');
        }
    }, {
        key: 'showTooltip',
        value: function showTooltip(element) {
            var self = this;
            var title = element.getAttribute('data-title');
            var html = '<div class="box">';
            html += '<div class="form-group" style="margin: 0">';
            html += '<div class="arrow"></div>';
            html += '<input type="text" id="tooltip-input" required="required">';
            html += '<label class="control-label" for="input">' + title + '</label><i class="bar"></i>';
            html += '<button class="btn btn-logout btn-blue btn-rounded btn-close-tooltip">Save</button>';
            html += '<button class="btn btn-logout btn-rounded btn-close-tooltip">Cancel</button>';
            html += '</div>';
            html += '</div>';

            element.insertAdjacentHTML('afterend', html);

            document.getElementById('tooltip-input').focus();

            var buttonsCloseTooltip = document.getElementsByClassName('btn-close-tooltip');
            Array.prototype.forEach.call(buttonsCloseTooltip, function (element) {
                element.addEventListener('click', function (e) {
                    self.closeTooltip(element);
                });
            });
        }
    }, {
        key: 'closeTooltip',
        value: function closeTooltip(element) {
            var div = element.parentNode.parentNode;
            div.parentNode.removeChild(div);
        }
    }, {
        key: 'render',
        value: function render() {
            return '\n                <div class="page">\n                    <div class="card">\n                        <div class="card-content">\n                            <div class="card-header">\n                                <h3 class="display-inline-block">' + this.pageName + '</h3>\n                                 <div class="pull-right container-actions">\n                                    <button id="btnShowFormMobile" class="btn btn-edit visible-xs" mclick="{showForm()}"><i mclick="{showForm()}" class="ion-edit"></i></button>\n                                    <button class="btn btn-edit form-actions" mclick="{hideForm()}" style="display:none">CANCEL</button>\n                                    <button class="btn btn-edit form-actions" mclick="{hideForm()}" style="display:none">SAVE</button>\n                                 </div>   \n                            </div>\n                            \n                            <div class="form-content" id="form-desktop">\n                                <p>\n                                    <span><b>Jessica Parker</b></span>\n                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Name"><i class="ion-edit"></i></button>\n                                </p>\n                                <p>\n                                    <span><i class="ion-android-globe"></i> www.seller.com</span>\n                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Web Site"><i class="ion-edit"></i></button>\n                                </p>\n                                <p>\n                                    <span><i class="ion-ios-telephone-outline"></i> (949)325-68594</span>\n                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Phone Number"><i class="ion-edit"></i></button>\n                                </p>\n                                <p>\n                                    <span><i class="ion-ios-home-outline"></i> New port beach, CA</span>\n                                    <button class="btn btn-edit form-tooltip visible-md" data-title="CITY, STATE & ZIP"><i class="ion-edit"></i></button>\n                                </p>\n                            </div>\n                            \n                            <div class="form-mobile visible-xs" id="form-mobile" style="display: none">\n                               <div class="form-group">\n                                     <input type="text" required="required">\n                                     <label class="control-label" for="input">FIRST NAME</label><i class="bar"></i>\n                               </div>\n                               \n                               <div class="form-group">\n                                     <input type="text" required="required">\n                                     <label class="control-label" for="input">LAST NAME</label><i class="bar"></i>\n                               </div>\n                               \n                                <div class="form-group">\n                                     <input type="text" required="required">\n                                     <label class="control-label" for="input">WEB SITE</label><i class="bar"></i>\n                               </div>\n                               \n                                <div class="form-group">\n                                     <input type="text" required="required">\n                                     <label class="control-label" for="input">PHONE NUMBER</label><i class="bar"></i>\n                                </div>\n                                \n                                 <div class="form-group">\n                                     <input type="text" required="required">\n                                     <label class="control-label" for="input">CITY, STATE & ZIP</label><i class="bar"></i>\n                                </div>\n                            </div>  \n                        </div>\n                    </div>\n                </div>';
        }
    }]);

    return About;
}(_basepage2.default);

exports.default = About;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_BasePage) {
    _inherits(Settings, _BasePage);

    function Settings() {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

        _this.pageName = 'Settings';
        return _this;
    }

    _createClass(Settings, [{
        key: 'settingsButton',
        value: function settingsButton(e) {
            alert('botao de settings');
        }
    }, {
        key: 'render',
        value: function render() {
            return '<div class="card">\n                <div class="card-content">\n                   <div class="card-header">\n                     <h3>' + this.pageName + '</h3>\n                   </div>\n\n                 Settings content\n                </div>\n            </div>';
        }
    }]);

    return Settings;
}(_basepage2.default);

exports.default = Settings;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option1 = function (_BasePage) {
    _inherits(Option1, _BasePage);

    function Option1() {
        _classCallCheck(this, Option1);

        var _this = _possibleConstructorReturn(this, (Option1.__proto__ || Object.getPrototypeOf(Option1)).call(this));

        _this.pageName = 'Option 1';
        _this.content = 'Hello World option 1';
        return _this;
    }

    _createClass(Option1, [{
        key: 'render',
        value: function render() {
            return '\n            <div class="card">\n                 <div class="card-content">\n                      <div class="card-header">\n                        <h3>' + this.pageName + '</h3>\n                      </div>\n             ' + this.content + '\n                 </div>\n            </div>\n       ';
        }
    }]);

    return Option1;
}(_basepage2.default);

exports.default = Option1;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option2 = function (_BasePage) {
    _inherits(Option2, _BasePage);

    function Option2() {
        _classCallCheck(this, Option2);

        var _this = _possibleConstructorReturn(this, (Option2.__proto__ || Object.getPrototypeOf(Option2)).call(this));

        _this.pageName = 'Option 2';
        _this.content = 'Hello World option 2';
        return _this;
    }

    _createClass(Option2, [{
        key: 'render',
        value: function render() {
            return '\n            <div class="card">\n                 <div class="card-content">\n                      <div class="card-header">\n                        <h3>' + this.pageName + '</h3>\n                      </div>\n             ' + this.content + '\n                 </div>\n            </div>\n       ';
        }
    }]);

    return Option2;
}(_basepage2.default);

exports.default = Option2;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basepage = __webpack_require__(0);

var _basepage2 = _interopRequireDefault(_basepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option3 = function (_BasePage) {
    _inherits(Option3, _BasePage);

    function Option3() {
        _classCallCheck(this, Option3);

        var _this = _possibleConstructorReturn(this, (Option3.__proto__ || Object.getPrototypeOf(Option3)).call(this));

        _this.pageName = 'Option 3';
        _this.content = 'Hello World option 3';
        return _this;
    }

    _createClass(Option3, [{
        key: 'render',
        value: function render() {
            return '\n            <div class="card">\n                 <div class="card-content">\n                      <div class="card-header">\n                        <h3>' + this.pageName + '</h3>\n                      </div>\n                         ' + this.content + '\n                 </div>\n            </div>\n       ';
        }
    }]);

    return Option3;
}(_basepage2.default);

exports.default = Option3;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"main\">\n\n    </div>\n</div>\n";

/***/ })
/******/ ]);