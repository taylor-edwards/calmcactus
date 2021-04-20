webpackHotUpdate_N_E("pages/shop",{

/***/ "./pages/shop/index.js":
/*!*****************************!*\
  !*** ./pages/shop/index.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var partials_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! partials/Page */ \"./partials/Page/index.js\");\n/* harmony import */ var components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Head */ \"./components/Head.js\");\n/* harmony import */ var components_ProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ProductCard */ \"./components/ProductCard/index.js\");\n/* harmony import */ var styles_shop_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/shop.module.scss */ \"./styles/shop.module.scss\");\n/* harmony import */ var styles_shop_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_shop_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/pages/shop/index.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Shop = function Shop(_ref) {\n  var products = _ref.products;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(partials_Page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    color: \"sweater-black\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(components_Head__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"title\", {\n        children: \"Shop | Calm Cactus\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: styles_shop_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.products,\n      children: products.map(function (_ref2) {\n        var slug = _ref2.slug,\n            product = Object(_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref2, [\"slug\"]);\n\n        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(components_ProductCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread(_objectSpread({}, product), {}, {\n          key: slug,\n          href: \"/shop/\".concat(slug),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 9\n          }\n        }));\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Shop;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\n\nvar _c;\n\n$RefreshReg$(_c, \"Shop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9pbmRleC5qcz9lNDMxIl0sIm5hbWVzIjpbIlNob3AiLCJwcm9kdWN0cyIsInN0eWxlcyIsIm1hcCIsInNsdWciLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxzQkFDWCxxRUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxlQUFaO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDRCxRQUF2QjtBQUFBLGdCQUNHQSxRQUFRLENBQUNFLEdBQVQsQ0FBYTtBQUFBLFlBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQVlDLE9BQVo7O0FBQUEsNEJBQ1osNERBQUMsOERBQUQsa0NBQ01BLE9BRE47QUFFRSxhQUFHLEVBQUVELElBRlA7QUFHRSxjQUFJLGtCQUFXQSxJQUFYLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVztBQUFBLENBQWI7O0tBQU1KLEk7O0FBaUJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICdwYXJ0aWFscy9QYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnY29tcG9uZW50cy9IZWFkJ1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvUHJvZHVjdENhcmQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9zaG9wLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBwcm9wczogeyBwcm9kdWN0czogYXdhaXQgcmVxdWlyZSgnZGF0YScpLnByb2R1Y3RzIH0sXG59KVxuXG5jb25zdCBTaG9wID0gKHsgcHJvZHVjdHMgfSkgPT4gKFxuICA8UGFnZSBjb2xvcj1cInN3ZWF0ZXItYmxhY2tcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5TaG9wIHwgQ2FsbSBDYWN0dXM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzfT5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHsgc2x1ZywgLi4ucHJvZHVjdCB9KSA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgIHsuLi5wcm9kdWN0fVxuICAgICAgICAgIGtleT17c2x1Z31cbiAgICAgICAgICBocmVmPXtgL3Nob3AvJHtzbHVnfWB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9QYWdlPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/index.js\n");

/***/ })

})