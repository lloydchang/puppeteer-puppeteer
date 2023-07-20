"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Frame.setContent"},i="Frame.setContent() method",l={unversionedId:"api/puppeteer.frame.setcontent",id:"version-20.9.0/api/puppeteer.frame.setcontent",title:"Frame.setContent() method",description:"Set the content of the frame.",source:"@site/versioned_docs/version-20.9.0/api/puppeteer.frame.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.frame.setcontent",permalink:"/api/puppeteer.frame.setcontent",draft:!1,tags:[],version:"20.9.0",frontMatter:{sidebar_label:"Frame.setContent"},sidebar:"api",previous:{title:"Frame.select",permalink:"/api/puppeteer.frame.select"},next:{title:"Frame.tap",permalink:"/api/puppeteer.frame.tap"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:c};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"framesetcontent-method"}),"Frame.setContent() method"),(0,n.kt)("p",null,"Set the content of the frame."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  setContent(\n    html: string,\n    options?: {\n      timeout?: number;\n      waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n    }\n  ): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"html"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"HTML markup to assign to the page.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"{ timeout?: number; waitUntil?: ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteerlifecycleevent"}),"PuppeteerLifeCycleEvent")," ","|"," ",(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteerlifecycleevent"}),"PuppeteerLifeCycleEvent"),"[","]","; }"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," Options to configure how long before timing out and at what point to consider the content setting successful.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);