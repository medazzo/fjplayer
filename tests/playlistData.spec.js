function DataPlaylist() {
    var subs = [{
        'FJLabel': 'English',
        'FJLang': 'en',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabe': 'English',
        'FJLang': 'en',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLang': 'en',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': '',
        'FJLan': 'en',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJLan': 'en',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJLang': '',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJLang': 'francais',
        'FJSrc': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJLang': 'fr',
        'FJSr': '../vtt/sintel-en.vtt'
    }, {
        'FJLabel': 'English',
        'FJLang': 'fr',
        'FJSrc': ''
    }, {
        'FJLabel': 'English',
        'FJLang': 'fr',
    }];

    var overs = [{
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJDat': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJData': '',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUr': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': '',
        'FJDuration': 25,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuratio': 25,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': null,
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 'dffdsdsf',
        'FJShowAt': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowA': 5
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': null
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25
    }, {
        'FJData': 'Hello there Overlay 1',
        'FJUrl': 'http://www.facebook.com',
        'FJDuration': 25,
        'FJShowAt': 'dsfzsfuyg'
    }];

    var drms = [{
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmSchem': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': '',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'dvdvv',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServe': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': '',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequestd': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {},
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnSegmentsRequest': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequestd': {
            'header-1': 'value-1',
            'header-2': 'value-2',
        }
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        },
        'FJHeadersOnSegmentsRequest': {}
    }, {
        'FJDrmScheme': 'forja',
        'FJLicenceServer': 'http://www.facebook.com',
        'FJHeadersOnLicenseRequest': {
            'header1': 'value1',
            'header2': 'value2',
        }
    }];

    var ads = [{
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        },

        {
            'FJSr': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        },

        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJTyp': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'videomp',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': '',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        },

        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClas': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'posoll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': '',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': true
        },

        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUr': 'http://www.google.com',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': '',
            'FJCanEscape': true
        }, {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJCanEscape': true
        },

        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscap': true
        },
        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': 'trdue'
        },
        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com',
            'FJCanEscape': ''
        },
        {
            'FJSrc': '../videos/ikea-twins.mp4',
            'FJType': 'video/mp4',
            'FJClass': 'post-roll',
            'FJUrl': 'http://www.google.com'
        }
    ];

    var items = [{
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJTyp': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dashoood',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': '',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJType': 'dash',
            'FJPoste': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitleddd': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': '',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJCla': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'voddf',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': '',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThum': '../vtt/thumbs.vtt',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJSrc': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        },

        {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrcXX': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt',
            'FJSrc': ''
        }, {
            'FJType': 'dash',
            'FJPoster': '../img/sintel.jpg',
            'FJTitle': ' title of movie itemDash 2',
            'FJClass': 'vod',
            'FJThumbs': '../vtt/thumbs.vtt'
        }
    ];
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        subs: subs,
        overs: overs,
        drms: drms,
        ads: ads,
        items: items,
        constructor: DataPlaylist
    };
};
export default DataPlaylist;