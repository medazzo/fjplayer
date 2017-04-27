    angular.module('demodir', ['fjplayer'])
        .factory('Data', function() {
            /**  
            	.thumbs : 	if this option is not there , means there is no thumbs to show  ,thumbs are based on webvtt 
            							>We can use https://github.com/vlanard/videoscripts to generate webvtt with thumbnail sprites jpg

            	.substitles: option used to add subs more than eixtsing in the mpd or in the video stream from vtt files 
            	.overlays :	this overlay may be used for ads or push info any thing other when a movie is playing 
            			
            */
            return {
                'fjLoop': 'true',
                'fjAppId': '354687435468dfg73fd4g6f8d7h3fdg1he9t65',
                'playlist': [{
                    'class': 'ads',
                    'type': 'video/mp4',
                    'title': 'Ikea  Ads ',
                    'poster': 'img/cap-ame.jpg',
                    'src': 'videos/ikea-twins.mp4',
                    'adsLinkUrl': 'https://www.oogle.fr',
                    'escapeAdsAt': 15
                }, {

                    'class': 'movie',
                    'type': 'video/mp4',
                    'title': 'sentinel Movie mp4 ',
                    'poster': 'img/cap-ame.jpg',
                    'src': 'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
                    'thumbs': 'vtt/thumbs.vtt',
                    'substitles': [{
                        'label': 'English',
                        'srclang': 'en',
                        'src': 'vtt/sintel-en.vtt'
                    }, ],
                    'overlays': [{
                        'data': '<div onclick="window.open(\'http://www.google.com\',\'_blank\')" style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="100" height="20"> Your ADS is Here; clikc to go to google !</div> ',
                        'showAt': 15,
                        'duration': 5,
                        'animate': 'false'
                    }]
                }, {
                    'class': 'ads',
                    'type': 'video/mp4',
                    'title': 'Berber  funny Ads ',
                    'poster': 'img/berber.jpg',
                    'src': 'videos/berber_pub.mp4',
                    'adsLinkUrl': 'https://www.oogle.fr',
                    'escapeAdsAt': 0
                }, {
                    'class': 'movie',
                    'title': 'Sentinel Dash with multi subs natives, added vtt and thumbs',
                    'type': 'dash',
                    'poster': 'img/sintel.jpg',
                    'src': 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd',
                    'thumbs': 'vtt/thumbs.vtt',
                    'substitles': [{
                        'label': 'English',
                        'srclang': 'en',
                        'src': 'vtt/sintel-en.vtt'
                    }, {
                        'label': 'Español',
                        'srclang': 'es',
                        'src': 'vtt/sintel-es.vtt'
                    }, {
                        'label': 'Deutsch',
                        'srclang': 'de',
                        'src': 'vtt/sintel-de.vtt'
                    }],
                    'overlays': [{
                        'data': '<div onclick="location.href=\'http://www.google.com\';" style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
                        'showAt': 5,
                        'duration': 5,
                        'animate': 'true'

                    }]
                }, {
                    'class': 'ads',
                    'type': 'video/mp4',
                    'title': 'Mercedes',
                    'poster': 'img/dr2.jpg',
                    'adsLinkUrl': 'https://www.oogle.fr',
                    'escapeAdsAt': 5,
                    'src': 'videos/mercedes.mp4'
                }]
            };
        })
        .controller('demoUICtrl', ['$scope', 'Data', function($scope, Data) {
            $scope.StartPlaying = false;
            $scope.Playlist = {};
            $scope.Playlist.fjLoop = Data.fjLoop;
            $scope.Playlist.fjAppId = Data.fjAppId;
            $scope.Playlist.playlist = [];
            $scope.Playlist.playlist = Data.playlist;

            $scope.getLength = function(arr) {
                if (arr == undefined)
                    return 0;
                else if (arr.length == undefined)
                    return 0;
                else
                    return arr.length
            };
            $scope.getNumber = function(num) {
                return new Array(num);
            };
            $scope.onReset = function() {
                console.log("resetting playlist !!");
                $scope.Playlist.fjLoop = Data.fjLoop;
                $scope.Playlist.fjAppId = Data.fjAppId;
                $scope.Playlist.playlist = Data.playlist;
            };
            $scope.PlayMe = function() {
                console.log("going to play !!");
                console.warn($scope.Playlist);
                $scope.StartPlaying = true;
            };
            $scope.removeItem = function(item) {
                console.log("remove item  !!", item);
                var index = $scope.Playlist.playlist.indexOf(item)
                $scope.Playlist.playlist.splice(index, 1);
            };
            $scope.removeSubs = function(item, sub) {
                console.log("remove subs  !!", sub);
                var ix = item.substitles.indexOf(sub)
                item.substitles.splice(ix, 1);
            };
            $scope.removeOvers = function(item, over) {
                console.log("remove over  !!", over);
                var ix = item.overlays.indexOf(over)
                item.overlays.splice(ix, 1);
            };
            $scope.isItemanAds = function(item) {
                if (item.class === 'ads')
                    return true;
                else
                    return false;
            };


            /* New Item staff */
            $scope.newItem = {};
            $scope.newItem.subtitles = [];
            $scope.newItem.overlays = [];
            $scope.newsub = {};
            $scope.newOver = {};
            $scope.resetNewItem = function() {
                $scope.newItem.title = "";
                $scope.newItem.src = "";
                $scope.newItem.poster = "";
                $scope.newItem.thumbs = "";
                $scope.newItem.adsLinkUrl = "";
                $scope.newItem.escapeAdsAt = "";
                $scope.newItem.class = "";
                $scope.newItem.type = "";
                $scope.newItem.subtitles = [];
                $scope.newItem.overlays = [];
            };
            $scope.addSub = function() {
                $scope.newItem.subtitles.push($scope.newsub);
                console.log("add new sub  !!", $scope.newsub);
                $scope.newsub = {};
            };
            $scope.addOver = function() {
                $scope.newItem.overlays.push($scope.newOver);
                console.log("add new sub  !!", $scope.newOver);
                $scope.newOver = {};
            };
            $scope.AddItem = function() {
                $scope.Playlist.playlist.push($scope.newItem);
                console.log("add new item  !!");
                $scope.newItem = {};
                $scope.newsub = {};
                $scope.newOver = {};
                $scope.resetNewItem();
            };
            $scope.IsnewItemAds = function() {
                if ($scope.newItem.class === 'ads')
                    return true;
                else
                    return false;
            };

        }]);