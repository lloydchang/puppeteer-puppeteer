"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(g,s(s({ref:t},i),{},{components:r})):n.createElement(g,s({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>i});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_label:"ConsoleMessage.stackTrace"},c="ConsoleMessage.stackTrace() method",p={unversionedId:"api/puppeteer.consolemessage.stacktrace",id:"version-20.9.0/api/puppeteer.consolemessage.stacktrace",title:"ConsoleMessage.stackTrace() method",description:"The array of locations on the stack of the console message.",source:"@site/versioned_docs/version-20.9.0/api/puppeteer.consolemessage.stacktrace.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessage.stacktrace",permalink:"/api/puppeteer.consolemessage.stacktrace",draft:!1,tags:[],version:"20.9.0",frontMatter:{sidebar_label:"ConsoleMessage.stackTrace"},sidebar:"api",previous:{title:"ConsoleMessage.location",permalink:"/api/puppeteer.consolemessage.location"},next:{title:"ConsoleMessage.text",permalink:"/api/puppeteer.consolemessage.text"}},l={},i=[{value:"Signature:",id:"signature",level:4}],u={toc:i};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"consolemessagestacktrace-method"}),"ConsoleMessage.stackTrace() method"),(0,n.kt)("p",null,"The array of locations on the stack of the console message."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class ConsoleMessage {\n  stackTrace(): ConsoleMessageLocation[];\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.consolemessagelocation"}),"ConsoleMessageLocation"),"[","]"))}f.isMDXComponent=!0}}]);