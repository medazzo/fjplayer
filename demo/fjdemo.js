  'use strict';
  angular.module('demodir', ['fjplayer'])
      .
  controller('playerdemoCtrl', ['$scope', function($scope) {
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
          $scope.myvideodesc = $scope.myvideodescdefault;
      };
      $scope.PlayMe = function() {
          console.log("going to player !!");
          window.open("player.html", "_self");
      };
      /**  
      	.thumbs : 	if this option is not there , means there is no thumbs to show  ,thumbs are based on webvtt 
      							>We can use https://github.com/vlanard/videoscripts to generate webvtt with thumbnail sprites jpg

      	.substitles: option used to add subs more than eixtsing in the mpd or in the video stream from vtt files 
      	.overlays :	this overlay may be used for ads or push info any thing other when a movie is playing 
      			
      */
      $scope.myvideodescdefault = {
          'loop': 'true',
          'appID': '354687435468dfg73fd4g6f8d7h3fdg1he9t65',
          'playlist': [{
              'class': 'ads',
              'type': 'video/mp4',
              'title': 'Ikea  Ads ',
              'poster': 'img/cap-ame.jpg',
              'src': 'videos/ikea-twins.mp4'
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
                  'animate': false
              }]
          }, {
              'class': 'ads',
              'type': 'video/mp4',
              'title': 'Berber  funny Ads ',
              'poster': 'img/berber.jpg',
              'src': 'videos/berber_pub.mp4'
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
                  'animate': true

              }]
          }, {
              'class': 'ads',
              'type': 'video/mp4',
              'title': 'Mercedes',
              'poster': 'img/dr2.jpg',
              'src': 'videos/mercedes.mp4'
          }]
      };


      $scope.myvideodesc = $scope.myvideodescdefault;
  }]);