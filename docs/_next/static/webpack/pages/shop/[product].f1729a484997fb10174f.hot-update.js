webpackHotUpdate_N_E("pages/shop/[product]",{

/***/ "./pages/shop/[product].js":
/*!*********************************!*\
  !*** ./pages/shop/[product].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var partials_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! partials/Page */ \"./partials/Page/index.js\");\n/* harmony import */ var components_Helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Helmet */ \"./components/Helmet.js\");\n/* harmony import */ var components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ImageGrid */ \"./components/ImageGrid/index.js\");\n/* harmony import */ var components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Label */ \"./components/Label/index.js\");\n/* harmony import */ var components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ProductLabel */ \"./components/ProductLabel/index.js\");\n/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Text */ \"./components/Text/index.js\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/product-page.module.scss */ \"./styles/product-page.module.scss\");\n/* harmony import */ var styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/ted/projects/calmcactus/pages/shop/[product].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar INDEX_KEY = 'img';\n\nvar ProductPage = function ProductPage(_ref) {\n  _s();\n\n  var _product$images$, _product$description, _product$description2;\n\n  var product = _ref.product;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      query = _useRouter.query,\n      replace = _useRouter.replace;\n\n  var queryIndex = query[INDEX_KEY];\n  var imageIndex = typeof queryIndex !== 'undefined' ? parseInt(queryIndex) : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(partials_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: product.color,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Helmet__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n      text: \"\".concat(product.title, \" | Calm Cactus\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Helmet__WEBPACK_IMPORTED_MODULE_3__[\"PreviewImage\"], {\n      src: (_product$images$ = product.images[0]) === null || _product$images$ === void 0 ? void 0 : _product$images$.src\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Helmet__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n      text: (_product$description = product.description) !== null && _product$description !== void 0 ? _product$description : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Helmet__WEBPACK_IMPORTED_MODULE_3__[\"Meta\"], {\n      property: \"og:type\",\n      content: \"product.item\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Helmet__WEBPACK_IMPORTED_MODULE_3__[\"Meta\"], {\n      name: \"twitter:card\",\n      content: \"summary_large_image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.images,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Label__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          position: \"top left\",\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.label,\n          children: product.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ImageGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          images: product.images,\n          selectedIndex: imageIndex,\n          onSelect: function onSelect(i) {\n            return replace(\"\".concat(location.pathname, \"?\").concat(INDEX_KEY, \"=\").concat(i), undefined, {\n              scroll: false\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.info,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: product.title,\n          subtitle: product.subtitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: styles_product_page_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            mode: components_Text__WEBPACK_IMPORTED_MODULE_7__[\"default\"].MODES.body,\n            children: (_product$description2 = product.description) !== null && _product$description2 !== void 0 ? _product$description2 : 'No description'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_ProductLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: \"Continue to checkout\",\n          subtitle: \"You have 5 items in your cart\",\n          href: \"/shop/checkout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductPage, \"F2b/frtmYpvs7l85b0lwEq2C+h4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = ProductPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bcHJvZHVjdF0uanM/NTkzMiJdLCJuYW1lcyI6WyJJTkRFWF9LRVkiLCJQcm9kdWN0UGFnZSIsInByb2R1Y3QiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInJlcGxhY2UiLCJxdWVyeUluZGV4IiwiaW1hZ2VJbmRleCIsInBhcnNlSW50IiwiY29sb3IiLCJ0aXRsZSIsImltYWdlcyIsInNyYyIsImRlc2NyaXB0aW9uIiwic3R5bGVzIiwid3JhcHBlciIsImxhYmVsIiwiaSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJpbmZvIiwic3VidGl0bGUiLCJUZXh0IiwiTU9ERVMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkEsSUFBTUEsU0FBUyxHQUFHLEtBQWxCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLG1CQUNSQyw2REFBUyxFQUREO0FBQUEsTUFDM0JDLEtBRDJCLGNBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxPQURvQixjQUNwQkEsT0FEb0I7O0FBRW5DLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDSixTQUFELENBQXhCO0FBQ0EsTUFBTU8sVUFBVSxHQUNkLE9BQU9ELFVBQVAsS0FBc0IsV0FBdEIsR0FBb0NFLFFBQVEsQ0FBQ0YsVUFBRCxDQUE1QyxHQUEyRCxDQUQ3RDtBQUVBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFFSixPQUFPLENBQUNPLEtBQXJCO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBTyxVQUFJLFlBQUtQLE9BQU8sQ0FBQ1EsS0FBYjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQWMsU0FBRyxzQkFBRVIsT0FBTyxDQUFDUyxNQUFSLENBQWUsQ0FBZixDQUFGLHFEQUFFLGlCQUFtQkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBYSxVQUFJLDBCQUFFVixPQUFPLENBQUNXLFdBQVYsdUVBQXlCO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLHFFQUFDLHNEQUFEO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLHFFQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsYUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU9FO0FBQUssZUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxPQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsc0VBQU0sQ0FBQ0gsTUFBdkI7QUFBQSxnQ0FDRSxxRUFBQyx3REFBRDtBQUFPLGtCQUFRLEVBQUMsVUFBaEI7QUFBMkIsbUJBQVMsRUFBRUcsc0VBQU0sQ0FBQ0UsS0FBN0M7QUFBQSxvQkFDR2QsT0FBTyxDQUFDYztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyw0REFBRDtBQUNFLGdCQUFNLEVBQUVkLE9BQU8sQ0FBQ1MsTUFEbEI7QUFFRSx1QkFBYSxFQUFFSixVQUZqQjtBQUdFLGtCQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSxtQkFDVFosT0FBTyxXQUFJYSxRQUFRLENBQUNDLFFBQWIsY0FBeUJuQixTQUF6QixjQUFzQ2lCLENBQXRDLEdBQTJDRyxTQUEzQyxFQUFzRDtBQUMzREMsb0JBQU0sRUFBRTtBQURtRCxhQUF0RCxDQURFO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0JFO0FBQUssaUJBQVMsRUFBRVAsc0VBQU0sQ0FBQ1EsSUFBdkI7QUFBQSxnQ0FDRSxxRUFBQywrREFBRDtBQUFjLGVBQUssRUFBRXBCLE9BQU8sQ0FBQ1EsS0FBN0I7QUFBb0Msa0JBQVEsRUFBRVIsT0FBTyxDQUFDcUI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFO0FBQUssbUJBQVMsRUFBRVQsc0VBQU0sQ0FBQ0QsV0FBdkI7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFNLGdCQUFJLEVBQUVXLHVEQUFJLENBQUNDLEtBQUwsQ0FBV0MsSUFBdkI7QUFBQSwrQ0FDR3hCLE9BQU8sQ0FBQ1csV0FEWCx5RUFDMEI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRSxxRUFBQywrREFBRDtBQUNFLGVBQUssRUFBQyxzQkFEUjtBQUVFLGtCQUFRLEVBQUMsK0JBRlg7QUFHRSxjQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQS9DRDs7R0FBTVosVztVQUN1QkUscUQ7OztLQUR2QkYsVzs7QUFpRFNBLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9bcHJvZHVjdF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBQYWdlIGZyb20gJ3BhcnRpYWxzL1BhZ2UnXG5pbXBvcnQgeyBUaXRsZSwgUHJldmlld0ltYWdlLCBNZXRhLCBEZXNjcmlwdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvSGVsbWV0J1xuaW1wb3J0IEltYWdlR3JpZCBmcm9tICdjb21wb25lbnRzL0ltYWdlR3JpZCdcbmltcG9ydCBMYWJlbCBmcm9tICdjb21wb25lbnRzL0xhYmVsJ1xuaW1wb3J0IFByb2R1Y3RMYWJlbCBmcm9tICdjb21wb25lbnRzL1Byb2R1Y3RMYWJlbCdcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL3Byb2R1Y3QtcGFnZS5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHByb2R1Y3QgfSB9KSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IHJlcXVpcmUoJ2RhdGEnKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0OiBwcm9kdWN0cy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gcHJvZHVjdCksXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IHJlcXVpcmUoJ2RhdGEnKVxuICByZXR1cm4ge1xuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICBwYXRoczogcHJvZHVjdHMubWFwKCh7IHNsdWcgfSkgPT4gKHsgcGFyYW1zOiB7IHByb2R1Y3Q6IHNsdWcgfSB9KSksXG4gIH1cbn1cblxuY29uc3QgSU5ERVhfS0VZID0gJ2ltZydcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgcmVwbGFjZSB9ID0gdXNlUm91dGVyKClcbiAgY29uc3QgcXVlcnlJbmRleCA9IHF1ZXJ5W0lOREVYX0tFWV1cbiAgY29uc3QgaW1hZ2VJbmRleCA9XG4gICAgdHlwZW9mIHF1ZXJ5SW5kZXggIT09ICd1bmRlZmluZWQnID8gcGFyc2VJbnQocXVlcnlJbmRleCkgOiAwXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgY29sb3I9e3Byb2R1Y3QuY29sb3J9PlxuICAgICAgPFRpdGxlIHRleHQ9e2Ake3Byb2R1Y3QudGl0bGV9IHwgQ2FsbSBDYWN0dXNgfSAvPlxuICAgICAgPFByZXZpZXdJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdPy5zcmN9IC8+XG4gICAgICA8RGVzY3JpcHRpb24gdGV4dD17cHJvZHVjdC5kZXNjcmlwdGlvbiA/PyAnJ30gLz5cbiAgICAgIDxNZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJwcm9kdWN0Lml0ZW1cIiAvPlxuICAgICAgPE1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxuICAgICAgICAgIDxMYWJlbCBwb3NpdGlvbj1cInRvcCBsZWZ0XCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAge3Byb2R1Y3QubGFiZWx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8SW1hZ2VHcmlkXG4gICAgICAgICAgICBpbWFnZXM9e3Byb2R1Y3QuaW1hZ2VzfVxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD17aW1hZ2VJbmRleH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtpID0+XG4gICAgICAgICAgICAgIHJlcGxhY2UoYCR7bG9jYXRpb24ucGF0aG5hbWV9PyR7SU5ERVhfS0VZfT0ke2l9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICAgIDxQcm9kdWN0TGFiZWwgdGl0bGU9e3Byb2R1Y3QudGl0bGV9IHN1YnRpdGxlPXtwcm9kdWN0LnN1YnRpdGxlfSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICA8VGV4dCBtb2RlPXtUZXh0Lk1PREVTLmJvZHl9PlxuICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbiA/PyAnTm8gZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFByb2R1Y3RMYWJlbFxuICAgICAgICAgICAgdGl0bGU9XCJDb250aW51ZSB0byBjaGVja291dFwiXG4gICAgICAgICAgICBzdWJ0aXRsZT1cIllvdSBoYXZlIDUgaXRlbXMgaW4geW91ciBjYXJ0XCJcbiAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9jaGVja291dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/[product].js\n");

/***/ })

})