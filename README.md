# **fjplayer.js** #

### What is fjplayer.js ###

* it's a 100 %customiazble video player base on html 5 video Player
* it's support dash sources 

### how to use fjplayer.js ###

#### You need to include fjplayer files :  
  *  **dist/fjplayer.all.css** for fjplayer styles  
  *   **dist/fjplayer.all.js** for fjplayer javascript code : *this file contains also JQuery , Bootstrap and angular*
  * If you want to use your proper  *JQuery , Bootstrap and angular* include instead **dist/fjplayer.min.js**

```html
<link rel="stylesheet" href="../dist/fjplayer.all.css">
<script type="text/javascript" src="../dist/fjplayer.all.js"></script>
```

#### html coding
In your html code , you need to define the fjplayer balise where to put your data for the player.
the attributes and data to fill in are detailled in next section

```html
<fj-playerjs	fjPlaylist='playlist'			    
				fjStartplaying='true|false'
				fjLoop='true|false' 
				fjAppId='1235468773843221354gdgdgdfggfg'
				fjStartingMode='fullScreen|cinema|minimal'
				fjEnableFullScreenBackLink='false|true'>
</fj-playerjs>
```
#### fjplayer configuration attributes
All configuration element in the next array are **mondatory** 

| Attribute   					| mandatory	|     value      					|  Description 	|
|-------------------------------|:------	|:--------------------------------- |:--------------|
| fjStartplaying 				| YES 		| true or false 					| when true playing will start  		|
| fjLoop 						| YES 		| true or false 					| when true , player will loop on playlist 		|
| fjEnableFullScreenBackLink 	| YES 		| true or false  					| when true , a icon to go back is showing when in fullscrreen or maximal 		|
| fjAppId 						| YES 		| non empty string 					| the fjplayer App ID  used identify the app 		|
| fjStartingMode 				| YES 		| maximal or cinema or minimal  	| the mode witch player will be shown		|


#### fjplayer  *fjPlaylist*
fjPlaylist is an array of items, an item will contains theses  elements :

| item field		| mandatory |     value      				|  Description 	|
|------------------	|:------	|:----------------------------- |:--------------|
| fjClass 			|  YES 		| 'ads' or 'vod' or 'live'		| the class of the stream |
| fjType 			|  YES 		| 'video/mp4' or 'dash' 		| the type of the stream|
| fjTitle 	        |  YES 		| non empty string  			| the title of the item to play to be shown when playing it|
| fjSrc 			|  YES 		| non empty url string			| the url of the stream to be played|
| fjPoster 			|  NO 		| url to image poster 			|  url to image poster for the media , showing wen loading ..|

#### fjplayer class *ads*

The class ads , is referring to advertissment.
On this class, fjplayer will hide the controls ans shown a transparent banner up on which the countdown timer before the ads ends.

In addition to the items declared above, ads  also contains :
| ads extra  field	| mandatory |     value      		|  Description 	|
|------------------	|:------	|:--------------------- |:--------------|
| fjAdsLinkUrl 		|  YES 		|  url string	|  url to forward to when the user click on the player when the ads is playing |
| fjAdsEscapeAt 	|  NO 		| integer				| which shall contains the number of seconds after which an overlay is shown to permit user to escape and to the next item in playlist|

if  **fjAdsEscapeAt** in not added in ads item or its value is 0 , negatif or bigger than ads duration , no escape overlay is shwon and the user will wait until the end of the ads to get to next item in playlist. 

#### fjplayer class *vod*
The class vod , is referring to video on demand streaming.
On this class, the fjplayer will play classic video mp4 or a dash streaming .

In addition to the items declared above, ads  also contains :
| vod extra  field	| mandatory |     value      		|  Description 	|
|------------------	|:------	|:--------------------- |:--------------|
| fjThumbs 			|  NO 		|  url string	|   url to file containing tooltip thumbnail images for video associated with WebVTT  : to generate this file you can visit  [github video scripts](https://github.com/vlanard/videoscripts) |
| fjSubtitlest  	|  NO 		| integer				| it's an array of item subtitle|
| fjOverlays  		|  NO 		| integer				| it's an array of item subtitle|
| fjDrm 			|  NO 		| integer				| it's an object containing drm security information|

#### fjplayer class *live*
*This part of sepc is not supported yet by player*
The class live , is referring to a live stream.

In addition to the items declared above, ads  also contains :
| live extra  field	| mandatory |     value      		|  Description 	|
|------------------	|:------	|:--------------------- |:--------------|
| fjThumbs 			|  NO 		|  url string	|   url to file containing tooltip thumbnail images for video associated with WebVTT  : to generate this file you can visit  [github video scripts](https://github.com/vlanard/videoscripts) |
| fjSubtitles 	 	|  NO 		| integer				| it's an array of item subtitle|
| fjOverlays  		|  NO 		| integer				| it's an array of item subtitle|
| fjDrm 			|  NO 		| integer				| it's an object containing drm security information|

#### fjplayer  *subtitle*
The object  subtitle , must be inserted on array **fjSubtitles** under item on playlist.
It permit to add a webvtt subtitles other that existing in mpd (in case of dash ) .
it  contains : 
| subtitle   field	| mandatory |     value      		|  Description 	|
|------------------	|:------	|:--------------------- |:--------------|
| fjSubLabel 		|  YES 		| non empty string		| string label of subtitles to be shown on control |
| fjSubSrc 	 		|  YES 		| non empty url string	| url of the web vtt subtitles file |
| fjSubLang  		|  YES 		| fr or en or de ... 	| ISO descripton of language |

#### fjplayer *overlay*
The object overlay , must be inserted on array **fjOverlays** under item on playlist.
An overlay is a graphic layer above the video layer that conatains data like ads data.
When user lick on an overlay a new opened will be opened with the  url **fjOverUrl**.
Ii will be showing at **fjOverShowAt** and for a duration of **fjOverDuration** .
If **fjOverShowAt** or **fjOverShowAt**+**fjOverDuration** is bigger than the item movie duration, then the overlays will not be schown at all . 
it  contains : 
| subtitle   field	| mandatory |     value      		|  Description 	|
|------------------	|:------	|:----------------------|:--------------|
| fjOverData 		|  YES 		| non empty string		| html data that will be putted on div overlay |
| fjOverUrl 		|  YES 		| non empty url string	| url to open in new window to when the user click on overlay |
| fjOverDuration 	|  YES 		| integer				| in seconds , the duration of overlay show |
| fjOverShowAt  	|  YES 		| integer 				| in seconds , the time in video to start to schow the overlay  |

#### fjplayer *drm*
*This part of sepc is not supported yet by player*
The object drm   , is referring to Digital right managment and it's contains data abot media drm .
It must be in **fjDrm** field
it  contains : 
| drm   field					| mandatory |     value      						|  Description 	|
|------------------------------	|:------	|:--------------------------------------|:--------------|
| fjDrmScheme					|  YES 		| 'ClearKey','Playready' or 'Widevine'  | drm Scheme to use  |
| fjLicenceServer				|  YES 		| non empty url string					| url of the Licensing server |
| fjHeadersOnLicenseRequest 	|  NO 		| object contains headers and value 	| headers and value to be add to request when asking for license |
| fjHeadersOnSegmentsRequest 	|  NO 		| object contains headers and value 	| headers and value to be add to request when asking for segment |

###  complete example of playlist ###

```javascript
playlist:[	{	
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

```



### how to install ###

* install node and npm
* on terminal : $cd fjplayer
* on terminal : $npm install
* on terminal : $npm start
* on browser  : open http://localhost:8000/demo