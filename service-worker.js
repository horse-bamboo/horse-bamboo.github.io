if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-03ef139c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"horse-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.b59a9059.css",revision:null},{url:"/css/chunk-vendors.4bca4d6a.css",revision:null},{url:"/index.html",revision:"230f16a439cf69a033d496261c69bcd0"},{url:"/js/about.15be1fd4.js",revision:null},{url:"/js/app.a6f3daa4.js",revision:null},{url:"/js/chunk-vendors.e4270225.js",revision:null},{url:"/manifest.json",revision:"8e7af2fca53ffff99b72a55d0b220c74"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
