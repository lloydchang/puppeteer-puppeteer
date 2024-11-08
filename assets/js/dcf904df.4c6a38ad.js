/*! For license information please see dcf904df.4c6a38ad.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69693],{44620:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(74848),s=t(28453);const i={sidebar_label:"PuppeteerNode"},o="PuppeteerNode class",d={id:"api/puppeteer.puppeteernode",title:"PuppeteerNode class",description:"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.",source:"@site/../docs/api/puppeteer.puppeteernode.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode",permalink:"/next/api/puppeteer.puppeteernode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PuppeteerNode"},sidebar:"api",next:{title:"PuppeteerNode.connect",permalink:"/next/api/puppeteer.puppeteernode.connect"}},p={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"puppeteernode-class",children:"PuppeteerNode class"})}),"\n",(0,n.jsxs)(r.p,{children:["Extends the main ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})," class with Node specific behaviour for fetching and downloading browsers."]}),"\n",(0,n.jsxs)(r.p,{children:["If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,n.jsx)(r.code,{children:"require('puppeteer')"})," (or the equivalent ES ",(0,n.jsx)(r.code,{children:"import"}),")."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare class PuppeteerNode extends Puppeteer\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Extends:"})," ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"Puppeteer"})]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The most common method to use is ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch"}),", which is used to launch and connect to a new browser instance."]}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer",children:"the main Puppeteer class"})," for methods common to all environments, such as ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(r.code,{children:"PuppeteerNode"})," class."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:"The following is a typical example of using Puppeteer to drive automation:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Once you have created a ",(0,n.jsx)(r.code,{children:"page"})," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"`page` documentation"})," lists all the available methods."]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"defaultbrowser",children:"defaultBrowser"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["The name of the browser that will be launched by default. For ",(0,n.jsx)(r.code,{children:"puppeteer"}),", this is influenced by your configuration. Otherwise, it's ",(0,n.jsx)(r.code,{children:"chrome"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"lastlaunchedbrowser",children:"lastLaunchedBrowser"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The name of the browser that was last launched."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"product",children:"product"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly, deprecated"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Deprecated:"})}),(0,n.jsxs)(r.p,{children:["Do not use as this field as it does not take into account multiple browsers of different types. Use ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode#defaultbrowser",children:"defaultBrowser"})," or ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode#lastlaunchedbrowser",children:"lastLaunchedBrowser"}),"."]})]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"connect",children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.connect",children:"connect(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"This method attaches Puppeteer to an existing browser instance."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"defaultargs",children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.defaultargs",children:"defaultArgs(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"executablepath",children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.executablepath",children:"executablePath(channel)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The default executable path."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"launch",children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"launch(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),(0,n.jsxs)(r.p,{children:["When using with ",(0,n.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,n.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,n.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,n.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,n.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"trimcache",children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.trimcache",children:"trimCache()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,n.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsx)(r.p,{children:"Note that the method does not check if any other Puppeteer versions installed on the host that use the same cache directory require the non-current binaries."})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,h=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)o.call(r,n)&&!p.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:h,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>d});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);