"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57754],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(b,c(c({ref:r},l),{},{components:t})):n.createElement(b,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8983:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={sidebar_label:"Browser.disconnect"},a="Browser.disconnect() method",s={unversionedId:"api/puppeteer.browser.disconnect",id:"version-19.9.0/api/puppeteer.browser.disconnect",title:"Browser.disconnect() method",description:"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling disconnect, the Browser object is considered disposed and cannot be used anymore.",source:"@site/versioned_docs/version-19.9.0/api/puppeteer.browser.disconnect.md",sourceDirName:"api",slug:"/api/puppeteer.browser.disconnect",permalink:"/api/puppeteer.browser.disconnect",draft:!1,tags:[],version:"19.9.0",frontMatter:{sidebar_label:"Browser.disconnect"},sidebar:"api",previous:{title:"Browser.defaultBrowserContext",permalink:"/api/puppeteer.browser.defaultbrowsercontext"},next:{title:"Browser.isConnected",permalink:"/api/puppeteer.browser.isconnected"}},p={},l=[{value:"Signature:",id:"signature",level:4}],u={toc:l};function d(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browserdisconnect-method"}),"Browser.disconnect() method"),(0,n.kt)("p",null,"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,n.kt)("inlineCode",{parentName:"p"},"disconnect"),", the ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.browser"}),"Browser")," object is considered disposed and cannot be used anymore."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  disconnect(): void;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"void"))}d.isMDXComponent=!0}}]);