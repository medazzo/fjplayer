
'use strict';

angular.module('fjplayer', []).
controller('fjplayerCtrl', ['$scope' ,'$filter','$interval','$document' ,function ($scope,$filter,$interval,$document) {
    //
    $scope.isPlaylist = false ;
    $scope.isPlaying = false ;
    $scope.isFullScreen = false ;

    $scope.prgressPercentage = 0;

    $scope.movieTile  = "My titre de films ";

    $scope.isAdsDataHidden = false ;
    $scope.isAdsInfoHidden = false ;

    $scope.thumbTime=0;
    
    $scope.movieCTime = 0;
    $scope.movieTTime  = 0;
    $scope.movieBuffered = 0;
    $scope.volume = 0;

    $scope.AdsData ="";
    $scope.AdsInfo ="";

    $scope.video =  document.getElementById('videoID');

    $scope.video.addEventListener('timeupdate', function () {
      $scope.$apply(function () {          
          $scope.movieTTime  = $scope.video.duration ;
          $scope.movieCTime  = $scope.video.currentTime ;
          $scope.movieBuffered = $scope.video.buffered;
          $scope.volume = $scope.video.volume;

          $scope.prgressPercentage = ($scope.movieCTime / $scope.movieTTime )*100;          
          if( $scope.movieCTime == $scope.movieTTime ){
            console.log(" END >", $scope.prgressPercentage);
            cope.isPlaying  =  false;
          }
        })
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


    $scope.goPrevPlaylist  = function () {
    
    };

    $scope.goNextPlaylist  = function () {
    
    };

    $scope.goFullScreen  = function () {
      if( $scope.isFullScreen === true )
        $scope.isFullScreen  =  false;
      else
        $scope.isFullScreen  =  true;
    
    };

    $scope.goSubtitles  = function () {
    
    };

    $scope.goVolume = function () {
    
    };

    $scope.goSeek = function ($event) {  
        var rect = $scope.b.getBoundingClientRect();
        var p = ($event.pageX - rect.left ) * (  $scope.v.duration / (rect.right - rect.left) );
          
        //pause
        if( $scope.isPlaying === true )
        {
          $scope.isPlaying  =  false;      
          $scope.video.pause();
        }

        //change current time 
        $scope.v.currentTime = p;

        //play
        $scope.isPlaying  =  true;
        $scope.video.play(); 
    };

    // init 
    $scope.indexThumbsTrack = -1 ;
    $scope.t = document.getElementById('thumb');
    $scope.v = document.getElementById('videoID');
    $scope.b = document.getElementById('hprogressbar');
    // looking for metadata tracks
    for (var i = 0; i < $scope.v.textTracks.length; i++) {
      if ( $scope.v.textTracks[i].kind == 'metadata' ){       
        $scope.indexThumbsTrack = i ; 
        console.log("metadata track found @ index ",$scope.indexThumbsTrack);        
        break ;
      }
    };


    // Thumbs WebVtt Plugin Function
    $scope.goShowThumbs = function ($event) {
        if($scope.indexThumbsTrack == -1 )
          return;
        $scope.t.style.visibility = 'visible';
    };

    $scope.goHideThumbs = function ($event) {
      if($scope.indexThumbsTrack == -1 )
        return;
      $scope.t.style.visibility = 'hidden';
    };

    $scope.goRenderThumbs = function ($event) {        
      if($scope.indexThumbsTrack == -1 )
        return;

      // first we convert from mouse to time position ..
      var rect = $scope.b.getBoundingClientRect();
      var p = ($event.pageX - rect.left ) * (  $scope.v.duration / (rect.right - rect.left) );
      
      if ( ( p > ($scope.v.duration + 2)) || (p < 0) )//some error ?
        return ; 
      //update ui
      $scope.thumbTime = p;
      console.log(">>>>>>>>> CURRENT :", $scope.thumbTime ,">>>>>>>>> CURRENT :", p);
      // ..then we find the matching cue..
      var c = $scope.v.textTracks[$scope.indexThumbsTrack].cues;
      if( c == null) //track eleme,t is not supprted : Firefox 
        return;
    
      for (var i=0; i<c.length; i++) {
        if(c[i].startTime <= p && c[i].endTime > p) {
            break;
        };
      }
      console.info( $scope.b.offsetTop,"found cue @ ",i," >>",c[i] ); 
      // ..next we unravel the JPG url and fragment query..
      var url =c[i].text.split('#')[0];
      var xywh = c[i].text.substr(c[i].text.indexOf("=")+1).split(',');

      // ..and last we style the thumbnail overlay
      console.info("$scope.b.offsetTop >>",$scope.b.offsetTop, "$scope.b.offsetBottom ",$scope.b.offsetBottom ," and is ",xywh);
      $scope.t.style.backgroundImage = 'url('+c[i].text.split('#')[0]+')';
      $scope.t.style.backgroundPosition = '-'+xywh[0]+'px -'+xywh[1]+'px';
      $scope.t.style.left = $event.pageX   - xywh[2]/2+'px';
      $scope.t.style.top = rect.top  - (xywh[3] *1.5)+'px'     
      $scope.t.style.width = xywh[2]+'px';
      $scope.t.style.height = xywh[3]+'px';


       console.info("Settled height ",xywh[3]+'px',"current rect ", $scope.t.getBoundingClientRect());
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
