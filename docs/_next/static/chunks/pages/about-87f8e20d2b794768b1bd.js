(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},8140:function(e,t,n){"use strict";n.d(t,{Fb:function(){return u},h_:function(){return s},Dx:function(){return f},dk:function(){return p},Sy:function(){return l}});var r=n(5893),o=n(6156),a=n(7375);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(9008).default,s=function(e){var t=e.name,n=e.property,o=(0,a.Z)(e,["name","property"]);return(0,r.jsx)(u,{children:(0,r.jsx)("meta",c({name:t,property:n},o),null!==t&&void 0!==t?t:n)})},f=function(e){var t=e.text;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)(s,{property:"og:title",content:t}),(0,r.jsx)(s,{name:"twitter:title",content:t})]})},p=function(e){var t=e.text;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{property:"og:description",content:t}),(0,r.jsx)(s,{name:"twitter:description",content:t})]})},l=function(e){var t=e.src;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{property:"og:image",content:t}),(0,r.jsx)(s,{name:"twitter:image",content:t})]})}},4227:function(e,t,n){"use strict";var r=n(6156),o=n(5893),a=n(7375),i=n(7294),c=n(2234),u=n(8151),s=n.n(u);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=function(e,t){var n=e.alt,i=void 0===n?"":n,u=e.className,p=e.src,l=(0,a.Z)(e,["alt","className","src"]);return(0,o.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({alt:i,className:(0,c.cn)(s().image,u),ref:t,src:p},l))};t.Z=(0,i.forwardRef)(p)},2059:function(e,t,n){"use strict";var r=n(5893),o=n(6156),a=n(2234),i=n(5301),c=n(249),u=n(7042),s=n.n(u),f=function(e){var t=e.children,n=e.className;return(0,r.jsx)("div",{className:n,children:t})};t.Z=function(e){var t=e.className,n=e.href,u=e.subtitle,p=e.title,l="undefined"!==typeof n,d=l?i.Z:f;return(0,r.jsxs)(d,{href:n,className:(0,a.cn)(s().label,t,(0,o.Z)({},s().link,l)),noStyles:!0,children:[p&&(0,r.jsx)(c.Z,{mode:c.Z.MODES.heading,className:s().title,children:p}),u&&(0,r.jsx)(c.Z,{mode:c.Z.MODES.caption,children:u})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),s=n(4287),f=n(7845);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var p=o.props[f],l=r[f]||new Set;"name"===f&&i||!l.has(p)?(l.add(p),r[f]=l):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:y,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),p=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},2025:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(5893),o=n(2523),a=n(8140),i=n(4227),c=n(5301),u=n(2059),s=n(249),f=n(1639),p=n.n(f),l=!0;t.default=function(e){var t=e.contactEmail,n=e.title,f=e.body,l=e.imageSrc;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Dx,{text:"About | Calm Cactus"}),(0,r.jsx)(a.dk,{text:"".concat(f.slice(0,100)," ...")}),(0,r.jsx)(a.Sy,{src:l}),(0,r.jsxs)("div",{className:p().content,children:[(0,r.jsx)(i.Z,{src:l,className:p().image}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{title:n}),(0,r.jsxs)(s.Z,{className:p().description,mode:s.Z.MODES.body,children:[f,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If you have questions or concerns, please email us at"," ",(0,r.jsx)(c.Z,{href:"mailto:".concat(t),className:p().link,children:t}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Thanks for the support and have fun :)"]})]})]})]})}},8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2025)}])},8151:function(e){e.exports={image:"image_image__1C9ou"}},7042:function(e){e.exports={label:"product-label_label__3iK3T",title:"product-label_title__oUa3M",link:"product-label_link__25Cjp"}},1639:function(e){e.exports={content:"about-page_content__13Z8C",description:"about-page_description__3WTHL",image:"about-page_image__3WxKU",link:"about-page_link__1GJiR"}},9008:function(e,t,n){e.exports=n(7947)}},function(e){e.O(0,[774,597,305,566,285],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);