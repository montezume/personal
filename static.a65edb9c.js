(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://www.malcolmlaing.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var breakpoints = {
  small: 550,
  medium: 834,
  large: 1000
};

var breakpoint = function breakpoint(size, css) {
  return "\n  @media (min-width: " + breakpoints[size] + "px) {\n    " + css + "\n  }\n";
};

exports.breakpoints = breakpoints;
exports.default = breakpoint;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var color = {
  white: '#fff',
  black: '#010101',
  red: 'red',
  blue: '#add1ec'
};

exports.default = color;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var font = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  family: "'Dosis', sans-serif",
  weights: ['light', 'regular', 'semiBold', 'bold', 'extraBold']
};

exports.default = font;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(27);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Home).default;
  }
});

var _Introduction = __webpack_require__(34);

Object.defineProperty(exports, 'Introduction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Introduction).default;
  }
});

var _Personal = __webpack_require__(46);

Object.defineProperty(exports, 'Personal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Personal).default;
  }
});

var _Technology = __webpack_require__(50);

Object.defineProperty(exports, 'Technology', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Technology).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divider = __webpack_require__(35);

Object.defineProperty(exports, 'Divider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_divider).default;
  }
});

var _h = __webpack_require__(37);

Object.defineProperty(exports, 'H1', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_h).default;
  }
});

var _p = __webpack_require__(39);

Object.defineProperty(exports, 'P', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_p).default;
  }
});

var _section = __webpack_require__(41);

Object.defineProperty(exports, 'Section', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_section).default;
  }
});
Object.defineProperty(exports, 'SectionInner', {
  enumerable: true,
  get: function get() {
    return _section.SectionInner;
  }
});

var _span = __webpack_require__(43);

Object.defineProperty(exports, 'Span', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_span).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subtitle = __webpack_require__(47);

Object.defineProperty(exports, 'Subtitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subtitle).default;
  }
});

var _title = __webpack_require__(48);

Object.defineProperty(exports, 'Title', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_title).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(7);

var _reactHotLoader = __webpack_require__(17);

var _styledComponents = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(18);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _globalStyles = __webpack_require__(51);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _globalStyles2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(19);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(20);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(21);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _reactUniversalComponent = __webpack_require__(23);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/malcolmlaing/dev/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/malcolmlaing/dev/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(24);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(25);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(11);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(28);

var _reactStatic = __webpack_require__(7);

var _layout = __webpack_require__(29);

var _layout2 = _interopRequireDefault(_layout);

var _ = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var intro = _ref.intro,
      personal = _ref.personal,
      home = _ref.home,
      technology = _ref.technology;
  return _react2.default.createElement(
    _layout2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        home.meta.pageTitle
      ),
      _react2.default.createElement('meta', { name: 'description', content: home.meta.pageDescription })
    ),
    _react2.default.createElement(_.Introduction, { intro: intro }),
    _react2.default.createElement(_.Technology, { technology: technology }),
    _react2.default.createElement(_.Personal, { personal: personal })
  );
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _header = __webpack_require__(30);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(32);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes.node
};

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'main',
    null,
    _react2.default.createElement(_header2.default, null),
    children,
    _react2.default.createElement(_footer2.default, null)
  );
};

Layout.propTypes = propTypes;

exports.default = Layout;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(31);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = _styledComponents2.default.nav.withConfig({
  displayName: 'header__StyledHeader'
})(['background-color:', ';height:16px;width:100%;padding:5px 10px;'], _color2.default.blue);

var Square = _styledComponents2.default.span.withConfig({
  displayName: 'header__Square'
})(['position:relative;width:25px;height:25px;display:flex;align-items:center;justify-content:center;&:before{position:absolute;top:0;content:\'\';background-color:white;width:100%;height:100%;border-radius:50%;}&:after{position:absolute;content:\'\';background-color:#add1ec;width:70%;height:85%;border-radius:50%;}']);

var Header = function Header() {
  return _react2.default.createElement(
    StyledHeader,
    null,
    _react2.default.createElement(Square, null)
  );
};

exports.default = Header;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footer = __webpack_require__(33);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledFooter = _styledComponents2.default.footer.withConfig({
  displayName: 'footer__StyledFooter'
})(['display:flex;align-items:center;margin-top:24px;padding-left:16px;width:100%;height:40px;background-color:', ' ', ''], _color2.default.blue, (0, _breakpoint2.default)('medium', '\n    padding-left: 40px;\n  '));

var A = _styledComponents2.default.a.withConfig({
  displayName: 'footer__A'
})(['margin-left:auto;height:16px;width:16px;margin-right:16px;', ''], (0, _breakpoint2.default)('medium', '\n    margin-right: 40px;\n  '));

var GithubLogo = _styledComponents2.default.span.withConfig({
  displayName: 'footer__GithubLogo'
})(['position:relative;display:block;width:100%;height:100%;&:after{content:\'\';position:absolute;top:0;height:100%;width:100%;background-size:contain;background-image:url(\'logos/GitHub-Mark-32px.png\');}']);

var Footer = function Footer() {
  return _react2.default.createElement(
    StyledFooter,
    null,
    '\xA9 Malcolm Laing 2018',
    _react2.default.createElement(
      A,
      { href: 'https://github.com/montezume/personal', target: '_BLANK' },
      _react2.default.createElement(GithubLogo, null)
    )
  );
};

exports.default = Footer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elements = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineCtn = _styledComponents2.default.div.withConfig({
  displayName: 'Introduction__LineCtn'
})(['display:flex;justify-content:center;align-items:center;']);

var Block = _styledComponents2.default.div.withConfig({
  displayName: 'Introduction__Block'
})(['p{margin:12px 0;}']);

var Line = _styledComponents2.default.span.withConfig({
  displayName: 'Introduction__Line'
})(['position:relative;flex:1;margin:8px 24px 0 24px;flex:1;&:after{content:\'\';top:4px;left:0;position:absolute;width:100%;height:2px;background-color:black;}']);

var Introduction = function Introduction(_ref) {
  var intro = _ref.intro;
  return _react2.default.createElement(
    _elements.Section,
    null,
    _react2.default.createElement(
      _elements.SectionInner,
      null,
      _react2.default.createElement(
        _elements.H1,
        null,
        _react2.default.createElement(
          LineCtn,
          null,
          _react2.default.createElement(
            'span',
            null,
            intro.content.header
          ),
          _react2.default.createElement(Line, null)
        )
      ),
      _react2.default.createElement(
        Block,
        null,
        (0, _htmr2.default)(intro.contents)
      )
    )
  );
};

exports.default = Introduction;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divider = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_divider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = _styledComponents2.default.span.withConfig({
  displayName: 'divider__Divider'
})(['display:block;width:200px;max-width:50%;border:1px solid black;margin:12px 0;']);

exports.default = Divider;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _h = __webpack_require__(38);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_h).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledH1 = _styledComponents2.default.h1.withConfig({
  displayName: 'h1__StyledH1'
})(['font-size:40px ', ' ', ''], (0, _breakpoint2.default)('small', '\n    font-size: 40px;\n  '), (0, _breakpoint2.default)('medium', '\n    font-size: 50px;\n  '));

exports.default = StyledH1;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _p = __webpack_require__(40);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_p).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledP = _styledComponents2.default.p.withConfig({
  displayName: 'p__StyledP'
})(['margin-bottom:10px;']);

exports.default = StyledP;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _section = __webpack_require__(42);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_section).default;
  }
});
Object.defineProperty(exports, 'SectionInner', {
  enumerable: true,
  get: function get() {
    return _section.StyledSectionInner;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSectionInner = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSection = _styledComponents2.default.section.withConfig({
  displayName: 'section__StyledSection'
})(['display:flex;flex-direction:column;align-items:center;justify-content:center;']);

var StyledSectionInner = exports.StyledSectionInner = _styledComponents2.default.div.withConfig({
  displayName: 'section__StyledSectionInner'
})(['max-width:730px;padding:60px 40px 0 40px;', ''], (0, _breakpoint2.default)('medium', '\n    padding: 100px 30px 60px 30px;\n  '));

exports.default = StyledSection;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _span = __webpack_require__(44);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_span).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(4);

var _types = __webpack_require__(45);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _font = __webpack_require__(5);

var _font2 = _interopRequireDefault(_font);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = _styledComponents2.default.span.withConfig({
  displayName: 'span__Span'
})(['color:', ';font-weight:', ';font-size:', ';', ' ', ''], function (props) {
  return _color2.default[props.color];
}, function (props) {
  return _font2.default[props.weight];
}, function (props) {
  return props.size.small;
}, function (props) {
  return (0, _breakpoint2.default)('small', '\n    font-size: ' + (props.size.medium || props.size.small) + ';\n  ');
}, function (props) {
  return (0, _breakpoint2.default)('large', '\n    font-size: ' + (props.size.large || props.size.medium || props.size.small) + ';\n  ');
});

Span.propTypes = {
  color: _types.colorType,
  weight: _types.fontType,
  size: (0, _propTypes.shape)({
    small: _propTypes.string,
    medium: _propTypes.string,
    large: _propTypes.string
  })
};

Span.defaultProps = {
  color: 'black',
  weight: 'regular',
  size: { small: '16px', large: '20px' }
};

exports.default = Span;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageType = exports.fontType = exports.colorType = undefined;

var _propTypes = __webpack_require__(4);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _font = __webpack_require__(5);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorType = (0, _propTypes.oneOf)(Object.keys(_color2.default));
var fontType = (0, _propTypes.oneOf)(_font2.default.weights);

var imageType = (0, _propTypes.shape)({
  src: _propTypes.string,
  alt: _propTypes.string,
  width: _propTypes.number,
  height: _propTypes.number
});

exports.colorType = colorType;
exports.fontType = fontType;
exports.imageType = imageType;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _elements = __webpack_require__(10);

var _typography = __webpack_require__(12);

var _imageGrid = __webpack_require__(49);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = _styledComponents2.default.div.withConfig({
  displayName: 'Personal__Block'
})(['margin-top:24px;p{margin:12px 0;}']);

var Img = _styledComponents2.default.img.withConfig({
  displayName: 'Personal__Img'
})(['max-width:100%;display:block;']);

var Sect = _styledComponents2.default.section.withConfig({
  displayName: 'Personal__Sect'
})(['display:flex;max-width:1200px;margin:0 auto;width:100%;flex-direction:column;padding:40px;', ''], (0, _breakpoint2.default)('medium', '\n    flex-direction: row;\n\n  '));

var Left = _styledComponents2.default.div.withConfig({
  displayName: 'Personal__Left'
})(['', ' ', ''], (0, _breakpoint2.default)('medium', '\n    width: 400px;\n  '), (0, _breakpoint2.default)('large', '\n    width: 500px;\n  '));

var ImageSection = _styledComponents2.default.div.withConfig({
  displayName: 'Personal__ImageSection'
})(['', ''], (0, _breakpoint2.default)('medium', '\n  flex: 1;\n'));

var Personal = function Personal(_ref) {
  var personal = _ref.personal;
  return _react2.default.createElement(
    Sect,
    null,
    _react2.default.createElement(
      Left,
      null,
      _react2.default.createElement(
        _typography.Subtitle,
        null,
        personal.content.subtitle
      ),
      _react2.default.createElement(
        _typography.Title,
        null,
        personal.content.header
      ),
      _react2.default.createElement(_elements.Divider, null),
      _react2.default.createElement(
        _elements.Span,
        { size: { small: '20px', medium: '30px' } },
        personal.content.description
      ),
      _react2.default.createElement(
        Block,
        null,
        (0, _htmr2.default)(personal.contents)
      )
    ),
    _react2.default.createElement(
      ImageSection,
      null,
      _react2.default.createElement(
        _imageGrid.Container,
        null,
        _react2.default.createElement(
          _imageGrid.Grid,
          null,
          personal.content.images.map(function (image, i) {
            return _react2.default.createElement(
              _imageGrid.Cell,
              { key: i },
              _react2.default.createElement(Img, {
                src: image.src,
                alt: image.description,
                size: image.size
              })
            );
          })
        )
      )
    )
  );
};

exports.default = Personal;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _font = __webpack_require__(5);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subtitle = _styledComponents2.default.h3.withConfig({
  displayName: 'subtitle__Subtitle'
})(['color:', ';font-weight:', ';font-size:14px;letter-spacing:3px;text-transform:uppercase;margin-bottom:5px;line-height:21px;'], _color2.default.black, _font2.default.bold);

exports.default = Subtitle;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _font = __webpack_require__(5);

var _font2 = _interopRequireDefault(_font);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.h2.withConfig({
  displayName: 'title__Title'
})(['color:', ';font-weight:', ';font-size:52px;letter-spacing:2px;text-transform:uppercase;', ''], _color2.default.black, _font2.default.light, (0, _breakpoint2.default)('small', '\n    font-size: 80px;\n  '));

exports.default = Title;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = exports.Container = exports.Grid = undefined;

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = exports.Grid = _styledComponents2.default.div.withConfig({
  displayName: 'image-grid__Grid'
})(['display:flex;flex-wrap:wrap;flex-direction:row;']);

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'image-grid__Container'
})(['margin:0 auto;max-width:1200px;padding:0;']);

var Cell = exports.Cell = _styledComponents2.default.div.withConfig({
  displayName: 'image-grid__Cell'
})(['display:flex;flex-direction:column;margin:0.5rem;width:calc(50% - 1rem);&:nth-child(1n){justify-content:flex-end;margin-bottom:0;}&:nth-child(2n){justify-content:flex-end;}&:nth-child(3n),&:nth-child(4n){justify-content:flex-start;}', ''], (0, _breakpoint2.default)('large', '\n    margin-right: 0;\n    width: calc(50% - 1rem);\n  '));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _htmr = __webpack_require__(9);

var _htmr2 = _interopRequireDefault(_htmr);

var _elements = __webpack_require__(10);

var _typography = __webpack_require__(12);

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Section, SectionInner } from '../../elements'

var Image = _styledComponents2.default.div.withConfig({
  displayName: 'Technology__Image'
})(['background-image:url(\'', '\');background-size:cover;height:450px;', ''], function (props) {
  return props.image;
}, (0, _breakpoint2.default)('medium', '\n    margin-top: 18px;\n  '));

var TechStackList = _styledComponents2.default.div.withConfig({
  displayName: 'Technology__TechStackList'
})(['dt{margin:8px 0;}dd{margin-top:8px;margin-left:0;}']);

var Grid = _styledComponents2.default.section.withConfig({
  displayName: 'Technology__Grid'
})(['display:flex;min-height:450px;padding:10px 40px;margin:6px 0;flex-direction:column;', ''], (0, _breakpoint2.default)('medium', '\n    flex-direction: row-reverse;\n    margin: 20px auto;\n    max-width: 1200px;\n\n    padding: 0;\n    // more stuff\n  '));

var Column = _styledComponents2.default.div.withConfig({
  displayName: 'Technology__Column'
})(['width:100%;', ' ', ''], function (props) {
  return props.left && '\n    ' + (0, _breakpoint2.default)('medium', '\n      padding-left: 40px;\n\n\n    ') + '\n  ';
}, (0, _breakpoint2.default)('medium', '\n    width: 50%;\n\n\n  '));

var Technology = function Technology(_ref) {
  var technology = _ref.technology;
  return _react2.default.createElement(
    Grid,
    null,
    _react2.default.createElement(
      Column,
      { left: true },
      _react2.default.createElement(
        _typography.Title,
        null,
        technology.content.header
      ),
      _react2.default.createElement(
        _typography.Subtitle,
        null,
        technology.content.subtitle
      ),
      _react2.default.createElement(_elements.Divider, null),
      _react2.default.createElement(
        TechStackList,
        null,
        (0, _htmr2.default)(technology.contents)
      )
    ),
    _react2.default.createElement(
      Column,
      null,
      _react2.default.createElement(Image, { image: technology.content.image.src })
    )
  );
};

exports.default = Technology;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _font = __webpack_require__(5);

var _font2 = _interopRequireDefault(_font);

var _color = __webpack_require__(3);

var _color2 = _interopRequireDefault(_color);

var _reset = __webpack_require__(52);

var _reset2 = _interopRequireDefault(_reset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalStyles = '\n  @import url(\'https://fonts.googleapis.com/css?family=Dosis:300,400,600,700,800\');\n\n  ' + _reset2.default + '\n\n  body {\n    color: ' + _color2.default.black + ';\n    font-size: 16px;\n    font-family: ' + _font2.default.family + ';\n    font-weight: ' + _font2.default.regular + ';\n    letter-spacing: 1px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n\n    ' + (0, _breakpoint2.default)('small', '\n      font-size: 20px;\n    ') + '\n  }\n\n\n  a {\n    text-decoration: none;\n  }\n';

exports.default = globalStyles;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reset = "\n  html,\n  body,\n  div,\n  span,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  abbr,\n  code,\n  em,\n  img,\n  small,\n  strong,\n  sub,\n  sup,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section,\n  time,\n  audio,\n  video {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    background: transparent;\n    font-size: 100%;\n    font-weight: inherit;\n    vertical-align: baseline;\n  }\n\n  article,\n  aside,\n  figure,\n  footer,\n  header,\n  nav,\n  section {\n    display: block;\n  }\n\n  html {\n    box-sizing: border-box;\n    overflow-y: scroll;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  img,\n  object {\n    max-width: 100%;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  th {\n    font-weight: bold;\n    vertical-align: bottom;\n  }\n\n  td {\n    font-weight: normal;\n    vertical-align: top;\n  }\n\n  input,\n  textarea,\n  select,\n  button {\n    font-family: inherit;\n  }\n\n  input,\n  select {\n    vertical-align: middle;\n  }\n\n  input[type='radio'] {\n    vertical-align: text-bottom;\n  }\n\n  input[type='checkbox'] {\n    vertical-align: bottom;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  label,\n  input[type='file'] {\n    cursor: pointer;\n  }\n\n  input,\n  select,\n  textarea {\n    border: 0;\n    margin: 0;\n  }\n\n  button,\n  input[type='button'],\n  input[type='submit'] {\n    padding: 0;\n    border: 0;\n    border-radius: 0;\n    margin: 0;\n    background: transparent;\n    cursor: pointer;\n  }\n\n  button::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  ";
// reset everything
exports.default = reset;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a65edb9c.js.map