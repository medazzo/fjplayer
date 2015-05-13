
'use strict';

angular.module('fjplayer', []).
controller('fjplayerCtrl', ['$scope' ,'$filter','$interval','$document' ,'$timeout' ,'$sce','$window',
            function ($scope,$filter,$interval,$document,$timeout,$sce,$window) {

    $scope.fjplayerTag ="Fjplayer.js"   
    $scope.tdID ;
    $scope.tiID ;
    $scope.pbID ;
    $scope.viID ;
    $scope.volObj ;
    $scope.menuObj ;
    $scope.playerItems ; 
    $scope.settingBtn;
    $scope.medias= new Array();
    $scope.VolumeMgr;
    $scope.isPlaylist = false ;
    $scope.PlaylistCurrentIndex = 0;
    $scope.isFullScreenSupported = true ;

    $scope.prepareUI = function (){
        $scope.tdObj    = document.getElementById('thumbDiv');
        $scope.tiObj    = document.getElementById('thumbImgBlock');      
        $scope.pbObj    = document.getElementById('hprogressbar');
        $scope.viObj    = document.getElementById('fjVidMain');
        $scope.volObj   = document.getElementById('vprogressbar');
        $scope.menuObj  = document.getElementById('settingMenuDiv');
        $scope.settingBtn = document.getElementById('subsBtnId');

          // Check if fullscreen supported. If it's not just don't show the fullscreen icon.
        if(!$scope.viObj.requestFullscreen && 
         !$scope.viObj.mozRequestFullScreen &&
         !$scope.viObj.webkitRequestFullScreen) {
            $scope.isFullScreenSupported  = false;
        }
    };
    $scope.fjMouseMgr  = function($event){
      //console.debug(">>  Managing mouse move ");
      //console.debug(">> show cursor ");      
      $scope.isCursorHidden = false ;
      //angular.element('body').css('cursor', 'auto');      
      //console.debug(">> cancel previous timeout");
      $timeout.cancel($scope.idleMouseTimer);
      //console.debug(">> trigger a new timeout to hide cursor after 3 sec  ");
      $scope.idleMouseTimer = $timeout(function() {
        //angular.element('body').css('cursor', 'none');
        $scope.isCursorHidden = true ;
        //console.debug(">> hide cursor ");
        }, 3000);      
    };
    $scope.checkPlaylistAndStart = function(items, startIdx){
        //check
        if ( items == null){
            console.error("BAD conf , no media found !");
            console.error(items);
        }
        //get conf
        $scope.playerItems = angular.fromJson(items).playlist;
        console.debug($scope.playerItems.length);
        console.debug($scope.playerItems);
        //settings
        if($scope.playerItems.length > 1 ){
            $scope.isPlaylist = true ;            
        } else {
            $scope.isPlaylist = false ;            
        }
        //volume Mgr 
        $scope.VolumeMgr = new $scope.fjVolume($scope.volObj , $scope.viObj);
        //create objects
        for (var i=0;i < $scope.playerItems.length ; i++){
            $scope.medias[i] =  new $scope.fjVideo($scope.playerItems[i] , $scope.viObj);   
            console.debug(i ,$scope.medias[i] );
        }
        //start 0
        console.debug( $scope.PlaylistCurrentIndex  ,$scope.medias[$scope.PlaylistCurrentIndex] );
        $scope.PlaylistCurrentIndex = startIdx;
        $scope.medias[$scope.PlaylistCurrentIndex].Startup();
        $scope.medias[$scope.PlaylistCurrentIndex].setTracks();
        $scope.medias[$scope.PlaylistCurrentIndex].SetEvent();
        $scope.medias[$scope.PlaylistCurrentIndex].View();
    }
    $scope.fjVolume = function(volumebar,videoObj){
        this.vb = volumebar,
        this.usingVolumeBar = false , 
        this.showingVolumeBar = false ,
        this.VolLevelUp = true ,
        this.VolLevelDown = false ,
        this.VolLevelOff = false ,
        this.video = videoObj,

        this.goShowProgressBar = function (){  
            $timeout(function() {
                if (  this.usingVolumeBar == false ) {
                    this.showingVolumeBar = false ; 
                }
            }, 1000);        
        },
        this.goShowVolumeBar = function (){
            this.vb.style.display = 'block' ;
            this.showingVolumeBar = true ;
        },
        this.goUseVolumeBar = function(){
            this.usingVolumeBar = true ;
        },
        this.goHideVolumeBar = function(){
            this.usingVolumeBar = false ;
            this.showingVolumeBar = false ;  
            this.volumePercentage = 100 ;         
        },
        this.goMuteVolume = function () {        
            if(this.volumePercentage == 0 )
                this.setVolume( 100 );          
            else
                this.setVolume( 0 );          
        },
        this.setVolumeProgressLevel = function($event){
            // need ti get object now when it shown
            var bv = document.getElementById('vprogressbar');
            var rect = bv.getBoundingClientRect();            
            var vp =(($event.pageX - rect.left) / rect.width) * 100 ;        
            this.setVolume (vp);
        },
        this.setVolume = function(newVolumePercentage){
            this.video.volume =  (newVolumePercentage /100);
            this.volumePercentage = newVolumePercentage ;
            if(newVolumePercentage == 0 ){
                this.VolLevelUp = false ;
                this.VolLevelDown = false ;
                this.VolLevelOff = true ;
            }else if  (newVolumePercentage > 60 ){
                this.VolLevelUp = true ;
                this.VolLevelDown = false ;
                this.VolLevelOff = false ;
            } else {
                this.VolLevelUp = false ;
                this.VolLevelDown = true ;
                this.VolLevelOff = false ;
            }
        }
    };
    $scope.fjSettingMenu = function(fjVideoObj, nemuObj, settingBtnObj){
        this.fjvid = fjVideoObj ,         
        this.menudiv = menuObj, 
        this.menuBtn = settingBtnObj ,
      
        this.goSettingMenu  = function () {         
            // second call :to  hide 
            if(menudiv.style.visibility === 'visible')
                menudiv.style.visibility = 'hidden';  

            var rect = tthis.menuBtn.getBoundingClientRect();
            this.menudiv.style.left = rect.left +'px';
            this.menudiv.style.top = rect.top  - (rect.height * Math.max(this.tracksArray.subs.length, this.tracksArray.audio.length))+'px'           
            this.menudiv.style.visibility = 'visible';
        },
        this.setSubs = function( index) {
            //json array 
            for (var i=0; i< this.fjvid.tracksArray.subs.length; i++) {
                if(this.fjvid.tracksArray.subs[i].index == index ){
                    this.fjvid.tracksArray.subs[i].actif = true ;
                }
                else {
                    this.fjvid.tracksArray.subs[i].actif = false ;
                }
            }
            //video array
            for (var i=0; i< this.fjvid.video.textTracks.length; i++) {
                if (i == index) {
                    this.fjvid.video.textTracks[i].mode = 'showing';
                } else {
                    this.fjvid.video.textTracks[i].mode = 'hidden';
                }
            }
            //finish
            this.menudiv.style.visibility = 'hidden';
        },
        this.setAudio = function( index) {
            //json array 
            for (var i=0; i< this.fjvid.tracksArray.audio.length; i++) {
                if(this.fjvid.tracksArray.audio[i].index == index )
                    this.fjvid.tracksArray.audio[i].actif = true ;
                else 
                    this.fjvid.tracksArray.audio[i].actif = false ;
            }
            //video array
            for (var i=0; i< this.fjvid.video.videoTracks.length; i++) {
                if (i == index) {
                    this.fjvid.video.videoTracks[i].selected = true;
                } else {
                    this.fjvid.video.videoTracks[i].selected = false;
                }
            }
            //finish
            this.menudiv.style.visibility = 'hidden';
        }
    };
    $scope.fjThumbs = function(thumbImg, thumbDiv , video, progressBar){
        this.td = thumbDiv,
        this.t = thumbImg,
        this.video = video,
        this.b = progressBar, 

        this.goShowThumbs = function ($event) {
            this.td.style.visibility = 'visible';
        },
        this.goHideThumbs = function ($event) {      
            this.td.style.visibility = 'hidden';
        },
        this.goRenderThumbs = function ($event) {   
            // first we convert from mouse to time position ..
            var rect = this.b.getBoundingClientRect();
            var p = ($event.pageX - rect.left ) * (  this.video.duration / (rect.right - rect.left) );     
            if ( ( p > (this.video.duration + 2)) || (p < 0) )//some error ?
                return ; 
            //update ui
            this.thumbTime = p;
            // ..then we find the matching cue..
            var c = this.video.textTracks[this.indexThumbsTrack].cues;
            if( c == null) //track eleme,t is not supprted : Firefox 
                return;

            for (var i=0; i<c.length; i++) 
            {
                if(c[i].startTime <= p && c[i].endTime > p) {
                    break;
                };
            }
            // ..next we unravel the JPG url and fragment query..
            var url =c[i].text.split('#')[0];
            var xywh = c[i].text.substr(c[i].text.indexOf("=")+1).split(',');

            // ..and last we style the thumbnail overlay
            this.t.style.backgroundImage = 'url('+c[i].text.split('#')[0]+')';
            this.t.style.backgroundPosition = '-'+xywh[0]+'px -'+xywh[1]+'px';
            this.t.style.width = xywh[2]+'px';
            this.t.style.height = xywh[3]+'px';

            this.td.style.left = $event.pageX   - xywh[2]/2+'px';
            this.td.style.top = rect.top  - (xywh[3] *1.5)+'px'     
            this.td.style.width = xywh[2]+'px';     
        }  
    };
    $scope.fjOverlays = function(video , data, showAt, showDuration,animate){
        this.adData = data ,
        this.showAt = showAt ,
        this.showDuration = showDuration ,
        this.animate = animate ,
        this.video = video ,
        this.started = false,
        this.finished = false , 
        this.refreshId = null ,
        this.exitId  = null,
        this.finishId = null,

        this.onProgress=function(e) {
            console.info(e);
            if( ( this.video.currentTime > this.showAt ) && ( this.video.currentTime < (this.showAt+1) ) ) { 
                this.started  = true ; 
                this.StartAds();
                return ;
            }
        },
        this.pause = function(){
            if (this.finished == false && this.started == true){
               $interval.cancel(this.refreshId);
               $timeout.cancel(this.finishId );
            }
        },
        this.resume = function(){
            if (this.finished == false && this.started == true){
                this.refreshId = $interval( this.upInfo ,1000);
                this.finishId = $timeout( this.finish() ,secTimeout);
            }
        },
        this.trigger = function(){
            $scope.isAdsDataHidden = true ;                 
            $scope.isAdsInfoHidden = true ;
            this.video.addEventListener("progress", this.onProgress.bind(this));            
        },
        this.finish = function(){ 
            console.debug("Ending @@@ ", showDuration);
            $scope.isAdsDataHidden = true ;
            $scope.isAdsInfoHidden = true ;
            this.finished  = true ;
            if ( this.animate == true )
                $interval.cancel (this.refreshId);        
        },
        this.upInfo = function(){  
            console.debug("updating @@@ ", showDuration);   
            if ( this.showDuration > 0 ) {
                $scope.AdsInfo = $sce.trustAsHtml( 'your ads will end in '+this.showDuration+' sec');
                this.showDuration --;        
            }
        },
        this.StartAds = function() {
            var secTimeout = this.showDuration  *1000;     
            // show ads
            if(this.data !== null){
                $scope.isAdsDataHidden = false ;
                 $scope.AdsData = $sce.trustAsHtml( data );
            }
            if ( this.animate == true )
                $scope.isAdsInfoHidden = false ;
            $scope.AdsInfo =$sce.trustAsHtml( 'you ads will end in '+showDuration+' sec');
            // hide ads after timeout
            this.refreshId = $interval( this.upInfo ,1000);
            //timeout
            this.finishId = $timeout( this.finish() ,secTimeout);
        }        
    };
    $scope.fjVideo= function(mediaConf, video){	
        this.videoReady = false ,
          
        this.isPlaying = false ,
        this.isFullScreen = false ,       
        this.isContainsSubs = false ,
        this.isContainsLangs = false ,
        this.isContainsThumbs = false ,

        this.prgressPercentage = 0 ,
        
        this.movieTile  = "" ,
        this.isAdsDataHidden = true ,
        this.isAdsInfoHidden = true ,
        this.thumbTime  = 0 ,
        this.tracksArray  = {"subs":[],"audio":[]} ,
        this.movieCTime = 0 ,
        this.movieTTime  = 0 ,
        this.movieBuffered = 0 ,
        this.volume = 0 ,
        this.idleMouseTimer ,          
        this.isCursorHidden = false ,	
		this.media = mediaConf,
        this.video  = video ,
	    this.thumbMgr,
        this.settingMenuMgr,
        this.overlays = new Array(),
   
		this.Startup=function(){
            if(this.media.type === 'dash')
            {
    		    this.context =  new Dash.di.DashContext();
    			this.player  =  new MediaPlayer(this.context);		
    			this.player.startup();
            }
            else
            {
                var source = document.createElement('source');
                source.src = this.media.src;
                source.type = this.media.type;
                this.video.appendChild(source);  
            }
		},
		this.View=function(){      
            if(this.media.type === 'dash')
            {
    			this.player.attachView(this.video);
    			this.player.setAutoPlay(true);
    			this.player.attachSource(this.media.src);
    			this.player.setAutoSwitchQuality(true);	
            }
            else
            {
                this.video.play();
            }
		},
        this.setTracks = function(){
            var newObj , i ;
            //set globals
            this.movieTTime  =this.video.duration ;
            this.movieCTime  = this.video.currentTime ;
            this.movieBuffered = this.video.buffered;
            $scope.VolumeMgr.setVolume( this.video.volume * 100 );          
            this.videoReady = true;           
            //set  thumbs 
            if(this.media.thumbs )
            {
                //thumb Mgr
                 this.thumbMgr = new $scope.fjThumbs( $scope.viObj, $scope.tdObj, $scope.tiObj , $scope.pbObj);
                //
                var track = document.createElement('track');
                track.src = this.media.thumbs ;
                track.kind  ='metadata' ;
                this.video.appendChild(track); 
            }
            //set  subs 
            if(this.media.substitles )
            {
                for (i =0; i< this.media.substitles.length ;i++) 
                {
                    var track = document.createElement('track');
                    track.kind='subtitles';
                    track.src = this.media.substitles[i].src ;
                    track.srclang = this.media.substitles[i].srclang ;
                    track.label = this.media.substitles[i].label ;
                    this.video.appendChild(track); 
                }
            }
            // looking for audio tracks 
            if(this.video.audioTracks) {                
                for (i = 0; i < this.video.audioTracks.length; i++) {
                    this.isContainsLangs = true ;
                    newObj = {"label" : this.video.audioTracks[i].language ,"index":i , "actif":true}; 
                    this.tracksArray.audio.push(  newObj);                    
                }
            }
            // looking for metadata  & subtitles tracks
            if(this.video.textTracks) {
                newObj ={"label" : "off", "index":-1 , "actif":true};
                this.tracksArray.subs.push(newObj);
                for (i = 0; i < this.video.textTracks.length; i++) 
                {
                    if ( this.video.textTracks[i].kind == 'metadata' )
                    {       
                        this.indexThumbsTrack = i ; 
                        this.isContainsThumbs = true ;
                    }
                    else if(this.video.textTracks[i].kind == 'subtitles' )
                    {
                        newObj =  {"label" : this.video.textTracks[i].label ,"index":i, "actif":false} ;            
                        this.tracksArray.subs.push( newObj);            
                        this.isContainsSubs = true ;
                    }
                    else
                    {
                        console.debug ("unknown type of tracks ",this.video.textTracks[i].kind)
                    }
                } 
                if (this.isContainsSubs || this.isContainsLangs)
                    this.SettingMenuMgr = new $scope.fjSettingMenu(this,$scope.menuObj , $scope.settingBtn);
            }

            //setoverlays
            //check : if Ads ; sow bar info with countdown
            if(this.media.class === "ads"){
                this.overlays[0] = new $scope.fjOverlays( null ,0,this.movieTTime,true );   
            }
            else 
            {
                if(this.media.overlays )
                {
                    for (i =0; i< this.media.overlays.length ;i++) 
                    {
                         this.overlays[i] = $scope.fjOverlays( this.media.overlays[i].data,
                                                this.media.overlays[i].showAt,
                                                this.media.overlays[i].duration,
                                                this.media.overlays[i].animate );
                    }
                }
            }           
        },
        this.onPlay=function(e) {
            console.info(e);
        },
        this.onPause=function(e) {
            console.info(e);
        },
         this.onEnded=function(e) {
            console.info(e);
            //go next 
            if ( $scope.isPlaylist ){
              $scope.goNextPlaylist();
            }
        },
		this.onLoadeddata=function(e) {
			console.info(e);
		},
		this.onTimeupdate=function(e) {
			console.info(e);
		},
		this.onError=function(e) {
			console.info(e);
		},
		this.SetEvent = function() { 			
			this.video.addEventListener("error", this.onError.bind(this));
			this.video.addEventListener("loadeddata", this.onLoadeddata.bind(this));
			this.video.addEventListener("timeupdate", this.onTimeupdate.bind(this));
            this.video.addEventListener("play", this.onPlay.bind(this));
            this.video.addEventListener("pause", this.onPause.bind(this));
            this.video.addEventListener("ended", this.onEnded.bind(this));
		}
	}; 

        $scope.goPrevPlaylist  = function () {
       //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }

      if( $scope.PlaylistCurrentIndex > 0 ) {
        $scope.PlaylistCurrentIndex -- ;
      }else  {
        $scope.PlaylistCurrentIndex  = ( $scope.PlaylistItemsCount - 1) ;
      }

      console.debug("Going Prev ",$scope.PlaylistCurrentIndex , $scope.PlaylistItemsCount);
      $scope.StartConfPlayAt($scope.PlaylistCurrentIndex);

      //play
      $scope.isPlaying  =  true;      
      $scope.video.play();
    };

    $scope.goNextPlaylist  = function () {      
      //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }
      
      if( $scope.PlaylistCurrentIndex < ( $scope.PlaylistItemsCount - 1) ) {
      $scope.PlaylistCurrentIndex ++ ;
      }else  {
        $scope.PlaylistCurrentIndex  = 0 ;
      }
      console.debug("Going Next ",$scope.PlaylistCurrentIndex , $scope.PlaylistItemsCount);
      $scope.StartConfPlayAt($scope.PlaylistCurrentIndex);

      //play
      $scope.isPlaying  =  true;      
      $scope.video.play();
        
    };

    $scope.goFullScreen  = function () {
      // If fullscreen mode is active...  
      if ($scope.isFullScreen == true ) {
        // ...exit fullscreen mode
        // (Note: this can only be called on document)
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        $scope.isFullScreen  =  false;
      }
      else {
        // ...otherwise enter fullscreen mode
        // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
        if ($scope.video.requestFullscreen) $scope.video.requestFullscreen();
        else if ($scope.video.mozRequestFullScreen) $scope.video.mozRequestFullScreen();
        else if ($scope.video.webkitRequestFullScreen) {
          // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and 
          // ensures that our custom controls are visible:
          // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
          // figure[data-fullscreen=true] .controls { z-index:2147483647; }
          $scope.video.webkitRequestFullScreen();
        }
        else if ($scope.video.msRequestFullscreen) $scope.video.msRequestFullscreen();
        $scope.isFullScreen  =  true;
      }     
    };

    $scope.goSeek = function ($event) {  
        var rect = $scope.b.getBoundingClientRect();
        var p = ($event.pageX - rect.left ) * (  $scope.video.duration / (rect.right - rect.left) );
        console.debug("seek to ", p , "sec ") ;
        //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }

        //change current time 
        $scope.video.currentTime = p;

        //play
        $scope.isPlaying  =  true;
        $scope.video.play(); 
    };


}]).
filter('duration', function() {
 return function(secDuration) {
      var sec_num = parseInt(secDuration, 10); // don't forget the second param  
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      

      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      
      if(hours == 0){
        return (minutes+':'+seconds);
      }
      else {
        if (hours < 10) { hours   = "0"+hours;}
        return (hours+':'+minutes+':'+seconds);      
      }    
  };
}).
directive('fjPlayerjs',function( ) {
  return {
    restrict: 'E',
    scope: {
      fjplayerdesc: '@'
    },
    templateUrl: 'fjplayer-template.html',
    controller: 'fjplayerCtrl'  ,  
    link: function(scope, iElement, iAttrs) { 
        scope.prepareUI();
        scope.checkPlaylistAndStart(iAttrs.fjplayerdesc, 0);            
        console.debug("Starting !!!");
    }
  }
});

