# **fjplayer.js** #

### What is fjplayer.js ###

* it's a 100 %customiazble video player base on html 5 video Player
* it's support dash sources 

### how to use fjplayer.js ###

* take a look at demo.index.html

###  guidelines : your html header ###

```
#!html

	<link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css ">
	<link rel="stylesheet" href="../dist/fjplayer.css">
	<script src="../bower_components/jquery/dist/jquery.min.js"></script>
	<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="../bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="../utils/base64.js"></script> 
	<script type="text/javascript" src="../utils/dash.debug.js"></script> 
	<script type="text/javascript" src="../dist/fjplayer.js"></script>
```

###  guidelines : your javascript ###

```
#!javascript

'use strict';
	angular.module('demodir', [ 'fjplayer'])
	.
	controller('playerdemoCtrl', ['$scope', function ($scope) {

		/**  
			.thumbs : 	if this option is not there , means there is no thumbs to show  ,thumbs are based on webvtt 
									>We can use https://github.com/vlanard/videoscripts to generate webvtt with thumbnail sprites jpg

			.substitles: option used to add subs more than eixtsing in the mpd or in the video stream from vtt files 
			.overlays :	this overlay may be used for ads or push info any thing other when a movie is playing 
					
		*/
		$scope.myvideodesc =
			{
				'playlist':[	{	
									'class':'ads',
									'type':'video/mp4',
									'title':'Fric Fric Ads ',
									'poster':'',
									'src':'videos/Fric_Fric.mp4'
								},
								{

									'class':'movie',
									'type':'video/mp4',
									'title':'sentinel Movie mp4 ',
									'poster':'',
									'src':'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
									'thumbs' :'vtt/thumbs.vtt', 	
									'substitles':[
													{
														'label':'English',
														'srclang':'en' ,
														'src':'vtt/sintel-en.vtt'
													},
												],
									'overlays': [
													{
														'data':'<div onclick="location.href=\'http://www.google.com\';" style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="100" height="20"> Your ADS is Here; clikc to go to google !</div> ',
														'showAt': 15,														
														'duration': 5,
														'animate': false
													}
												]
								}
								,
								{	
									'class':'ads',
									'type':'video/mp4',
									'title':'best Ads ',
									'poster':'',
									'src':'videos/Best_Ad_2014.mp4'
								},	
								{
									'class':'movie',
									'title':'Sentinel Dash with multi subs natives, added vtt and thumbs',
									'type':'dash',
									'poster':'',
									'src':'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd',
									'thumbs' :'vtt/thumbs.vtt', 	
									'substitles':[
													{
														'label':'English',
														'srclang':'en' ,
														'src':'vtt/sintel-en.vtt'
													},
													{
														'label':'Español',
														'srclang':'es' ,
														'src':'vtt/sintel-es.vtt'
													},
													{
														'label':'Deutsch',
														'srclang':'de' ,
														'src':'vtt/sintel-de.vtt'
													}
												],
									'overlays': [
													{
														'data':'<div onclick="location.href=\'http://www.google.com\';" style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
														'showAt': 5,
														'duration': 5,
														'animate': true

													}
												]				
								},										
								{
									'class':'ads',
									'type':'video/mp4',
									'title':'Berber  funny Ads ',
									'poster':'',
									'src':'videos/berber_pub.mp4'
								},								
							]
			};
	}]);
```
###  guidelines : your html body ###

```
#!html

<body ng-app='demodir' ng-controller='playerdemoCtrl' >
<fj-playerjs fjplayerdesc='{{myvideodesc}}'></fj-playerjs>
</body>
```



### how to install ###

* install node and npm
* on terminal : $cd fjplayer
* on terminal : $npm install
* on terminal : $npm start
* on browser  : open http://localhost:8000/demo