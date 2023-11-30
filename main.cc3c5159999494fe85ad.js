/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#map {\r\n\theight: 100vh;\r\n\tborder: 1px solid #ccc;\r\n}\r\n\r\n.sidebar {\r\n\theight: 100%;\r\n\tbackground: black;\r\n}\r\n.sidebar_2{\r\n\tbackground: black;\r\n}\r\n\r\n.modal {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\tz-index: 10000;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.display_wrapper{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.modal_content{\r\n\tz-index: 20000;\r\n\tposition: relative;\r\n\twidth: 600px;\r\n\theight: 400px;\r\n\tbackground: black;\r\n\tborder-radius: 16px;\r\n\tbox-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n}\r\n\r\n.input_wrapper {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: 40px;\r\n\tmargin-bottom: 10px;\r\n\twidth: 500px;\r\n\tcolor: white\r\n}\r\n\r\n.inputText{\r\n\tfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n\tfont-size: 18px;\r\n\twidth: 280px;\r\n\tcolor: white;\r\n}\r\n\r\n.input{\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n\toutline: none;\r\n\tborder-bottom: 1px solid gray;\r\n\tfont-size: 16px;\r\n\tcolor: white;\r\n}\r\n\r\n.color_reduct{\r\n\tborder: none;\r\n\tbackground: none;\r\n\toutline: none;\r\n}\r\n\r\n.submit_button{\r\n\tmargin-top: 40px;\r\n\twidth: 200px;\r\n\theight: 40px;\r\n\tbackground: black;\r\n\tborder: none;\r\n\tborder-radius: 18px;\r\n\tcolor: white;\r\n\tfont-size: 18px;\r\n\tcursor: pointer;\r\n\tborder: 1px solid white;\r\n\r\n\t&:hover {\r\n\t\tbackground: rgba(37, 37, 37, 0.5);\r\n\t}\r\n}\r\n\r\n.close{\r\n\tposition: absolute;\r\n\tfont-size: 30px;\r\n\ttop: 20px;\r\n\tright: 30px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.marker-item {\r\n\theight: 60px;\r\n\tmargin: 0 10px 20px 10px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 10px 20px;\r\n\tgap: 70px;\r\n\tborder: 1px solid white;\r\n\tborder-radius: 16px;\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n}\r\n\r\n.first{\r\n\r\n}\r\n\r\n.second{\r\n\twidth: 160px;\r\n}\r\n\r\n.third{\r\n\tbackground: black;\r\n\tborder: none;\r\n\theight: 30px;\r\n\twidth: 120px;\r\n\tborder-radius: 16px;\r\n\tcolor: white;\r\n\tborder: 1px solid white;\r\n\r\n\t&:hover {\r\n\t\tbackground: rgba(37, 37, 37, 0.5);\r\n\t}\r\n}\r\n\r\n.wrapper_items{\r\n\tpadding-top: 16px;\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\talign-items: end;\r\n\tfont-size: 16px;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n}\r\n\r\n.item_wrapper{\r\n\twidth: 100px;\r\n\tcolor: white;\r\n\t\r\n}\r\n.wrapper2{\r\n\twidth: 140px;\r\n\toverflow: hidden;\r\n}\r\n \r\n.div_wrapper{\r\n\tdisplay: flex;\r\n\tposition: absolute;\r\n\tflex-direction: column;\r\n\tgap: 12px;\r\n\tright: 4px;\r\n\t\r\n}\r\n\r\n.choose_wrapper{\r\n\tdisplay: flex;\r\n}\r\n\r\n.filter{\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 30px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.filter_item{\r\n\tfont-family:Georgia, 'Times New Roman', Times, serif;\r\n\tborder: 1px solid white;\r\n\tborder-radius: 16px;\r\n\tcursor: pointer;\r\n\tbackground: black;\r\n\twidth: 100px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tcolor: white;\r\n\tletter-spacing: 1.5px;\r\n\r\n\t&:hover {\r\n\t\tbackground: rgba(37, 37, 37, 0.5);\r\n\t}\r\n}\r\n\r\n.close {\r\n\tcolor: white;\r\n\tfill: white;\r\n\tbackground-color: white;\r\n\tborder-radius: 50%;\r\n\theight: 30px;\r\n\twidth: 30px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lo-wb/./styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lo-wb/./styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lo-wb/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n\r\n\r\n// Переменные\r\nlet type;\r\nlet name;\r\nlet description;\r\nlet color;\r\nlet store = [];\r\nlet map;\r\nlet marker;\r\nlet markers = [];\r\nlet eventIcon;\r\n\r\n// Переменные цветов маркера\r\nlet blueMarker = L.ExtraMarkers.icon({\r\n\ticon: 'fa-number',\r\n\tnumber: '',\r\n\tmarkerColor: 'blue',\r\n\tshape: 'circle',\r\n\tprefix: 'fa'\r\n});\r\n\r\nlet redMarker = L.ExtraMarkers.icon({\r\n\ticon: 'fa-number',\r\n\tnumber: '',\r\n\tmarkerColor: 'red',\r\n\tshape: 'circle',\r\n\tprefix: 'fa'\r\n});\r\n\r\nlet greenMarker = L.ExtraMarkers.icon({\r\n\ticon: 'fa-number',\r\n\tnumber: '',\r\n\tmarkerColor: 'green',\r\n\tshape: 'circle',\r\n\tprefix: 'fa'\r\n});\r\n\r\n\r\nfunction getPosition() {\r\n\tif (navigator.geolocation) {\r\n\t\tnavigator.geolocation.getCurrentPosition(loadMap, function () {\r\n\t\t\talert('Невозможно получить ваше местоположение');\r\n\t\t});\r\n\t}\r\n}\r\n\r\nfunction loadMap(position) {\r\n\tconst { latitude } = position.coords;\r\n\tconst { longitude } = position.coords;\r\n\tconsole.log(`https://www.google.com/maps/@${latitude},${longitude}z`);\r\n\r\n\tconst cords = [latitude, longitude];\r\n\tmap = L.map('map').setView(cords, 13);\r\n\r\n\tL.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n\t\tattribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n\t}).addTo(map);\r\n\r\n\tmap.on('click', function (e) {\r\n\t\tmarker = L.marker(e.latlng, { draggable: true });\r\n\t\teventIcon = e;\r\n\t\tdocument.querySelector('.modal_create').style.display = 'flex';\r\n\t});\r\n\r\n\r\n\tdocument.querySelector('.submit_button').addEventListener('click', () => {\r\n\t\ttype = document.querySelector('.input1').value;\r\n\t\tname = document.querySelector('.input2').value;\r\n\t\tdescription = document.querySelector('.input3').value;\r\n\t\tcolor = document.querySelector('.modal_create .color_select').value;\r\n\r\n\t\tlet colorSet2;\r\n\t\tif (color == 'red') colorSet2 = redMarker;\r\n\t\tif (color == 'blue') colorSet2 = blueMarker;\r\n\t\tif (color == 'green') colorSet2 = greenMarker;\r\n\r\n\t\tmarker = L.marker(eventIcon.latlng, { draggable: true, icon: colorSet2 });\r\n\r\n\t\tdocument.querySelector('.modal_create').style.display = 'none';\r\n\t\tdocument.querySelector('.input1').value = '';\r\n\t\tdocument.querySelector('.input2').value = '';\r\n\t\tdocument.querySelector('.input3').value = '';\r\n\r\n\t\tmarker.addTo(map);\r\n\t\tmarkers.push(marker);\r\n\t\tmarker.bindPopup(`<b>${type}</b><br>${name}<br>${description}`).openPopup();\r\n\r\n\t\t// Создаем новый объект без свойства _map\r\n\t\tconst markerData = {\r\n\t\t\tlatlng: marker.getLatLng(),\r\n\t\t\ttype,\r\n\t\t\tname,\r\n\t\t\tdescription,\r\n\t\t\tcolor\r\n\t\t};\r\n\r\n\t\tstore.push(markerData);\r\n\r\n\t\t// Сохраняем массив store в localStorage\r\n\t\tlocalStorage.setItem('markers', JSON.stringify(store));\r\n\t\trenderMarkerList();\r\n\r\n\t});\r\n\r\n\r\n\tdocument.querySelector('.close_create').addEventListener('click', () => {\r\n\t\tdocument.querySelector('.modal_create').style.display = 'none';\r\n\t});\r\n\r\n};\r\n\r\nfunction renderMarkers(data, index) {\r\n\tlet colorSet;\r\n\tif (data.color == 'red') colorSet = redMarker;\r\n\tif (data.color == 'blue') colorSet = blueMarker;\r\n\tif (data.color == 'green') colorSet = greenMarker;\r\n\r\n\tmarker = L.marker(data.latlng, { draggable: true, icon: colorSet })\r\n\t\t.addTo(map)\r\n\t\t.bindPopup(L.popup({\r\n\t\t\tautoClose: false,\r\n\t\t\tcloseOnClick: false,\r\n\t\t}))\r\n\t\t.setPopupContent(`<b>${data.type}</b><br>${data.name}<br>${data.description}`)\r\n\t\t.openPopup();\r\n\r\n\t\tmarker.on('dragend', function (event) {\r\n\t\t\tconst newLatLng = event.target.getLatLng();\r\n\t\t\tconst index = markers.indexOf(marker);\r\n\t\t\tstore[index].latlng = newLatLng;\r\n\t\t\tlocalStorage.setItem('markers', JSON.stringify(store));\r\n\t\t });\r\n\t\t \r\n\r\n\r\n\tmarkers.push(marker);\r\n}\r\n\r\n\r\n\r\nfunction editMarker(data, index) {\r\n\tdocument.querySelector('.modal_reduct').style.display = 'flex';\r\n\r\n\t// Заполняем поля модального окна данными маркера\r\n\tdocument.querySelector('.input1_reduct').value = data.type;\r\n\tdocument.querySelector('.input2_reduct').value = data.name;\r\n\tdocument.querySelector('.input3_reduct').value = data.description;\r\n\r\n\tdocument.querySelector('.modal_reduct .color_select2').value = data.color;\r\n\r\n\tlet colorSet3;\r\n\tif (data.color == 'red') colorSet3 = redMarker;\r\n\tif (data.color == 'blue') colorSet3 = blueMarker;\r\n\tif (data.color == 'green') colorSet3 = greenMarker;\r\n\r\n\tconst submitButton = document.querySelector('.sb_reduct');\r\n\tsubmitButton.addEventListener('click', function () {\r\n\t\t// Получаем новые значения из полей модального окна\r\n\t\tconst newType = document.querySelector('.input1_reduct').value;\r\n\t\tconst newName = document.querySelector('.input2_reduct').value;\r\n\t\tconst newDescription = document.querySelector('.input3_reduct').value;\r\n\t\tconst newColor = document.querySelector('.modal_reduct .color_select2').value;\r\n\r\n\t\t// Обновляем данные маркера в массиве store\r\n\t\tstore[index].type = newType;\r\n\t\tstore[index].name = newName;\r\n\t\tstore[index].description = newDescription;\r\n\t\tstore[index].color = newColor;\r\n\t\tlocalStorage.setItem('markers', JSON.stringify(store));\r\n\r\n\t\t// Обновляем содержимое всплывающей подсказки маркера\r\n\r\n\t\tmarker = L.marker(data.latlng, { draggable: true, icon: colorSet3 });\r\n\r\n\t\tmarker.setPopupContent(`<b>${newType}</b><br>${newName}<br>${newDescription}`);\r\n\r\n\t\t// Закрываем модальное окно\r\n\t\tdocument.querySelector('.modal_reduct').style.display = 'none';\r\n\t\trenderMarkerList();\r\n\t\twindow.location.reload();\r\n\t});\r\n\r\n\tdocument.querySelector('.close_reduct').addEventListener('click', () => {\r\n\t\tdocument.querySelector('.modal_reduct').style.display = 'none';\r\n\t\tdocument.querySelector('.input1_reduct').value = '';\r\n\t\tdocument.querySelector('.input2_reduct').value = '';\r\n\t\tdocument.querySelector('.input3_reduct').value = '';\r\n\t});\r\n}\r\n\r\nfunction deleteMarker(index) {\r\n\tlet markkers = JSON.parse(localStorage.getItem('markers'));\r\n\tconst markerItem = markkers[index]\r\n\tif (markerItem) {\r\n\t\tmarkkers.splice(index, 1);\r\n\t\tlocalStorage.setItem('markers', JSON.stringify(markkers));\r\n\t\tstore.splice(index, 1);\r\n\t\tmarkers[index].remove();\r\n\t\tmarkers.splice(index, 1);\r\n\t\trenderMarkerList();\r\n\t}\r\n}\r\n\r\n\r\nfunction renderMarkerList() {\r\n\tconst sidebar = document.querySelector('.sidebar');\r\n\tsidebar.innerHTML = ''; // Очищаем содержимое sidebar\r\n\r\n\tstore.forEach((markerData, index) => {\r\n\t\tconst listItem = document.createElement('div');\r\n\t\tlistItem.classList.add('marker-item');\r\n\t\tlistItem.innerHTML =\r\n\t\t\t`<div class='wrapper_items'>\r\n\r\n\t\t\t<div class='item_wrapper'>\r\n\t\t\t\t<p>Название:</p>\r\n\t\t\t\t<div class='first'>${markerData.name}</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class='item_wrapper wrapper2'>\r\n\t\t\t\t<p>Описание:</p>\r\n\t\t\t\t<div class='second'>${markerData.description}</div>\r\n\t\t\t</div>\r\n\t\t</div>`;\r\n\t\tlistItem.addEventListener('click', () => {\r\n\t\t\tlet indexx = store.indexOf(markerData);\r\n\t\t\tcenterMapOnMarker(indexx);\r\n\t\t})\r\n\r\n\t\tconst editButton = document.createElement('button');\r\n\t\teditButton.textContent = 'Редактировать';\r\n\t\teditButton.classList = 'third';\r\n\t\teditButton.addEventListener('click', function () {\r\n\t\t\teditMarker(markerData, index);\r\n\t\t});\r\n\r\n\t\tconst deleteButton = document.createElement('button');\r\n\t\tdeleteButton.textContent = 'Удалить';\r\n\t\tdeleteButton.classList = 'third';\r\n\t\tdeleteButton.addEventListener('click', function (event) {\r\n\t\t\tevent.stopPropagation();\r\n\t\t\tdeleteMarker(index);\r\n\t\t});\r\n\r\n\r\n\t\tconst divdiv = document.createElement('div');\r\n\t\tdivdiv.textContent = '';\r\n\t\tdivdiv.classList = 'div_wrapper';\r\n\r\n\r\n\t\tdivdiv.appendChild(editButton);\r\n\t\tdivdiv.appendChild(deleteButton);\r\n\t\tlistItem.appendChild(divdiv);\r\n\t\tsidebar.appendChild(listItem);\r\n\r\n\t});\r\n\r\n\tfunction centerMapOnMarker(index) {\r\n\t\tconst marker = store[index];\r\n\t\tmap.setView(marker.latlng, 13, {\r\n\t\t\tanimate: true,\r\n\t\t\tpan: {\r\n\t\t\t\tduration: 1,\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\r\n\r\n\r\n\r\ngetPosition();\r\n\r\nwindow.addEventListener('load', function () {\r\n\tconst savedMarkers = localStorage.getItem('markers');\r\n\tif (savedMarkers) {\r\n\t\tlet marker_first;\r\n\t\tstore = JSON.parse(savedMarkers);\r\n\t\tstore.forEach((mark, index) => {\r\n\t\t\trenderMarkers(mark, index);\r\n\t\t\tmarker_first = mark;\r\n\t\t});\r\n\t\tmap.setView(marker_first.latlng, 13, {\r\n\t\t\tanimate: true,\r\n\t\t\tpan: {\r\n\t\t\t\tduration: 1,\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\trenderMarkerList();\r\n\t// Сортировка\r\n\tthis.document.querySelector('.filter_item').addEventListener('click', () => {\r\n\t\tconst sidebar = this.document.querySelector('.sidebar');\r\n\t\tconst nodes = Array.from(sidebar.childNodes);\r\n\t\tconst descriptionArr = nodes.map((node) => node.childNodes[0].childNodes[3].childNodes[3].textContent);\r\n\t\t\r\n\t\t// Переключение порядка сортировки\r\n\t\tlet sortOrder = 1;\r\n\t\tif (sidebar.getAttribute('data-sort-order') === '1') {\r\n\t\t  sortOrder = -1;\r\n\t\t  sidebar.setAttribute('data-sort-order', '-1');\r\n\t\t} else {\r\n\t\t  sidebar.setAttribute('data-sort-order', '1');\r\n\t\t}\r\n\t\t\r\n\t\t// Сортировка элементов\r\n\t\tdescriptionArr.sort((a, b) => a.localeCompare(b) * sortOrder);\r\n\t\t\r\n\t\t// Удалить существующие элементы из родительского контейнера\r\n\t\twhile (sidebar.firstChild) {\r\n\t\t  sidebar.removeChild(sidebar.firstChild);\r\n\t\t}\r\n\t\t\r\n\t\t// Добавить элементы в правильном порядке\r\n\t\tdescriptionArr.forEach((description) => {\r\n\t\t  const node = nodes.find((node) => node.childNodes[0].childNodes[3].childNodes[3].textContent === description);\r\n\t\t  sidebar.appendChild(node);\r\n\t\t});\r\n\t });\r\n\t \r\n\t \r\n\t \r\n});\r\n\n\n//# sourceURL=webpack://lo-wb/./src/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;