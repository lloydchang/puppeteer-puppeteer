"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(o,".").concat(m)]||f[m]||c[m]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_label:"HTTPRequest.failure"},u="HTTPRequest.failure() method",o={unversionedId:"api/puppeteer.httprequest.failure",id:"version-19.9.0/api/puppeteer.httprequest.failure",title:"HTTPRequest.failure() method",description:"Access information about the request's failure.",source:"@site/versioned_docs/version-19.9.0/api/puppeteer.httprequest.failure.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.failure",permalink:"/api/puppeteer.httprequest.failure",draft:!1,tags:[],version:"19.9.0",frontMatter:{sidebar_label:"HTTPRequest.failure"},sidebar:"api",previous:{title:"HTTPRequest.enqueueInterceptAction",permalink:"/api/puppeteer.httprequest.enqueueinterceptaction"},next:{title:"HTTPRequest.finalizeInterceptions",permalink:"/api/puppeteer.httprequest.finalizeinterceptions"}},p={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"httprequestfailure-method"}),"HTTPRequest.failure() method"),(0,n.kt)("p",null,"Access information about the request's failure."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  failure(): {\n    errorText: string;\n  } | null;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"{ errorText: string; } ","|"," null"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"null")," unless the request failed. If the request fails this can return an object with ",(0,n.kt)("inlineCode",{parentName:"p"},"errorText")," containing a human-readable error message, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"net::ERR_FAILED"),". It is not guaranteed that there will be failure text if the request fails."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Example of logging all failed requests:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")))}f.isMDXComponent=!0}}]);