/*! For license information please see a61a0880.19895b39.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27068],{63910:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(74848),t=n(28453);const i={sidebar_label:"ChromeSettings"},o="ChromeSettings interface",d={id:"api/puppeteer.chromesettings",title:"ChromeSettings interface",description:"Signature",source:"@site/versioned_docs/version-23.7.1/api/puppeteer.chromesettings.md",sourceDirName:"api",slug:"/api/puppeteer.chromesettings",permalink:"/api/puppeteer.chromesettings",draft:!1,unlisted:!1,tags:[],version:"23.7.1",frontMatter:{sidebar_label:"ChromeSettings"},sidebar:"api",previous:{title:"ChromeReleaseChannel",permalink:"/api/puppeteer.chromereleasechannel"},next:{title:"ClickOptions",permalink:"/api/puppeteer.clickoptions"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"chromesettings-interface",children:"ChromeSettings interface"})}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface ChromeSettings\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"downloadbaseurl",children:"downloadBaseUrl"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Specifies the URL prefix that is used to download the browser."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_CHROME_DOWNLOAD_BASE_URL"}),"."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsxs)(r.p,{children:["This must include the protocol and may even need a path prefix. This must ",(0,s.jsx)(r.strong,{children:"not"})," include a trailing slash similar to the default."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"skipdownload",children:"skipDownload"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Tells Puppeteer to not download the browser during installation."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_CHROME_SKIP_DOWNLOAD"}),"."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"false"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"version",children:"version"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,s.jsxs)(r.p,{children:["Can be overridden by ",(0,s.jsx)(r.code,{children:"PUPPETEER_CHROME_VERSION"})," or ",(0,s.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_DOWNLOAD"}),"."]}),(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]})]}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The pinned browser version supported by the current Puppeteer version."})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,i={},l=null,p=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:p,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(96540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);