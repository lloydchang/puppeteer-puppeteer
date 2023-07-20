"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={},l="Contributing",s={unversionedId:"contributing",id:"version-20.9.0/contributing",title:"Contributing",description:"First of all, thank you for your interest in Puppeteer! We'd love to accept your",source:"@site/versioned_docs/version-20.9.0/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,tags:[],version:"20.9.0",frontMatter:{},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/troubleshooting"},next:{title:"FAQ",permalink:"/faq"}},p={},u=[{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Building a single package",id:"building-a-single-package",level:2},{value:"Watch mode",id:"watch-mode",level:3},{value:"Removing stale artifacts",id:"removing-stale-artifacts",level:2},{value:"Comprehensive testing",id:"comprehensive-testing",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"Code reviews",id:"code-reviews",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"API guidelines",id:"api-guidelines",level:2},{value:"Commit messages",id:"commit-messages",level:2},{value:"Writing documentation",id:"writing-documentation",level:2},{value:"Writing TSDoc comments",id:"writing-tsdoc-comments",level:2},{value:"Running the documentation site locally",id:"running-the-documentation-site-locally",level:2},{value:"Adding new dependencies",id:"adding-new-dependencies",level:2},{value:"Testing tips",id:"testing-tips",level:2},{value:"API Coverage",id:"api-coverage",level:2},{value:"Debugging Puppeteer",id:"debugging-puppeteer",level:2},{value:"Debugging Puppeteer tests via VSCode",id:"debugging-puppeteer-tests-via-vscode",level:3},{value:"Rolling new Chrome version",id:"rolling-new-chrome-version",level:2},{value:"Manual instructions",id:"manual-instructions",level:3},{value:"Bisecting upstream changes",id:"bisecting-upstream-changes",level:3},{value:"Releasing to npm",id:"releasing-to-npm",level:2},{value:"In case Release Please fails",id:"in-case-release-please-fails",level:3},{value:"Bug triage guidelines",id:"bug-triage-guidelines",level:2}],m={toc:u};function c(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"contributing"}),"Contributing"),(0,a.kt)("p",null,"First of all, thank you for your interest in Puppeteer! We'd love to accept your\npatches and contributions!"),(0,a.kt)("h2",i({},{id:"contributor-license-agreement"}),"Contributor License Agreement"),(0,a.kt)("p",null,"Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution,\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to ",(0,a.kt)("a",i({parentName:"p"},{href:"https://cla.developers.google.com/"}),"https://cla.developers.google.com/")," to see\nyour current agreements on file or to sign a new one."),(0,a.kt)("p",null,"You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."),(0,a.kt)("h2",i({},{id:"getting-started"}),"Getting started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone this repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/puppeteer/puppeteer\ncd puppeteer\n")),(0,a.kt)("p",{parentName:"li"},"or"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=90796663&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json"}),(0,a.kt)("img",i({parentName:"a"},{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"}))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the dependencies"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm install\n# Or to download Firefox\nPUPPETEER_PRODUCT=firefox npm install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build all packages"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run build\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run all tests"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm test\n")))),(0,a.kt)("h2",i({},{id:"building-a-single-package"}),"Building a single package"),(0,a.kt)("p",null,"To build a single package, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run build --workspace <package> # e.g. puppeteer\n")),(0,a.kt)("p",null,"This will build all dependent packages automatically, so specifying a single\npackages is sufficient. This is all possible due to\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/google/wireit"}),"wireit")," which behaves similar to\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.gnu.org/software/make/"}),"GNU Make"),"."),(0,a.kt)("h3",i({},{id:"watch-mode"}),"Watch mode"),(0,a.kt)("p",null,"To continuously build a package, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run build --watch --workspace <package> # e.g. puppeteer\n")),(0,a.kt)("p",null,"You have to only specify a single package to watch else things will not work as expected\nAs stated above because of ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/google/wireit"}),"wireit")," when a change happens\nall dependencies will be build or rebuild (if needed)."),(0,a.kt)("h2",i({},{id:"removing-stale-artifacts"}),"Removing stale artifacts"),(0,a.kt)("p",null,"It's possible some generated artifacts (such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"packages/puppeteer-core/src/types.ts"),") can become stale since these artifacts\nrely on complex conditions (such as names of distinct files) that cannot be\ncaptured by the build system. To clean artifacts, you can run"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run clean\n# or specify the package\nnpm run clean --workspace <package>\n")),(0,a.kt)("h2",i({},{id:"comprehensive-testing"}),"Comprehensive testing"),(0,a.kt)("p",null,"Outside of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test"),", there are several other\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.npmjs.com/cli/using-npm/scripts"}),(0,a.kt)("inlineCode",{parentName:"a"},"npm")," scripts")," that are\nusually check through CI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test-install")," - Tests whether ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer-core")," install\nproperly and are functional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test-types")," - Tests the TypeScript types in ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer")," using\n",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/SamVerschueren/tsd"}),(0,a.kt)("inlineCode",{parentName:"a"},"tsd")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test:chrome:**")," - Tests ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer")," on Chromium."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test:firefox:**")," - Tests ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer")," on Firefox."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unit")," - Runs unit tests.")),(0,a.kt)("p",null,"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test")," runs ",(0,a.kt)("inlineCode",{parentName:"p"},"test:{chrome,firefox}:headless")," which is generally\nsufficient."),(0,a.kt)("p",null,"Puppeteer uses a custom test runner on top of Mocha that consults the\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/test/TestExpectations.json"}),"TestExpectations.json"),"\nto see if a given test result is expected or not. See more info about the test\nrunner in\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/tree/main/tools/mochaRunner"}),(0,a.kt)("inlineCode",{parentName:"a"},"tools/mochaRunner")),"."),(0,a.kt)("h3",i({},{id:"unit-tests"}),"Unit tests"),(0,a.kt)("p",null,"Tests that only test code (without the running browser) are put next to the classes they test\nand run using the Node test runner (requires Node 20+):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run unit\n")),(0,a.kt)("h2",i({},{id:"code-reviews"}),"Code reviews"),(0,a.kt)("p",null,"All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://help.github.com/articles/about-pull-requests/"}),"GitHub Help")," for more\ninformation on using pull requests."),(0,a.kt)("h2",i({},{id:"code-style"}),"Code Style"),(0,a.kt)("p",null,"Our coding style is fully defined in\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/.eslintrc.js"}),(0,a.kt)("inlineCode",{parentName:"a"},".eslintrc")),"\n(",(0,a.kt)("a",i({parentName:"p"},{href:"https://eslint.org/"}),"ESLint"),") and\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/.prettierrc.cjs"}),(0,a.kt)("inlineCode",{parentName:"a"},".prettierrc.cjs")),"\n(",(0,a.kt)("a",i({parentName:"p"},{href:"https://prettier.io"}),"Prettier"),")."),(0,a.kt)("p",null,"Code is checked for PRs automatically and you can check your code\nmanually by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run lint\n")),(0,a.kt)("p",null,"If some errors are returned, you can attempt to fix them using:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run format\n")),(0,a.kt)("h2",i({},{id:"project-structure"}),"Project structure"),(0,a.kt)("p",null,"The following is a description of the primary folders in Puppeteer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"packages")," contains all public source code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")," contains all test source code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test-d")," contains type tests using\n",(0,a.kt)("a",i({parentName:"li"},{href:"https://github.com/SamVerschueren/tsd"}),(0,a.kt)("inlineCode",{parentName:"a"},"tsd")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tools")," contains miscellaneous scripts that are used in building and etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tools/mochaRunner")," - contains the source code for our test runner.")),(0,a.kt)("h2",i({},{id:"api-guidelines"}),"API guidelines"),(0,a.kt)("p",null,"When authoring new API methods, consider the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expose as little information as needed. When in doubt, don\u2019t expose new\ninformation."),(0,a.kt)("li",{parentName:"ul"},"Methods are used in favor of getters/setters.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The only exception is namespaces, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"page.keyboard")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"page.coverage")))),(0,a.kt)("li",{parentName:"ul"},"All string literals must be small case. This includes event names and option\nvalues."),(0,a.kt)("li",{parentName:"ul"},'Avoid adding "sugar" API (API that is trivially implementable in user-space)\nunless they\'re ',(0,a.kt)("strong",{parentName:"li"},"extremely")," demanded.")),(0,a.kt)("h2",i({},{id:"commit-messages"}),"Commit messages"),(0,a.kt)("p",null,"Commit messages should follow\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"}),"the Conventional Commits format"),"."),(0,a.kt)("p",null,"In particular, breaking changes should clearly be noted as \u201cBREAKING CHANGE:\u201d in\nthe commit message footer. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"fix(page): fix page.pizza method\n\nThis patch fixes page.pizza so that it works with iframes.\n\nIssues: #123, #234\n\nBREAKING CHANGE: page.pizza now delivers pizza at home by default.\nTo deliver to a different location, use the \"deliver\" option:\n  `page.pizza({deliver: 'work'})`.\n")),(0,a.kt)("h2",i({},{id:"writing-documentation"}),"Writing documentation"),(0,a.kt)("p",null,"Documentation is generated from TSDoc comments via ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run docs"),". It is automatically\npublished to our documentation site on merge and gets versioned on release."),(0,a.kt)("p",null,"This means that you should not change the markdown in files ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/api")," manually."),(0,a.kt)("h2",i({},{id:"writing-tsdoc-comments"}),"Writing TSDoc comments"),(0,a.kt)("p",null,"Each change to Puppeteer should be thoroughly documented using TSDoc comments.\nRefer to the\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://api-extractor.com/pages/tsdoc/doc_comment_syntax/"}),"API Extractor documentation"),"\nfor information on the exact syntax."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every new method needs to have either ",(0,a.kt)("inlineCode",{parentName:"li"},"@public")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"@internal")," added as a tag\ndepending on if it is part of the public API."),(0,a.kt)("li",{parentName:"ul"},"Keep each line in a comment to no more than 90 characters (ESLint will warn\nyou if you go over this). If you're a VSCode user the\n",(0,a.kt)("a",i({parentName:"li"},{href:"https://marketplace.visualstudio.com/items?itemName=stkb.rewrap"}),"Rewrap plugin"),"\nis highly recommended!")),(0,a.kt)("h2",i({},{id:"running-the-documentation-site-locally"}),"Running the documentation site locally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At root, install all dependencies with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i --ignore-scripts"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run docs")," which will generate all the ",(0,a.kt)("inlineCode",{parentName:"li"},".md")," files on\n",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/docs/api"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/website"),"."),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"puppeteer/website"),".")),(0,a.kt)("h2",i({},{id:"adding-new-dependencies"}),"Adding new dependencies"),(0,a.kt)("p",null,"For all dependencies (both installation and development):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not add")," a dependency if the desired functionality is easily\nimplementable."),(0,a.kt)("li",{parentName:"ul"},"If adding a dependency, it should be well-maintained and trustworthy.")),(0,a.kt)("p",null,"A barrier for introducing new installation dependencies is especially high:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not add")," installation dependency unless it's critical to project\nsuccess.")),(0,a.kt)("p",null,"There are additional considerations for dependencies that are environment\nagonistic. See the\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/third_party/README.md"}),(0,a.kt)("inlineCode",{parentName:"a"},"third_party/README.md")),"\nfor details."),(0,a.kt)("h2",i({},{id:"testing-tips"}),"Testing tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every feature should be accompanied by a test."),(0,a.kt)("li",{parentName:"ul"},"Every public api event/method should be accompanied by a test."),(0,a.kt)("li",{parentName:"ul"},"Tests should not depend on external services."),(0,a.kt)("li",{parentName:"ul"},"Tests should work on all three platforms: Mac, Linux and Win. This is\nespecially important for screenshot tests.")),(0,a.kt)("p",null,"If a test is expected to fail on certain configurations or became flaky, update\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/test/TestExpectations.json"}),"TestExpectations.json"),"\nto reflect that. See more info about TestExpectations.json in\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/tree/main/tools/mochaRunner"}),(0,a.kt)("inlineCode",{parentName:"a"},"tools/mochaRunner")),"."),(0,a.kt)("h2",i({},{id:"api-coverage"}),"API Coverage"),(0,a.kt)("p",null,"Every public API method or event should be called at least once in tests. To\nensure this, the main ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command runs coverage during testing."),(0,a.kt)("h2",i({},{id:"debugging-puppeteer"}),"Debugging Puppeteer"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",i({parentName:"p"},{href:"https://pptr.dev/guides/debugging"}),"Debugging Tips"),"."),(0,a.kt)("h3",i({},{id:"debugging-puppeteer-tests-via-vscode"}),"Debugging Puppeteer tests via VSCode"),(0,a.kt)("p",null,"Copy the provided default ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.template.json")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," and then use the integrated VSCode debugger to debug test."),(0,a.kt)("p",null,"Remember to build test before launching via:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run build --workspace @puppeteer-test/test\n")),(0,a.kt)("h1",i({},{id:"for-project-maintainers"}),"For Project Maintainers"),(0,a.kt)("h2",i({},{id:"rolling-new-chrome-version"}),"Rolling new Chrome version"),(0,a.kt)("p",null,"There is a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/.github/workflows/update-browser-pins.yml"}),"GitHub action")," that runs once per day.\nThe action has a manual trigger that can be found on the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/actions/workflows/update-browser-pins.yml"}),"Actions Tab"),"."),(0,a.kt)("h3",i({},{id:"manual-instructions"}),"Manual instructions"),(0,a.kt)("p",null,"You can run the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/tools/update_chrome_revision.mjs"}),(0,a.kt)("inlineCode",{parentName:"a"},"tools/update_chrome_revision.mjs"))," locally\nand try see if any changes need to be committed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You may need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"node --experimental-fetch tools/update_chrome_revision.mjs")," as the script relies on ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"))),(0,a.kt)("p",null,"The following steps are manual version of the script above."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find a suitable Chrome ",(0,a.kt)("inlineCode",{parentName:"li"},"revision")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," via ",(0,a.kt)("a",i({parentName:"li"},{href:"https://googlechromelabs.github.io/chrome-for-testing/"}),"https://googlechromelabs.github.io/chrome-for-testing/")," or ",(0,a.kt)("a",i({parentName:"li"},{href:"https://chromiumdash.appspot.com/"}),"https://chromiumdash.appspot.com/"),"."),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/puppeteer-core/src/revisions.ts")," with the found ",(0,a.kt)("inlineCode",{parentName:"li"},"version"),"\nnumber."),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"versions.js")," with the new Chrome-to-Puppeteer ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," mapping and\nupdate ",(0,a.kt)("inlineCode",{parentName:"li"},"lastMaintainedChromeVersion")," with the the next one in from the list."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run check"),". If it fails, update\n",(0,a.kt)("inlineCode",{parentName:"li"},"packages/puppeteer-core/package.json"),"\nwith the expected ",(0,a.kt)("inlineCode",{parentName:"li"},"devtools-protocol")," version and run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," to generate an updated ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run clean"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm test")," and ensure that all tests pass. If a test fails,\n",(0,a.kt)("a",i({parentName:"li"},{href:"#bisecting-upstream-changes"}),"bisect")," the upstream cause of the failure, and\neither update the test expectations accordingly (if it was an intended\nchange) or work around the changes in Puppeteer (if it\u2019s not desirable to\nchange Puppeteer\u2019s observable behavior)."),(0,a.kt)("li",{parentName:"ol"},"Commit and push your changes and open a pull request. The commit message must\ncontain the version in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chrome <version> (r<revision>)")," format to ensure\nthat ",(0,a.kt)("a",i({parentName:"li"},{href:"https://pptr.dev/"}),"pptr.dev")," can parse it correctly, e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"feat(chrome): roll to Chrome 90.0.4427.0 (r856583)"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Another place you can find version corresponding version is ",(0,a.kt)("a",i({parentName:"p"},{href:"https://omahaproxy.appspot.com/"}),"omahaproxy.appspot.com")," by\nsearching in ",(0,a.kt)("inlineCode",{parentName:"p"},"Find Releases")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"r<revision>"),".")),(0,a.kt)("h3",i({},{id:"bisecting-upstream-changes"}),"Bisecting upstream changes"),(0,a.kt)("p",null,"For bisecting Chrome/Chromium changes use ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.chromium.org/developers/bisect-builds-py/"}),"https://www.chromium.org/developers/bisect-builds-py/"),"."),(0,a.kt)("h2",i({},{id:"releasing-to-npm"}),"Releasing to npm"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/googleapis/release-please"}),"release-please")," to\nautomate releases. When a release should be done, check for the release PR in\nour ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/pulls"}),"pull requests")," and merge it."),(0,a.kt)("h3",i({},{id:"in-case-release-please-fails"}),"In case Release Please fails"),(0,a.kt)("p",null,"In the event release-please fails, the following needs to be done:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update anything missing in the CHANGELOG of every package that was supposed\nto be published. For example, if the header is missing, you may need to add"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For puppeteer:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-md"}),"## [{NEW_VERSION}](https://github.com/puppeteer/puppeteer/compare/v{PREVIOUS_VERSION}...v{NEW_VERSION}) ({CURRENT_DATE})`\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For other packages:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-md"}),"## [{NEW_VERSION}](https://github.com/puppeteer/puppeteer/compare/{PACKAGE_FOLDER_NAME}-v{PREVIOUS_VERSION}...{PACKAGE_FOLDER_NAME}-v{NEW_VERSION}) ({CURRENT_DATE})\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a GitHub release for each package, following the practice of previous\nreleases."))),(0,a.kt)("h2",i({},{id:"bug-triage-guidelines"}),"Bug triage guidelines"),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues"}),"Check incoming bug reports")," that do not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"confirmed")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"needs-feedback")," label:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure the issue is labeled as either ",(0,a.kt)("inlineCode",{parentName:"li"},"bug")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"feature"),"."),(0,a.kt)("li",{parentName:"ol"},"If the issue does not have a clear repro or you cannot repro, ask for the repro and set the ",(0,a.kt)("inlineCode",{parentName:"li"},"needs-feedback")," label."),(0,a.kt)("li",{parentName:"ol"},"Follow-up on the issues you previously asked for a feedback on (you should get a notification on GitHub when the user responds)."),(0,a.kt)("li",{parentName:"ol"},"If the user does not provide feedback, the issue will be closed by the stale bot eventually."),(0,a.kt)("li",{parentName:"ol"},"If you are able to reproduce the issue, add the label ",(0,a.kt)("inlineCode",{parentName:"li"},"confirmed"),"."),(0,a.kt)("li",{parentName:"ol"},"If the bug is on the Chromium side, create a corresponding crbug.com issue, label the GitHub issue with the ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream")," label, and post a link to crbug.com in the comments."),(0,a.kt)("li",{parentName:"ol"},"If the issue is not related to either Puppeteer or Chromium, close the issue."),(0,a.kt)("li",{parentName:"ol"},"If the issue is about missing/incorrect documentation, label it as ",(0,a.kt)("inlineCode",{parentName:"li"},"documentation"),".")),(0,a.kt)("p",null,"Issues with PDFs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the issue reproduces using the regular print dialog and/or headful, ",(0,a.kt)("a",i({parentName:"li"},{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ELayout"}),"file a crbug.com against the ",(0,a.kt)("inlineCode",{parentName:"a"},"Blink>Layout")," component"),"."),(0,a.kt)("li",{parentName:"ol"},"If the issue is specific to Headless mode, ",(0,a.kt)("a",i({parentName:"li"},{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Internals%3EHeadless"}),"file an issue on crbug.com against the ",(0,a.kt)("inlineCode",{parentName:"a"},"Internals>Headless")," component"),".")))}c.isMDXComponent=!0}}]);