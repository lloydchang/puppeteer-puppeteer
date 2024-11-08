/*! For license information please see c01cebf2.3c934fd9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37875],{36698:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),n=t(28453);const s={sidebar_label:"Page.emulateMediaFeatures"},i="Page.emulateMediaFeatures() method",l={id:"api/puppeteer.page.emulatemediafeatures",title:"Page.emulateMediaFeatures() method",description:"Signature",source:"@site/versioned_docs/version-23.7.1/api/puppeteer.page.emulatemediafeatures.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediafeatures",permalink:"/api/puppeteer.page.emulatemediafeatures",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{sidebar_label:"Page.emulateMediaFeatures"},sidebar:"api",previous:{title:"Page.emulateIdleState",permalink:"/api/puppeteer.page.emulateidlestate"},next:{title:"Page.emulateMediaType",permalink:"/api/puppeteer.page.emulatemediatype"}},d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function u(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"pageemulatemediafeatures-method",children:"Page.emulateMediaFeatures() method"})}),"\n",(0,r.jsx)(a.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-typescript",children:"class Page {\n  abstract emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.p,{children:"features"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/api/puppeteer.mediafeature",children:"MediaFeature"}),"[]"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.em,{children:"(Optional)"})," ",(0,r.jsx)(a.code,{children:"<?Array<Object>>"})," Given an array of media feature objects, emulates CSS media features on the page. Each media feature object must have the following properties:"]})})]})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(a.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ts",children:"await page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches,\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches,\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches,\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches,\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([{name: 'color-gamut', value: 'p3'}]);\nawait page.evaluate(() => matchMedia('(color-gamut: srgb)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: p3)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: rec2020)').matches);\n// \u2192 false\n"})})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},21020:(e,a,t)=>{var r=t(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var r,s={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(u=a.ref),a)i.call(a,r)&&!d.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:n,type:e,key:c,ref:u,props:s,_owner:l.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var r=t(96540);const n={},s=r.createContext(n);function i(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);