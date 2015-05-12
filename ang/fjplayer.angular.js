
'use strict';

angular.module('fjplayer', []).
controller('fjplayerCtrl', ['$scope' ,'$filter','$interval','$document' ,'$timeout' ,'$sce','$window',
            function ($scope,$filter,$interval,$document,$timeout,$sce,$window) {
    //  globa player Metadata
    $scope.fjplayerTag ="Fjplayer.js"         
    $scope.isPlaylist = false ;
    $scope.PlaylistItemsCount = 0 ;
    $scope.PlaylistCurrentIndex = 0 ;
    //  current playing Metadata
    $scope.videoReady = false ;
    $scope.showingVolumeBar = false ;
    $scope.usingVolumeBar = false ;    
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
    $scope.movieTile  = "";
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
    
    $scope.parseConfAndStart = function(conf){
      // Init ui global 
      $scope.td    = document.getElementById('thumbDiv');
      $scope.t     = document.getElementById('thumb');      
      $scope.b     = document.getElementById('hprogressbar');

      //get conf
      $scope.configuration = angular.fromJson(conf);
      //set globals 
      if($scope.configuration.playlist)
      {
        if($scope.configuration.playlist.length < 1  ) // error 
        {
            console.error("BAD conf , no media found !");
            confconsole.error(conf);
        }
        else if($scope.configuration.playlist.length > 1 ){
          $scope.isPlaylist = true ;
          $scope.PlaylistItemsCount = $scope.configuration.playlist.length;
          $scope.PlaylistCurrentIndex = 0 ;
          $scope.StartConfPlayAt($scope.PlaylistCurrentIndex);
        }
        else 
          $scope.isPlaylist = false ;
        $scope.PlaylistCurrentIndex = 0 ;
          $scope.StartConfPlayAt($scope.PlaylistCurrentIndex);
      }
      else
      {
          console.error("BAD conf , no media found !");
          confconsole.error(conf);
      }
      
    };
    $scope.StartConfPlayAt = function (index){   
      console.debug('will play item at index   ',index); 
      //set video the first one only : for the moment       
      var wrapper = document.getElementById('videoWrapper');     
      // clean old childs
      while (wrapper.firstChild) {
         wrapper.removeChild(wrapper.firstChild);
      }   
      //clean array 
      $scope.tracksArray = {"subs":[],"audio":[]};  

      //Create the new video 
      var media = document.createElement('video');
      media.preload = true;
      wrapper.appendChild(media);  
      $scope.video = media
      //set cbx's
      $scope.Initialize();
      //add new child
      if($scope.configuration.playlist[index].type === 'dash'){
          console.debug('found a dash source ');
          var context = new Dash.di.DashContext();
          var player = new MediaPlayer(context);
          player.startup();
          player.attachView($scope.video);
          player.attachSource($scope.configuration.playlist[index].src);
      }else {
          console.debug('found not a dash source ');
          var source = document.createElement('source');
          source.src = $scope.configuration.playlist[index].src;
          source.type = $scope.configuration.playlist[index].type;
          $scope.video.appendChild(source);  
      }
      //set  thumbs 
      if($scope.configuration.playlist[index].thumbs ){
         var track = document.createElement('track');
         track.src = $scope.configuration.playlist[index].thumbs ;
         track.kind  ='metadata' ;
         $scope.video.appendChild(track); 
      }
      //set  subs 
      if($scope.configuration.playlist[index].substitles ){
        for (var i =0; i< $scope.configuration.playlist[index].substitles.length ;i++) 
        {
          var track = document.createElement('track');
          track.kind='subtitles';
          track.src = $scope.configuration.playlist[index].substitles[i].src ;
          track.srclang = $scope.configuration.playlist[index].substitles[i].srclang ;
          track.label = $scope.configuration.playlist[index].substitles[i].label ;
          $scope.video.appendChild(track); 
       }
      }
      //set tile 
      $scope.movieTile = $scope.configuration.playlist[index].title ;
      //set overlays  
      if($scope.configuration.playlist[index].overlays ){
        for (var i =0; i< $scope.configuration.playlist[index].overlays.length ;i++) 
        {
          OverlayPluginShowAds( $scope.configuration.playlist[index].overlays[i].data,
                                $scope.configuration.playlist[index].overlays[i].showAt,
                                $scope.configuration.playlist[index].overlays[i].duration,
                                $scope.configuration.playlist[index].overlays[i].animate );
       }
      }
      console.debug(">>>  wrapper is  ",wrapper ) ;
    };
    $scope.Initialize = function() {
      console.debug(">>>  Initialize ing ") ;
  
      var cbxLoadedData = function() {
        $scope.$apply(function () {          
            $scope.movieTTime  = $scope.video.duration ;
            $scope.movieCTime  = $scope.video.currentTime ;
            $scope.movieBuffered = $scope.video.buffered;
            $scope.setVolume( $scope.video.volume * 100 );          
            $scope.videoReady = true;          
            $scope.goPlay();
            console.debug("Video is loaded and can be played ; READY", $scope.videoReady,"volume ",$scope.volume);
            $scope.loadModuleMetadata();          
        })       
      };
      var cbxTimeUpdate = function() {
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
          })
       };
      $scope.video.addEventListener('loadeddata', cbxLoadedData , false);      
      $scope.video.addEventListener('timeupdate', cbxTimeUpdate);       
      $scope.video.addEventListener('pause', function () {
        console.debug('pause on video !!');
        // TODO  ..      
      });
      
      $scope.video.addEventListener('play', function () {
        console.debug('play on video !!');
        // TODO  ..      
      });
      
      $scope.video.addEventListener('ended', function () {
        //go next 
        if ( $scope.isPlaylist ){
          $scope.goNextPlaylist();
        }
      });
      
      $scope.video.addEventListener('error', function () {
        console.error('error on video !!');
        // TODO  ..      
      });
      
      $scope.video.addEventListener('waiting', function () {
        // TODO  ..      
      });

    };

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
    $scope.goBackHistory = function (){
      console.debug("Doing back !!");
      $window.history.back();
     };
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
    
    var OverlayPluginShowAds = function(data, showAt, showDuration,animate){
  
      $scope.AdsData = $sce.trustAsHtml( data );
      console.debug (" an Overlay is added @ ",showAt," sec for ",showDuration," sec.");
     
      $scope.video.addEventListener('progress', 
        function() {      
        if( ( $scope.video.currentTime > showAt ) && ( $scope.video.currentTime < (showAt+1) ) ) {      
          StartAds();
          return ;
        }
      }, false);  
  
      function upInfo(){  
      console.debug("updating @@@ ", showDuration);   
        if ( showDuration > 0 ) {
          $scope.AdsInfo = $sce.trustAsHtml( 'you ads will end in '+showDuration+' sec');
          showDuration --;        
        }else{ return; }  
      }

      function StartAds() {
        var secTimeout = showDuration  *1000;     
        var refreshId = null;
        // show ads
        $scope.isAdsDataHidden = false ;
        $scope.isAdsInfoHidden = false ;
         $scope.AdsInfo =$sce.trustAsHtml( 'you ads will end in '+showDuration+' sec');
        // hide ads after timeout
        if ( animate == true )
          refreshId = $interval( upInfo ,1000);
        //timeout
        $timeout(function(){
          console.debug("Ending @@@ ", showDuration);
          $scope.isAdsDataHidden = true ;
          $scope.isAdsInfoHidden = true ;
          if ( animate == true )
            $interval.cancel (refreshId);
        },secTimeout);
      }
    };
    $scope.goPrevPlaylist  = function () {
      console.debug("Going Prev ");
      
       //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }

      if( $scope.PlaylistCurrentIndex > 0 ) {
        $scope.PlaylistCurrentIndex -- ;
      }else  {
        $scope.PlaylistCurrentIndex  = $scope.PlaylistItemsCount ;
      }
      $scope.StartConfPlayAt($scope.PlaylistCurrentIndex);

      //play
      $scope.isPlaying  =  true;      
      $scope.video.play();
    };

    $scope.goNextPlaylist  = function () {
      console.debug("Going Next ");
      
      //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }
      
      if( $scope.PlaylistCurrentIndex < $scope.PlaylistItemsCount) {
      $scope.PlaylistCurrentIndex ++ ;
      }else  {
        $scope.PlaylistCurrentIndex  = 0 ;
      }
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
            console.debug ("unknown type of tracks ",$scope.video.textTracks[i].kind)
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
          console.debug(" > audio are ",$scope.audioArray);
        }
      }

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
      //console.debug(">>>>>>>>> CURRENT :", $scope.thumbTime ,">>>>>>>>> CURRENT :", p);
      // ..then we find the matching cue..
      var c = $scope.video.textTracks[$scope.indexThumbsTrack].cues;
      if( c == null) //track eleme,t is not supprted : Firefox 
        return;
    
      for (var i=0; i<c.length; i++) {
        if(c[i].startTime <= p && c[i].endTime > p) {
            break;
        };
      }
      //console.debug( $scope.b.offsetTop,"found cue @ ",i," >>",c[i] ); 
      // ..next we unravel the JPG url and fragment query..
      var url =c[i].text.split('#')[0];
      var xywh = c[i].text.substr(c[i].text.indexOf("=")+1).split(',');

      // ..and last we style the thumbnail overlay
      //console.debug("$scope.b.offsetTop >>",$scope.b.offsetTop, "$scope.b.offsetBottom ",$scope.b.offsetBottom ," and is ",xywh);
      $scope.t.style.backgroundImage = 'url('+c[i].text.split('#')[0]+')';
      $scope.t.style.backgroundPosition = '-'+xywh[0]+'px -'+xywh[1]+'px';
      $scope.t.style.width = xywh[2]+'px';
      $scope.t.style.height = xywh[3]+'px';
      
      $scope.td.style.left = $event.pageX   - xywh[2]/2+'px';
      $scope.td.style.top = rect.top  - (xywh[3] *1.5)+'px'     
      $scope.td.style.width = xywh[2]+'px';    
      //$scope.td.style.height = xywh[3]+20;'px'; // not needed : managed by css

      //console.debug("Settled height ",xywh[3]+'px',"current rect ", $scope.t.getBoundingClientRect());
    };

    //Volume
    $scope.goShowProgressBar = function (){  
      $timeout(function() {
        if (  $scope.usingVolumeBar == false ) {
          $scope.showingVolumeBar = false ; 
        }
        //console.debug(">>> after setTimeout $scope.goShowProgressBar ",$scope.showingVolumeBar, $scope.usingVolumeBar);
      }, 1000);        
    };
    $scope.goShowVolumeBar = function (){
      var vb = document.getElementById('vprogressbar');
      vb.style.display = 'block' ;
      $scope.showingVolumeBar = true ;
      //console.debug(">>> $scope.showingVolumeBar ",$scope.showingVolumeBar);
    };
    $scope.goUseVolumeBar = function(){
      $scope.usingVolumeBar = true ;
      //console.debug(">>> $scope.goUseVolumeBar ",$scope.usingVolumeBar);
    }
    $scope.goHideVolumeBar = function(){
      $scope.usingVolumeBar = false ;
      $scope.showingVolumeBar = false ; 
      //console.debug(">>> $scope.goHideVolumeBar ",$scope.showingVolumeBar, $scope.usingVolumeBar);
    }
    $scope.goMuteVolume = function () {
      //console.debug(">>> $scope.goMuteVolume ",$scope.showingVolumeBar);
        if($scope.volumePercentage == 0 )
          $scope.setVolume( 100 );          
        else
          $scope.setVolume( 0 );          
    };
    $scope.setVolumeProgressLevel = function($event){
      //console.debug(">>> $scope.setVolumeProgressLevel X,Y ",$event.pageX,$event.pageY);
      var bv = document.getElementById('vprogressbar');
      var rect = bv.getBoundingClientRect();
      //console.debug(">>> $scope.setVolumeProgressLevel rect of progress ",rect);
      var vp =(($event.pageX - rect.left) / rect.width) * 100 ;
      //console.debug(">>> Volume percentage ",vp);
      $scope.setVolume (vp);
    };

    //subtitles and setting 
    $scope.goSettingMenu  = function () {            
      console.debug("arrays tracks ", $scope.tracksArray );
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
        console.debug("Setting Subs to index ", index );
        //json array 
        for (var i=0; i< $scope.tracksArray.subs.length; i++) {
          if($scope.tracksArray.subs[i].index == index ){
            console.debug("actif to true index ", i  );
            $scope.tracksArray.subs[i].actif = true ;
          }
          else {
            console.debug("actif to false index ", i  );
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
      console.debug("Setting Audio to index ", index );
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

    //Manage mouse ; to hide when idle : 
    $scope.goManageMouseActivity  = function($event){
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
        console.debug(">> hide cursor ");
        }, 3000);      
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
    scope.parseConfAndStart(iAttrs.fjplayerdesc);
    console.debug("Starting !!!");
    }
  }
});

