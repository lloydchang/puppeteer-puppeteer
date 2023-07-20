"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,g=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(g,p(p({ref:t},c),{},{components:a})):r.createElement(g,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={sidebar_label:"Page.emulateMediaType"},i="Page.emulateMediaType() method",o={unversionedId:"api/puppeteer.page.emulatemediatype",id:"version-20.9.0/api/puppeteer.page.emulatemediatype",title:"Page.emulateMediaType() method",description:"Signature:",source:"@site/versioned_docs/version-20.9.0/api/puppeteer.page.emulatemediatype.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediatype",permalink:"/api/puppeteer.page.emulatemediatype",draft:!1,tags:[],version:"20.9.0",frontMatter:{sidebar_label:"Page.emulateMediaType"},sidebar:"api",previous:{title:"Page.emulateMediaFeatures",permalink:"/api/puppeteer.page.emulatemediafeatures"},next:{title:"Page.emulateNetworkConditions",permalink:"/api/puppeteer.page.emulatenetworkconditions"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function s(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"pageemulatemediatype-method"}),"Page.emulateMediaType() method"),(0,r.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  emulateMediaType(type?: string): Promise<void>;\n}\n")),(0,r.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"(Optional)")," Changes the CSS media type of the page. The only allowed values are ",(0,r.kt)("code",null,"screen"),", ",(0,r.kt)("code",null,"print")," and ",(0,r.kt)("code",null,"null"),". Passing ",(0,r.kt)("code",null,"null")," disables CSS media emulation.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",n({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\nawait page.emulateMediaType('print');\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 false\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 true\n\nawait page.emulateMediaType(null);\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n")))}s.isMDXComponent=!0}}]);