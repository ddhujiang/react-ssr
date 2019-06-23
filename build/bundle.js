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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/components/Header/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_header_2BUhg{\\r\\n    background: pink;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"header\": \"style_header_2BUhg\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./src/containers/Home/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_home_Oc12L{\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    background: red;\\r\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"home\": \"style_home_Oc12L\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ./components/Header/index.jsx */ \"./src/components/Header/index.jsx\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _index3 = __webpack_require__(/*! ./components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar App = function App(props) {\n\n    return _react2.default.createElement('div', null, _react2.default.createElement(_index2.default, { staticContext: props.staticContext }), (0, _reactRouterConfig.renderRoutes)(props.route.routes));\n};\nApp.loadData = function (store) {\n    return store.dispatch(_index3.actions.getHeaderInfo());\n};\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App.jsx */ \"./src/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _index = __webpack_require__(/*! ./containers/Home/index.jsx */ \"./src/containers/Home/index.jsx\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(/*! ./containers/Login/index.jsx */ \"./src/containers/Login/index.jsx\");\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _index5 = __webpack_require__(/*! ./containers/NotFound/index.jsx */ \"./src/containers/NotFound/index.jsx\");\n\nvar _index6 = _interopRequireDefault(_index5);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\n// export  default (\n//     <div>\n//         <Route path=\"/\" exact component={Home}/>\n//         <Route path=\"/login\" exact component={Login}/>\n//     </div>\n// )\n\nexports.default = [{\n    path: '/',\n    component: _App2.default,\n    loadData: _App2.default.loadData,\n    routes: [{\n        path: '/',\n        component: _index2.default,\n        exact: true, //只有路由精确匹配时才展示\n        loadData: _index2.default.loadData,\n        key: 'home',\n        routes: [{\n            path: '/ttt',\n            component: _index4.default,\n            exact: true,\n            key: 'ttt'\n        }]\n    }, {\n        path: '/login',\n        component: _index4.default,\n        exact: true,\n        key: 'login'\n    }, {\n        component: _index6.default\n    }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.jsx?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar instance = _axios2.default.create({\n    baseURL: '/',\n    //适用于全局传参，如token\n    params: { //传递一个所有接口公用的参数\n        secret: 'abcd'\n    }\n});\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ./store/index */ \"./src/components/Header/store/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ./../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Header = function (_React$Component) {\n    _inherits(Header, _React$Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'render',\n\n        // componentWillMount(){\n        //     // console.log(this.props.staticContext);   //获取context\n        //     if(this.props.staticContext){\n        //         //把css样式传递到context内，用于服务端渲染css\n        //         //利用数组，多级路由下防止css值被覆盖\n        //         this.props.staticContext.css.push(style._getCss());\n        //         // console.log(style._getCss())\n        //     }\n        // }\n        value: function render() {\n            var _props = this.props,\n                login = _props.login,\n                handleLogin = _props.handleLogin,\n                handleLogOut = _props.handleLogOut;\n\n            return _react2.default.createElement('div', { className: _style2.default.header }, _react2.default.createElement(_reactRouterDom.Link, { to: '/' }, 'home'), _react2.default.createElement('br', null), login ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement('div', { onClick: handleLogOut }, \"\\u9000\\u51FA\")) : _react2.default.createElement('div', { onClick: handleLogin }, \"\\u767B\\u5F55\"));\n        }\n    }]);\n\n    return Header;\n}(_react2.default.Component);\n\nvar mapState = function mapState(state) {\n    return {\n        login: state.header.login\n    };\n};\nvar mapDispatch = function mapDispatch(dispatch) {\n    return {\n        handleLogin: function handleLogin() {\n            dispatch(_index.actions.login());\n        },\n        handleLogOut: function handleLogOut() {\n            dispatch(_index.actions.logOut());\n        }\n    };\n};\nexports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _withStyle2.default)(Header, _style2.default));\n\n//# sourceURL=webpack:///./src/components/Header/index.jsx?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHeaderInfo = exports.logOut = exports.login = undefined;\n\nvar _constain = __webpack_require__(/*! ./constain */ \"./src/components/Header/store/constain.js\");\n\nvar changeLogin = function changeLogin(value) {\n    return {\n        type: _constain.CHANGE_LOGIN,\n        value: value\n    };\n};\n//登入\nvar login = exports.login = function login() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/api/longin').then(function (res) {\n            //发送一个请求,拿到数据\n            var isLogin = true;\n            //派发一个action，reducer中会接收到这个action的返回\n            dispatch(changeLogin(isLogin));\n        });\n    };\n};\n//退出\nvar logOut = exports.logOut = function logOut() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/api/longinOut').then(function (res) {\n            //发送一个请求,拿到数据\n            var isLogin = false;\n            //派发一个action，reducer中会接收到这个action的返回\n            dispatch(changeLogin(isLogin));\n        });\n    };\n};\n//获取登入状态\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/api/isLongin').then(function (res) {\n            //发送一个请求,拿到数据\n            var isLogin = false;\n            //派发一个action，reducer中会接收到这个action的返回\n            dispatch(changeLogin(isLogin));\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constain.js":
/*!*************************************************!*\
  !*** ./src/components/Header/store/constain.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEADER/CHANGE_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constain.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj.default = obj;return newObj;\n  }\n}\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i];for (var key in source) {\n            if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n            }\n        }\n    }return target;\n};\n\nvar _constain = __webpack_require__(/*! ./constain */ \"./src/components/Header/store/constain.js\");\n\nvar defaultState = {\n    login: true\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constain.CHANGE_LOGIN:\n            return _extends({}, state, {\n                login: action.value\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/containers/Home/index.jsx":
/*!***************************************!*\
  !*** ./src/containers/Home/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _action = __webpack_require__(/*! ./store/action */ \"./src/containers/Home/store/action.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ./../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Home = function (_React$Component) {\n    _inherits(Home, _React$Component);\n\n    function Home() {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n    }\n\n    _createClass(Home, [{\n        key: 'componentDidMount',\n\n        // componentWillMount(){\n        //     // console.log(this.props.staticContext);   //获取context\n        //     if(this.props.staticContext){\n        //         //把css样式传递到context内，用于服务端渲染css\n        //         this.props.staticContext.css.puhs(style._getCss());\n        //         // console.log(style._getCss())\n        //     }\n        // }\n        value: function componentDidMount() {\n            //这个生命周期函数只会在客户端执行\n            this.props.getHomeList();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement('div', null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement('title', null, \"\\u8FD9\\u662F\\u9996\\u9875\"), _react2.default.createElement('meta', { name: 'description', content: \"\\u8FD9\\u662F\\u9996\\u9875\" })), _react2.default.createElement('div', { onClick: function onClick() {\n                    alert('home');\n                }, className: _style2.default.home }, \"\\u9996\\u9875\"), _react2.default.createElement('div', null, this.props.list.map(function (item, index) {\n                return _react2.default.createElement('div', { key: index }, item);\n            })));\n        }\n    }]);\n\n    return Home;\n}(_react2.default.Component);\n// const Home=(props)=>{\n//     return (\n//         <div>\n//             <Header/>\n//             <div onClick={()=>{alert('jjjjj')}}>\n//                 {props.name}\n//             </div>\n//         </div>\n//     )\n// };\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        list: state.home.newsList\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getHomeList: function getHomeList() {\n            dispatch((0, _action.getHomeList)());\n            console.log('jjjj');\n        }\n    };\n};\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _style2.default));\nExportHome.loadData = function (store) {\n    //负责在服务器渲染之前，把这个路由需要的数据提前加载好\n    return store.dispatch((0, _action.getHomeList)());\n};\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/containers/Home/index.jsx?");

/***/ }),

/***/ "./src/containers/Home/store/action.js":
/*!*********************************************!*\
  !*** ./src/containers/Home/store/action.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHomeList = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _constain = __webpack_require__(/*! ./constain */ \"./src/containers/Home/store/constain.js\");\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\n//redux-thunk 可以在action里面写一些异步的操作\nvar changeList = function changeList(list) {\n    return {\n        type: _constain.CHANGE_LIST,\n        list: list\n    };\n};\n//使用常量的好处就是当变量名写错的时候控制台会报错，方便debug\nvar getHomeList = exports.getHomeList = function getHomeList() {\n    //axiosInstance，是创建store时生成传递过来的，用于区别url地址的前缀，客户端和服务器端的不同\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/api/news.json').then(function (res) {\n            //发送一个请求,拿到数据\n            var list = ['jj', '12'];\n            //派发一个action，reducer中会接收到这个action的返回\n            dispatch(changeList(list));\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/action.js?");

/***/ }),

/***/ "./src/containers/Home/store/constain.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/constain.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE-LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constain.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i];for (var key in source) {\n            if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n            }\n        }\n    }return target;\n};\n\nvar _constain = __webpack_require__(/*! ./constain */ \"./src/containers/Home/store/constain.js\");\n\nvar defaultState = {\n    newsList: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constain.CHANGE_LIST:\n            return _extends({}, state, {\n                newsList: action.list\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/Login/index.jsx":
/*!****************************************!*\
  !*** ./src/containers/Login/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Home = function Home() {\n    return _react2.default.createElement('div', null, _react2.default.createElement('div', { onClick: function onClick() {\n            alert('login');\n        } }, '\\u767B\\u5165'));\n};\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/containers/Login/index.jsx?");

/***/ }),

/***/ "./src/containers/NotFound/index.jsx":
/*!*******************************************!*\
  !*** ./src/containers/NotFound/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar NotFound = function (_React$Component) {\n    _inherits(NotFound, _React$Component);\n\n    function NotFound() {\n        _classCallCheck(this, NotFound);\n\n        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n    }\n\n    _createClass(NotFound, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            console.log(this.props);\n            if (this.props.staticContext) {\n                this.props.staticContext.NOT_FOUND = true;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement('div', null, '404');\n        }\n    }]);\n\n    return NotFound;\n}(_react2.default.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.jsx?");

/***/ }),

/***/ "./src/server/index.jsx":
/*!******************************!*\
  !*** ./src/server/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _utils = __webpack_require__(/*! ./utils.jsx */ \"./src/server/utils.jsx\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _Routes = __webpack_require__(/*! ../Routes.jsx */ \"./src/Routes.jsx\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\n\napp.use(express.static('public')); //请求静态文件时，会去public文件下找\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', { //当请求接口有/api时会代理到http://47.95.113.63服务器\n    proxyReqPathResolver: function proxyReqPathResolver(req) {\n        console.log(req.url);\n        return '/ssr/api' + req.url; //返回http://47.95.113.63后面的路径\n    }\n}));\n\napp.get('*', function (req, res) {\n    var store = (0, _store.getStore)(req);\n    //拿到异步数据，并填充到store中\n    //store里面填充什么数据，我们要根据用户的请求路由做判断\n    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path); //匹配到用户请求的路由\n\n    //让matchRoutes里面所有的组件，对应的loadData方法执行一次\n    var promises = [];\n    matchedRoutes.forEach(function (item) {\n        if (item.route.loadData) {\n            // promises.push(item.route.loadData(store))\n            var promise = new Promise(function (resolve, reject) {\n                //即使promise中有请求错误，也会添加外层正确的promise\n                item.route.loadData(store).then(resolve).catch(resolve);\n            });\n            promises.push(promise);\n        }\n    });\n    Promise.all(promises).then(function () {\n        //所有请求都正确的时候，才会执行then方法，不然会执行catch方法\n        //异步，当promises里数据都请求完毕再执行\n        var context = { css: [] };\n        var html = (0, _utils.render)(req, store, _Routes2.default, context);\n        //context的值为组件内通过this.props.staticContext传递过来的\n        console.log('context', context);\n        if (context.action === 'REPLACE') {\n            //服务器端重定向\n            res.redirect(301, context.url);\n        } else if (context.NOT_FOUND) {\n            res.status(404);\n            res.send(html);\n        } else {\n            res.send(html);\n        }\n        // console.log(store.getState());\n        // res.send(render(req,store,routes))\n    }).catch(function () {\n        res.end('sorry');\n    });\n});\napp.listen(3000, function () {\n    return console.log('Example app listening on port 3000!');\n});\n\n//# sourceURL=webpack:///./src/server/index.jsx?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar createInstance = function createInstance(req) {\n    return _axios2.default.create({\n        baseURL: 'http://47.95.113.63/ssr',\n        //防止cookie丢失\n        params: { //传递一个所有接口公用的参数\n            secret: 'abcd'\n        },\n        headers: {\n            cookie: req.get('cookie') || ''\n        }\n    });\n};\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.jsx":
/*!******************************!*\
  !*** ./src/server/utils.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\n//Provider把store传递给了路由下面的每一个组件\n//StaticRouter拿不到浏览器里面的路由，所以要取请求里面的地址\nvar render = exports.render = function render(req, store, routes, context) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouterDom.StaticRouter, { location: req.path, context: context }, _react2.default.createElement('div', null, (0, _reactRouterConfig.renderRoutes)(routes)))));\n    //服务端的title和description\n    var helmet = _reactHelmet.Helmet.renderStatic();\n    //服务端渲染的css\n    var cssStr = context.css.length ? context.css.join('\\n') : '';\n    return '<html lang=\"en\">\\n        <head>\\n        ' + helmet.title.toString() + '\\n        ' + helmet.meta.toString() + '\\n        <style>' + cssStr + '</style>\\n        </head>\\n        <body>\\n           <div id=\"root\">' + content + '</div>\\n           <script >\\n               window.context={\\n                   state:' + JSON.stringify(store.getState()) + '\\n               }\\n           </script>\\n           <script  src=\"/index.js\"></script>\\n         </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils.jsx?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _index = __webpack_require__(/*! ../containers/Home/store/index */ \"./src/containers/Home/store/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar reducer = (0, _redux.combineReducers)({\n    home: _index.reducer,\n    header: _index2.reducer\n});\n// const reducer=(state={name:'dell'},action)=>{\n//     return state;\n// };\nvar getStore = exports.getStore = function getStore(req) {\n    //每次执行这个函数都会生成一个新的store,这样每个用户拿到的都是一个新的store\n    //服务端serverAxios，thunk.withExtraArgument(serverAxios)会在异步的action中接受\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    var defaultState = window.context.state;\n    //客户端clientAxios\n    return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n// const store=createStore(reducer,applyMiddleware(thunk));\n// export default getStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n    };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\n//这个函数，是生成高阶组件的函数\n//这个函数，返回一个组件\nexports.default = function (DecoratedComponent, style) {\n    //返回的这个组件，叫做高阶组件\n    return function (_React$Component) {\n        _inherits(NewComponent, _React$Component);\n\n        function NewComponent() {\n            _classCallCheck(this, NewComponent);\n\n            return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n        }\n\n        _createClass(NewComponent, [{\n            key: 'componentWillMount',\n            value: function componentWillMount() {\n                if (this.props.staticContext) {\n                    //把css样式传递到context内，用于服务端渲染css\n                    //利用数组，多级路由下防止css值被覆盖\n                    this.props.staticContext.css.push(style._getCss());\n                    // console.log(style._getCss())\n                }\n            }\n        }, {\n            key: 'render',\n            value: function render() {\n                return _react2.default.createElement(DecoratedComponent, this.pros);\n            }\n        }]);\n\n        return NewComponent;\n    }(_react2.default.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });