_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/bW6":function(e,t,r){e.exports={wrapper:"image-grid_wrapper__1dRzw",feature:"image-grid_feature__o8P4F",thumbnail:"image-grid_thumbnail__3l6OG",image:"image-grid_image__1Y_ei",selected:"image-grid_selected__3isNT"}},"0Nm1":function(e,t,r){e.exports={wrapper:"label_wrapper__14TJD"}},"20a2":function(e,t,r){e.exports=r("nOHt")},"77sE":function(e,t,r){"use strict";var c=r("rePB"),n=r("nKUr"),a=r("Ff2n"),i=r("GyP+"),o=r("y9bU"),s=r("0Nm1"),p=r.n(s);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.children,r=e.className,c=e.position,s=Object(a.a)(e,["children","className","position"]);return Object(n.jsx)("div",u(u({className:Object(i.a)(p.a.wrapper,r),"data-position":c},s),{},{children:Object(n.jsx)(o.a,{mode:o.a.MODES.heading,allCaps:!0,children:t})}))}},U6n3:function(e,t,r){e.exports={wrapper:"product-page_wrapper__3hNk0",label:"product-page_label__5_5X_",images:"product-page_images__398h4",info:"product-page_info__3uPF1",description:"product-page_description__36mP-"}},WTIs:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return N}));var c=r("nKUr"),n=r("20a2"),a=r("dd7n"),i=r("LloV"),o=r("rePB"),s=r("Ff2n"),p=r("q1tI"),l=r("GyP+");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e,t){var r=e.children,n=e.type,a=void 0===n?"button":n,i=Object(s.a)(e,["children","type"]);return Object(c.jsx)("button",b(b({type:a,ref:t},i),{},{children:r}))},O=Object(p.forwardRef)(j),d=r("XuKv"),f=r("/bW6"),m=r.n(f);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.className,r=e.images,n=e.onSelect,a=void 0===n?l.b:n,i=e.selectedIndex,u=void 0===i?0:i,b=Object(s.a)(e,["className","images","onSelect","selectedIndex"]),j=Object(p.useState)(u),f=j[0],g=j[1];Object(p.useEffect)((function(){return g(u)}),[u]),Object(p.useEffect)((function(){return a(f)}),[f]);var y=r[f];return Object(c.jsxs)("div",_(_({className:Object(l.a)(m.a.wrapper,t)},b),{},{children:[Object(c.jsx)("div",{className:m.a.feature,children:Object(c.jsx)(d.a,{src:y.src,className:m.a.image})}),r.slice(0,3).map((function(e,t){var r=e.src;return Object(c.jsx)(O,{onClick:function(){return g(t)},className:Object(l.a)(m.a.thumbnail,Object(o.a)({},m.a.selected,t===f)),children:Object(c.jsx)(d.a,{src:r,className:m.a.image})},r)}))]}))},h=r("77sE"),v=r("a/HQ"),w=r("y9bU"),P=r("U6n3"),x=r.n(P),N=!0;t.default=function(e){var t,r,o,s=e.product,p=Object(n.useRouter)(),l=p.query,u=p.replace,b=(null===l||void 0===l?void 0:l.img)&&parseInt(l.img);return Object(c.jsxs)(a.a,{color:s.color,children:[Object(c.jsx)(i.e,{text:"".concat(s.title," | Calm Cactus")}),Object(c.jsx)(i.d,{src:null===(t=s.images[0])||void 0===t?void 0:t.src}),Object(c.jsx)(i.a,{text:null!==(r=s.description)&&void 0!==r?r:""}),Object(c.jsx)(i.c,{property:"og:type",content:"product.item"}),Object(c.jsx)(i.c,{name:"twitter:card",content:"summary_large_image"}),Object(c.jsxs)("div",{className:x.a.wrapper,children:[Object(c.jsxs)("div",{className:x.a.images,children:[Object(c.jsx)(h.a,{position:"top left",className:x.a.label,children:s.label}),Object(c.jsx)(y,{images:s.images,selectedIndex:b,onSelect:function(e){return u("".concat(location.pathname,"?img=").concat(e))}})]}),Object(c.jsxs)("div",{className:x.a.info,children:[Object(c.jsx)(v.a,{title:s.title,subtitle:s.subtitle}),Object(c.jsx)("div",{className:x.a.description,children:Object(c.jsx)(w.a,{mode:w.a.MODES.body,children:null!==(o=s.description)&&void 0!==o?o:"No description"})}),Object(c.jsx)(v.a,{title:"Continue to checkout",subtitle:"You have 5 items in your cart",href:"/shop/checkout"})]})]})]})}},myyl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/[product]",function(){return r("WTIs")}])}},[["myyl",0,1,2,3,4,5]]]);