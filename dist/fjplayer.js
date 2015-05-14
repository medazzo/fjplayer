
'use strict';

angular.module('fjplayer', []).
controller('fjplayerCtrl', ['$scope' ,'$filter','$interval','$document' ,'$timeout' ,'$sce','$window',
            function ($scope,$filter,$interval,$document,$timeout,$sce,$window) {

    //Global
    $scope.fjplayerTag ="Fjplayer.js"   
    $scope.tdObj ;
    $scope.tiObj ;
    $scope.pbObj ;    
    $scope.volObj ;
    $scope.menuObj ;
    $scope.playerItems ; 
    $scope.settingBtn;
    $scope.medias= new Array();
    $scope.VolumeMgr;
    $scope.settingMenuMgr;
    $scope.thumbMgr;
    $scope.overlays = new Array();
    $scope.isPlaylist = false ;
    $scope.PlaylistCurrentIndex = 0;
    $scope.isFullScreen = false ;
    $scope.isFullScreenSupported = true ;
    $scope.status ="Loading";

    //  current playing Metadata
    $scope.videoReady = false ;
    $scope.showingVolumeBar = false ;
    $scope.usingVolumeBar = false ;    
    $scope.isPlaying = false ;
    $scope.isVideoisAds = false ;
    $scope.isContainsSubs = false ;
    $scope.isContainsLangs = false ;
    $scope.isContainsThumbs = false ;
    $scope.VolLevelUp = true ;
    $scope.VolLevelDown = false ;
    $scope.VolLevelOff = false ;
    $scope.prgressPercentage = 0;
    $scope.volumePercentage = 80;
    $scope.movieTitle  = "";
    $scope.isAdsDataHidden = true ;
    $scope.isAdsInfoHidden = true ;
    $scope.thumbTime  = 0;
    $scope.tracksArray  = {"subs":[],"audio":[]};
    $scope.movieCTime = 0;
    $scope.movieTTime  = 0;
    $scope.movieBuffered = 0;
    $scope.volume = 0;
    $scope.idleMouseTimer;          
    $scope.isCursorHidden = false ;
    $scope.AdsData =""
    $scope.AdsInfo ="";

    $scope.prepareUI = function (){
        $scope.tdObj    = document.getElementById('thumbDiv');
        $scope.tiObj    = document.getElementById('thumbImgBlock');      
        $scope.pbObj    = document.getElementById('hprogressbar');
        $scope.video    = document.getElementById('fjVidMain');
        $scope.volObj   = document.getElementById('vprogressbar');
        $scope.menuObj  = document.getElementById('settingMenuDiv');
        $scope.settingBtn = document.getElementById('subsBtnId');

          // Check if fullscreen supported. If it's not just don't show the fullscreen icon.
        if(!$scope.video.requestFullscreen && 
         !$scope.video.mozRequestFullScreen &&
         !$scope.video.webkitRequestFullScreen) {
            $scope.isFullScreenSupported  = false;
        }
    };
    $scope.fjMouseMgr  = function($event){  
       $scope.isCursorHidden = false ;      
            $timeout.cancel($scope.idleMouseTimer);      
            $scope.idleMouseTimer = $timeout(function() {        
                    $scope.isCursorHidden = true ;        
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
        
        //settings
        if($scope.playerItems.length > 1 ){
            $scope.isPlaylist = true ;            
        } else {
            $scope.isPlaylist = false ;            
        }
        //Evt Mge
        $scope.SetVideoEvents();
        //volume Mgr 
        $scope.VolumeMgr = new $scope.fjVolume($scope.volObj );
        //create objects
        for (var i=0;i < $scope.playerItems.length ; i++){
            $scope.medias[i] =  new $scope.fjVideo($scope.playerItems[i] );               
        }
        //start @ startIdx
        $scope.PlaylistCurrentIndex = startIdx ;        
        console.debug( $scope.PlaylistCurrentIndex  ,$scope.medias[$scope.PlaylistCurrentIndex].media );
        
        $scope.medias[$scope.PlaylistCurrentIndex].Startup();
        $scope.medias[$scope.PlaylistCurrentIndex].setTracks();
        $scope.medias[$scope.PlaylistCurrentIndex].View();         
    }
    $scope.fjVolume = function(volumebar){
        this.vb = volumebar,

        this.goShowProgressBar = function (){  
            $timeout(function() {
                if (  $scope.usingVolumeBar == false ) {
                    $scope.showingVolumeBar = false ; 
                }
            }, 1000);        
        },
        this.goShowVolumeBar = function (){
            this.vb.style.display = 'block' ;
            $scope.showingVolumeBar = true ;
        },
        this.goUseVolumeBar = function(){
            $scope.usingVolumeBar = true ;
        },
        this.goHideVolumeBar = function(){
            $scope.usingVolumeBar = false ;
            $scope.showingVolumeBar = false ;  
            $scope.volumePercentage = 100 ;         
        },
        this.goMuteVolume = function () {        
            if($scope.volumePercentage == 0 )
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
            $scope.video.volume =  (newVolumePercentage /100);
            $scope.volumePercentage = newVolumePercentage ;
            if(newVolumePercentage == 0 ){
                $scope.VolLevelUp = false ;
                $scope.VolLevelDown = false ;
                $scope.VolLevelOff = true ;
            }else if  (newVolumePercentage > 60 ){
                $scope.VolLevelUp = true ;
                $scope.VolLevelDown = false ;
                $scope.VolLevelOff = false ;
            } else {
                $scope.VolLevelUp = false ;
                $scope.VolLevelDown = true ;
                $scope.VolLevelOff = false ;
            }
        }
    };
    $scope.fjSettingMenu = function( menuObj, settingBtnObj){         
        this.menudiv = menuObj, 
        this.menuBtn = settingBtnObj ,
      
        this.goSettingMenu  = function () {         
            // second call :to  hide 
            if(this.menudiv.style.visibility == 'visible')
                this.menudiv.style.visibility = 'hidden';  

            var rect = this.menuBtn.getBoundingClientRect();
            this.menudiv.style.left = rect.left +'px';
            this.menudiv.style.top = rect.top  - (rect.height * Math.max($scope.tracksArray.subs.length,
                     $scope.tracksArray.audio.length))+'px'           
            this.menudiv.style.visibility = 'visible';
        },
        this.setSubs = function( index) {
            //json array 
            for (var i=0; i< $scope.tracksArray.subs.length; i++) {
                if($scope.tracksArray.subs[i].index == index ){
                    $scope.tracksArray.subs[i].actif = true ;
                }
                else {
                    $scope.tracksArray.subs[i].actif = false ;
                }
            }
            //video array
            for (var i=0; i< $scope.video.textTracks.length; i++) {
                if (i == index) {
                    $scope.video.textTracks[i].mode = 'showing';
                } else {
                    $scope.video.textTracks[i].mode = 'hidden';
                }
            }
            //finish
            this.menudiv.style.visibility = 'hidden';
        },
        this.setAudio = function( index) {
            //json array 
            for (var i=0; i< $scope.tracksArray.audio.length; i++) {
                if($scope.tracksArray.audio[i].index == index )
                    $scope.tracksArray.audio[i].actif = true ;
                else 
                    $scope.tracksArray.audio[i].actif = false ;
            }
            //video array
            for (var i=0; i< $scope.video.videoTracks.length; i++) {
                if (i == index) {
                    $scope.video.videoTracks[i].selected = true;
                } else {
                    $scope.video.videoTracks[i].selected = false;
                }
            }
            //finish
            this.menudiv.style.visibility = 'hidden';
        }
    };
    $scope.fjThumbs = function(thumbImg, thumbDiv , progressBar){
        this.td = thumbDiv,
        this.t = thumbImg,
        this.b = progressBar, 

        this.goShowThumbs = function () {
            this.td.style.visibility = 'visible';            
        },
        this.goHideThumbs = function () {      
            this.td.style.visibility = 'hidden';
        },
        this.goRenderThumbs = function ($event) {   
            // first we convert from mouse to time position ..
            var rect = this.b.getBoundingClientRect();
            var p = ($event.pageX - rect.left ) * (  $scope.video.duration / (rect.right - rect.left) );     
            if ( ( p > ($scope.video.duration + 2)) || (p < 0) ) {//some error ?
                console.error (" Position is bigger than duration >>" ,p, scope.video.duration);
                return ; 
            }
            //update ui
              $scope.thumbTime = p;
            // ..then we find the matching cue..
            var c = $scope.video.textTracks[$scope.indexThumbsTrack].cues;
            if( c == null) {//track eleme,t is not supprted : Firefox 
                console.error (" cues is null @ ",$scope.indexThumbsTrack," not supported , Firefox ?");
                return;
            }

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
    $scope.fjOverlays = function( _data, _showAt, _showDuration, _animate){
        var adData = _data ,
        showAt = _showAt ,
        showDuration = _showDuration ,
        animate = _animate ,
        started = false,
        finished = false , 
        refreshId = null ,
        handler = null,

        onTmUpdate=function(e) {
            $scope.$apply(function () {
                if( (!started) && ( $scope.video.currentTime > showAt ) && ( $scope.video.currentTime < (showAt+1) ) ) { 
                    started  = true ; 
                    if(showDuration == -1 ) // correct duration
                        showDuration = Math.trunc($scope.video.duration);
                    StartAds();
                    // hide ads after timeout
                    refreshId = $interval( upInfo ,1000);
                    console.debug(">> refreshId",refreshId);
                    return ;
                }
            });
        },
        trigger = function(){
            $scope.isAdsDataHidden = true ;                 
            $scope.isAdsInfoHidden = true ;
            handler = onTmUpdate.bind($scope.video);            
            $scope.video.addEventListener("timeupdate",handler,false);            
        },
        upInfo = function(){             
                if ( showDuration > 0 ) {
                    $scope.AdsInfo = $sce.trustAsHtml( 'your ads will end in '+showDuration+' sec');
                    showDuration --;        
                }
                else
                {
                    console.debug("Ending @@@ ", showDuration);
                    $scope.isAdsDataHidden = true ;
                    $scope.isAdsInfoHidden = true ;
                    finished  = true ; 
                    console.debug(" Finishing Overlay >> refreshId",refreshId);  
                    //finish  
                    $interval.cancel (refreshId);                     
                    $scope.video.removeEventListener("timeupdate", handler,false);
                }            
        },
        StartAds = function() {
            var secTimeout = showDuration  *1000;   
            $scope.AdsInfo =$sce.trustAsHtml( 'you ads will end in '+showDuration+' sec');         
            // show ads
            if(adData != null){
                console.debug('Data re not null ! ');
                $scope.isAdsDataHidden = false ;
                $scope.AdsData = $sce.trustAsHtml( adData );
            }
            if ( animate == true ) {
                console.debug('Animation is  Activated ! ');             
                $scope.isAdsInfoHidden = false ;
                
            }
            console.debug('you ads will end in '+showDuration+' sec', $scope.isAdsInfoHidden,"<<>>",$scope.isAdsInfoHidden);            
        };
        console.debug("fjOverlays : overlay triggred to start @ ",showAt, " for ",showDuration, "sec ");
        trigger();        
    };
    $scope.fjVideo= function(mediaConf){	
		this.media = mediaConf,
   
		this.Startup=function(){
            $scope.movieTitle = this.media.title ;
            if(this.media.type == 'dash')
            {
                console.debug("Startup for Dash ");
    		    this.context =  new Dash.di.DashContext();
    			this.player  =  new MediaPlayer(this.context);		
    			this.player.startup();
            }
            else
            {
                console.debug("Startup for NON Dash ");
                var source = document.createElement('source');
                source.src = this.media.src;
                source.type = this.media.type;
                $scope.video.appendChild(source);  
            }
		},
		this.View=function(){      
            if(this.media.type == 'dash')
            {
                console.debug("View for Dash ");
    			this.player.attachView($scope.video);
    			this.player.setAutoPlay(true);
    			this.player.attachSource(this.media.src);
    			this.player.setAutoSwitchQuality(true);	
            }
            else
            {
                console.debug("View for NON Dash ");
                $scope.video.play();
            }
		},
        this.setTracks = function(){
            var newObj , i ;
            console.debug("setTracks ");
            $scope.movieTTime  =$scope.video.duration ;
            $scope.movieCTime  = $scope.video.currentTime ;
            $scope.movieBuffered = $scope.video.buffered;
            $scope.VolumeMgr.setVolume( $scope.video.volume * 100 );          
                       
            //set  thumbs 
            if(this.media.thumbs )
            {
                console.debug("setTracks : Setting thumbs ");
                $scope.thumbMgr = new $scope.fjThumbs( $scope.tiObj, $scope.tdObj , $scope.pbObj);
                //
                var track = document.createElement('track');
                track.src = this.media.thumbs ;
                track.kind  ='metadata' ;
                $scope.video.appendChild(track); 
            }
            //set  subs 
            if(this.media.substitles )
            {
                console.debug("setTracks : Setting substitles  ",this.media.substitles.length );
                for (i =0; i< this.media.substitles.length ;i++) 
                {
                    var track = document.createElement('track');
                    track.kind='subtitles';
                    track.src = this.media.substitles[i].src ;
                    track.srclang = this.media.substitles[i].srclang ;
                    track.label = this.media.substitles[i].label ;
                    $scope.video.appendChild(track); 
                }
            }
            $scope.video.load();            
            console.debug("after inserting tracks in video , we have > ",$scope.video);
            // looking for audio tracks 
            if($scope.video.audioTracks) {    
                console.debug("setTracks : Setting audioTracks  ",scope.video.audioTracks.length );            
                for (i = 0; i < $scope.video.audioTracks.length; i++) {
                    $scope.isContainsLangs = true ;
                    newObj = {"label" : $scope.video.audioTracks[i].language ,"index":i , "actif":true}; 
                    $scope.tracksArray.audio.push(  newObj);                    
                }
            }
            // looking for metadata  & subtitles tracks
            if($scope.video.textTracks) {
                newObj ={"label" : "off", "index":-1 , "actif":true};
                $scope.tracksArray.subs.push(newObj);
                for (i = 0; i < $scope.video.textTracks.length; i++) 
                {
                    if ( $scope.video.textTracks[i].kind == 'metadata' )
                    {       
                        $scope.indexThumbsTrack = i ; 
                        console.debug(">>>> thumb track found @ ", i ,">> ",$scope.video.textTracks[i]);
                        $scope.isContainsThumbs = true ;
                    }
                    else if($scope.video.textTracks[i].kind == 'subtitles' )
                    {
                        newObj =  {"label" : $scope.video.textTracks[i].label ,"index":i, "actif":false} ;            
                        $scope.tracksArray.subs.push( newObj);            
                        $scope.isContainsSubs = true ;
                    }
                    else
                    {
                        console.debug ("unknown type of tracks ",$scope.video.textTracks[i].kind)
                    }
                } 
                if ($scope.isContainsSubs || $scope.isContainsLangs) {
                    $scope.SettingMenuMgr = new $scope.fjSettingMenu($scope.menuObj , $scope.settingBtn);
                    $scope.SettingMenuMgr.setSubs(-1);
                }

            }

            //setoverlays
            //check : if Ads ; show bar info with countdown and hide controls 
            if(this.media.class == "ads"){
                $scope.isVideoisAds = true ;
                console.debug("setTracks : Setting overlays  class > ADS >");            
                $scope.overlays[0] = new $scope.fjOverlays( null ,0,-1,true );                   
            }
            else 
            {   $scope.isVideoisAds = false ;
                if(this.media.overlays )
                {   console.debug("setTracks : Setting overlays  class > Movie ",this.media.overlays.length);            
                    for (i =0; i< this.media.overlays.length ;i++) 
                    {
                        $scope.overlays[i] = new $scope.fjOverlays( this.media.overlays[i].data,
                                                this.media.overlays[i].showAt,
                                                this.media.overlays[i].duration,
                                                this.media.overlays[i].animate );                        
                    }
                }
            }           
        }
	}; 
    $scope.goPrevPlaylist  = function () {
        //pause
        if( $scope.isPlaying == true )
        {
            $scope.isPlaying  =  false;      
            $scope.video.pause();
        }

        $scope.cleanVideoObject();

        if( $scope.PlaylistCurrentIndex > 0 )
            $scope.PlaylistCurrentIndex -- ;        
        else 
            $scope.PlaylistCurrentIndex  = ( $scope.playerItems.length - 1) ;        

        console.debug("Going Prev ",$scope.PlaylistCurrentIndex , "/" ,$scope.playerItems.length -1);   
        $scope.medias[$scope.PlaylistCurrentIndex].Startup();
        $scope.medias[$scope.PlaylistCurrentIndex].setTracks();
        $scope.medias[$scope.PlaylistCurrentIndex].View();         
    };
    $scope.goNextPlaylist  = function () {      
        //pause
        if( $scope.isPlaying == true )
        {
            $scope.isPlaying  =  false;      
            $scope.video.pause();
        }

        $scope.cleanVideoObject();

        if( $scope.PlaylistCurrentIndex < ( $scope.playerItems.length - 1) ) 
            $scope.PlaylistCurrentIndex ++ ;
        else
            $scope.PlaylistCurrentIndex  = 0 ;
        
        console.debug("Going Next ",$scope.PlaylistCurrentIndex ,"/", $scope.playerItems.length -1);
        $scope.medias[$scope.PlaylistCurrentIndex].Startup();
        $scope.medias[$scope.PlaylistCurrentIndex].setTracks();
        $scope.medias[$scope.PlaylistCurrentIndex].View(); 
        
    };
    $scope.goFullScreen  = function () {
        // If fullscreen mode is active...  
        if ($scope.isFullScreen == true ) {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen)
                document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) 
                document.msExitFullscreen();
            $scope.isFullScreen  =  false;
        }
        else 
        {        
            if ($scope.video.requestFullscreen) 
                $scope.video.requestFullscreen();
            else if ($scope.video.mozRequestFullScreen) 
                $scope.video.mozRequestFullScreen();
            else if ($scope.video.webkitRequestFullScreen)         
            $scope.video.webkitRequestFullScreen();        
            else if ($scope.video.msRequestFullscreen) 
                $scope.video.msRequestFullscreen();
            $scope.isFullScreen  =  true;
        }     
    };
    $scope.goSeek = function ($event) {  
        if($scope.video.seekable)
        {
            var rect = $scope.pbObj.getBoundingClientRect();
            var p = ($event.pageX - rect.left ) * (  $scope.video.duration / (rect.right - rect.left) );
            console.debug("seek to ", p , "sec ") ;
            //pause
            if( $scope.isPlaying == true )
            {
                $scope.isPlaying  =  false;      
                $scope.video.pause();
            }            
            //change current time 
            $scope.video.currentTime = p;        
            //play
            $scope.isPlaying  =  true;
            $scope.video.play(); 
        }
        else
        {
            console.warn("seek is no supported on this video ");
        }
    };
    $scope.goBackHistory = function (){  
        $window.history.back();
    };
    $scope.goPlay  = function () {
        if( $scope.isPlaying == true )
        {
            $scope.isPlaying  =  false;      
            $scope.video.pause();
        }
        else 
        {
            $scope.isPlaying  =  true;
            $scope.video.play();            
        }     
    }

    $scope.cleanVideoObject = function(){
        //stop player         
        $scope.video.pause();
        //remove text tracks 
        $scope.tracksArray  = {"subs":[],"audio":[]};
        //clean video attribute
        $scope.video.removeAttribute("src");// used by dash 
        // clean all video children
        while ($scope.video.firstChild) {
            $scope.video.removeChild($scope.video.firstChild); // used by video
        }
        //clean Manager :fjthumb, setting menu
        delete $scope.settingMenuMgr;
        delete $scope.thumbMgr;
        delete $scope.overlays ;
         $scope.overlays = new Array();

        //reset tags 
        $scope.isContainsSubs = false ;
        $scope.isContainsLangs = false ;
        $scope.isContainsThumbs = false ;
        $scope.prgressPercentage = 0;        
        $scope.movieTitle  = "";
        $scope.isAdsDataHidden = true ;
        $scope.isAdsInfoHidden = true ;
    };
    $scope.onPlayVideoEvt=function(e) {
        $scope.$apply(function () {
            $scope.isPlaying = true ;
            console.info(" PLAY EVENT >>> on SRC  " ,e.currentTarget.currentSrc);
        });
    },
    $scope.onPauseVideoEvt=function(e) {
        $scope.$apply(function () {
            $scope.isPlaying = false;
            console.info(" PAUSE EVENT >>> on SRC  " ,e.currentTarget.currentSrc);
        });
    };
     $scope.onPauseVideoEvt=function(e) {
        $scope.$apply(function () {
            $scope.isPlaying = false;
            console.info(" PAUSE EVENT >>> on SRC  " ,e.currentTarget.currentSrc);
        });
    };
    $scope.onCanPlayVideoEvt=function(e) {
        $scope.$apply(function () {          
            $scope.movieTTime  = $scope.video.duration ;
            $scope.movieCTime  = $scope.video.currentTime ;
            $scope.movieBuffered = $scope.video.buffered;
            $scope.VolumeMgr.setVolume( $scope.video.volume * 100 );                    
            $scope.videoReady = true;
            console.info(" CANPLAY EVENT >>> on SRC  " ,e.currentTarget.currentSrc);
        });        
        
    };
    $scope.onEndedVideoEvt=function(e) {
        $scope.$apply(function () {
            $scope.videoReady = false;
            //go next 
            if ( $scope.isPlaylist ){
              $scope.goNextPlaylist();
            }
            console.info(" END EVENT >>> EVENT >>> on SRC  " ,e.currentTarget.currentSrc);
        });
    };
    $scope.onLoadeddataVideoEvt=function(e) {
               
    };
    $scope.onTimeupdateVideoEvt=function(e) {
        $scope.$apply(function () {          
            $scope.movieTTime  = $scope.video.duration ;
            $scope.movieCTime  = $scope.video.currentTime ;
            $scope.movieBuffered = $scope.video.buffered;
            $scope.volume = $scope.video.volume;

            $scope.prgressPercentage = ($scope.movieCTime / $scope.movieTTime )*100;          
            if( $scope.movieCTime == $scope.movieTTime ){
              console.debug(" END >", $scope.prgressPercentage);
              $scope.isPlaying  =  false;
            }
        });
    };
    $scope.onErrorVideoEvt=function(e) {
        console.info(" ERROR EVENT >>> " ,e);
    };
      $scope.onSeekingVideoEvt=function(e) {
        $scope.videoReady = false ;
        $scope.status ="Seeking";
        console.info(" onSeekingVideoEvt EVENT >>> " ,e.currentTarget.currentSrc);
    };
      $scope.onSeekedVideoEvt=function(e) {
        $scope.videoReady = true ;
        console.info(" onSeekedVideoEvt EVENT >>> " ,e.currentTarget.currentSrc);
    };
    $scope.SetVideoEvents = function() {            
        $scope.video.addEventListener("error", $scope.onErrorVideoEvt.bind($scope.video));
        $scope.video.addEventListener("seeking", $scope.onSeekingVideoEvt.bind($scope.video));
        $scope.video.addEventListener("seeked", $scope.onSeekedVideoEvt.bind($scope.video));
        $scope.video.addEventListener("canplay", $scope.onCanPlayVideoEvt.bind($scope.video));
        $scope.video.addEventListener("loadeddata", $scope.onLoadeddataVideoEvt.bind($scope.video));
        $scope.video.addEventListener("timeupdate", $scope.onTimeupdateVideoEvt.bind($scope.video));
        $scope.video.addEventListener("play", $scope.onPlayVideoEvt.bind($scope.video));
        $scope.video.addEventListener("pause", $scope.onPauseVideoEvt.bind($scope.video));
        $scope.video.addEventListener("ended", $scope.onEndedVideoEvt.bind($scope.video));
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
    templateUrl: '../dist/fjplayer-tmpl.html',
    controller: 'fjplayerCtrl'  ,  
    link: function(scope, iElement, iAttrs) { 
        scope.prepareUI();
        scope.checkPlaylistAndStart(iAttrs.fjplayerdesc, 0);            
        console.debug("Starting !!!");
    }
  }
});

