webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\n  --black: #000;\\n  --canary: #ffc45d;\\n  --coral: #ff7f7f;\\n  --salt-blue: #bfd7e4;\\n  --sweater-black: #272727;\\n  --white: #fff;\\n  --default-fill: var(--white);\\n  --default-text: var(--black);\\n  --accent: var(--coral);\\n  --accent-hover: var(--coral);\\n  --accent-active: var(--coral);\\n  --pattern-fill: url(/assets/topography.png) var(--default-fill);\\n  --default-font: \\\"Red Hat Text\\\", sans-serif;\\n  --accent-font: \\\"Bodoni Moda\\\", serif;\\n  --document-width: 1200px;\\n  --inner-bevel: 3px;\\n  --outer-bevel: 0;\\n}\\n\\n/*\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --default-fill: var(--black);\\n    --default-text: var(--white);\\n\\n    --pattern-fill: url(/assets/topography-dark.png) var(--default-fill);\\n  }\\n}\\n*/\\n@media (min-width: 580px) {\\n  :root {\\n    --outer-bevel: 6px;\\n  }\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 400;\\n  src: url(\\\"/fonts/BodoniModa-Regular.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 400;\\n  src: url(\\\"/fonts/BodoniModa-Italic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 500;\\n  src: url(\\\"/fonts/BodoniModa-MediumItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 500;\\n  src: url(\\\"/fonts/BodoniModa-Medium.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/BodoniModa-SemiBold.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/BodoniModa-SemiBoldItalic.woff2\\\") format(\\\"woff2\\\");\\n  font-style: italic;\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 700;\\n  src: url(\\\"/fonts/BodoniModa-BoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 700;\\n  src: url(\\\"/fonts/BodoniModa-Bold.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 800;\\n  src: url(\\\"/fonts/BodoniModa-ExtraBoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 800;\\n  src: url(\\\"/fonts/BodoniModa-ExtraBold.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 900;\\n  src: url(\\\"/fonts/BodoniModa-BlackItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 900;\\n  src: url(\\\"/fonts/BodoniModa-Black.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 400;\\n  src: url(\\\"/fonts/RedHatText-Regular.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 400;\\n  src: url(\\\"/fonts/RedHatText-Italic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/RedHatText-Medium.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 600;\\n  src: url(\\\"/fonts/RedHatText-MediumItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 700;\\n  src: url(\\\"/fonts/RedHatText-Bold.woff2\\\") format(\\\"woff2\\\");\\n}\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 700;\\n  src: url(\\\"/fonts/RedHatText-BoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\nhtml {\\n  background: var(--pattern-fill);\\n  color: var(--default-text);\\n  font-family: var(--default-font);\\n  font-weight: 100;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nol,\\nli,\\nbutton,\\na {\\n  color: inherit;\\n  font-family: inherit;\\n  font-size: inherit;\\n  font-weight: inherit;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbutton {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n  background: transparent;\\n  border: 0;\\n  cursor: pointer;\\n}\\n\\na,\\na:link {\\n  text-decoration: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://globals.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;EACA,wBAAA;EACA,aAAA;EAEA,4BAAA;EACA,4BAAA;EAEA,sBAAA;EACA,4BAAA;EACA,6BAAA;EAEA,+DAAA;EACA,0CAAA;EACA,mCAAA;EAEA,wBAAA;EACA,kBAAA;EACA,gBAAA;AALF;;AAQA;;;;;;;;;CAAA;AAWA;EACE;IACE,kBAAA;EANF;AACF;AASA;EACE,0BAAA;EACA,gBAAA;EACA,2DAAA;AAPF;AAUA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0DAAA;AARF;AAWA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,gEAAA;AATF;AAYA;EACE,0BAAA;EACA,gBAAA;EACA,0DAAA;AAVF;AAaA;EACE,0BAAA;EACA,gBAAA;EACA,4DAAA;AAXF;AAcA;EACE,0BAAA;EACA,gBAAA;EACA,kEAAA;EACA,kBAAA;AAZF;AAeA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,8DAAA;AAbF;AAgBA;EACE,0BAAA;EACA,gBAAA;EACA,wDAAA;AAdF;AAiBA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mEAAA;AAfF;AAkBA;EACE,0BAAA;EACA,gBAAA;EACA,6DAAA;AAhBF;AAmBA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,+DAAA;AAjBF;AAoBA;EACE,0BAAA;EACA,gBAAA;EACA,yDAAA;AAlBF;AAqBA;EACE,2BAAA;EACA,gBAAA;EACA,2DAAA;AAnBF;AAsBA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,0DAAA;AApBF;AAuBA;EACE,2BAAA;EACA,gBAAA;EACA,0DAAA;AArBF;AAwBA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,gEAAA;AAtBF;AAyBA;EACE,2BAAA;EACA,gBAAA;EACA,wDAAA;AAvBF;AA0BA;EACE,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,8DAAA;AAxBF;AA2BA;EACE,+BAAA;EACA,0BAAA;EACA,gCAAA;EACA,gBAAA;AAzBF;;AA4BA;;;;;;;;;;;;;EAaE,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;AAzBF;;AA4BA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;AAzBF;;AA4BA;;EAEE,qBAAA;AAzBF\",\"sourcesContent\":[\"@import 'styles/vars';\\n\\n:root {\\n  --black: #{$black};\\n  --canary: #{$canary};\\n  --coral: #{$coral};\\n  --salt-blue: #{$salt-blue};\\n  --sweater-black: #{$sweater-black};\\n  --white: #{$white};\\n\\n  --default-fill: var(--white);\\n  --default-text: var(--black);\\n\\n  --accent: var(--coral);\\n  --accent-hover: var(--coral);\\n  --accent-active: var(--coral);\\n\\n  --pattern-fill: url(/assets/topography.png) var(--default-fill);\\n  --default-font: \\\"Red Hat Text\\\", sans-serif;\\n  --accent-font: \\\"Bodoni Moda\\\", serif;\\n\\n  --document-width: 1200px;\\n  --inner-bevel: 3px;\\n  --outer-bevel: 0;\\n}\\n\\n/*\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --default-fill: var(--black);\\n    --default-text: var(--white);\\n\\n    --pattern-fill: url(/assets/topography-dark.png) var(--default-fill);\\n  }\\n}\\n*/\\n\\n@media (min-width: $tablet-min-width) {\\n  :root {\\n    --outer-bevel: 6px;\\n  }\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 400;\\n  src: url(\\\"/fonts/BodoniModa-Regular.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 400;\\n  src: url(\\\"/fonts/BodoniModa-Italic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 500;\\n  src: url(\\\"/fonts/BodoniModa-MediumItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 500;\\n  src: url(\\\"/fonts/BodoniModa-Medium.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/BodoniModa-SemiBold.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/BodoniModa-SemiBoldItalic.woff2\\\") format(\\\"woff2\\\");\\n  font-style: italic;\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 700;\\n  src: url(\\\"/fonts/BodoniModa-BoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 700;\\n  src: url(\\\"/fonts/BodoniModa-Bold.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 800;\\n  src: url(\\\"/fonts/BodoniModa-ExtraBoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 800;\\n  src: url(\\\"/fonts/BodoniModa-ExtraBold.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-style: italic;\\n  font-weight: 900;\\n  src: url(\\\"/fonts/BodoniModa-BlackItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Bodoni Moda\\\";\\n  font-weight: 900;\\n  src: url(\\\"/fonts/BodoniModa-Black.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 400;\\n  src: url(\\\"/fonts/RedHatText-Regular.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 400;\\n  src: url(\\\"/fonts/RedHatText-Italic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 600;\\n  src: url(\\\"/fonts/RedHatText-Medium.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 600;\\n  src: url(\\\"/fonts/RedHatText-MediumItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-weight: 700;\\n  src: url(\\\"/fonts/RedHatText-Bold.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"Red Hat Text\\\";\\n  font-style: italic;\\n  font-weight: 700;\\n  src: url(\\\"/fonts/RedHatText-BoldItalic.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\nhtml {\\n  background: var(--pattern-fill);\\n  color: var(--default-text);\\n  font-family: var(--default-font);\\n  font-weight: 100;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nol,\\nli,\\nbutton,\\na {\\n  color: inherit;\\n  font-family: inherit;\\n  font-size: inherit;\\n  font-weight: inherit;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbutton {\\n  appearance: none;\\n  background: transparent;\\n  border: 0;\\n  cursor: pointer;\\n}\\n\\na,\\na:link {\\n  text-decoration: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2Nzcz8zMGY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtCQUFrQixzQkFBc0IscUJBQXFCLHlCQUF5Qiw2QkFBNkIsa0JBQWtCLGlDQUFpQyxpQ0FBaUMsMkJBQTJCLGlDQUFpQyxrQ0FBa0Msb0VBQW9FLGlEQUFpRCwwQ0FBMEMsNkJBQTZCLHVCQUF1QixxQkFBcUIsR0FBRyw2Q0FBNkMsV0FBVyxtQ0FBbUMsbUNBQW1DLDZFQUE2RSxLQUFLLEdBQUcsaUNBQWlDLFdBQVcseUJBQXlCLEtBQUssR0FBRyxjQUFjLGlDQUFpQyxxQkFBcUIsb0VBQW9FLEdBQUcsY0FBYyxpQ0FBaUMsdUJBQXVCLHFCQUFxQixtRUFBbUUsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLHlFQUF5RSxHQUFHLGNBQWMsaUNBQWlDLHFCQUFxQixtRUFBbUUsR0FBRyxjQUFjLGlDQUFpQyxxQkFBcUIscUVBQXFFLEdBQUcsY0FBYyxpQ0FBaUMscUJBQXFCLDJFQUEyRSx1QkFBdUIsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLHVFQUF1RSxHQUFHLGNBQWMsaUNBQWlDLHFCQUFxQixpRUFBaUUsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLDRFQUE0RSxHQUFHLGNBQWMsaUNBQWlDLHFCQUFxQixzRUFBc0UsR0FBRyxjQUFjLGlDQUFpQyx1QkFBdUIscUJBQXFCLHdFQUF3RSxHQUFHLGNBQWMsaUNBQWlDLHFCQUFxQixrRUFBa0UsR0FBRyxjQUFjLGtDQUFrQyxxQkFBcUIsb0VBQW9FLEdBQUcsY0FBYyxrQ0FBa0MsdUJBQXVCLHFCQUFxQixtRUFBbUUsR0FBRyxjQUFjLGtDQUFrQyxxQkFBcUIsbUVBQW1FLEdBQUcsY0FBYyxrQ0FBa0MsdUJBQXVCLHFCQUFx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eUVBQXlFLEdBQUcsZ0JBQWdCLGtDQUFrQyxxQkFBcUIsaUVBQWlFLEdBQUcsZ0JBQWdCLGtDQUFrQyx1QkFBdUIscUJBQXFCLHVFQUF1RSxHQUFHLFVBQVUsb0NBQW9DLCtCQUErQixxQ0FBcUMscUJBQXFCLEdBQUcsd0VBQXdFLG1CQUFtQix5QkFBeUIsdUJBQXVCLHlCQUF5QixjQUFjLGVBQWUsR0FBRyxZQUFZLHFCQUFxQiw0QkFBNEIsY0FBYyxvQkFBb0IsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcscUJBQXFCO0FBQy9rVDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvZ2xvYmFscy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0tY2FuYXJ5OiAjZmZjNDVkO1xcbiAgLS1jb3JhbDogI2ZmN2Y3ZjtcXG4gIC0tc2FsdC1ibHVlOiAjYmZkN2U0O1xcbiAgLS1zd2VhdGVyLWJsYWNrOiAjMjcyNzI3O1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZGVmYXVsdC1maWxsOiB2YXIoLS13aGl0ZSk7XFxuICAtLWRlZmF1bHQtdGV4dDogdmFyKC0tYmxhY2spO1xcbiAgLS1hY2NlbnQ6IHZhcigtLWNvcmFsKTtcXG4gIC0tYWNjZW50LWhvdmVyOiB2YXIoLS1jb3JhbCk7XFxuICAtLWFjY2VudC1hY3RpdmU6IHZhcigtLWNvcmFsKTtcXG4gIC0tcGF0dGVybi1maWxsOiB1cmwoL2Fzc2V0cy90b3BvZ3JhcGh5LnBuZykgdmFyKC0tZGVmYXVsdC1maWxsKTtcXG4gIC0tZGVmYXVsdC1mb250OiBcXFwiUmVkIEhhdCBUZXh0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tYWNjZW50LWZvbnQ6IFxcXCJCb2RvbmkgTW9kYVxcXCIsIHNlcmlmO1xcbiAgLS1kb2N1bWVudC13aWR0aDogMTIwMHB4O1xcbiAgLS1pbm5lci1iZXZlbDogM3B4O1xcbiAgLS1vdXRlci1iZXZlbDogMDtcXG59XFxuXFxuLypcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1maWxsOiB2YXIoLS1ibGFjayk7XFxuICAgIC0tZGVmYXVsdC10ZXh0OiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIC0tcGF0dGVybi1maWxsOiB1cmwoL2Fzc2V0cy90b3BvZ3JhcGh5LWRhcmsucG5nKSB2YXIoLS1kZWZhdWx0LWZpbGwpO1xcbiAgfVxcbn1cXG4qL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLW91dGVyLWJldmVsOiA2cHg7XFxuICB9XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLUl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtTWVkaXVtSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1NZWRpdW0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLVNlbWlCb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1TZW1pQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtQm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtRXh0cmFCb2xkSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1FeHRyYUJvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLUJsYWNrSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJlZCBIYXQgVGV4dFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9SZWRIYXRUZXh0LVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1JdGFsaWMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1NZWRpdW0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1NZWRpdW1JdGFsaWMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1Cb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkIEhhdCBUZXh0XFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1JlZEhhdFRleHQtQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXR0ZXJuLWZpbGwpO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG51bCxcXG5vbCxcXG5saSxcXG5idXR0b24sXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmEsXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUNBLDRCQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBRUEsK0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7Ozs7Ozs7OztDQUFBO0FBV0E7RUFDRTtJQUNFLGtCQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FBUEY7QUFVQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FBUkY7QUFXQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdFQUFBO0FBVEY7QUFZQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwREFBQTtBQVZGO0FBYUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNERBQUE7QUFYRjtBQWNBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtFQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOERBQUE7QUFiRjtBQWdCQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQWRGO0FBaUJBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFmRjtBQWtCQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQWhCRjtBQW1CQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0FBakJGO0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0FBbEJGO0FBcUJBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FBbkJGO0FBc0JBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMERBQUE7QUFwQkY7QUF1QkE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMERBQUE7QUFyQkY7QUF3QkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtBQXRCRjtBQXlCQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQXZCRjtBQTBCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhEQUFBO0FBeEJGO0FBMkJBO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBNEJBOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBekJGOztBQTRCQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUF6QkY7O0FBNEJBOztFQUVFLHFCQUFBO0FBekJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3N0eWxlcy92YXJzJztcXG5cXG46cm9vdCB7XFxuICAtLWJsYWNrOiAjeyRibGFja307XFxuICAtLWNhbmFyeTogI3skY2FuYXJ5fTtcXG4gIC0tY29yYWw6ICN7JGNvcmFsfTtcXG4gIC0tc2FsdC1ibHVlOiAjeyRzYWx0LWJsdWV9O1xcbiAgLS1zd2VhdGVyLWJsYWNrOiAjeyRzd2VhdGVyLWJsYWNrfTtcXG4gIC0td2hpdGU6ICN7JHdoaXRlfTtcXG5cXG4gIC0tZGVmYXVsdC1maWxsOiB2YXIoLS13aGl0ZSk7XFxuICAtLWRlZmF1bHQtdGV4dDogdmFyKC0tYmxhY2spO1xcblxcbiAgLS1hY2NlbnQ6IHZhcigtLWNvcmFsKTtcXG4gIC0tYWNjZW50LWhvdmVyOiB2YXIoLS1jb3JhbCk7XFxuICAtLWFjY2VudC1hY3RpdmU6IHZhcigtLWNvcmFsKTtcXG5cXG4gIC0tcGF0dGVybi1maWxsOiB1cmwoL2Fzc2V0cy90b3BvZ3JhcGh5LnBuZykgdmFyKC0tZGVmYXVsdC1maWxsKTtcXG4gIC0tZGVmYXVsdC1mb250OiBcXFwiUmVkIEhhdCBUZXh0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tYWNjZW50LWZvbnQ6IFxcXCJCb2RvbmkgTW9kYVxcXCIsIHNlcmlmO1xcblxcbiAgLS1kb2N1bWVudC13aWR0aDogMTIwMHB4O1xcbiAgLS1pbm5lci1iZXZlbDogM3B4O1xcbiAgLS1vdXRlci1iZXZlbDogMDtcXG59XFxuXFxuLypcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1maWxsOiB2YXIoLS1ibGFjayk7XFxuICAgIC0tZGVmYXVsdC10ZXh0OiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIC0tcGF0dGVybi1maWxsOiB1cmwoL2Fzc2V0cy90b3BvZ3JhcGh5LWRhcmsucG5nKSB2YXIoLS1kZWZhdWx0LWZpbGwpO1xcbiAgfVxcbn1cXG4qL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LW1pbi13aWR0aCkge1xcbiAgOnJvb3Qge1xcbiAgICAtLW91dGVyLWJldmVsOiA2cHg7XFxuICB9XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLUl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtTWVkaXVtSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1NZWRpdW0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLVNlbWlCb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1TZW1pQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtQm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJvZG9uaSBNb2RhXFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0JvZG9uaU1vZGEtRXh0cmFCb2xkSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1FeHRyYUJvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCb2RvbmkgTW9kYVxcXCI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Cb2RvbmlNb2RhLUJsYWNrSXRhbGljLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQm9kb25pIE1vZGFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQm9kb25pTW9kYS1CbGFjay53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJlZCBIYXQgVGV4dFxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9SZWRIYXRUZXh0LVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1JdGFsaWMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1NZWRpdW0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1NZWRpdW1JdGFsaWMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWQgSGF0IFRleHRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvUmVkSGF0VGV4dC1Cb2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVkIEhhdCBUZXh0XFxcIjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1JlZEhhdFRleHQtQm9sZEl0YWxpYy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXR0ZXJuLWZpbGwpO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG51bCxcXG5vbCxcXG5saSxcXG5idXR0b24sXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hLFxcbmE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss\n");

/***/ })

})