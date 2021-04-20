webpackHotUpdate_N_E("pages/shop/[product]",{

/***/ "./pages/shop/[product].js":
/*!*********************************!*\
  !*** ./pages/shop/[product].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var partials_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! partials/Page */ \"./partials/Page/index.js\");\n/* harmony import */ var components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Head */ \"./components/Head.js\");\n/* harmony import */ var components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ImageGrid */ \"./components/ImageGrid/index.js\");\n/* harmony import */ var components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Label */ \"./components/Label/index.js\");\n/* harmony import */ var components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ProductLabel */ \"./components/ProductLabel/index.js\");\n/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Text */ \"./components/Text/index.js\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/product-page.module.scss */ \"./styles/product-page.module.scss\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/pages/shop/[product].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var _product$description;\n\n  var product = _ref.product;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      pathname = _useRouter.pathname,\n      push = _useRouter.push,\n      query = _useRouter.query;\n\n  console.log(location.pathname, query);\n  var imageIndex = (query === null || query === void 0 ? void 0 : query.img) && parseInt(query.img);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(partials_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: product.color,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [product.title, \" | Calm Cactus\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.images,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Label__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          position: \"top left\",\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.label,\n          children: product.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          images: product.images,\n          selectedIndex: imageIndex,\n          onSelect: function onSelect(i) {\n            return push({\n              pathname: location.pathname,\n              query: {\n                img: i\n              }\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: product.title,\n          subtitle: product.subtitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            mode: components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"].MODES.body,\n            children: (_product$description = product.description) !== null && _product$description !== void 0 ? _product$description : 'No description'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: \"Continue to checkout\",\n          subtitle: \"You have 5 items in your cart\",\n          href: \"/shop/checkout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"E+jpOn91F6uZ0lioIwEULVS0FHk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = ProductPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bcHJvZHVjdF0uanM/NTkzMiJdLCJuYW1lcyI6WyJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInB1c2giLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImltYWdlSW5kZXgiLCJpbWciLCJwYXJzZUludCIsImNvbG9yIiwidGl0bGUiLCJzdHlsZXMiLCJ3cmFwcGVyIiwiaW1hZ2VzIiwibGFiZWwiLCJpIiwiaW5mbyIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJUZXh0IiwiTU9ERVMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbUJBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLG1CQUNEQyw2REFBUyxFQURSO0FBQUEsTUFDM0JDLFFBRDJCLGNBQzNCQSxRQUQyQjtBQUFBLE1BQ2pCQyxJQURpQixjQUNqQkEsSUFEaUI7QUFBQSxNQUNYQyxLQURXLGNBQ1hBLEtBRFc7O0FBRW5DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUSxDQUFDTCxRQUFyQixFQUErQkUsS0FBL0I7QUFDQSxNQUFNSSxVQUFVLEdBQUcsQ0FBQUosS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVLLEdBQVAsS0FBY0MsUUFBUSxDQUFDTixLQUFLLENBQUNLLEdBQVAsQ0FBekM7QUFDQSxzQkFDRSxxRUFBQyxxREFBRDtBQUFNLFNBQUssRUFBRVQsT0FBTyxDQUFDVyxLQUFyQjtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUVgsT0FBTyxDQUFDWSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUMsc0VBQU0sQ0FBQ0MsT0FBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELHNFQUFNLENBQUNFLE1BQXZCO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBTyxrQkFBUSxFQUFDLFVBQWhCO0FBQTJCLG1CQUFTLEVBQUVGLHNFQUFNLENBQUNHLEtBQTdDO0FBQUEsb0JBQ0doQixPQUFPLENBQUNnQjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyw0REFBRDtBQUNFLGdCQUFNLEVBQUVoQixPQUFPLENBQUNlLE1BRGxCO0FBRUUsdUJBQWEsRUFBRVAsVUFGakI7QUFHRSxrQkFBUSxFQUFFLGtCQUFBUyxDQUFDO0FBQUEsbUJBQUlkLElBQUksQ0FBQztBQUFFRCxzQkFBUSxFQUFFSyxRQUFRLENBQUNMLFFBQXJCO0FBQStCRSxtQkFBSyxFQUFFO0FBQUVLLG1CQUFHLEVBQUVRO0FBQVA7QUFBdEMsYUFBRCxDQUFSO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUU7QUFBSyxpQkFBUyxFQUFFSixzRUFBTSxDQUFDSyxJQUF2QjtBQUFBLGdDQUNFLHFFQUFDLCtEQUFEO0FBQWMsZUFBSyxFQUFFbEIsT0FBTyxDQUFDWSxLQUE3QjtBQUFvQyxrQkFBUSxFQUFFWixPQUFPLENBQUNtQjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBSyxtQkFBUyxFQUFFTixzRUFBTSxDQUFDTyxXQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQU0sZ0JBQUksRUFBRUMsdURBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUF2QjtBQUFBLDhDQUNHdkIsT0FBTyxDQUFDb0IsV0FEWCx1RUFDMEI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRSxxRUFBQywrREFBRDtBQUNFLGVBQUssRUFBQyxzQkFEUjtBQUVFLGtCQUFRLEVBQUMsK0JBRlg7QUFHRSxjQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBdkNEOztHQUFNckIsVztVQUM4QkUscUQ7OztLQUQ5QkYsVzs7QUF5Q1NBLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9bcHJvZHVjdF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBQYWdlIGZyb20gJ3BhcnRpYWxzL1BhZ2UnXG5pbXBvcnQgSGVhZCBmcm9tICdjb21wb25lbnRzL0hlYWQnXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VHcmlkJ1xuaW1wb3J0IExhYmVsIGZyb20gJ2NvbXBvbmVudHMvTGFiZWwnXG5pbXBvcnQgUHJvZHVjdExhYmVsIGZyb20gJ2NvbXBvbmVudHMvUHJvZHVjdExhYmVsJ1xuaW1wb3J0IFRleHQgZnJvbSAnY29tcG9uZW50cy9UZXh0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvcHJvZHVjdC1wYWdlLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgcHJvZHVjdCB9IH0pID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgcmVxdWlyZSgnZGF0YScpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSBwcm9kdWN0KSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgcmVxdWlyZSgnZGF0YScpXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHsgc2x1ZyB9KSA9PiAoeyBwYXJhbXM6IHsgcHJvZHVjdDogc2x1ZyB9IH0pKSxcbiAgfVxufVxuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lLCBwdXNoLCBxdWVyeSB9ID0gdXNlUm91dGVyKClcbiAgY29uc29sZS5sb2cobG9jYXRpb24ucGF0aG5hbWUsIHF1ZXJ5KVxuICBjb25zdCBpbWFnZUluZGV4ID0gcXVlcnk/LmltZyAmJiBwYXJzZUludChxdWVyeS5pbWcpXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgY29sb3I9e3Byb2R1Y3QuY29sb3J9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvZHVjdC50aXRsZX0gfCBDYWxtIENhY3R1czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30+XG4gICAgICAgICAgPExhYmVsIHBvc2l0aW9uPVwidG9wIGxlZnRcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XG4gICAgICAgICAgICB7cHJvZHVjdC5sYWJlbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgIGltYWdlcz17cHJvZHVjdC5pbWFnZXN9XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4PXtpbWFnZUluZGV4fVxuICAgICAgICAgICAgb25TZWxlY3Q9e2kgPT4gcHVzaCh7IHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSwgcXVlcnk6IHsgaW1nOiBpIH0gfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICA8UHJvZHVjdExhYmVsIHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBzdWJ0aXRsZT17cHJvZHVjdC5zdWJ0aXRsZX0gLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPFRleHQgbW9kZT17VGV4dC5NT0RFUy5ib2R5fT5cbiAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb24gPz8gJ05vIGRlc2NyaXB0aW9uJ31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxQcm9kdWN0TGFiZWxcbiAgICAgICAgICAgIHRpdGxlPVwiQ29udGludWUgdG8gY2hlY2tvdXRcIlxuICAgICAgICAgICAgc3VidGl0bGU9XCJZb3UgaGF2ZSA1IGl0ZW1zIGluIHlvdXIgY2FydFwiXG4gICAgICAgICAgICBocmVmPVwiL3Nob3AvY2hlY2tvdXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/[product].js\n");

/***/ })

})