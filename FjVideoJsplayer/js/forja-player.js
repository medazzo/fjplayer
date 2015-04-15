$( document ).ready(function() {
 videojs.options.flash.swf = "video-js-4.12.5/video-js.swf";
     
$("#MainVid").ready(function() {		  
	console.warn( "document loaded" );
	//plugin has to be initialized now 
	var vid = videojs('MainVid',
	{ "plugins"  : {"socialOverlay": {"onScreen": true} ,"LOGO" : {"logo":"Forja"} }})
		.ready(function(){
		  var myPlayer = this;
		  myPlayer.play();
		  //myPlayer.bigPlayButton.hide();
		  console.warn("show READY ",new Date().getTime());
		  myPlayer.on("ended", function(){
		//	myPlayer.bigPlayButton.show();
			console.warn("show Big Btn 1",new Date().getTime());
		  });
		  
		   myPlayer.on("play", function(){
			//myPlayer.bigPlayButton.show();
			console.warn("show Big Btn 2",new Date().getTime());
		  });
		  
		     myPlayer.on("error", function(e){
			//myPlayer.bigPlayButton.show();
			console.warn("Error Big Btn 2",new Date().getTime());
		  });
		  
		  myPlayer.on("firstplay", function(){
			//myPlayer.bigPlayButton.show();
			console.warn("hide Big Btn 3 ",new Date().getTime());
		  });
		  
		});
		
		vid.overlay({
      content: '<a href="http://www.brightcove.com"><img src="http://solutions.brightcove.com/bcls/assets/images/modus_overlay.png"></a>',
      overlays: [
      {
        content: 'An event-triggered overlay',
        start: 'play',
        end: 'pause'
      },
      {
        content: '<i class="fa fa-3x fa-camera-retro"></i>',
        start: 'mouseover',
        end: 'mouseout',
         align: 'bottom-left'
      },
          {
        content: '<i class="fa fa-3x fa-share"></i>',
        start: 'useractive',
        end: 'userinactive',
         align: 'top-right'
      },
      {
        start: 5,
        end: 40,
        align: 'bottom-right'
      }]
    });
    /** setting erros plugin **/
    vid.errors();
	/** setting thumbnail on progress bar **/
	vid.thumbnails({
	  0: {
		src: 'img/thumbnails.png',
		style: {
		  left: '-60px',
		  width: '600px',
		  height: '68px',
		  clip: 'rect(0, 120px, 68px, 0)'
		}
	  },
	  10: {
		style: {
		  left: '-180px',
		  clip: 'rect(0, 240px, 68px, 120px)'
		}
	  },
	  20: {
		style: {
		  left: '-300px',
		  clip: 'rect(0, 360px, 68px, 240px)'
		}
	  },
	  30: {
		style: {
		  left: '-420px',
		  clip: 'rect(0, 480px, 68px, 360px)'
		}
	  },
	  40: {
		style: {
		  left: '-540px',
		  clip: 'rect(0, 600px, 68px, 480px)'
		}
	  }
	});
});
});
