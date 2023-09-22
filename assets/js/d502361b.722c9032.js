"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[7445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Usage",description:"OSC Docs Usage",sidebar_position:3},i="Usage",l={unversionedId:"usage",id:"usage",title:"Usage",description:"OSC Docs Usage",source:"@site/docs/osc-docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/docs/osc-docs/usage",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/osc-docs/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Usage",description:"OSC Docs Usage",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/docs/osc-docs/installation"},next:{title:"Markdown",permalink:"/docs/osc-docs/markdown"}},s={},c=[{value:"Running the Project",id:"running-the-project",level:2},{value:"Linting",id:"linting",level:2},{value:"Building",id:"building",level:2},{value:"Serving Locally",id:"serving-locally",level:2},{value:"Deploying to GitHub Pages",id:"deploying-to-github-pages",level:2},{value:"Clearing Build Files",id:"clearing-build-files",level:2},{value:"Docusaurus",id:"docusaurus",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("admonition",{title:"Local Installation Required",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This section requires a local installation of the project repository. For installation instructions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/osc-docs/installation"},"Installation Guide"),".")),(0,o.kt)("h2",{id:"running-the-project"},"Running the Project"),(0,o.kt)("p",null,"Viewing local changes to the project requires launching a development server. This can be achieved by calling the following command on your terminal application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The command must be called from within the project's root directory. The program should automatically open the site's local URL on your browser. If not, it can be accessed by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),"."),(0,o.kt)("h2",{id:"linting"},"Linting"),(0,o.kt)("p",null,"The lint command is a linter command for Node.js projects that allows you to automatically analyze your codebase and identify potential issues or style violations. Linters are tools that enforce coding standards and best practices, helping developers maintain a consistent and clean codebase. Running the linter is necessary prior to committing to the codebase."),(0,o.kt)("p",null,"To list potential style errors, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lint\n")),(0,o.kt)("p",null,"To (try) to automatically fix style errors, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run fix\n")),(0,o.kt)("p",null,"Please note that if the ",(0,o.kt)("inlineCode",{parentName:"p"},"fix")," command returns errors, they'll have to be manually resolved."),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"Docusaurus works by compiling Markdown files into static website files (HTML, CSS, JavaScript, etc.). If you're simply testing local changes, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," command will suffice. However, it is not appropriate to use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," in production environments. In order to host the site publicly, it must first be packaged and built. This is made possible with the build command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"Then, the ",(0,o.kt)("inlineCode",{parentName:"p"},"serve")," command (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/osc-docs/usage#serving-locally"},"Serving Locally"),") may be used to test the site before releasing it to the public."),(0,o.kt)("h2",{id:"serving-locally"},"Serving Locally"),(0,o.kt)("p",null,"The serve command may be used to test generated site files prior to releasing the site to the public. It exists as a final test before releases, and is not suitable for hosting on production environments. Nonetheless, it can be invoked by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,o.kt)("h2",{id:"deploying-to-github-pages"},"Deploying to GitHub Pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command is used for deploying to GitHub pages. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment"},"Docusaurus site")," for documentation."),(0,o.kt)("h2",{id:"clearing-build-files"},"Clearing Build Files"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," command deletes automatically generated files (including build files). It can be invoked by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run clear\n")),(0,o.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus")," invokes the native Docusaurus command, displaying version info and usage instructions for internal commands. It may be invoked by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus\n")))}d.isMDXComponent=!0}}]);