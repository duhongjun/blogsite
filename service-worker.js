"use strict";var precacheConfig=[["/blogsite/index.html","a9859aeed77937b3a61fad2fe3760e97"],["/blogsite/pop-star.html","9db587c7dc8e4c9b6ac271c01d48a54d"],["/blogsite/resume.html","f57a13c5fc5abc480ea80948864e4e7d"],["/blogsite/snake.html","df53c40f98210dfbb2b3c7e366eb3b2e"],["/blogsite/static/css/index.decff448.css","d09ff9b3a35dbec90be6695c63e79ca7"],["/blogsite/static/css/resume.aa0f4b5e.css","741833775ec954856b26de7d82ffe284"],["/blogsite/static/css/snake.71ca3416.css","dddb1b9e5dd364022524126e6766134e"],["/blogsite/static/js/0.1eb6d77e.chunk.js","ea69927fdb66ca4cc34319b756c727ef"],["/blogsite/static/js/1.7d44c302.chunk.js","4dc3bd7685cc2c664226e5d149436837"],["/blogsite/static/js/10.6b0600db.chunk.js","d2107bf2d306d0b05aeb33bcbd7c01e2"],["/blogsite/static/js/11.43012c40.chunk.js","2a0f425a20565c9c2b4b27169d090f89"],["/blogsite/static/js/12.a163d923.chunk.js","5fa30960688d9c9c67ab771e063aa227"],["/blogsite/static/js/13.aad358e4.chunk.js","1a6a44e40dd57b94303a67bca1e4cf35"],["/blogsite/static/js/14.92cee0ed.chunk.js","8424838e67d91d73366eac5f9f5735e9"],["/blogsite/static/js/15.2a977fa5.chunk.js","e4b23552c1a7b2998afeda06e2fbaca7"],["/blogsite/static/js/2.9f76f057.chunk.js","7482adb39a10b0321716ade2803f3d5e"],["/blogsite/static/js/3.335b81a6.chunk.js","ebc7b9c4c51f7ab61dd3a14d48bd5001"],["/blogsite/static/js/4.88e374da.chunk.js","791cd40425eadd3dfde05120933cab03"],["/blogsite/static/js/5.f319eb47.chunk.js","5f8304b43e444143cac2e74feb8d35b5"],["/blogsite/static/js/6.ba4ce961.chunk.js","09616bf4ec1ca77f8b22a2ccfe589d36"],["/blogsite/static/js/7.e9e6dcce.chunk.js","a9cf5d0985e41a989c4499e887808719"],["/blogsite/static/js/8.880ba3da.chunk.js","d87a37769a6158ca2574749650f2a569"],["/blogsite/static/js/9.127040b3.chunk.js","0be78a250f7029004e05c92e1aae378d"],["/blogsite/static/js/index.ace89f49.js","150ae07a7e6117556f799ee5163d02c9"],["/blogsite/static/js/pop-star.b63562a7.js","24beb7e54a64a74adf1b0c1d580f93fa"],["/blogsite/static/js/resume.1df4d541.js","b0c3a86e213f2409094edf5d5486475b"],["/blogsite/static/js/snake.e07cd192.js","a274163d9a4ef923ce03d610a01350ba"],["/blogsite/static/media/ava.9419acc0.jpeg","9419acc07484e065a85c601294b1f430"],["/blogsite/static/media/octicons.190e7257.svg","190e72572ee84190f4777765fa49fc47"],["/blogsite/static/media/octicons.d038ccbc.eot","d038ccbc4a99be24f33a54b482b2422e"],["/blogsite/static/media/octicons.de59a972.woff2","de59a97248b44599e6747a27a943f738"],["/blogsite/static/media/octicons.e0d4a324.ttf","e0d4a324833e13be7d4fa762146d0a71"],["/blogsite/static/media/octicons.ee5b1bee.woff","ee5b1bee959a95bd43b223ec901d098a"],["/blogsite/static/media/wechat.404c5faa.png","404c5faa8fa912825a08be46ceb5b596"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),c=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var c="/blogsite/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});