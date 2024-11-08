/*! For license information please see 1a78048a.193ff43c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81005],{2386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(74848),o=r(28453);const s={sidebar_label:"Touchscreen.touchMove"},c="Touchscreen.touchMove() method",i={id:"api/puppeteer.touchscreen.touchmove",title:"Touchscreen.touchMove() method",description:"Dispatches a touchMove event on the first touch that is active.",source:"@site/versioned_docs/version-23.7.1/api/puppeteer.touchscreen.touchmove.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen.touchmove",permalink:"/api/puppeteer.touchscreen.touchmove",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{sidebar_label:"Touchscreen.touchMove"},sidebar:"api",previous:{title:"Touchscreen.touchEnd",permalink:"/api/puppeteer.touchscreen.touchend"},next:{title:"Touchscreen.touchStart",permalink:"/api/puppeteer.touchscreen.touchstart"}},h={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"touchscreentouchmove-method",children:"Touchscreen.touchMove() method"})}),"\n",(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"touchMove"})," event on the first touch that is active."]}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Touchscreen {\n  touchMove(x: number, y: number): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Horizontal position of the move."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"y"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"Vertical position of the move."})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Not every ",(0,n.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,n.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,t,r)=>{var n=r(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,a=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,n)&&!h.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:a,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);