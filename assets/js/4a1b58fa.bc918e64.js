"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(r),s=a,g=c["".concat(d,".").concat(s)]||c[s]||u[s]||l;return r?n.createElement(g,p(p({ref:t},m),{},{components:r})):n.createElement(g,p({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},86085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_label:"ElementHandle.dragAndDrop"},o="ElementHandle.dragAndDrop() method",d={unversionedId:"api/puppeteer.elementhandle.draganddrop",id:"version-20.8.0/api/puppeteer.elementhandle.draganddrop",title:"ElementHandle.dragAndDrop() method",description:"This method triggers a dragenter, dragover, and drop on the element.",source:"@site/versioned_docs/version-20.8.0/api/puppeteer.elementhandle.draganddrop.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.draganddrop",permalink:"/api/puppeteer.elementhandle.draganddrop",draft:!1,tags:[],version:"20.8.0",frontMatter:{sidebar_label:"ElementHandle.dragAndDrop"},sidebar:"api",previous:{title:"ElementHandle.drag",permalink:"/api/puppeteer.elementhandle.drag"},next:{title:"ElementHandle.dragEnter",permalink:"/api/puppeteer.elementhandle.dragenter"}},i={},m=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],u={toc:m};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"elementhandledraganddrop-method"}),"ElementHandle.dragAndDrop() method"),(0,n.kt)("p",null,"This method triggers a dragenter, dragover, and drop on the element."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  dragAndDrop(\n    this: ElementHandle<Element>,\n    target: ElementHandle<Node>,\n    options?: {\n      delay: number;\n    }\n  ): Promise<void>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"this"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Element",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"target"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"{ delay: number; }"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}c.isMDXComponent=!0}}]);