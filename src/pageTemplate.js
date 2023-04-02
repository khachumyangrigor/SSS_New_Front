import serialize from 'serialize-javascript';

export function pageTemplate({css, js, data = '', content = '', helmet}) {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="theme-color" content="#000000">
                <link rel="stylesheet" href="/assets/${css}"/>
                <link rel="manifest" href="/assets/manifest.json" />
                <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name="yandex-verification" content="d9f922c428463415" />
                <meta name="google-site-verification" content="l1f75lv7AUdEkEKylRlSkdRNoKZQxJ541BHEjSgl9Ys" />
              
                <link href="https://www.seasidestartupsummit.com/ogImage/sssicon.png" rel="shortcut icon" type="image/x-icon">
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:600,800" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,500,600,700&amp;display=swap"
                  rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Squada+One&display=swap" rel="stylesheet">
                <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Vampiro+One&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;1,200;1,400&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Squada+One&display=swap" rel="stylesheet">
                <!-- Google Tag Manager -->
                <script>(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                      'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                    }); var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                  })(window, document, 'script', 'dataLayer', 'GTM-K36RBRM');</script>
                <!-- End Google Tag Manager -->
              
                
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127387462-3"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag('js', new Date());
              
                  gtag('config', 'UA-127387462-3');
                </script>
              
                <!-- Global site tag (gtag.js) - Google Ads: 851346773 -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-851346773"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag('js', new Date());
              
                  gtag('config', 'AW-851346773');
                </script>
                <!-- End Global site tag -->
              
                <!-- Facebook Pixel Code -->
                <script>
                  !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return; n = f.fbq = function () {
                      n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                    n.queue = []; t = b.createElement(e); t.async = !0;
                    t.src = v; s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                  }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '304315367153571');
                  fbq('track', 'PageView');
                </script>
              
                <noscript>
                  <img height="1" width="1" src="https://www.facebook.com/tr?id=304315367153571&ev=PageView
                &noscript=1" />
                </noscript>
                <!-- End Facebook Pixel Code -->
              
              
                <!-- Yandex.Metrika counter -->
                <script type="text/javascript">
                  (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                  })
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
                  ym(53747489, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                  });
                </script>
                <noscript>
                  <div><img src="https://mc.yandex.ru/watch/53747489" style="position:absolute; left:-9999px;" alt="" /></div>
                </noscript>
            </head>
            <body>
                <div id="root">${content}</div>
                
                <script>window.__ROUTE_DATA__ = ${serialize(data)}</script>
                <script src="/assets/${js}"></script>
            </body>
        </html>`;
}
