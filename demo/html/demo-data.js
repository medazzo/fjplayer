 'use strict';

 var data = {
     'forjaItemDashEncrypted': {
         'FJType': 'dash',
         'FJTitle': 'clear Forja movie itemDash ',
         'FJClass': 'vod',
         'FJSrc': 'http://127.0.0.1:8500/dashedCrypted/stream.mpd',
         'FJDrm': {
             "FjLServer": "http://127.0.0.1:3000",
             "FjAuthzServer": "http://127.0.0.1:3000"
         }
     },
     'forjaItemDashKeyEncrypted': {
         'FJType': 'dash',
         'FJTitle': 'clear Forja movie itemDash ',
         'FJClass': 'vod',
         'FJSrc': 'http://127.0.0.1:8500/dashedCrypted/stream.mpd',
         'FJDrm': {
             "FjAuthzServer": "http://127.0.0.1:3000"
         }
     },
     'forjaItemDashClear': {
         'FJType': 'dash',
         'FJTitle': 'clear Forja movie itemDash ',
         'FJClass': 'vod',
         'FJSrc': 'http://127.0.0.1:8500/dashedClear/stream.mpd'
     },
     'itemDashSubsonVttmpd': {
         'FJType': 'dash',
         'FJTitle': ' title of movie itemDash 2',
         'FJClass': 'vod',
         'FJSrc': 'http://dash.edgesuite.net/akamai/test/caption_test/ElephantsDream/elephants_dream_480p_heaac5_1.mpd'
     },
     'itemDashThumbs': {
         'FJType': 'dash',
         'FJPoster': '../img/sintel.jpg',
         'FJTitle': ' title of movie itemDash 2',
         'FJClass': 'vod',
         'FJThumbs': '../vtt/thumbs.vtt',
         'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
     },
     'itemDashNoThumbs': {
         'FJType': 'dash',
         'FJPoster': '../img/sintel.jpg',
         'FJTitle': ' title of movie itemDashNoThumbs 3',
         'FJClass': 'vod',
         'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
     },
     'itemDashSubsAndThumbs': {
         'FJType': 'dash',
         'FJPoster': '../img/sintel.jpg',
         'FJTitle': ' title of movie itemDashNoThumbs 3',
         'FJClass': 'vod',
         'FJThumbs': '../vtt/thumbs.vtt',
         'FJSrc': 'http://vm2.dashif.org/dash/vod/testpic_2s/multi_subs.mpd'
     },
     'itemDashSubsNoThumbs': {
         'FJType': 'dash',
         'FJPoster': '../img/sintel.jpg',
         'FJTitle': ' title of movie itemDashNoThumbs 3',
         'FJClass': 'vod',
         'FJSrc': 'http://vm2.dashif.org/dash/vod/testpic_2s/multi_subs.mpd'
     },
     'itemMp4Thumbs': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie itemOnly 1',
         'FJClass': 'vod',
         'FJThumbs': '../vtt/thumbs.vtt',
         'FJType': 'video/mp4'
     },
     'itemMp4NoThumbs': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie itemOnly 1',
         'FJClass': 'vod',
         'FJType': 'video/mp4'
     },
     'itemMp4SubsNoThumbs': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie itemOnly 1',
         'FJClass': 'vod',
         'FJType': 'video/mp4',
         'FJSubtitles': [{
             'FJLabel': 'English',
             'FJLang': 'en',
             'FJSrc': '../vtt/sintel-en.vtt'
         }, {
             'FJLabel': 'Espagnol',
             'FJLang': 'es',
             'FJSrc': '../vtt/sintel-es.vtt'
         }, {
             'FJLabel': 'Deutsch',
             'FJLang': 'de',
             'FJSrc': '../vtt/sintel-de.vtt'
         }]
     },
     'itemMp4Full': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie item 4 ',
         'FJClass': 'vod',
         'FJType': 'video/mp4',
         'FJPoster': '../img/poster.jpg',
         'FJThumbs': '../vtt/thumbs.vtt',
         'FJAds': [{
             'FJType': 'video/mp4',
             'FJSrc': '../videos/berber_pub.mp4',
             'FJClass': 'pre-roll',
             'FJCanEscape': true,
             'FJUrl': 'http://www.google.com'
         }, {
             'FJSrc': '../videos/ikea-twins.mp4',
             'FJType': 'video/mp4',
             'FJUrl': 'http://www.google.com',
             'FJClass': 'pre-roll'
         }, {
             'FJSrc': '../videos/ikea-twins.mp4',
             'FJType': 'video/mp4',
             'FJClass': 'post-roll',
             'FJUrl': 'http://www.google.com',
             'FJCanEscape': true
         }, {
             'FJSrc': '../videos/ikea-twins.mp4',
             'FJType': 'video/mp4',
             'FJClass': 'post-roll',
             'FJUrl': 'http://www.google.com',
             'FJCanEscape': true
         }, {
             'FJType': 'video/mp4',
             'FJSrc': '../videos/Best_Ad_2014.mp4',
             'FJClass': 'mid-roll',
             'FJCanEscape': true,
             'FJUrl': 'http://www.google.com',
             'FJShowAt': 70
         }, {
             'FJType': 'video/mp4',
             'FJSrc': '../videos/berber_pub.mp4',
             'FJClass': 'mid-roll',
             'FJCanEscape': false,
             'FJUrl': 'http://www.google.com',
             'FJShowAt': 115
         }],
         'FJSubtitles': [{
             'FJLabel': 'English',
             'FJLang': 'en',
             'FJSrc': '../vtt/sintel-en.vtt'
         }, {
             'FJLabel': 'Espagnol',
             'FJLang': 'es',
             'FJSrc': '../vtt/sintel-es.vtt'
         }, {
             'FJLabel': 'Deutsch',
             'FJLang': 'de',
             'FJSrc': '../vtt/sintel-de.vtt'
         }],
         'FJOverlays': [{
             'FJData': 'Hello there Overlay 1',
             'FJUrl': 'http://www.facebook.com',
             'FJDuration': 25,
             'FJShowAt': 5
         }, {
             'FJData': 'Hello Overlay 2 ',
             'FJUrl': 'http://www.yahoo.com',
             'FJDuration': 11,
             'FJShowAt': 33
         }, {
             'FJData': '<div  style="cursor:pointer;"> <img src="../img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
             'FJShowAt': 45,
             'FJDuration': 10,
             'FJUrl': 'http://www.google.com'
         }]
     },
     'itemMp4OnlyOverlay': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie itemOnly 1',
         'FJClass': 'vod',
         'FJType': 'video/mp4',
         'FJOverlays': [{
             'FJData': '<div  style="cursor:pointer;"> <img src="../img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
             'FJShowAt': 3,
             'FJDuration': 600,
             'FJUrl': 'http://www.google.com'
         }]
     },
     'itemMp4OnlyPreAds': {
         'FJSrc': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
         'FJTitle': ' title of movie itemOnly 1',
         'FJClass': 'vod',
         'FJType': 'video/mp4',
         'FJAds': [{
             'FJType': 'video/mp4',
             'FJSrc': '../videos/berber_pub.mp4',
             'FJClass': 'pre-roll',
             'FJCanEscape': true,
             'FJUrl': 'http://www.google.com'
         }]
     }
 };