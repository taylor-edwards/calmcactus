webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Helmet.js":
/*!******************************!*\
  !*** ./components/Helmet.js ***!
  \******************************/
/*! exports provided: Head, Meta, Title, Description, EmbedImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmbedImage\", function() { return EmbedImage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/components/Helmet.js\",\n    _this = undefined;\n\n\nvar Head = next_head__WEBPACK_IMPORTED_MODULE_1___default.a;\n/**\n * Use these components to ensure rendered elements are unique\n * per name/property within the document head.\n *\n * Make sure not to nest them components within <Head>.\n */\n// must use one of {name, property}\n\nvar Meta = function Meta(_ref) {\n  var content = _ref.content,\n      name = _ref.name,\n      property = _ref.property;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      property: property,\n      name: name,\n      content: content\n    }, name !== null && name !== void 0 ? name : property, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, _this);\n};\n_c = Meta;\nvar Title = function Title(_ref2) {\n  var text = _ref2.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Head, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:title\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:title\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c2 = Title;\nvar Description = function Description(_ref3) {\n  var text = _ref3.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:description\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:description\",\n      content: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c3 = Description;\nvar EmbedImage = function EmbedImage(_ref4) {\n  var src = _ref4.src;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      property: \"og:image\",\n      content: src\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Meta, {\n      name: \"twitter:image\",\n      content: src\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n_c4 = EmbedImage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Meta\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Description\");\n$RefreshReg$(_c4, \"EmbedImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWxtZXQuanM/MmU1YSJdLCJuYW1lcyI6WyJIZWFkIiwiTmV4dEhlYWQiLCJNZXRhIiwiY29udGVudCIsIm5hbWUiLCJwcm9wZXJ0eSIsIlRpdGxlIiwidGV4dCIsIkRlc2NyaXB0aW9uIiwiRW1iZWRJbWFnZSIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsSUFBSSxHQUFHQyxnREFBYjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNPLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsSUFBWixRQUFZQSxJQUFaO0FBQUEsTUFBa0JDLFFBQWxCLFFBQWtCQSxRQUFsQjtBQUFBLHNCQUNsQixxRUFBQyxJQUFEO0FBQUEsMkJBQ0U7QUFFRSxjQUFRLEVBQUVBLFFBRlo7QUFHRSxVQUFJLEVBQUVELElBSFI7QUFJRSxhQUFPLEVBQUVEO0FBSlgsT0FDT0MsSUFEUCxhQUNPQSxJQURQLGNBQ09BLElBRFAsR0FDZUMsUUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQWI7S0FBTUgsSTtBQVdOLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsc0JBQ25CO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLElBQUQ7QUFBTSxjQUFRLEVBQUMsVUFBZjtBQUEwQixhQUFPLEVBQUVBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixhQUFPLEVBQUVBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURtQjtBQUFBLENBQWQ7TUFBTUQsSztBQVVOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0QsSUFBSCxTQUFHQSxJQUFIO0FBQUEsc0JBQ3pCO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFNLGNBQVEsRUFBQyxnQkFBZjtBQUFnQyxhQUFPLEVBQUVBO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUMscUJBQVg7QUFBaUMsYUFBTyxFQUFFQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEeUI7QUFBQSxDQUFwQjtNQUFNQyxXO0FBT04sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxzQkFDeEI7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQU0sVUFBSSxFQUFDLGVBQVg7QUFBMkIsYUFBTyxFQUFFQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFEd0I7QUFBQSxDQUFuQjtNQUFNRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWxtZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgY29uc3QgSGVhZCA9IE5leHRIZWFkXG5cbi8qKlxuICogVXNlIHRoZXNlIGNvbXBvbmVudHMgdG8gZW5zdXJlIHJlbmRlcmVkIGVsZW1lbnRzIGFyZSB1bmlxdWVcbiAqIHBlciBuYW1lL3Byb3BlcnR5IHdpdGhpbiB0aGUgZG9jdW1lbnQgaGVhZC5cbiAqXG4gKiBNYWtlIHN1cmUgbm90IHRvIG5lc3QgdGhlbSBjb21wb25lbnRzIHdpdGhpbiA8SGVhZD4uXG4gKi9cblxuLy8gbXVzdCB1c2Ugb25lIG9mIHtuYW1lLCBwcm9wZXJ0eX1cbmV4cG9ydCBjb25zdCBNZXRhID0gKHsgY29udGVudCwgbmFtZSwgcHJvcGVydHkgfSkgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YVxuICAgICAga2V5PXtuYW1lID8/IHByb3BlcnR5fVxuICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgLz5cbiAgPC9IZWFkPlxuKVxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSAoeyB0ZXh0IH0pID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGV4dH08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8TWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGV4dH0gLz5cbiAgICA8TWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RleHR9IC8+XG4gIDwvPlxuKVxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSAoeyB0ZXh0IH0pID0+IChcbiAgPD5cbiAgICA8TWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17dGV4dH0gLz5cbiAgICA8TWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RleHR9IC8+XG4gIDwvPlxuKVxuXG5leHBvcnQgY29uc3QgRW1iZWRJbWFnZSA9ICh7IHNyYyB9KSA9PiAoXG4gIDw+XG4gICAgPE1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NyY30gLz5cbiAgICA8TWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3NyY30gLz5cbiAgPC8+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Helmet.js\n");

/***/ })

})