(()=>{"use strict";var e,d,a,t,r,c={},f={};function b(e){var d=f[e];if(void 0!==d)return d.exports;var a=f[e]={id:e,loaded:!1,exports:{}};return c[e].call(a.exports,a,a.exports,b),a.loaded=!0,a.exports}b.m=c,b.c=f,e=[],b.O=(d,a,t,r)=>{if(!a){var c=1/0;for(i=0;i<e.length;i++){a=e[i][0],t=e[i][1],r=e[i][2];for(var f=!0,o=0;o<a.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](a[o])))?a.splice(o--,1):(f=!1,r<c&&(c=r));if(f){e.splice(i--,1);var n=t();void 0!==n&&(d=n)}}return d}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,t,r]},b.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return b.d(d,{a:d}),d},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};d=d||[null,a({}),a([]),a(a)];for(var f=2&t&&e;"object"==typeof f&&!~d.indexOf(f);f=a(f))Object.getOwnPropertyNames(f).forEach((d=>c[d]=()=>e[d]));return c.default=()=>e,b.d(r,c),r},b.d=(e,d)=>{for(var a in d)b.o(d,a)&&!b.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:d[a]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((d,a)=>(b.f[a](e,d),d)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",366:"6ca7e745",779:"9232a1e9",808:"2a3c7f3c",882:"00b93840",942:"2cc0550e",1936:"ea395eac",2022:"f95c0569",2424:"6d49fdd4",2644:"347d410c",2844:"f3976560",2886:"749ef08d",3085:"1f391b9e",3290:"0e39a0cd",3785:"e41e86bd",3903:"cbb21fe1",3933:"9d0ebba8",4199:"5bf5bdb1",4212:"12000fc4",4217:"bd19a0bf",4252:"26e5135d",4492:"6a2729da",4672:"8161bbfb",5031:"59a06d98",5041:"56f4606f",5290:"ebb803d9",5368:"b03ee68b",5442:"cad82f49",5466:"be3efe0c",5832:"409871ed",5850:"e1520d8a",5859:"ded0a667",6713:"d8a3a66a",6965:"5843de5d",7034:"28dfb2d5",7445:"d502361b",7764:"dd34c948",7918:"17896441",8007:"6c220528",8072:"7da8cb4d",8838:"35041632",8841:"12f0493a",9062:"75a7683f",9170:"e064b256",9197:"9b50b30c",9394:"31287fdd",9398:"bd7c2054",9465:"1de99325",9514:"1be78505",9809:"bdbf0ec8",9961:"3a1cec24",9992:"c4bf2b51"}[e]||e)+"."+{53:"58b299c1",366:"4c486b14",779:"0f2bbcc7",808:"d6cb5dad",882:"4c1bb53a",942:"84abafc5",1936:"c699dab2",2022:"ca70b4cc",2424:"2c3e450c",2644:"02f5a972",2844:"8db6801b",2886:"6de62b41",3085:"9992badf",3290:"2f8d1478",3785:"d774ddc9",3903:"5875b2a4",3933:"b30bc006",4199:"9037623f",4212:"67f35f03",4217:"4c743443",4252:"211e1a45",4492:"8ba1ee8b",4672:"e3ac6688",4972:"30ce52b4",5031:"26e2156b",5041:"94c4508b",5290:"1bde7368",5368:"78fe6403",5442:"e4e8a9ce",5466:"e05fea34",5832:"bc07c8bf",5850:"81587355",5859:"4d8c6162",6713:"6f319f29",6965:"b197a0f6",7034:"49d8fe67",7445:"722c9032",7764:"5d50aa3b",7918:"b28cf3c9",8007:"16e519b7",8072:"beaef1ea",8838:"185c8215",8841:"27ab380f",9062:"0ae5e331",9170:"2c087a03",9197:"224cf55c",9394:"4639f850",9398:"c79caf73",9455:"0727f4e1",9465:"edd22953",9514:"7c38c32c",9809:"093a46b0",9961:"dfa691f6",9992:"b73cd99f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),t={},r="osc-docs:",b.l=(e,d,a,c)=>{if(t[e])t[e].push(d);else{var f,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+a),f.src=e),t[e]=[d];var l=(d,a)=>{f.onerror=f.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(a))),d)return d(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918",35041632:"8838","935f2afb":"53","6ca7e745":"366","9232a1e9":"779","2a3c7f3c":"808","00b93840":"882","2cc0550e":"942",ea395eac:"1936",f95c0569:"2022","6d49fdd4":"2424","347d410c":"2644",f3976560:"2844","749ef08d":"2886","1f391b9e":"3085","0e39a0cd":"3290",e41e86bd:"3785",cbb21fe1:"3903","9d0ebba8":"3933","5bf5bdb1":"4199","12000fc4":"4212",bd19a0bf:"4217","26e5135d":"4252","6a2729da":"4492","8161bbfb":"4672","59a06d98":"5031","56f4606f":"5041",ebb803d9:"5290",b03ee68b:"5368",cad82f49:"5442",be3efe0c:"5466","409871ed":"5832",e1520d8a:"5850",ded0a667:"5859",d8a3a66a:"6713","5843de5d":"6965","28dfb2d5":"7034",d502361b:"7445",dd34c948:"7764","6c220528":"8007","7da8cb4d":"8072","12f0493a":"8841","75a7683f":"9062",e064b256:"9170","9b50b30c":"9197","31287fdd":"9394",bd7c2054:"9398","1de99325":"9465","1be78505":"9514",bdbf0ec8:"9809","3a1cec24":"9961",c4bf2b51:"9992"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(d,a)=>{var t=b.o(e,d)?e[d]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(d))e[d]=0;else{var r=new Promise(((a,r)=>t=e[d]=[a,r]));a.push(t[2]=r);var c=b.p+b.u(d),f=new Error;b.l(c,(a=>{if(b.o(e,d)&&(0!==(t=e[d])&&(e[d]=void 0),t)){var r=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;f.message="Loading chunk "+d+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}}),"chunk-"+d,d)}},b.O.j=d=>0===e[d];var d=(d,a)=>{var t,r,c=a[0],f=a[1],o=a[2],n=0;if(c.some((d=>0!==e[d]))){for(t in f)b.o(f,t)&&(b.m[t]=f[t]);if(o)var i=o(b)}for(d&&d(a);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},a=self.webpackChunkosc_docs=self.webpackChunkosc_docs||[];a.forEach(d.bind(null,0)),a.push=d.bind(null,a.push.bind(a))})()})();