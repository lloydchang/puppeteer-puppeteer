"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={},s="Chrome Extensions",p={unversionedId:"guides/chrome-extensions",id:"version-20.9.0/guides/chrome-extensions",title:"Chrome Extensions",description:"Puppeteer can be used for testing Chrome Extensions.",source:"@site/versioned_docs/version-20.9.0/guides/chrome-extensions.md",sourceDirName:"guides",slug:"/guides/chrome-extensions",permalink:"/guides/chrome-extensions",draft:!1,tags:[],version:"20.9.0",frontMatter:{},sidebar:"docs",previous:{title:"Request Interception",permalink:"/guides/request-interception"},next:{title:"Debugging",permalink:"/guides/debugging"}},c={},u=[],l={toc:u};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"chrome-extensions"}),"Chrome Extensions"),(0,r.kt)("p",null,"Puppeteer can be used for testing Chrome Extensions."),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Extensions in Chrome/Chromium currently only work in non-headless mode and\nexperimental Chrome headless mode.")),(0,r.kt)("p",null,"The following is code for getting a handle to the\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of\nan extension whose source is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\nimport path from 'path';\n\n(async () => {\n  const pathToExtension = path.join(process.cwd(), 'my-extension');\n  const browser = await puppeteer.launch({\n    headless: 'new',\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`,\n    ],\n  });\n  const backgroundPageTarget = await browser.waitForTarget(\n    target => target.type() === 'background_page'\n  );\n  const backgroundPage = await backgroundPageTarget.page();\n  // Test the background page as you would any other page.\n  await browser.close();\n})();\n")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Chrome Manifest V3 extensions have a background ServiceWorker of type\n'service_worker', instead of a page of type 'background_page'.")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"It is not yet possible to test extension popups or content scripts.")))}m.isMDXComponent=!0}}]);