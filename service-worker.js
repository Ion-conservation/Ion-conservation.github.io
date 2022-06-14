/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "51305db6ce095ed5f092ecfb1bbfaab5"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.250270cb.js",
    "revision": "24d1fce700596cdc8d27f3211d3af3cb"
  },
  {
    "url": "assets/js/11.6150e6fb.js",
    "revision": "157b623caabca7642f7297081f1cb5ba"
  },
  {
    "url": "assets/js/12.9c1cb1c2.js",
    "revision": "6f3eed91b49beca21692afa72b4a654c"
  },
  {
    "url": "assets/js/13.d8d8611d.js",
    "revision": "e3ca2243cf167c12a370b493adeb7d9d"
  },
  {
    "url": "assets/js/14.9a6575bb.js",
    "revision": "4b8b24a05d7e23f2a1f6e99539353303"
  },
  {
    "url": "assets/js/15.77f5fd3b.js",
    "revision": "03ca75589f17589a0b15aa339dbb0291"
  },
  {
    "url": "assets/js/16.9474732f.js",
    "revision": "68f8972beccb1737debf730d05ff1444"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.56e4598c.js",
    "revision": "7d23e19ccac178ecbcd7a9d1497dcd2f"
  },
  {
    "url": "assets/js/4.01110c8e.js",
    "revision": "d81beab49415bcd459f755f43e1cd352"
  },
  {
    "url": "assets/js/5.d72ee583.js",
    "revision": "95d88d0a5e8410d973bf18628ce995e0"
  },
  {
    "url": "assets/js/6.a1157f0b.js",
    "revision": "ed81504314d4b05bb799f1ab575673a5"
  },
  {
    "url": "assets/js/7.1c773620.js",
    "revision": "08f5c1a1b75b89ab365de77768b0a0b2"
  },
  {
    "url": "assets/js/8.1186c2ec.js",
    "revision": "67d600dbd0ab254467312b823ddbfd9f"
  },
  {
    "url": "assets/js/9.dc4118ef.js",
    "revision": "ace1df622c119f237f88525016332541"
  },
  {
    "url": "assets/js/app.178ac3c9.js",
    "revision": "9e97973f12fe1a7ef939aa52207561ec"
  },
  {
    "url": "guide.html",
    "revision": "71107d8c38cd870c59c2bac06d67353a"
  },
  {
    "url": "index.html",
    "revision": "8a59346a66ecb0780a46b868aa63468a"
  },
  {
    "url": "JavaScript/Class.html",
    "revision": "57e1b09892fc4d88523e2504bfbe9f6c"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "5a3e09df7d95d279589fdcbf6897a407"
  },
  {
    "url": "JavaScript/Prototype.html",
    "revision": "1d0b28e100af605bc654c074d241bed4"
  },
  {
    "url": "React/index.html",
    "revision": "ee05c7cb35aa2dbdd15d306570f88814"
  },
  {
    "url": "React/安装不同版本.html",
    "revision": "1a5b3c3df41a960414c4f9f1b0cac8bc"
  },
  {
    "url": "React/配置别名.html",
    "revision": "eef54d9429941abd18942ac9d7cf750d"
  },
  {
    "url": "svg/logo.svg",
    "revision": "791e63f2b90107b2fe9df7bd82e8cfd2"
  },
  {
    "url": "think/article-1.html",
    "revision": "841f5d4e4749f0322f79be2dc24bae6b"
  },
  {
    "url": "think/article-2.html",
    "revision": "13b45b064c1fe59a4c61a1051aeebd12"
  },
  {
    "url": "think/article-3.html",
    "revision": "e072088e3316ae1250f8d7afa23a7359"
  },
  {
    "url": "think/index.html",
    "revision": "8d7f58d03887525789b3eec68281e967"
  },
  {
    "url": "VScode/index.html",
    "revision": "c501e685316b058fe6686a0f7af3dc80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
