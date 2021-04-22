webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Helmet.js":
/*!******************************!*\
  !*** ./components/Helmet.js ***!
  \******************************/
/*! exports provided: Head, Meta, Title, Description, EmbedImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmbedImage\", function() { return EmbedImage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/components/Helmet.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar Head = next_head__WEBPACK_IMPORTED_MODULE_3___default.a;\n/**\n * Use these components to ensure rendered elements are unique\n * per name/property within the document head.\n *\n * Make sure not to nest them components within <Head>. This is\n * due to a limitation of next/head being unable to parse components\n * nested within fragments.\n */\n// must use one of {name, property}\n\nvar Meta = function Meta(_ref) {\n  var name = _ref.name,\n      property = _ref.property,\n      props = Object(_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"name\", \"property\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", _objectSpread({\n      name: name,\n      property: property\n    }, props), name !== null && name !== void 0 ? name : property, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n_c = Meta;\nvar Title = function Title(_ref2) {\n  var text = _ref2.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:title\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:title\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c2 = Title;\nvar Description = function Description(_ref3) {\n  var text = _ref3.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:description\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:description\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c3 = Description;\nvar EmbedImage = function EmbedImage(_ref4) {\n  var src = _ref4.src;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:image\",\n      content: src\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:image\",\n      content: src\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c4 = EmbedImage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Meta\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Description\");\n$RefreshReg$(_c4, \"EmbedImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWxtZXQuanM/MmU1YSJdLCJuYW1lcyI6WyJIZWFkIiwiTmV4dEhlYWQiLCJNZXRhIiwibmFtZSIsInByb3BlcnR5IiwicHJvcHMiLCJUaXRsZSIsInRleHQiLCJEZXNjcmlwdGlvbiIsIkVtYmVkSW1hZ2UiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsSUFBSSxHQUFHQyxnREFBYjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLFFBQVQsUUFBU0EsUUFBVDtBQUFBLE1BQXNCQyxLQUF0Qjs7QUFBQSxzQkFDbEIscUVBQUMsSUFBRDtBQUFBLDJCQUNFO0FBRUUsVUFBSSxFQUFFRixJQUZSO0FBR0UsY0FBUSxFQUFFQztBQUhaLE9BSU1DLEtBSk4sR0FDT0YsSUFEUCxhQUNPQSxJQURQLGNBQ09BLElBRFAsR0FDZUMsUUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQWI7S0FBTUYsSTtBQVdOLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsc0JBQ25CO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLElBQUQ7QUFBTSxjQUFRLEVBQUMsVUFBZjtBQUEwQixhQUFPLEVBQUVBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixhQUFPLEVBQUVBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURtQjtBQUFBLENBQWQ7TUFBTUQsSztBQVVOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0QsSUFBSCxTQUFHQSxJQUFIO0FBQUEsc0JBQ3pCO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFNLGNBQVEsRUFBQyxnQkFBZjtBQUFnQyxhQUFPLEVBQUVBO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUMscUJBQVg7QUFBaUMsYUFBTyxFQUFFQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEeUI7QUFBQSxDQUFwQjtNQUFNQyxXO0FBT04sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxzQkFDeEI7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQU0sVUFBSSxFQUFDLGVBQVg7QUFBMkIsYUFBTyxFQUFFQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEd0I7QUFBQSxDQUFuQjtNQUFNRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWxtZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgY29uc3QgSGVhZCA9IE5leHRIZWFkXG5cbi8qKlxuICogVXNlIHRoZXNlIGNvbXBvbmVudHMgdG8gZW5zdXJlIHJlbmRlcmVkIGVsZW1lbnRzIGFyZSB1bmlxdWVcbiAqIHBlciBuYW1lL3Byb3BlcnR5IHdpdGhpbiB0aGUgZG9jdW1lbnQgaGVhZC5cbiAqXG4gKiBNYWtlIHN1cmUgbm90IHRvIG5lc3QgdGhlbSBjb21wb25lbnRzIHdpdGhpbiA8SGVhZD4uIFRoaXMgaXNcbiAqIGR1ZSB0byBhIGxpbWl0YXRpb24gb2YgbmV4dC9oZWFkIGJlaW5nIHVuYWJsZSB0byBwYXJzZSBjb21wb25lbnRzXG4gKiBuZXN0ZWQgd2l0aGluIGZyYWdtZW50cy5cbiAqL1xuXG4vLyBtdXN0IHVzZSBvbmUgb2Yge25hbWUsIHByb3BlcnR5fVxuZXhwb3J0IGNvbnN0IE1ldGEgPSAoeyBuYW1lLCBwcm9wZXJ0eSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YVxuICAgICAga2V5PXtuYW1lID8/IHByb3BlcnR5fVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0hlYWQ+XG4pXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9ICh7IHRleHQgfSkgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0ZXh0fTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxNZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0ZXh0fSAvPlxuICAgIDxNZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGV4dH0gLz5cbiAgPC8+XG4pXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9ICh7IHRleHQgfSkgPT4gKFxuICA8PlxuICAgIDxNZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0ZXh0fSAvPlxuICAgIDxNZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dGV4dH0gLz5cbiAgPC8+XG4pXG5cbmV4cG9ydCBjb25zdCBFbWJlZEltYWdlID0gKHsgc3JjIH0pID0+IChcbiAgPD5cbiAgICA8TWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17c3JjfSAvPlxuICAgIDxNZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17c3JjfSAvPlxuICA8Lz5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Helmet.js\n");

/***/ })

})