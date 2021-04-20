webpackHotUpdate_N_E("pages/shop/[product]",{

/***/ "./pages/shop/[product].js":
/*!*********************************!*\
  !*** ./pages/shop/[product].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var partials_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! partials/Page */ \"./partials/Page/index.js\");\n/* harmony import */ var components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Head */ \"./components/Head.js\");\n/* harmony import */ var components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ImageGrid */ \"./components/ImageGrid/index.js\");\n/* harmony import */ var components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Label */ \"./components/Label/index.js\");\n/* harmony import */ var components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ProductLabel */ \"./components/ProductLabel/index.js\");\n/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Text */ \"./components/Text/index.js\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/product-page.module.scss */ \"./styles/product-page.module.scss\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/pages/shop/[product].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var _product$description;\n\n  var product = _ref.product;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      pathname = _useRouter.pathname,\n      query = _useRouter.query,\n      replace = _useRouter.replace;\n\n  console.log(pathname, query);\n  var imageIndex = (query === null || query === void 0 ? void 0 : query.img) && parseInt(query.img);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(partials_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: product.color,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [product.title, \" | Calm Cactus\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.images,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Label__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          position: \"top left\",\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.label,\n          children: product.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          images: product.images,\n          selectedIndex: imageIndex,\n          onSelect: function onSelect(i) {\n            return replace(\"\".concat(location.pathname, \"?img=\").concat(i), {}, {\n              shallow: true\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: product.title,\n          subtitle: product.subtitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            mode: components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"].MODES.body,\n            children: (_product$description = product.description) !== null && _product$description !== void 0 ? _product$description : 'No description'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: \"Continue to checkout\",\n          subtitle: \"You have 5 items in your cart\",\n          href: \"/shop/checkout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"3zY58usAkY9QgsIKD01bJ2QcfaA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = ProductPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bcHJvZHVjdF0uanM/NTkzMiJdLCJuYW1lcyI6WyJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZUluZGV4IiwiaW1nIiwicGFyc2VJbnQiLCJjb2xvciIsInRpdGxlIiwic3R5bGVzIiwid3JhcHBlciIsImltYWdlcyIsImxhYmVsIiwiaSIsImxvY2F0aW9uIiwic2hhbGxvdyIsImluZm8iLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiVGV4dCIsIk1PREVTIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW1CQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBOztBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxtQkFDRUMsNkRBQVMsRUFEWDtBQUFBLE1BQzNCQyxRQUQyQixjQUMzQkEsUUFEMkI7QUFBQSxNQUNqQkMsS0FEaUIsY0FDakJBLEtBRGlCO0FBQUEsTUFDVkMsT0FEVSxjQUNWQSxPQURVOztBQUVuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVosRUFBc0JDLEtBQXRCO0FBQ0EsTUFBTUksVUFBVSxHQUFHLENBQUFKLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFSyxHQUFQLEtBQWNDLFFBQVEsQ0FBQ04sS0FBSyxDQUFDSyxHQUFQLENBQXpDO0FBQ0Esc0JBQ0UscUVBQUMscURBQUQ7QUFBTSxTQUFLLEVBQUVSLE9BQU8sQ0FBQ1UsS0FBckI7QUFBQSw0QkFDRSxxRUFBQyx1REFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFWLE9BQU8sQ0FBQ1csS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVDLHNFQUFNLENBQUNDLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRCxzRUFBTSxDQUFDRSxNQUF2QjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQU8sa0JBQVEsRUFBQyxVQUFoQjtBQUEyQixtQkFBUyxFQUFFRixzRUFBTSxDQUFDRyxLQUE3QztBQUFBLG9CQUNHZixPQUFPLENBQUNlO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLDREQUFEO0FBQ0UsZ0JBQU0sRUFBRWYsT0FBTyxDQUFDYyxNQURsQjtBQUVFLHVCQUFhLEVBQUVQLFVBRmpCO0FBR0Usa0JBQVEsRUFBRSxrQkFBQVMsQ0FBQztBQUFBLG1CQUNUWixPQUFPLFdBQ0ZhLFFBQVEsQ0FBQ2YsUUFEUCxrQkFDdUJjLENBRHZCLEdBRUwsRUFGSyxFQUdMO0FBQUVFLHFCQUFPLEVBQUU7QUFBWCxhQUhLLENBREU7QUFBQTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFrQkU7QUFBSyxpQkFBUyxFQUFFTixzRUFBTSxDQUFDTyxJQUF2QjtBQUFBLGdDQUNFLHFFQUFDLCtEQUFEO0FBQWMsZUFBSyxFQUFFbkIsT0FBTyxDQUFDVyxLQUE3QjtBQUFvQyxrQkFBUSxFQUFFWCxPQUFPLENBQUNvQjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBSyxtQkFBUyxFQUFFUixzRUFBTSxDQUFDUyxXQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQU0sZ0JBQUksRUFBRUMsdURBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUF2QjtBQUFBLDhDQUNHeEIsT0FBTyxDQUFDcUIsV0FEWCx1RUFDMEI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRSxxRUFBQywrREFBRDtBQUNFLGVBQUssRUFBQyxzQkFEUjtBQUVFLGtCQUFRLEVBQUMsK0JBRlg7QUFHRSxjQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTdDRDs7R0FBTXRCLFc7VUFDaUNFLHFEOzs7S0FEakNGLFc7O0FBK0NTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUGFnZSBmcm9tICdwYXJ0aWFscy9QYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnY29tcG9uZW50cy9IZWFkJ1xuaW1wb3J0IEltYWdlR3JpZCBmcm9tICdjb21wb25lbnRzL0ltYWdlR3JpZCdcbmltcG9ydCBMYWJlbCBmcm9tICdjb21wb25lbnRzL0xhYmVsJ1xuaW1wb3J0IFByb2R1Y3RMYWJlbCBmcm9tICdjb21wb25lbnRzL1Byb2R1Y3RMYWJlbCdcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL3Byb2R1Y3QtcGFnZS5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHByb2R1Y3QgfSB9KSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IHJlcXVpcmUoJ2RhdGEnKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiBwcm9kdWN0cy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gcHJvZHVjdCksXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IHJlcXVpcmUoJ2RhdGEnKVxuICByZXR1cm4ge1xuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICBwYXRoczogcHJvZHVjdHMubWFwKCh7IHNsdWcgfSkgPT4gKHsgcGFyYW1zOiB7IHByb2R1Y3Q6IHNsdWcgfSB9KSksXG4gIH1cbn1cblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHJlcGxhY2UgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnNvbGUubG9nKHBhdGhuYW1lLCBxdWVyeSlcbiAgY29uc3QgaW1hZ2VJbmRleCA9IHF1ZXJ5Py5pbWcgJiYgcGFyc2VJbnQocXVlcnkuaW1nKVxuICByZXR1cm4gKFxuICAgIDxQYWdlIGNvbG9yPXtwcm9kdWN0LmNvbG9yfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb2R1Y3QudGl0bGV9IHwgQ2FsbSBDYWN0dXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxuICAgICAgICAgIDxMYWJlbCBwb3NpdGlvbj1cInRvcCBsZWZ0XCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAge3Byb2R1Y3QubGFiZWx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8SW1hZ2VHcmlkXG4gICAgICAgICAgICBpbWFnZXM9e3Byb2R1Y3QuaW1hZ2VzfVxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD17aW1hZ2VJbmRleH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtpID0+XG4gICAgICAgICAgICAgIHJlcGxhY2UoXG4gICAgICAgICAgICAgICAgYCR7bG9jYXRpb24ucGF0aG5hbWV9P2ltZz0ke2l9YCxcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7IHNoYWxsb3c6IHRydWUgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgPFByb2R1Y3RMYWJlbCB0aXRsZT17cHJvZHVjdC50aXRsZX0gc3VidGl0bGU9e3Byb2R1Y3Quc3VidGl0bGV9IC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIDxUZXh0IG1vZGU9e1RleHQuTU9ERVMuYm9keX0+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9uID8/ICdObyBkZXNjcmlwdGlvbid9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8UHJvZHVjdExhYmVsXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRpbnVlIHRvIGNoZWNrb3V0XCJcbiAgICAgICAgICAgIHN1YnRpdGxlPVwiWW91IGhhdmUgNSBpdGVtcyBpbiB5b3VyIGNhcnRcIlxuICAgICAgICAgICAgaHJlZj1cIi9zaG9wL2NoZWNrb3V0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/[product].js\n");

/***/ })

})