"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[2022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,h=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const i={title:"Installation",description:"OSC Docs Installation",sidebar_position:2},a="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"OSC Docs Installation",source:"@site/docs/osc-docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/osc-docs/installation",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/osc-docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",description:"OSC Docs Installation",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/osc-docs/"},next:{title:"Usage",permalink:"/docs/osc-docs/usage"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"System Development Libraries",id:"system-development-libraries",level:3},{value:"Installing Xcode Command Line Tools:",id:"installing-xcode-command-line-tools",level:4},{value:"Build Essential (for Linux)",id:"build-essential-for-linux",level:4},{value:"Git",id:"git",level:3},{value:"NodeJS &amp; NPM",id:"nodejs--npm",level:3},{value:"Text Editor",id:"text-editor",level:3},{value:"Cloning the Repository",id:"cloning-the-repository",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"The OSC Docs project requires certain dependencies to be installed on the user's machine."),(0,l.kt)("h3",{id:"system-development-libraries"},"System Development Libraries"),(0,l.kt)("p",null,"If you are using macOS, you will need to install Xcode Command Line Tools. These tools provide essential development libraries and utilities, including Git, which is required for the OSC Docs project and other development tasks."),(0,l.kt)("h4",{id:"installing-xcode-command-line-tools"},"Installing Xcode Command Line Tools:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Open Terminal, which can be found in the Utilities folder within the Applications folder, or you can use Spotlight search (Cmd + Space) and type "Terminal" to open it.'),(0,l.kt)("li",{parentName:"ol"},"Enter the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},'A dialog will pop up asking you to install the Xcode Command Line Tools. Click "Install" and follow the on-screen instructions.')),(0,l.kt)("h4",{id:"build-essential-for-linux"},"Build Essential (for Linux)"),(0,l.kt)("p",null,"If you are using a Linux distribution, you'll need to ensure you have the ",(0,l.kt)("inlineCode",{parentName:"p"},"build-essential")," package installed. This package includes essential tools for building software on a Linux system, such as compilers and libraries."),(0,l.kt)("p",null,"For Debian-based distributions (e.g., Ubuntu):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install build-essential\n")),(0,l.kt)("p",null,"For Red Hat-based distributions (e.g., Fedora):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo dnf groupinstall "Development Tools"\n')),(0,l.kt)("p",null,"For Arch Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S base-devel\n")),(0,l.kt)("p",null,"The installation process will depend on your specific Linux distribution. Once build-essential is installed, you'll have the necessary tools for development on your Linux system."),(0,l.kt)("h3",{id:"git"},"Git"),(0,l.kt)("p",null,"Git is a version control system that's necessary for installing the project and collaborating with others."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the official Git website: ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,l.kt)("li",{parentName:"ol"},"Download the installer for your operating system (Windows, macOS, or Linux)."),(0,l.kt)("li",{parentName:"ol"},"Run the installer and follow the on-screen instructions to install Git.")),(0,l.kt)("h3",{id:"nodejs--npm"},"NodeJS & NPM"),(0,l.kt)("p",null,"The OSC Docs website is built using NodeJS, so you'll need to have it installed prior to running the site."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the official Node.js website: ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"https://nodejs.org/")),(0,l.kt)("li",{parentName:"ol"},"Download the LTS (Long-Term Support) version for your operating system."),(0,l.kt)("li",{parentName:"ol"},"Run the installer and follow the installation instructions."),(0,l.kt)("li",{parentName:"ol"},"After installation, open your command line (Terminal on macOS/Linux, Command Prompt on Windows) and run the following commands to verify that Node.js and NPM are installed:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,l.kt)("h3",{id:"text-editor"},"Text Editor"),(0,l.kt)("p",null,"You'll need a text editor to write and modify your Docusaurus project files. Many developers prefer using code editors with syntax highlighting and other useful features."),(0,l.kt)("p",null,"Some popular text editors and Integrated Development Environments (IDEs) for web development include:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visual Studio Code: ",(0,l.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),(0,l.kt)("li",{parentName:"ol"},"Sublime Text: ",(0,l.kt)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"https://www.sublimetext.com/")),(0,l.kt)("li",{parentName:"ol"},"Atom: ",(0,l.kt)("a",{parentName:"li",href:"https://atom.io/"},"https://atom.io/")),(0,l.kt)("li",{parentName:"ol"},"JetBrains WebStorm: ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/webstorm/"},"https://www.jetbrains.com/webstorm/")),(0,l.kt)("li",{parentName:"ol"},"Emacs ",(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/emacs/"},"https://www.gnu.org/software/emacs/")," (requires IQ > 160).")),(0,l.kt)("p",null,"Choose the one that suits your preferences and install it on your system."),(0,l.kt)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),(0,l.kt)("p",null,"Cloning the repository requires having Git installed. 'Cloning' will install a copy of the project. To install OSC Docs on your system, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ufosc/osc-docs.git\n")),(0,l.kt)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,l.kt)("p",null,"To install the project's dependencies, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd osc-docs\nnpm i\n")),(0,l.kt)("p",null,"You're now ready to start using the OSC Docs website. Continue to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/osc-docs/usage"},"Usage")," to start the development server."))}u.isMDXComponent=!0}}]);