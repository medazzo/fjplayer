# **fjplayer.js** #

## What is fjplayer.js ##

* it's a 100 % customiazble video player base on html 5 video Player
* it's support dash sources 

## how to use fjplayer.js ##

### You need to include fjplayer files ##   
  *  **dist/fjplayer.all.css** for fjplayer styles  
  *   **dist/fjplayer.all.js** for fjplayer javascript code : *this file contains also JQuery , Bootstrap and angular*
  * If you want to use your proper  *JQuery , Bootstrap and angular* include instead **dist/fjplayer.min.js**

```html
<link rel="stylesheet" href="../dist/fjplayer.all.css">
<script type="text/javascript" src="../dist/fjplayer.all.js"></script>
```

### html coding ###
In your html code , you need to define the fjplayer balise where to put your data for the player.
the attributes and data to fill in are detailled in next section

```html
<fj-playerjs    FJPlaylist='playlist'                
                FJStartplaying='true|false'
                FJLoop='true|false' 
                FJAppId='1235468773843221354gdgdgdfggfg'
                FJStartingMode='fullScreen|cinema|minimal'
                FJEnableFullScreenBackLink='false|true'>
</fj-playerjs>
```
#### fjplayer configuration attributes ####
All configuration element in the next array are **mondatory** 

| Attribute                       | mandatory    |     value                          |  Description     |
|-------------------------------|-----------|-----------------------------------|---------------|
| FJStartplaying                 | YES         | true or false                     | when true playing will start          |
| FJLoop                         | YES         | true or false                     | when true , player will loop on playlist         |
| FJEnableFullScreenBackLink     | YES         | true or false                      | when true , a icon to go back is showing when in fullscrreen or maximal         |
| FJAppId                         | YES         | non empty string                     | the fjplayer App ID  used identify the app         |
| FJStartingMode                 | YES         | maximal or cinema or minimal      | the mode witch player will be shown        |


#### fjplayer  *fjPlaylist* ####
fjPlaylist is an array of items, an item will contains theses  elements :

| item field        | mandatory |     value                      |  Description     |
|-------------------|-----------|-------------------------------|---------------|
| FJClass             |  YES         | 'ads' or 'vod' or 'live'        | the class of the stream |
| FJType             |  YES         | 'video/mp4' or 'dash'         | the type of the stream|
| FJTitle             |  YES         | non empty string              | the title of the item to play to be shown when playing it|
| FJSrc             |  YES         | non empty url string            | the url of the stream to be played|
| FJPoster             |  NO         | url to image poster             |  url to image poster for the media , showing wen loading ..|

#### fjplayer class *ads* ####

The class ads , is referring to advertissment.
On this class, fjplayer will hide the controls ans shown a transparent banner up on which the countdown timer before the ads ends.

In addition to the items declared above, ads  also contains :

| ads extra  field    | mandatory |     value              |  Description     |
|-------------------|-----------|-----------------------|---------------|
| FJAdsLinkUrl         |  YES         |  url string    |  url to forward to when the user click on the playing ads  |
| FJAdsEscapeAt     |  NO         | integer                | which shall contains the number of seconds after which an overlay is shown to permit user to escape and to the next item in playlist|

if  **FJAdsEscapeAt** in not added in ads item or its value is 0 , negatif or bigger than ads duration , no escape overlay is shwon and the user will wait until the end of the ads to get to next item in playlist. 

#### fjplayer class *vod* ####
The class vod , is referring to video on demand streaming.
On this class, the fjplayer will play classic video mp4 or a dash streaming .

In addition to the items declared above, ads  also contains :

| vod extra  field    | mandatory |     value              |  Description     |
|-------------------|-----------|-----------------------|---------------|
| FJThumbs             |  NO         |  url string    |   url to file containing tooltip thumbnail images for video associated with WebVTT  : to generate this file you can visit  [github video scripts](https://github.com/vlanard/videoscripts) |
| FJSubtitlest      |  NO         | integer                | it's an array of item subtitle|
| FJOverlays          |  NO         | integer                | it's an array of item subtitle|
| FJDrm             |  NO         | integer                | it's an object containing drm security information|

#### fjplayer class *live* ####
*This part of specs is not supported yet by player*
The class live , is referring to a live stream.

In addition to the items declared above, ads  also contains :

| live extra  field    | mandatory |     value              |  Description     |
|-------------------|-----------|-----------------------|---------------|
| FJThumbs             |  NO         |  url string    |   url to file containing tooltip thumbnail images for video associated with WebVTT  : to generate this file you can visit  [github video scripts](https://github.com/vlanard/videoscripts) |
| FJSubtitles          |  NO         | integer                | it's an array of item subtitle|
| FJOverlays          |  NO         | integer                | it's an array of item subtitle|
| FJDrm             |  NO         | integer                | it's an object containing drm security information|

#### fjplayer  *subtitle* ####
The object  subtitle , must be inserted on array **FJSubtitles** under item on playlist.
It permit to add a webvtt subtitles other that existing in mpd (in case of dash ) .
it  contains : 

| subtitle   field    | mandatory |     value              |  Description     |
|-------------------|-----------|-----------------------|---------------|
| FJSubLabel         |  YES         | non empty string        | string label of subtitles to be shown on control |
| FJSubSrc              |  YES         | non empty url string    | url of the web vtt subtitles file |
| FJSubLang          |  YES         | fr or en or de ...     | ISO descripton of language |

#### fjplayer *overlay* ####
The object overlay , must be inserted on array **FJOverlays** under item on playlist.
An overlay is a graphic layer above the video layer that conatains data like ads data.
When user lick on an overlay a new opened will be opened with the  url **FJOverUrl**.
Ii will be showing at **FJOverShowAt** and for a duration of **FJOverDuration** .
If **FJOverShowAt** or **FJOverShowAt**+**FJOverDuration** is bigger than the item movie duration, then the overlays will not be schown at all . 
it  contains : 

| subtitle   field    | mandatory |     value              |  Description     |
|-------------------|-----------|-----------------------|---------------|
| FJOverData         |  YES         | non empty string        | html data that will be putted on div overlay |
| FJOverUrl         |  YES         | non empty url string    | url to open in new window to when the user click on overlay |
| FJOverDuration     |  YES         | integer                | in seconds , the duration of overlay show |
| FJOverShowAt      |  YES         | integer                 | in seconds , the time in video to start to schow the overlay  |

#### fjplayer *drm* ####
*This part of specs is not supported yet by player*
The object drm   , is referring to Digital right managment and it's contains data about media drm .
This object is managed onlywhen **FJType** is *dash* . 
It must be in **FJDrm** field
it  contains : 

| drm   field                    | mandatory |     value                              |  Description     |
|-------------------------------|-----------|---------------------------------------|---------------|
| FJDrmScheme                    |  YES         | 'fjserver','ClearKey' or 'Widevine'     | drm Scheme to use  |
| FJLicenceServer                |  YES         | non empty url string                    | url of the Licensing server |
| FJHeadersOnLicenseRequest     |  NO         | object contains headers and value     | headers and value to be add to request when asking for license |
| FJHeadersOnSegmentsRequest     |  NO         | object contains headers and value     | headers and value to be add to request when asking for segment |

The Drm scheme **fjserver** is a clear key based scheme done on **fjserver** .
 
##  complete example of playlist ##

```javascript
playlist:
[
    {    
        'FJClass':'ads',
        'FJType':'video/mp4',
        'FJTitle':'Fric Fric Ads ',
        'FJPoster':'',
        'FJSrc':'videos/Fric_Fric.mp4'
    },
    {

        'FJClass':'movie',
        'FJType':'video/mp4',
        'FJTitle':'sentinel Movie mp4 ',
        'FJPoster':'',
        'FJSrc':'https://content.jwplatform.com/videos/q1fx20VZ-kNspJqnJ.mp4',
        'FJThumbs' :'vtt/thumbs.vtt',     
        'FJSubstitles':
        [
            {
                'FJSubLabel':'English',
                'FJSubLang':'en' ,
                'FJSubSrc':'vtt/sintel-en.vtt'
            }
        ],
        'FJOverlays': 
        [
            {
                'FJOverData':'<div style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="100" height="20"> Your ADS is Here; clikc to go to google !</div> ',
                'FJOverShowAt': 15,                                                        
                'FJOverDuration': 5,
                'FJOverUrl': 'http://www.google.com'
            }
        ]
    },    
    {
        'FJClass':'movie',
        'FJType':'Sentinel Dash with multi subs natives, added vtt and thumbs',
        'FJTitle':'dash',
        'FJPoster':'',
        'FJSrc':'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd',
        'FJThumbs' :'vtt/thumbs.vtt',     
        'FJDrm' :
        {
            'FJDrmScheme':'clearkey',
            'FJLicenceServer':'.....',
            'FJHeadersOnLicenseRequest':{'sdfsgsgs':"sfsdf"},
            'FJHeadersOnSegmentsRequest':{}
        },
        'FJSubstitles':
        [
            {
                'FJSubLabel':'English',
                'FJSubLang':'en' ,
                'FJSubSrc':'vtt/sintel-en.vtt'
            },
            {
                'FJSubLabel':'Espa�ol',
                'FJSubLang':'es' ,
                'FJSubSrc':'vtt/sintel-es.vtt'
            },
            {
                'FJSubLabel':'Deutsch',
                'FJSubLang':'de' ,
                'FJSubSrc':'vtt/sintel-de.vtt'
            }
        ],
        'FJOverlays': 
        [
            {
                'FJOverData':'<div  style="cursor:pointer;"> <img src="img/2000px-Smiley.svg.png" alt="Smiley face" width="20" height="30"> Your ADS is Here; clikc to go to google !</div> ',
                'FJOverShowAt': 5,
                'FJOverDuration': 5,
                'FJOverUrl': 'http://www.google.com'

            }
        ]                
    }                                
]

```



## how to install ##

* install node and npm
* on terminal : $cd fjplayer
* on terminal : $npm install
* on terminal : $npm start
* on browser  : open http://localhost:8000/demo