/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noop\": function() { return /* binding */ noop; },\n/* harmony export */   \"cn\": function() { return /* binding */ cn; },\n/* harmony export */   \"range\": function() { return /* binding */ range; },\n/* harmony export */   \"sleep\": function() { return /* binding */ sleep; },\n/* harmony export */   \"series\": function() { return /* binding */ series; }\n/* harmony export */ });\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ted_projects_calmcactus_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar noop = function noop() {};\nvar cn = function cn() {\n  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {\n    inputs[_key] = arguments[_key];\n  }\n\n  return inputs.reduce(function (classString, classData) {\n    switch (true) {\n      case typeof classData === 'string':\n        return \"\".concat(classString, \" \").concat(classData);\n\n      case Array.isArray(classData):\n        return \"\".concat(classString, \" \").concat(cn.apply(void 0, (0,_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(classData)));\n\n      case typeof classData === 'object':\n        return [classString].concat(Object.entries(classData).filter(function (_ref) {\n          var _ref2 = (0,_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, 2),\n              condition = _ref2[1];\n\n          return !!condition;\n        }).map(function (_ref3) {\n          var _ref4 = (0,_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref3, 1),\n              className = _ref4[0];\n\n          return className;\n        })).join(' ');\n\n      default:\n        return classString;\n    }\n  }, '').replace(/(^\\s+|\\s+$)/g, '');\n};\nvar range = function range(m, n) {\n  var list = [];\n  var delta = Math.sign(n - m);\n  var i = m;\n\n  while (delta > 0 ? i < n : i > n) {\n    list.push(i);\n    i += delta;\n  }\n\n  return list;\n};\nvar sleep = function sleep() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, x);\n  });\n};\nvar series = /*#__PURE__*/function () {\n  var _ref5 = (0,_home_ted_projects_calmcactus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_ted_projects_calmcactus_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var fn,\n        i,\n        results,\n        _i,\n        _args = arguments;\n\n    return _home_ted_projects_calmcactus_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            fn = _args.length <= 0 ? undefined : _args[0], i = 1;\n            results = [];\n\n          case 2:\n            if (!fn) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.t0 = results;\n            _context.next = 6;\n            return fn();\n\n          case 6:\n            _context.t1 = _context.sent;\n\n            _context.t0.push.call(_context.t0, _context.t1);\n\n            fn = (_i = i++, _i < 0 || _args.length <= _i ? undefined : _args[_i]);\n            _context.next = 2;\n            break;\n\n          case 11:\n            return _context.abrupt(\"return\", results);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function series() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMuanM/MWIyMyJdLCJuYW1lcyI6WyJub29wIiwiY24iLCJpbnB1dHMiLCJyZWR1Y2UiLCJjbGFzc1N0cmluZyIsImNsYXNzRGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImNvbmNhdCIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJjb25kaXRpb24iLCJtYXAiLCJjbGFzc05hbWUiLCJqb2luIiwicmVwbGFjZSIsInJhbmdlIiwibSIsIm4iLCJsaXN0IiwiZGVsdGEiLCJNYXRoIiwic2lnbiIsImkiLCJwdXNoIiwic2xlZXAiLCJ4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwic2VyaWVzIiwiZm4iLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7QUFFQSxJQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSztBQUFBLG9DQUFJQyxNQUFKO0FBQUlBLFVBQUo7QUFBQTs7QUFBQSxTQUNoQkEsTUFBTSxDQUNIQyxNQURILENBQ1UsVUFBQ0MsV0FBRCxFQUFjQyxTQUFkLEVBQTRCO0FBQ2xDLFlBQVEsSUFBUjtBQUNFLFdBQUssT0FBT0EsU0FBUCxLQUFxQixRQUExQjtBQUNFLHlCQUFVRCxXQUFWLGNBQXlCQyxTQUF6Qjs7QUFFRixXQUFLQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsU0FBZCxDQUFMO0FBQ0UseUJBQVVELFdBQVYsY0FBeUJILEVBQUUsTUFBRix5SUFBTUksU0FBTixFQUF6Qjs7QUFFRixXQUFLLE9BQU9BLFNBQVAsS0FBcUIsUUFBMUI7QUFDRSxlQUFPLENBQUNELFdBQUQsRUFDSkksTUFESSxDQUVIQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsU0FBZixFQUNHTSxNQURILENBQ1U7QUFBQTtBQUFBLGNBQUlDLFNBQUo7O0FBQUEsaUJBQW1CLENBQUMsQ0FBQ0EsU0FBckI7QUFBQSxTQURWLEVBRUdDLEdBRkgsQ0FFTztBQUFBO0FBQUEsY0FBRUMsU0FBRjs7QUFBQSxpQkFBaUJBLFNBQWpCO0FBQUEsU0FGUCxDQUZHLEVBTUpDLElBTkksQ0FNQyxHQU5ELENBQVA7O0FBUUY7QUFDRSxlQUFPWCxXQUFQO0FBakJKO0FBbUJELEdBckJILEVBcUJLLEVBckJMLEVBc0JHWSxPQXRCSCxDQXNCVyxjQXRCWCxFQXNCMkIsRUF0QjNCLENBRGdCO0FBQUEsQ0FBWDtBQXlCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM3QixNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLENBQUMsR0FBR0QsQ0FBZCxDQUFkO0FBQ0EsTUFBSU0sQ0FBQyxHQUFHTixDQUFSOztBQUNBLFNBQU9HLEtBQUssR0FBRyxDQUFSLEdBQVlHLENBQUMsR0FBR0wsQ0FBaEIsR0FBb0JLLENBQUMsR0FBR0wsQ0FBL0IsRUFBa0M7QUFDaENDLFFBQUksQ0FBQ0ssSUFBTCxDQUFVRCxDQUFWO0FBQ0FBLEtBQUMsSUFBSUgsS0FBTDtBQUNEOztBQUNELFNBQU9ELElBQVA7QUFDRCxDQVRNO0FBV0EsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFDQyxDQUFELHVFQUFLLEdBQUw7QUFBQSxTQUFhLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsV0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLENBQVYsQ0FBZDtBQUFBLEdBQW5CLENBQWI7QUFBQSxDQUFkO0FBRUEsSUFBTUksTUFBTTtBQUFBLDRRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsY0FEZ0IsNkNBRWxCUixDQUZrQixHQUVkLENBRmM7QUFHZFMsbUJBSGMsR0FHSixFQUhJOztBQUFBO0FBQUEsaUJBSWJELEVBSmE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBS2xCQyxPQUxrQjtBQUFBO0FBQUEsbUJBS0NELEVBQUUsRUFMSDs7QUFBQTtBQUFBOztBQUFBLHdCQUtWUCxJQUxVOztBQU1sQk8sY0FBRSxTQUFPUixDQUFDLEVBQVIsdURBQUY7QUFOa0I7QUFBQTs7QUFBQTtBQUFBLDZDQVFiUyxPQVJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQU5GLE1BQU07QUFBQTtBQUFBO0FBQUEsR0FBWiIsImZpbGUiOiIuL3V0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgY29uc3QgY24gPSAoLi4uaW5wdXRzKSA9PlxuICBpbnB1dHNcbiAgICAucmVkdWNlKChjbGFzc1N0cmluZywgY2xhc3NEYXRhKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSB0eXBlb2YgY2xhc3NEYXRhID09PSAnc3RyaW5nJzpcbiAgICAgICAgICByZXR1cm4gYCR7Y2xhc3NTdHJpbmd9ICR7Y2xhc3NEYXRhfWBcblxuICAgICAgICBjYXNlIEFycmF5LmlzQXJyYXkoY2xhc3NEYXRhKTpcbiAgICAgICAgICByZXR1cm4gYCR7Y2xhc3NTdHJpbmd9ICR7Y24oLi4uY2xhc3NEYXRhKX1gXG5cbiAgICAgICAgY2FzZSB0eXBlb2YgY2xhc3NEYXRhID09PSAnb2JqZWN0JzpcbiAgICAgICAgICByZXR1cm4gW2NsYXNzU3RyaW5nXVxuICAgICAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFssIGNvbmRpdGlvbl0pID0+ICEhY29uZGl0aW9uKVxuICAgICAgICAgICAgICAgIC5tYXAoKFtjbGFzc05hbWVdKSA9PiBjbGFzc05hbWUpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJyAnKVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGNsYXNzU3RyaW5nXG4gICAgICB9XG4gICAgfSwgJycpXG4gICAgLnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpXG5cbmV4cG9ydCBjb25zdCByYW5nZSA9IChtLCBuKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXVxuICBjb25zdCBkZWx0YSA9IE1hdGguc2lnbihuIC0gbSlcbiAgbGV0IGkgPSBtXG4gIHdoaWxlIChkZWx0YSA+IDAgPyBpIDwgbiA6IGkgPiBuKSB7XG4gICAgbGlzdC5wdXNoKGkpXG4gICAgaSArPSBkZWx0YVxuICB9XG4gIHJldHVybiBsaXN0XG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9ICh4ID0gMTAwKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgeCkpXG5cbmV4cG9ydCBjb25zdCBzZXJpZXMgPSBhc3luYyAoLi4uZm5zKSA9PiB7XG4gIGxldCBmbiA9IGZuc1swXSxcbiAgICBpID0gMVxuICBjb25zdCByZXN1bHRzID0gW11cbiAgd2hpbGUgKGZuKSB7XG4gICAgcmVzdWx0cy5wdXNoKGF3YWl0IGZuKCkpXG4gICAgZm4gPSBmbnNbaSsrXVxuICB9XG4gIHJldHVybiByZXN1bHRzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils.js\n");

/***/ })

});