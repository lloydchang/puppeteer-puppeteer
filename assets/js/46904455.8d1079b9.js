/*! For license information please see 46904455.8d1079b9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41648],{9525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=t(85893),a=t(11151);const l={sidebar_label:"ElementHandle.$$eval"},s="ElementHandle.$$eval() method",i={id:"api/puppeteer.elementhandle.__eval",title:"ElementHandle.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the current element.",source:"@site/versioned_docs/version-21.8.0/api/puppeteer.elementhandle.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__eval",permalink:"/api/puppeteer.elementhandle.__eval",draft:!1,unlisted:!1,tags:[],version:"21.8.0",frontMatter:{sidebar_label:"ElementHandle.$$eval"},sidebar:"api",previous:{title:"ElementHandle.$$",permalink:"/api/puppeteer.elementhandle.__"},next:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"}},d={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"elementhandleeval-method",children:"ElementHandle.$$eval() method"}),"\n",(0,r.jsx)(n.p,{children:"Runs the given function on an array of elements matching the given selector in the current element."}),"\n",(0,r.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Selector"}),(0,r.jsx)(n.td,{children:"The selector to query for."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageFunction"}),(0,r.jsx)(n.td,{children:"Func | string"}),(0,r.jsx)(n.td,{children:"The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsx)(n.td,{children:"Params"}),(0,r.jsxs)(n.td,{children:["Additional arguments to pass to ",(0,r.jsx)("code",{children:"pageFunction"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsx)(n.p,{children:"A promise to the result of the function."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const feedHandle = await page.$('.feed');\nexpect(\n  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))\n).toEqual(['Hello!', 'Hi!']);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,l={},o=null,c=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:c,props:l,_owner:i.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);