if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a0bcea5c988864641c44e5da358b4962"},{url:"/_next/static/CCWv9_S-4UTxzG-LDVC9Z/_buildManifest.js",revision:"ea2277c45e496a2dfd9695246847fbe3"},{url:"/_next/static/CCWv9_S-4UTxzG-LDVC9Z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/534-38580fc8795921e3.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/553-d6941277237eee3f.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/584-8b4278200fa16b7c.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/614c548e-fb8f252057a48a43.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/648-e6a44ce4a93f779d.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/851-a254410f797d77c0.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/contact/page-68ff36f551ae98e3.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/layout-4bbfbea368c776c3.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/page-4f8837f0127483f5.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/projects/%5Bslug%5D/page-2eb3c1dd40eb9f14.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/projects/layout-375d6d5ca32bfbf6.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/app/projects/page-d8ebb1d93b35e557.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/main-2a26a8729a1d13c1.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/main-app-02779368cd61be3b.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/pages/_app-a36de411b1297df8.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/pages/_error-1f31619679f434a8.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8c585fd0e07d36d9.js",revision:"CCWv9_S-4UTxzG-LDVC9Z"},{url:"/_next/static/css/4332eee14cae2b92.css",revision:"4332eee14cae2b92"},{url:"/_next/static/css/cf791acba6f19689.css",revision:"cf791acba6f19689"},{url:"/_next/static/media/162bf645eb375add-s.p.ttf",revision:"ea46d0b48797069c0d1d092a40988da0"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/favicon.png",revision:"a6bdcb4c3e438b595f846f3f608606c7"},{url:"/fonts/CalSans-SemiBold.ttf",revision:"ea46d0b48797069c0d1d092a40988da0"},{url:"/icon-192x192.png",revision:"db9a4f7ed5fee28bef534f231ac168fe"},{url:"/icon-256x256.png",revision:"10be60ace24f4692d87deb86fe62211e"},{url:"/icon-384x384.png",revision:"1690f1c0db7a927e3739b2a69f0cc98c"},{url:"/icon-512x512.png",revision:"aa046e2fe520d6a87513d7b381b3ded4"},{url:"/images/cevi-clock.png",revision:"b9d002b64c15fff4d4dd2f1aee8e67d8"},{url:"/images/intellij-file-finder.png",revision:"a0bfe7359902c250465fb57a4a5bd115"},{url:"/images/swiss-banking-certificate-of-gratitude.jpg",revision:"c5a490a377537e7b4f921e32943760ef"},{url:"/manifest.webmanifest",revision:"a62110fb033e6d8eaa1c033d15fbf0f3"},{url:"/og.png",revision:"05a8c5d578adcf098c8dfc8afa0942fd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>self.origin===e.origin&&!(!e.pathname.startsWith("/_next/data/")||-1===e.pathname.indexOf(".json"))),new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{cacheWillUpdate:async({request:e,response:s})=>e.headers.get("x-middleware-prefetch")||s.headers.get("x-middleware-skip")?null:200===s.status?s:null},{cachedResponseWillBeUsed:async({cacheName:e,request:s,matchOptions:a,cachedResponse:n,event:i})=>n&&n.headers.get("x-middleware-skip")?null:n}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/callback/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
