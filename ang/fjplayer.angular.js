
'use strict';

angular.module('fjplayer', []).
controller('fjplayerCtrl', ['$scope' ,'$filter','$interval','$document' ,'$timeout' ,'$sce',
            function ($scope,$filter,$interval,$document,$timeout,$sce) {

     $scope.fjplayerTag ="Fjplayer.js"         
    //
    $scope.videoReady = false ;
    $scope.showingVolumeBar = false ;
    $scope.usingVolumeBar = false ;
    $scope.isPlaylist = false ;
    $scope.isPlaying = false ;
    $scope.isFullScreen = false ;
    $scope.isFullScreenSupported = true ;

    $scope.isContainsSubs = false ;
    $scope.isContainsLangs = false ;
    $scope.isContainsThumbs = false ;

    $scope.VolLevelUp = true ;
    $scope.VolLevelDown = false ;
    $scope.VolLevelOff = false ;

    $scope.prgressPercentage = 0;
    $scope.volumePercentage = 80;

    $scope.movieTile  = "My titre de films ";

    $scope.isAdsDataHidden = false ;
    $scope.isAdsInfoHidden = false ;

    $scope.thumbTime  = 0;
    $scope.tracksArray  = {"subs":[],"audio":[]};
    
    $scope.movieCTime = 0;
    $scope.movieTTime  = 0;
    $scope.movieBuffered = 0;
    $scope.volume = 0;

    $scope.AdsData ="";
    $scope.AdsInfo ="";

    $scope.video =  document.getElementById('videoID');
    $scope.td = document.getElementById('thumbDiv');
    $scope.t = document.getElementById('thumb');      
    $scope.b = document.getElementById('hprogressbar');
/* only for dash
    var url = "http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd ";
    //http://dash.edgesuite.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd";
    var context = new Dash.di.DashContext();
    var player = new MediaPlayer(context);
    player.startup();
    player.attachView(document.querySelector("#videoID"));
    player.attachSource(url);
*/

    $scope.setVolume = function(newVolumePercentage){
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
    };
    $scope.video.addEventListener('loadeddata', function() {
      $scope.$apply(function () {          
          $scope.movieTTime  = $scope.video.duration ;
          $scope.movieCTime  = $scope.video.currentTime ;
          $scope.movieBuffered = $scope.video.buffered;
          $scope.setVolume( $scope.video.volume * 100 );          
          $scope.videoReady = true;          
          $scope.goPlay();
          console.log("Video is loaded and can be played ; READY", $scope.videoReady,"volume ",$scope.volume);
          $scope.loadModuleMetadata();          
      })       
    }, false);
    $scope.video.addEventListener('timeupdate', function () {
      $scope.$apply(function () {          
          $scope.movieTTime  = $scope.video.duration ;
          $scope.movieCTime  = $scope.video.currentTime ;
          $scope.movieBuffered = $scope.video.buffered;
          $scope.volume = $scope.video.volume;

          $scope.prgressPercentage = ($scope.movieCTime / $scope.movieTTime )*100;          
          if( $scope.movieCTime == $scope.movieTTime ){
            console.log(" END >", $scope.prgressPercentage);
            $scope.isPlaying  =  false;
          }
        })
    }); 
    $scope.video.addEventListener('ended', function () {
      // TODO  ..      
    });
    $scope.video.addEventListener('error', function () {
      console.error('error on video !!');
      // TODO  ..      
    });
    $scope.video.addEventListener('waiting', function () {
      // TODO  ..      
    });
    $scope.goPlay  = function () {
      if( $scope.isPlaying === true )
      {
        $scope.isPlaying  =  false;      
        $scope.video.pause();
      }
      else {
        $scope.isPlaying  =  true;
        $scope.video.play(); 
      }     
    };

    //Overlay used for Ads or information Plugin Api ; ex OverlayPluginShowAds('ad_info','ad_data','videoID',5,10);
    var OverlayPluginShowAds = function(InfoID, DataID, VideoID, showAt, showDuration,animate){
    //info
    console.info (" an Overlay is added @ ",showAt," sec for ",showDuration," sec.");
    var video= document.getElementById(VideoID);
    video.addEventListener('progress', 
      function() {      
      if( ( video.currentTime > showAt ) && ( video.currentTime < (showAt+1) ) ) {      
        StartAds();
        return ;
      }
    }, false);  
  
    function upInfo(){  
    console.log("updating @@@ ", showDuration);   
      if ( showDuration > 0 ) {
        $(InfoID).html('you ads will end in '+showDuration+' sec');
        showDuration --;        
      }else{ return; }  
    }

    function StartAds() {
      var secTimeout = showDuration  *1000;     
      var refreshId = null;
      // show ads
      $(DataID).show();
      $(InfoID).show();
      $(InfoID).html('you ads will end in '+showDuration+' sec');
      // hide ads after timeout
      if ( animate == true )
        refreshId = setInterval( upInfo ,1000);
      //timeout
      setTimeout(function(){
        console.log("Ending @@@ ", showDuration);
        $(DataID).fadeOut('slow');
        $(InfoID).fadeOut('slow');
        if ( animate == true )
          clearInterval (refreshId);
      },secTimeout);
    }
  };
    $scope.goPrevPlaylist  = function () {
    };

    $scope.goNextPlaylist  = function () {
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

    $scope.loadModuleMetadata = function (){
      // init 
      $scope.indexThumbsTrack = -1 ;
      
      // Check if fullscreen supported. If it's not just don't show the fullscreen icon.
      if(!$scope.video.requestFullscreen && 
         !$scope.video.mozRequestFullScreen &&
         !$scope.video.webkitRequestFullScreen) {
            $scope.isFullScreenSupported  = false;
      }

      // looking for metadata  & subtitles tracks
      if($scope.video.textTracks) {
        var newObj ={"label" : "off", "index":-1 , "actif":true};
        $scope.tracksArray.subs.push(newObj);
        for (var i = 0; i < $scope.video.textTracks.length; i++) {
          if ( $scope.video.textTracks[i].kind == 'metadata' )
          {       
            $scope.indexThumbsTrack = i ; 
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
            console.log ("unknown type of tracks ",$scope.video.textTracks[i].kind)
          }
        } 
      }

      // looking for audio tracks 
      if($scope.video.audioTracks) {
        var newObj ;
        for (var i = 0; i < $scope.video.audioTracks.length; i++) {
          $scope.isContainsLangs = true ;
          newObj = {"label" : $scope.video.audioTracks[i].language ,"index":i , "actif":true}; 
          $scope.tracksArray.audio.push(  newObj);
          console.log(" > audio are ",$scope.audioArray);
        }
      }

      //set Ads
        // show ADS
      OverlayPluginShowAds('#ad_info','#ad_data','videoID',15,5, false );
      OverlayPluginShowAds('#ad_info','#ad_data','videoID',5,5, true );
    };

    // Thumbs WebVtt Plugin Function
    $scope.goShowThumbs = function ($event) {
        if($scope.isContainsThumbs )          
          $scope.td.style.visibility = 'visible';
    };
    $scope.goHideThumbs = function ($event) {
      if($scope.isContainsThumbs )
        $scope.td.style.visibility = 'hidden';
    };
    $scope.goRenderThumbs = function ($event) {   
      if($scope.indexThumbsTrack == false )
        return;

      // first we convert from mouse to time position ..
      var rect = $scope.b.getBoundingClientRect();
      var p = ($event.pageX - rect.left ) * (  $scope.video.duration / (rect.right - rect.left) );
      
      if ( ( p > ($scope.video.duration + 2)) || (p < 0) )//some error ?
        return ; 
      //update ui
      $scope.thumbTime = p;
      //console.log(">>>>>>>>> CURRENT :", $scope.thumbTime ,">>>>>>>>> CURRENT :", p);
      // ..then we find the matching cue..
      var c = $scope.video.textTracks[$scope.indexThumbsTrack].cues;
      if( c == null) //track eleme,t is not supprted : Firefox 
        return;
    
      for (var i=0; i<c.length; i++) {
        if(c[i].startTime <= p && c[i].endTime > p) {
            break;
        };
      }
      //console.info( $scope.b.offsetTop,"found cue @ ",i," >>",c[i] ); 
      // ..next we unravel the JPG url and fragment query..
      var url =c[i].text.split('#')[0];
      var xywh = c[i].text.substr(c[i].text.indexOf("=")+1).split(',');

      // ..and last we style the thumbnail overlay
      //console.info("$scope.b.offsetTop >>",$scope.b.offsetTop, "$scope.b.offsetBottom ",$scope.b.offsetBottom ," and is ",xywh);
      $scope.t.style.backgroundImage = 'url('+c[i].text.split('#')[0]+')';
      $scope.t.style.backgroundPosition = '-'+xywh[0]+'px -'+xywh[1]+'px';
      $scope.t.style.width = xywh[2]+'px';
      $scope.t.style.height = xywh[3]+'px';
      
      $scope.td.style.left = $event.pageX   - xywh[2]/2+'px';
      $scope.td.style.top = rect.top  - (xywh[3] *1.5)+'px'     
      $scope.td.style.width = xywh[2]+'px';    
      //$scope.td.style.height = xywh[3]+20;'px'; // not needed : managed by css

      //console.info("Settled height ",xywh[3]+'px',"current rect ", $scope.t.getBoundingClientRect());
    };

    //Volume
    $scope.goShowProgressBar = function (){  
      $timeout(function() {
        if (  $scope.usingVolumeBar == false ) {
          $scope.showingVolumeBar = false ; 
        }
        //console.log(">>> after setTimeout $scope.goShowProgressBar ",$scope.showingVolumeBar, $scope.usingVolumeBar);
      }, 1000);        
    };
    $scope.goShowVolumeBar = function (){
      var vb = document.getElementById('vprogressbar');
      vb.style.display = 'block' ;
      $scope.showingVolumeBar = true ;
      //console.log(">>> $scope.showingVolumeBar ",$scope.showingVolumeBar);
    };
    $scope.goUseVolumeBar = function(){
      $scope.usingVolumeBar = true ;
      //console.log(">>> $scope.goUseVolumeBar ",$scope.usingVolumeBar);
    }
    $scope.goHideVolumeBar = function(){
      $scope.usingVolumeBar = false ;
      $scope.showingVolumeBar = false ; 
      //console.log(">>> $scope.goHideVolumeBar ",$scope.showingVolumeBar, $scope.usingVolumeBar);
    }
    $scope.goMuteVolume = function () {
      //console.log(">>> $scope.goMuteVolume ",$scope.showingVolumeBar);
        if($scope.volumePercentage == 0 )
          $scope.setVolume( 100 );          
        else
          $scope.setVolume( 0 );          
    };
    $scope.setVolumeProgressLevel = function($event){
      //console.log(">>> $scope.setVolumeProgressLevel X,Y ",$event.pageX,$event.pageY);
      var bv = document.getElementById('vprogressbar');
      var rect = bv.getBoundingClientRect();
      //console.log(">>> $scope.setVolumeProgressLevel rect of progress ",rect);
      var vp =(($event.pageX - rect.left) / rect.width) * 100 ;
      //console.log(">>> Volume percentage ",vp);
      $scope.setVolume (vp);
    };

    //subtitles and setting 
    $scope.goSettingMenu  = function () {            
      console.info("arrays tracks ", $scope.tracksArray );
      var menudiv = document.getElementById('settingMenuDiv');
      // second call :to  hide 
      if(menudiv.style.visibility === 'visible')
        menudiv.style.visibility = 'hidden';  

      var subsBtn = document.getElementById('subsBtnId');
      var rect = subsBtn.getBoundingClientRect();
      menudiv.style.left = rect.left +'px';
      menudiv.style.top = rect.top  - (rect.height * Math.max($scope.tracksArray.subs.length, $scope.tracksArray.audio.length))+'px'           
      menudiv.style.visibility = 'visible';
    };
    $scope.setSubs = function( index) {
        console.log("Setting Subs to index ", index );
        //json array 
        for (var i=0; i< $scope.tracksArray.subs.length; i++) {
          if($scope.tracksArray.subs[i].index == index ){
            console.log("actif to true index ", i  );
            $scope.tracksArray.subs[i].actif = true ;
          }
          else {
            console.log("actif to false index ", i  );
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
        var menudiv = document.getElementById('settingMenuDiv');
        menudiv.style.visibility = 'hidden';
    };
    $scope.setAudio = function( index) {
      console.log("Setting Audio to index ", index );
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
      var menudiv = document.getElementById('settingMenuDiv');
      menudiv.style.visibility = 'hidden';
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
config(function() { // provider-injector
  // This is an example of config block.
  // You can have as many of these as you want.
  // You can only inject Providers (not instances)
  // into config blocks.
}).
run(function() { // instance-injector
  // This is an example of a run block.
  // You can have as many of these as you want.
  // You can only inject instances (not Providers)
  // into run blocks
});

