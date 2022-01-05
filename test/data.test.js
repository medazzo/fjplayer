const env = process.env.NODE_ENV || "test";

class TestsData {
  constructor() {
    this.subs = [
      {
        FJLabel: "English",
        FJLang: "en",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabe: "English",
        FJLang: "en",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLang: "en",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "",
        FJLan: "en",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJLan: "en",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJLang: "",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJLang: "francais",
        FJSrc: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJLang: "fr",
        FJSr: "demo/vtt/sintel-en.vtt",
      },
      {
        FJLabel: "English",
        FJLang: "fr",
        FJSrc: "",
      },
      {
        FJLabel: "English",
        FJLang: "fr",
      },
    ];

    this.overs = [
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJDat: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJData: "",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUr: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "",
        FJDuration: 25,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuratio: 25,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: null,
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: "dffdsdsf",
        FJShowAt: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowA: 5,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: null,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
      },
      {
        FJData: "Hello there Overlay 1",
        FJUrl: "http://www.facebook.com",
        FJDuration: 25,
        FJShowAt: "dsfzsfuyg",
      },
    ];

    this.drms = [
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmSchem: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "dvdvv",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServe: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequestd: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {},
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnSegmentsRequest: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequestd: {
          "header-1": "value-1",
          "header-2": "value-2",
        },
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
        FJHeadersOnSegmentsRequest: {},
      },
      {
        FJDrmScheme: "forja",
        FJLicenceServer: "http://www.facebook.com",
        FJHeadersOnLicenseRequest: {
          header1: "value1",
          header2: "value2",
        },
      },
    ];

    this.ads = [
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },

      {
        FJSr: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },

      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJTyp: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "videomp",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },

      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClas: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "posoll",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJUrl: "http://www.google.com",
        FJCanEscape: true,
      },

      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUr: "http://www.google.com",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "",
        FJCanEscape: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJCanEscape: true,
      },

      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscap: true,
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: "trdue",
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
        FJCanEscape: "",
      },
      {
        FJSrc: "demo/videos/ikea-twins.mp4",
        FJType: "video/mp4",
        FJClass: "post-roll",
        FJUrl: "http://www.google.com",
      },
    ];

    this.items = [
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJTyp: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dashoood",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJType: "dash",
        FJPoste: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitleddd: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: "",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJCla: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "voddf",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThum: "demo/vtt/thumbs.vtt",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },

      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrcXX: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
        FJSrc: "",
      },
      {
        FJType: "dash",
        FJPoster: "demo/img/sintel.jpg",
        FJTitle: " title of movie itemDash 2",
        FJClass: "vod",
        FJThumbs: "demo/vtt/thumbs.vtt",
      },
    ];

    this.itemDash = {
      FJType: "dash",
      FJPoster: "demo/img/sintel.jpg",
      FJTitle: " title of movie itemDash 2",
      FJClass: "vod",
      FJThumbs: "demo/vtt/thumbs.vtt",
      FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
    };
    this.itemDashNoThumbs = {
      FJType: "dash",
      FJPoster: "demo/img/sintel.jpg",
      FJTitle: " title of movie itemDashNoThumbs 3",
      FJClass: "vod",
      FJSrc: "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd",
    };
    this.itemOnlyAds = {
      FJSrc: "https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4",
      FJTitle: " title of movie itemOnly 1",
      FJClass: "vod",
      FJType: "video/mp4",
      FJAds: [
        {
          FJType: "video/mp4",
          FJSrc: "demo/videos/berber_pub.mp4",
          FJClass: "pre-roll",
          FJCanEscape: true,
          FJUrl: "http://www.google.com",
        },
      ],
    };
    this.itemOnly = {
      FJSrc: "demo/videos/berber_pub.mp4",
      FJTitle: " title of movie itemOnly 1",
      FJClass: "vod",
      FJType: "video/mp4",
    };
    this.Fullitem = {
      FJSrc: "https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4",
      FJTitle: " title of movie item 4 ",
      FJClass: "vod",
      FJType: "video/mp4",
      FJPoster: "demo/img/poster.jpg",
      FJThumbs: "demo/vtt/thumbs.vtt",
      FJAds: [
        {
          FJType: "video/mp4",
          FJSrc: "demo/videos/berber_pub.mp4",
          FJClass: "pre-roll",
          FJCanEscape: true,
          FJUrl: "http://www.google.com",
        },
        {
          FJSrc: "demo/videos/ikea-twins.mp4",
          FJType: "video/mp4",
          FJUrl: "http://www.google.com",
          FJClass: "pre-roll",
        },
        {
          FJSrc: "demo/videos/ikea-twins.mp4",
          FJType: "video/mp4",
          FJClass: "post-roll",
          FJUrl: "http://www.google.com",
          FJCanEscape: true,
        },
        {
          FJSrc: "demo/videos/ikea-twins.mp4",
          FJType: "video/mp4",
          FJClass: "post-roll",
          FJUrl: "http://www.google.com",
          FJCanEscape: true,
        },
        {
          FJType: "video/mp4",
          FJSrc: "../videos/Best_Ad_2014.mp4",
          FJClass: "mid-roll",
          FJCanEscape: true,
          FJUrl: "http://www.google.com",
          FJShowAt: 70,
        },
        {
          FJType: "video/mp4",
          FJSrc: "demo/videos/berber_pub.mp4",
          FJClass: "mid-roll",
          FJCanEscape: false,
          FJUrl: "http://www.google.com",
          FJShowAt: 115,
        },
      ],
      FJSubtitles: [
        {
          FJLabel: "English",
          FJLang: "en",
          FJSrc: "demo/vtt/sintel-en.vtt",
        },
        {
          FJLabel: "Espagnol",
          FJLang: "es",
          FJSrc: "demo/vtt/sintel-es.vtt",
        },
        {
          FJLabel: "Deutsch",
          FJLang: "de",
          FJSrc: "demo/vtt/sintel-de.vtt",
        },
      ],
      FJOverlays: [
        {
          FJData: "Hello there Overlay 1",
          FJUrl: "http://www.facebook.com",
          FJDuration: 25,
          FJShowAt: 5,
        },
        {
          FJData: "Hello Overlay 2 ",
          FJUrl: "http://www.yahoo.com",
          FJDuration: 11,
          FJShowAt: 33,
        },
        {
          FJData:
            '<div  style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
          FJShowAt: 45,
          FJDuration: 10,
          FJUrl: "http://www.google.com",
        },
      ],
    };
  }    
}

module.exports = TestsData;
