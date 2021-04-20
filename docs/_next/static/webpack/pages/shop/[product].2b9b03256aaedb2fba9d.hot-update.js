webpackHotUpdate_N_E("pages/shop/[product]",{

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: about, social, products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"social\", function() { return social; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\nvar about = {\n  contactEmail: 'hello@calmcact.us',\n  title: 'Hi! Nice to see you.',\n  body: 'Calm Cactus is a small art shop making limited batched goods for you and your home. The goal is to have fun making things that might bring a smile to your life. CC is a one person shop, so please be patient for new goods & re-stocking. Some items are made on-demand and take up to a few weeks to make, pass quality inspection and be sent off to your home. All packages are sent via USPS. Domestic shipping only.',\n  imageSrc: 'https://via.placeholder.com/1000/aaa/272727&text=ABOUT'\n};\nvar social = {\n  instagram: 'https://www.instagram.com/calmcactusgoods/',\n  twitter: 'https://twitter.com/calmcactusgoods'\n};\nvar products = [{\n  title: 'GROW THROW',\n  label: 'Sold out',\n  subtitle: 'Throw blanket. Made in NY',\n  slug: 'grow-throw',\n  color: 'coral',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=A'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=B'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=C'\n  }]\n}, {\n  title: 'Artwork name',\n  label: '$120',\n  subtitle: 'Materials used. Contributions',\n  slug: 'artwork1',\n  color: 'canary',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=D'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=E'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=F'\n  }]\n}, {\n  title: 'Artwork name',\n  label: '$10',\n  subtitle: 'Materials used. Contributions',\n  slug: 'artwork2',\n  color: 'salt-blue',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=G'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=H'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=I'\n  }]\n}, {\n  title: 'Artwork name',\n  label: '$50',\n  subtitle: 'Materials used. Contributions',\n  slug: 'artwork3',\n  color: 'salt-blue',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=J'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=K'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=L'\n  }]\n}, {\n  title: 'Artwork name',\n  label: 'Coming soon',\n  subtitle: 'Materials used. Contributions',\n  slug: 'artwork4',\n  color: 'coral',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=M'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=N'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=O'\n  }]\n}, {\n  title: 'Artwork name',\n  label: '$25',\n  subtitle: 'Materials used. Contributions',\n  slug: 'artwork5',\n  color: 'canary',\n  images: [{\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=P'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=Q'\n  }, {\n    src: 'https://via.placeholder.com/1000/aaa/272727&text=R'\n  }]\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS5qcz84ODVhIl0sIm5hbWVzIjpbImFib3V0IiwiY29udGFjdEVtYWlsIiwidGl0bGUiLCJib2R5IiwiaW1hZ2VTcmMiLCJzb2NpYWwiLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwicHJvZHVjdHMiLCJsYWJlbCIsInN1YnRpdGxlIiwic2x1ZyIsImNvbG9yIiwiaW1hZ2VzIiwic3JjIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLEtBQUssR0FBRztBQUNuQkMsY0FBWSxFQUFFLG1CQURLO0FBRW5CQyxPQUFLLEVBQUUsc0JBRlk7QUFHbkJDLE1BQUksRUFDRiw2WkFKaUI7QUFLbkJDLFVBQVEsRUFBRTtBQUxTLENBQWQ7QUFRQSxJQUFNQyxNQUFNLEdBQUc7QUFDcEJDLFdBQVMsRUFBRSw0Q0FEUztBQUVwQkMsU0FBTyxFQUFFO0FBRlcsQ0FBZjtBQUtBLElBQU1DLFFBQVEsR0FBRyxDQUN0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFTyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxVQUFRLEVBQUUsMkJBSFo7QUFJRUMsTUFBSSxFQUFFLFlBSlI7QUFLRUMsT0FBSyxFQUFFLE9BTFQ7QUFNRUMsUUFBTSxFQUFFLENBQ047QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FETSxFQUVOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBRk0sRUFHTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUhNO0FBTlYsQ0FEc0IsRUFhdEI7QUFDRVosT0FBSyxFQUFFLGNBRFQ7QUFFRU8sT0FBSyxFQUFFLE1BRlQ7QUFHRUMsVUFBUSxFQUFFLCtCQUhaO0FBSUVDLE1BQUksRUFBRSxVQUpSO0FBS0VDLE9BQUssRUFBRSxRQUxUO0FBTUVDLFFBQU0sRUFBRSxDQUNOO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBRE0sRUFFTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUZNLEVBR047QUFBRUEsT0FBRyxFQUFFO0FBQVAsR0FITTtBQU5WLENBYnNCLEVBeUJ0QjtBQUNFWixPQUFLLEVBQUUsY0FEVDtBQUVFTyxPQUFLLEVBQUUsS0FGVDtBQUdFQyxVQUFRLEVBQUUsK0JBSFo7QUFJRUMsTUFBSSxFQUFFLFVBSlI7QUFLRUMsT0FBSyxFQUFFLFdBTFQ7QUFNRUMsUUFBTSxFQUFFLENBQ047QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FETSxFQUVOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBRk0sRUFHTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUhNO0FBTlYsQ0F6QnNCLEVBcUN0QjtBQUNFWixPQUFLLEVBQUUsY0FEVDtBQUVFTyxPQUFLLEVBQUUsS0FGVDtBQUdFQyxVQUFRLEVBQUUsK0JBSFo7QUFJRUMsTUFBSSxFQUFFLFVBSlI7QUFLRUMsT0FBSyxFQUFFLFdBTFQ7QUFNRUMsUUFBTSxFQUFFLENBQ047QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FETSxFQUVOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBRk0sRUFHTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUhNO0FBTlYsQ0FyQ3NCLEVBaUR0QjtBQUNFWixPQUFLLEVBQUUsY0FEVDtBQUVFTyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxVQUFRLEVBQUUsK0JBSFo7QUFJRUMsTUFBSSxFQUFFLFVBSlI7QUFLRUMsT0FBSyxFQUFFLE9BTFQ7QUFNRUMsUUFBTSxFQUFFLENBQ047QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FETSxFQUVOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBRk0sRUFHTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUhNO0FBTlYsQ0FqRHNCLEVBNkR0QjtBQUNFWixPQUFLLEVBQUUsY0FEVDtBQUVFTyxPQUFLLEVBQUUsS0FGVDtBQUdFQyxVQUFRLEVBQUUsK0JBSFo7QUFJRUMsTUFBSSxFQUFFLFVBSlI7QUFLRUMsT0FBSyxFQUFFLFFBTFQ7QUFNRUMsUUFBTSxFQUFFLENBQ047QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FETSxFQUVOO0FBQUVBLE9BQUcsRUFBRTtBQUFQLEdBRk0sRUFHTjtBQUFFQSxPQUFHLEVBQUU7QUFBUCxHQUhNO0FBTlYsQ0E3RHNCLENBQWpCIiwiZmlsZSI6Ii4vZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhYm91dCA9IHtcbiAgY29udGFjdEVtYWlsOiAnaGVsbG9AY2FsbWNhY3QudXMnLFxuICB0aXRsZTogJ0hpISBOaWNlIHRvIHNlZSB5b3UuJyxcbiAgYm9keTpcbiAgICAnQ2FsbSBDYWN0dXMgaXMgYSBzbWFsbCBhcnQgc2hvcCBtYWtpbmcgbGltaXRlZCBiYXRjaGVkIGdvb2RzIGZvciB5b3UgYW5kIHlvdXIgaG9tZS4gVGhlIGdvYWwgaXMgdG8gaGF2ZSBmdW4gbWFraW5nIHRoaW5ncyB0aGF0IG1pZ2h0IGJyaW5nIGEgc21pbGUgdG8geW91ciBsaWZlLiBDQyBpcyBhIG9uZSBwZXJzb24gc2hvcCwgc28gcGxlYXNlIGJlIHBhdGllbnQgZm9yIG5ldyBnb29kcyAmIHJlLXN0b2NraW5nLiBTb21lIGl0ZW1zIGFyZSBtYWRlIG9uLWRlbWFuZCBhbmQgdGFrZSB1cCB0byBhIGZldyB3ZWVrcyB0byBtYWtlLCBwYXNzIHF1YWxpdHkgaW5zcGVjdGlvbiBhbmQgYmUgc2VudCBvZmYgdG8geW91ciBob21lLiBBbGwgcGFja2FnZXMgYXJlIHNlbnQgdmlhIFVTUFMuIERvbWVzdGljIHNoaXBwaW5nIG9ubHkuJyxcbiAgaW1hZ2VTcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9QUJPVVQnLFxufVxuXG5leHBvcnQgY29uc3Qgc29jaWFsID0ge1xuICBpbnN0YWdyYW06ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NhbG1jYWN0dXNnb29kcy8nLFxuICB0d2l0dGVyOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9jYWxtY2FjdHVzZ29vZHMnLFxufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0dST1cgVEhST1cnLFxuICAgIGxhYmVsOiAnU29sZCBvdXQnLFxuICAgIHN1YnRpdGxlOiAnVGhyb3cgYmxhbmtldC4gTWFkZSBpbiBOWScsXG4gICAgc2x1ZzogJ2dyb3ctdGhyb3cnLFxuICAgIGNvbG9yOiAnY29yYWwnLFxuICAgIGltYWdlczogW1xuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9QScgfSxcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PUInIH0sXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1DJyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FydHdvcmsgbmFtZScsXG4gICAgbGFiZWw6ICckMTIwJyxcbiAgICBzdWJ0aXRsZTogJ01hdGVyaWFscyB1c2VkLiBDb250cmlidXRpb25zJyxcbiAgICBzbHVnOiAnYXJ0d29yazEnLFxuICAgIGNvbG9yOiAnY2FuYXJ5JyxcbiAgICBpbWFnZXM6IFtcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PUQnIH0sXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1FJyB9LFxuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9RicgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBcnR3b3JrIG5hbWUnLFxuICAgIGxhYmVsOiAnJDEwJyxcbiAgICBzdWJ0aXRsZTogJ01hdGVyaWFscyB1c2VkLiBDb250cmlidXRpb25zJyxcbiAgICBzbHVnOiAnYXJ0d29yazInLFxuICAgIGNvbG9yOiAnc2FsdC1ibHVlJyxcbiAgICBpbWFnZXM6IFtcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PUcnIH0sXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1IJyB9LFxuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9SScgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBcnR3b3JrIG5hbWUnLFxuICAgIGxhYmVsOiAnJDUwJyxcbiAgICBzdWJ0aXRsZTogJ01hdGVyaWFscyB1c2VkLiBDb250cmlidXRpb25zJyxcbiAgICBzbHVnOiAnYXJ0d29yazMnLFxuICAgIGNvbG9yOiAnc2FsdC1ibHVlJyxcbiAgICBpbWFnZXM6IFtcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PUonIH0sXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1LJyB9LFxuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9TCcgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBcnR3b3JrIG5hbWUnLFxuICAgIGxhYmVsOiAnQ29taW5nIHNvb24nLFxuICAgIHN1YnRpdGxlOiAnTWF0ZXJpYWxzIHVzZWQuIENvbnRyaWJ1dGlvbnMnLFxuICAgIHNsdWc6ICdhcnR3b3JrNCcsXG4gICAgY29sb3I6ICdjb3JhbCcsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1NJyB9LFxuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9TicgfSxcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PU8nIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQXJ0d29yayBuYW1lJyxcbiAgICBsYWJlbDogJyQyNScsXG4gICAgc3VidGl0bGU6ICdNYXRlcmlhbHMgdXNlZC4gQ29udHJpYnV0aW9ucycsXG4gICAgc2x1ZzogJ2FydHdvcms1JyxcbiAgICBjb2xvcjogJ2NhbmFyeScsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7IHNyYzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAwL2FhYS8yNzI3MjcmdGV4dD1QJyB9LFxuICAgICAgeyBzcmM6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwMC9hYWEvMjcyNzI3JnRleHQ9UScgfSxcbiAgICAgIHsgc3JjOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMDAvYWFhLzI3MjcyNyZ0ZXh0PVInIH0sXG4gICAgXSxcbiAgfSxcbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ })

})