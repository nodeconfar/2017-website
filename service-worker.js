/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["anshul-bhagi.html","5d8af23e98e418787f50cd3d662083ac"],["arunesh-chandra.html","a44281ca335238146f8ba981336a7480"],["assets/images/after.jpg","5117b21e4e8946ad7e72f46a05cb7c8d"],["assets/images/android-chrome-192x192.png","f2bc61fd8bad5cdde8d2a1a43a707ae5"],["assets/images/android-chrome-512x512.png","bdbfa60a14fa5538afb6f4e3277bfc0b"],["assets/images/apple-touch-icon.png","5115bb9fb9e31dadda797d32b5b9596f"],["assets/images/checkin.jpg","26f81f1b62b849dffddab6142b9ad702"],["assets/images/ciudad-call.jpg","07d9f8fdf2af317fa5a6653ca2132006"],["assets/images/ciudad.png","4dd539d63e8517c85a182ada7e1d2045"],["assets/images/coffee-break.jpg","816481c042c80b01ab6f9df84d67b83a"],["assets/images/debate.jpg","a2d437414994041beb0a1a2bf4f94044"],["assets/images/favicon.png","886cb269924b86b1b8fab1ef9e339f60"],["assets/images/header.png","a744e8c2699dddc39a0dd7f0e26df254"],["assets/images/ibm.jpg","c7aeb0da63c6e052a2b4f81eedf1249f"],["assets/images/lines-fotos.png","058c2939e4817d015335631b11db77e2"],["assets/images/lines-tickets.png","cf84a54e10ae588101d4917669a528c0"],["assets/images/logo-header-nodeconf.png","0bb68e4ec4204e40cc676ca86b683cf8"],["assets/images/logom-header-nodeconf.png","e3cedd7dbe22c2a56b2c3327ae859d2a"],["assets/images/lunch.jpg","7c2031b0061162ce2d78c8cab16fdde8"],["assets/images/media-academica.png","c9b4a824ec1eacc1f7e9adae1621a248"],["assets/images/media-brasil.png","7e40be1c95a77b4f5d17931e688215dd"],["assets/images/media-ecuestasit.png","950e5dbdaf13dfd15b4ba5423352343d"],["assets/images/media-educacionit.png","c132fc14e6be577bf51cd992847bf1f4"],["assets/images/media-gdgrdlp.png","b62d07933d7b7132f4305c379262f88b"],["assets/images/media-meetupjs.png","bea891f87a376aba15065ab6f05037e0"],["assets/images/media-nerdearla.png","2bf7149bad4aac7bf5a78ae048ac690f"],["assets/images/media-ngbaires.png","537b000b8ecea2c8e49053d9ddc65f11"],["assets/images/media-node.jpg","996df601b99d8da9d15e9388b766d363"],["assets/images/media-nodes.png","d9d68fb50bcbbefbda49dd377f07101c"],["assets/images/media-platajs.png","9f71be9b0fc3adabbeacd74a0745cae4"],["assets/images/mstile-150x150.png","af32fc2310abc9fb0ea255294d65e810"],["assets/images/profile-ale.jpg","0933f71c7751db9d0c3dbf5b51d8e9df"],["assets/images/profile-camila.jpg","5920544ad5434c6a5d742433e54f70d8"],["assets/images/profile-karen.jpg","7d7d952c59b047a5d703f085a3345e53"],["assets/images/profile-lars.jpg","76b9b31fb60f3ddb2bc5f32e21797fba"],["assets/images/profile-nico.jpg","53c958207525da9bd38b60a401950084"],["assets/images/speakers/anshul.jpg","7490e628cf477903e58d0724d5496f68"],["assets/images/speakers/arunesh.jpg","52bbef0f5077a2bcf8e3a9815669d884"],["assets/images/speakers/athan.jpg","8a5660e59fad08e23d2c731cc8a5075b"],["assets/images/speakers/bert.jpg","0227f56005d1588da92922392f857b1c"],["assets/images/speakers/bynens.jpg","c78634543158b78a155d91585aa5e574"],["assets/images/speakers/claudia.jpg","bd7617a93f3d4b9b9ede0f3325ed0f8e"],["assets/images/speakers/duque.jpg","dc7737ccee2f07d8e34968effb9b1a5c"],["assets/images/speakers/felipe.jpg","4d8b42ec45d15a82854346d75aca55d3"],["assets/images/speakers/garrett.jpg","49547852d19ee26b69d0971d2cd3fb5a"],["assets/images/speakers/gimenez.jpg","572fb7155208514b9902c376bd5724df"],["assets/images/speakers/hunter.jpg","212bf5e31f2dc09387ce1cd99fe3cbd0"],["assets/images/speakers/kat.jpg","122e91f5cbaee0e9a046df26bf6ac6aa"],["assets/images/speakers/khan.jpg","3e23fe47c0e860c05fc1c95c4c5dcb96"],["assets/images/speakers/lembeck.jpg","95185e0d64828b3a21d50622350be460"],["assets/images/speakers/lenny.jpg","be1ff02d5ede90b7e0cb628989383969"],["assets/images/speakers/mckelvey.jpg","19eda7b8d03569a1938df4886610f658"],["assets/images/speakers/misc1.png","02efba81ff394315b9f9dc6bbc714f6f"],["assets/images/speakers/nikhila.jpg","ef26ff2b8820a5736e256546b8bde010"],["assets/images/speakers/paz.jpg","ef42223b40cce5b9602710520a390b9b"],["assets/images/speakers/perch.jpg","6ada9acb9bfab835f396c3b77774af13"],["assets/images/speakers/profile-w.png","73f740ae41a34a084cf9c516d6ddc199"],["assets/images/speakers/profile.png","50a5fad5ce54698fa1f53d1385504ca5"],["assets/images/speakers/ravi.jpg","f109a03847aa292f09931dc0e1882d22"],["assets/images/speakers/soon.png","d64c7cbca6564b4ecbab0531c0c42953"],["assets/images/speakers/vazquez.jpg","f38777273c03b1c853a881bb9ad7ffec"],["assets/images/speakers/w-block.jpg","f842f7b8bdce91e102c8f9bc9d3435db"],["assets/images/speakers/w-bort.jpg","db63a60c09c4cff107dae4a8de178388"],["assets/images/speakers/w-felman.jpg","d9c831cf7e393a2ee2d0265fc63a93cf"],["assets/images/speakers/w-jcano.jpg","47c81f6aa5654ada3b32888054df4a99"],["assets/images/speakers/w-lpitelli.jpg","4febb3bfdfba52263e22a28ff89f7901"],["assets/images/speakers/w-marcos.jpg","635d969bcb3ce941e05a2fc54f532953"],["assets/images/speakers/w-milian.jpg","31a9800151bed5e8d17a919f47a548b9"],["assets/images/speakers/w-walter.jpg","09369f8348e89450f26d74c75fb30529"],["assets/images/speakers/yamil.jpg","9221a0cd5328bd4ae549cff73aaa8d7d"],["assets/images/sponsor-ag2.png","6f7141baaa2d5d9bb102defac34a7aad"],["assets/images/sponsor-almundo.png","7697791fef2d75d08451c130d5bf6bec"],["assets/images/sponsor-auth0.png","a8e49c6b5efc4727540c97468e90c149"],["assets/images/sponsor-axiomzen.png","15ffd11d231067c4b2c8b5909e80c3ec"],["assets/images/sponsor-belatrix.png","725378048620da5ad7130bb9abe0d52e"],["assets/images/sponsor-cloud.png","6e2aca11c85fa5f587ad74a2b07f2f57"],["assets/images/sponsor-elementum.png","4bdc7bfcbd56b86cec198cae5c2917a8"],["assets/images/sponsor-globant.png","671cd7ec770be748b622f1eae1a2de8d"],["assets/images/sponsor-google.png","d66ae072382914ed66e671d5bfaa3f6f"],["assets/images/sponsor-ibm.png","389d03c26d8a6ff0553537002274714f"],["assets/images/sponsor-matr.png","bdab795e664ad01024bc3f28450be011"],["assets/images/sponsor-medallia.png","105b14b2c492fdd7a70ab55d971c3d2d"],["assets/images/sponsor-mercadolibre.png","1d191da91b7731f98a7356e26fa83883"],["assets/images/sponsor-microsoft.png","99ae1f917bfb5679c42f978f17197264"],["assets/images/sponsor-mulesoft.png","c3837b9a91067506d822cf2632256fc2"],["assets/images/sponsor-nodesource.png","d6fec6d479f864c6d0f0939ad03c60ef"],["assets/images/sponsor-npm.png","17cd66c74670ff8febd4e3ae32214be3"],["assets/images/sponsor-pager.png","9aa28db715d69a842b83bcc712a1a594"],["assets/images/sponsor-shiftgig.png","16813ac8ae6192963fe4fccdae3635f0"],["assets/images/sponsor-toptal.png","8138493ec1ce35a6d6973f1eb379f96e"],["assets/images/sponsor-up.png","f30739fb7fd74ff1263dd8195f446d85"],["assets/images/sponsor-w3.png","739857a600a6cb3d690708633fbc89db"],["assets/images/sponsor-wolox.png","146b130a532231fd22656c0902cc15f3"],["athan-reines.html","45eb939fb0b72118931c085c25e8cf18"],["bert-spaan.html","c6e5927028d74b7e13c1c97f887bab31"],["bonnie-milian.html","788c154f8c80620ae7ae82967e9aea40"],["cfp.html","170f3a2af5e0dd98e2354532df788c3b"],["claudia-hernandez.html","ee02bf1bbff80b45292448ecfd46092b"],["code-of-conduct.html","8bdcb0746dae04862c4a88c742f55c4d"],["conduct.html","3f8fd124ca0bd7694a4457b8ee26a7b1"],["css/main.css","bce072f8758c891a643771e922c50720"],["daniel-gimenez.html","b6a0dc19533cbcfc7250520a81958f2b"],["daniel-khan.html","88764682fd46a3760924cb3fa8f5bf59"],["felipe-torres.html","6c15a148e594a83aa9a1be15a0495c42"],["gerardo-bort.html","483818f07d10974166a58249bca924ef"],["glenn-block.html","f05b61fecc3da9fd258771a3f43750f2"],["guillermo-paz.html","675076ef6296be92dd6790223bc7bf19"],["index.html","f6badcab9bbacf3fbaf06d094f4bf37e"],["jeff-lembeck.html","3bbe6508b16ce8d60be6e9d978acd1e1"],["jorge-cano.html","d3bb8abeb153c6dd4275c259ffd96d81"],["js/bundle.js","0e8b38fcc8255143b625e03793311efe"],["js/service-worker-registration.js","58f672c4ff5ce3707ab400bd7b0544c6"],["js/tabs.js","9408203809e4c891373dbc06d1f69b3f"],["julian-duque.html","7df487f84c2577b0d9fc7cee8970884e"],["karissa-mckelvey.html","bcc0a58816922e55f73ffe65413f4fab"],["kat-marchan.html","92ac57b981f156347e11dab4e9ee9edf"],["leonardo-crespo.html","fa18c8b7aeb02c5a5bd3f8528e6a0bad"],["leonardo-pitelli.html","b75b251e04c0af4ea55216b6665ecf04"],["marcelo-felman.html","c4595423fc193b7680d1541b51d15640"],["marcos-tomatti.html","f218241e609df839286292815d67beb6"],["mariano-vazquez.html","69673fa8ee7ec91bbcc059820f095f8b"],["mathias-bynens.html","79ac58e9cd3f112c15de06cf7b66cfa6"],["michelle-garrett.html","010567425886293a978c86ec7bfcc9d4"],["nikhila-ravi.html","bf7e53a2b5019b372bc5dcc9e815b6fc"],["perch.html","5cb407c4c2442da373ff329adf766f53"],["ravi-kolli.html","ef681a6b74b99f965946cc5542d9c350"],["schedule.html","881a57bb1a17eeedf5843eac678a9b5b"],["thomas-hunter.html","6522711aaa0c1b91b1e78966f4a94334"],["tickets.html","ef7586bf8049c425807ef62d5eadaf14"],["walter-riveros.html","9418c8b54681aac037b0477ddb9543b4"],["yamil-asusta.html","e3a21b7cb97b1b53e6a6f70a5f2443c1"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







