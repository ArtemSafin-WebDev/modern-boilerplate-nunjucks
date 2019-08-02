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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/detect-hover/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/detect-hover/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar detectHover = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {\n      detectHover.hover = window.matchMedia('(hover: hover)').matches;\n      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;\n      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;\n      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;\n    }\n  }\n};\n\ndetectHover.update();\nexports.default = detectHover;\n\n//# sourceURL=webpack:///./node_modules/detect-hover/lib/index.js?");

/***/ }),

/***/ "./node_modules/detect-it/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-it/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _detectHover = __webpack_require__(/*! detect-hover */ \"./node_modules/detect-hover/lib/index.js\");\n\nvar _detectHover2 = _interopRequireDefault(_detectHover);\n\nvar _detectPointer = __webpack_require__(/*! detect-pointer */ \"./node_modules/detect-pointer/lib/index.js\");\n\nvar _detectPointer2 = _interopRequireDefault(_detectPointer);\n\nvar _detectTouchEvents = __webpack_require__(/*! detect-touch-events */ \"./node_modules/detect-touch-events/lib/index.js\");\n\nvar _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);\n\nvar _detectPassiveEvents = __webpack_require__(/*! detect-passive-events */ \"./node_modules/detect-passive-events/lib/index.js\");\n\nvar _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * detectIt object structure\n * const detectIt = {\n *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',\n *   passiveEvents: boolean,\n *   hasTouch: boolean,\n *   hasMouse: boolean,\n *   maxTouchPoints: number,\n *   primaryHover: 'hover' / 'none',\n *   primaryPointer: 'fine' / 'coarse' / 'none',\n *   state: {\n *     detectHover,\n *     detectPointer,\n *     detectTouchEvents,\n *     detectPassiveEvents,\n *   },\n *   update() {...},\n * }\n */\n\nfunction determineDeviceType(hasTouch, anyHover, anyFine, state) {\n  // A hybrid device is one that both hasTouch and any input device can hover\n  // or has a fine pointer.\n  if (hasTouch && (anyHover || anyFine)) return 'hybrid';\n\n  // workaround for browsers that have the touch events api,\n  // and have implemented Level 4 media queries but not the\n  // hover and pointer media queries, so the tests are all false (notable Firefox)\n  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly\n  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid\n  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {\n    return key !== 'update';\n  }).every(function (key) {\n    return state.detectHover[key] === false;\n  }) && Object.keys(state.detectPointer).filter(function (key) {\n    return key !== 'update';\n  }).every(function (key) {\n    return state.detectPointer[key] === false;\n  })) {\n    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {\n      return 'touchOnly';\n    }\n    return 'hybrid';\n  }\n\n  // In almost all cases a device that doesn’t support touch will have a mouse,\n  // but there may be rare exceptions. Note that it doesn’t work to do additional tests\n  // based on hover and pointer media queries as older browsers don’t support these.\n  // Essentially, 'mouseOnly' is the default.\n  return hasTouch ? 'touchOnly' : 'mouseOnly';\n}\n\nvar detectIt = {\n  state: {\n    detectHover: _detectHover2.default,\n    detectPointer: _detectPointer2.default,\n    detectTouchEvents: _detectTouchEvents2.default,\n    detectPassiveEvents: _detectPassiveEvents2.default\n  },\n  update: function update() {\n    detectIt.state.detectHover.update();\n    detectIt.state.detectPointer.update();\n    detectIt.state.detectTouchEvents.update();\n    detectIt.state.detectPassiveEvents.update();\n    detectIt.updateOnlyOwnProperties();\n  },\n  updateOnlyOwnProperties: function updateOnlyOwnProperties() {\n    if (typeof window !== 'undefined') {\n      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;\n\n      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;\n\n      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);\n\n      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';\n\n      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||\n      // deviceType is hybrid:\n      detectIt.state.detectPointer.fine && 'mouse' || detectIt.state.detectPointer.coarse && 'touch' ||\n      // if there's no support for hover media queries but detectIt determined it's\n      // a hybrid  device, then assume it's a mouse first device\n      'mouse';\n\n      // issue with Windows Chrome on hybrid devices starting in version 59 where\n      // media queries represent a touch only device, so if the browser is an\n      // affected Windows Chrome version and hasTouch,\n      // then assume it's a hybrid with primaryInput mouse\n      // note that version 62 of Chrome fixes this issue\n      // see https://github.com/rafrex/detect-it/issues/8\n      var inVersionRange = function inVersionRange(version) {\n        return version >= 59 && version < 62;\n      };\n      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && inVersionRange(parseInt(/Chrome\\/([0-9.]+)/.exec(navigator.userAgent)[1], 10));\n\n      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {\n        detectIt.deviceType = 'hybrid';\n        detectIt.hasMouse = true;\n        detectIt.primaryInput = 'mouse';\n      }\n    }\n  }\n};\n\ndetectIt.updateOnlyOwnProperties();\nexports.default = detectIt;\n\n//# sourceURL=webpack:///./node_modules/detect-it/lib/index.js?");

/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md\nvar detectPassiveEvents = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {\n      var passive = false;\n      var options = Object.defineProperty({}, 'passive', {\n        get: function get() {\n          passive = true;\n        }\n      });\n      // note: have to set and remove a no-op listener instead of null\n      // (which was used previously), becasue Edge v15 throws an error\n      // when providing a null callback.\n      // https://github.com/rafrex/detect-passive-events/pull/3\n      var noop = function noop() {};\n      window.addEventListener('testPassiveEventSupport', noop, options);\n      window.removeEventListener('testPassiveEventSupport', noop, options);\n      detectPassiveEvents.hasSupport = passive;\n    }\n  }\n};\n\ndetectPassiveEvents.update();\nexports.default = detectPassiveEvents;\n\n//# sourceURL=webpack:///./node_modules/detect-passive-events/lib/index.js?");

/***/ }),

/***/ "./node_modules/detect-pointer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/detect-pointer/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar detectPointer = {\n  update: function update() {\n    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {\n      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;\n      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;\n      detectPointer.none = window.matchMedia('(pointer: none)').matches;\n      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;\n      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;\n      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;\n    }\n  }\n};\n\ndetectPointer.update();\nexports.default = detectPointer;\n\n//# sourceURL=webpack:///./node_modules/detect-pointer/lib/index.js?");

/***/ }),

/***/ "./node_modules/detect-touch-events/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/detect-touch-events/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar detectTouchEvents = {\n  update: function update() {\n    if (typeof window !== 'undefined') {\n      detectTouchEvents.hasSupport = 'ontouchstart' in window;\n      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);\n    }\n  }\n};\n\ndetectTouchEvents.update();\nexports.default = detectTouchEvents;\n\n//# sourceURL=webpack:///./node_modules/detect-touch-events/lib/index.js?");

/***/ }),

/***/ "./node_modules/object-fit-images/dist/ofi.common-js.js":
/*!**************************************************************!*\
  !*** ./node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! npm.im/object-fit-images 3.2.4 */\n\n\nvar OFI = 'bfred-it:object-fit-images';\nvar propRegex = /(object-fit|object-position)\\s*:\\s*([-.\\w\\s%]+)/g;\nvar testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();\nvar supportsObjectFit = 'object-fit' in testImg.style;\nvar supportsObjectPosition = 'object-position' in testImg.style;\nvar supportsOFI = 'background-size' in testImg.style;\nvar supportsCurrentSrc = typeof testImg.currentSrc === 'string';\nvar nativeGetAttribute = testImg.getAttribute;\nvar nativeSetAttribute = testImg.setAttribute;\nvar autoModeEnabled = false;\n\nfunction createPlaceholder(w, h) {\n\treturn (\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='\" + w + \"' height='\" + h + \"'%3E%3C/svg%3E\");\n}\n\nfunction polyfillCurrentSrc(el) {\n\tif (el.srcset && !supportsCurrentSrc && window.picturefill) {\n\t\tvar pf = window.picturefill._;\n\t\t// parse srcset with picturefill where currentSrc isn't available\n\t\tif (!el[pf.ns] || !el[pf.ns].evaled) {\n\t\t\t// force synchronous srcset parsing\n\t\t\tpf.fillImg(el, {reselect: true});\n\t\t}\n\n\t\tif (!el[pf.ns].curSrc) {\n\t\t\t// force picturefill to parse srcset\n\t\t\tel[pf.ns].supported = false;\n\t\t\tpf.fillImg(el, {reselect: true});\n\t\t}\n\n\t\t// retrieve parsed currentSrc, if any\n\t\tel.currentSrc = el[pf.ns].curSrc || el.src;\n\t}\n}\n\nfunction getStyle(el) {\n\tvar style = getComputedStyle(el).fontFamily;\n\tvar parsed;\n\tvar props = {};\n\twhile ((parsed = propRegex.exec(style)) !== null) {\n\t\tprops[parsed[1]] = parsed[2];\n\t}\n\treturn props;\n}\n\nfunction setPlaceholder(img, width, height) {\n\t// Default: fill width, no height\n\tvar placeholder = createPlaceholder(width || 1, height || 0);\n\n\t// Only set placeholder if it's different\n\tif (nativeGetAttribute.call(img, 'src') !== placeholder) {\n\t\tnativeSetAttribute.call(img, 'src', placeholder);\n\t}\n}\n\nfunction onImageReady(img, callback) {\n\t// naturalWidth is only available when the image headers are loaded,\n\t// this loop will poll it every 100ms.\n\tif (img.naturalWidth) {\n\t\tcallback(img);\n\t} else {\n\t\tsetTimeout(onImageReady, 100, img, callback);\n\t}\n}\n\nfunction fixOne(el) {\n\tvar style = getStyle(el);\n\tvar ofi = el[OFI];\n\tstyle['object-fit'] = style['object-fit'] || 'fill'; // default value\n\n\t// Avoid running where unnecessary, unless OFI had already done its deed\n\tif (!ofi.img) {\n\t\t// fill is the default behavior so no action is necessary\n\t\tif (style['object-fit'] === 'fill') {\n\t\t\treturn;\n\t\t}\n\n\t\t// Where object-fit is supported and object-position isn't (Safari < 10)\n\t\tif (\n\t\t\t!ofi.skipTest && // unless user wants to apply regardless of browser support\n\t\t\tsupportsObjectFit && // if browser already supports object-fit\n\t\t\t!style['object-position'] // unless object-position is used\n\t\t) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\t// keep a clone in memory while resetting the original to a blank\n\tif (!ofi.img) {\n\t\tofi.img = new Image(el.width, el.height);\n\t\tofi.img.srcset = nativeGetAttribute.call(el, \"data-ofi-srcset\") || el.srcset;\n\t\tofi.img.src = nativeGetAttribute.call(el, \"data-ofi-src\") || el.src;\n\n\t\t// preserve for any future cloneNode calls\n\t\t// https://github.com/bfred-it/object-fit-images/issues/53\n\t\tnativeSetAttribute.call(el, \"data-ofi-src\", el.src);\n\t\tif (el.srcset) {\n\t\t\tnativeSetAttribute.call(el, \"data-ofi-srcset\", el.srcset);\n\t\t}\n\n\t\tsetPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);\n\n\t\t// remove srcset because it overrides src\n\t\tif (el.srcset) {\n\t\t\tel.srcset = '';\n\t\t}\n\t\ttry {\n\t\t\tkeepSrcUsable(el);\n\t\t} catch (err) {\n\t\t\tif (window.console) {\n\t\t\t\tconsole.warn('https://bit.ly/ofi-old-browser');\n\t\t\t}\n\t\t}\n\t}\n\n\tpolyfillCurrentSrc(ofi.img);\n\n\tel.style.backgroundImage = \"url(\\\"\" + ((ofi.img.currentSrc || ofi.img.src).replace(/\"/g, '\\\\\"')) + \"\\\")\";\n\tel.style.backgroundPosition = style['object-position'] || 'center';\n\tel.style.backgroundRepeat = 'no-repeat';\n\tel.style.backgroundOrigin = 'content-box';\n\n\tif (/scale-down/.test(style['object-fit'])) {\n\t\tonImageReady(ofi.img, function () {\n\t\t\tif (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {\n\t\t\t\tel.style.backgroundSize = 'contain';\n\t\t\t} else {\n\t\t\t\tel.style.backgroundSize = 'auto';\n\t\t\t}\n\t\t});\n\t} else {\n\t\tel.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');\n\t}\n\n\tonImageReady(ofi.img, function (img) {\n\t\tsetPlaceholder(el, img.naturalWidth, img.naturalHeight);\n\t});\n}\n\nfunction keepSrcUsable(el) {\n\tvar descriptors = {\n\t\tget: function get(prop) {\n\t\t\treturn el[OFI].img[prop ? prop : 'src'];\n\t\t},\n\t\tset: function set(value, prop) {\n\t\t\tel[OFI].img[prop ? prop : 'src'] = value;\n\t\t\tnativeSetAttribute.call(el, (\"data-ofi-\" + prop), value); // preserve for any future cloneNode\n\t\t\tfixOne(el);\n\t\t\treturn value;\n\t\t}\n\t};\n\tObject.defineProperty(el, 'src', descriptors);\n\tObject.defineProperty(el, 'currentSrc', {\n\t\tget: function () { return descriptors.get('currentSrc'); }\n\t});\n\tObject.defineProperty(el, 'srcset', {\n\t\tget: function () { return descriptors.get('srcset'); },\n\t\tset: function (ss) { return descriptors.set(ss, 'srcset'); }\n\t});\n}\n\nfunction hijackAttributes() {\n\tfunction getOfiImageMaybe(el, name) {\n\t\treturn el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;\n\t}\n\tif (!supportsObjectPosition) {\n\t\tHTMLImageElement.prototype.getAttribute = function (name) {\n\t\t\treturn nativeGetAttribute.call(getOfiImageMaybe(this, name), name);\n\t\t};\n\n\t\tHTMLImageElement.prototype.setAttribute = function (name, value) {\n\t\t\treturn nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));\n\t\t};\n\t}\n}\n\nfunction fix(imgs, opts) {\n\tvar startAutoMode = !autoModeEnabled && !imgs;\n\topts = opts || {};\n\timgs = imgs || 'img';\n\n\tif ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {\n\t\treturn false;\n\t}\n\n\t// use imgs as a selector or just select all images\n\tif (imgs === 'img') {\n\t\timgs = document.getElementsByTagName('img');\n\t} else if (typeof imgs === 'string') {\n\t\timgs = document.querySelectorAll(imgs);\n\t} else if (!('length' in imgs)) {\n\t\timgs = [imgs];\n\t}\n\n\t// apply fix to all\n\tfor (var i = 0; i < imgs.length; i++) {\n\t\timgs[i][OFI] = imgs[i][OFI] || {\n\t\t\tskipTest: opts.skipTest\n\t\t};\n\t\tfixOne(imgs[i]);\n\t}\n\n\tif (startAutoMode) {\n\t\tdocument.body.addEventListener('load', function (e) {\n\t\t\tif (e.target.tagName === 'IMG') {\n\t\t\t\tfix(e.target, {\n\t\t\t\t\tskipTest: opts.skipTest\n\t\t\t\t});\n\t\t\t}\n\t\t}, true);\n\t\tautoModeEnabled = true;\n\t\timgs = 'img'; // reset to a generic selector for watchMQ\n\t}\n\n\t// if requested, watch media queries for object-fit change\n\tif (opts.watchMQ) {\n\t\twindow.addEventListener('resize', fix.bind(null, imgs, {\n\t\t\tskipTest: opts.skipTest\n\t\t}));\n\t}\n}\n\nfix.supportsObjectFit = supportsObjectFit;\nfix.supportsObjectPosition = supportsObjectPosition;\n\nhijackAttributes();\n\nmodule.exports = fix;\n\n\n//# sourceURL=webpack:///./node_modules/object-fit-images/dist/ofi.common-js.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-fit-images */ \"./node_modules/object-fit-images/dist/ofi.common-js.js\");\n/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! detect-it */ \"./node_modules/detect-it/lib/index.js\");\n/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_1__);\n// import \"core-js/stable\";\n// import \"regenerator-runtime/runtime\";\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Полифилл .contains для IE 11\n  if (!SVGElement.prototype.contains) {\n    SVGElement.prototype.contains = HTMLDivElement.prototype.contains;\n  } // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)\n\n\n  object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()(); // Определение тач устройств\n\n  if (detect_it__WEBPACK_IMPORTED_MODULE_1___default.a.hasTouch) {\n    document.body.classList.remove('no-touch');\n    document.body.classList.add('touch');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });