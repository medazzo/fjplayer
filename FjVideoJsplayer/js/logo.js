(function() {
'use strict';
           
	        videojs.LOGO = videojs.Button.extend({
           /* @constructor */
               init: function(player, options){
                 videojs.Button.call(this, player, options);
                console.warn("Logo Plugin is set !!");
               }
             });
            
         
		 /* Create LOGO button */
		 var createLOGOButton = function(text) {
               var props = {
                   className: 'vjs-logo-button vjs-control',
                   innerHTML: '<div class="vjs-control-content">' + text+ '</div>',                      
                   role: 'button',
                   'aria-live': 'polite', 
                   tabIndex: 0
                 };
               
               return videojs.Component.prototype.createEl(null, props);
             };
         
		 /* Add LOGO button to the control bar */
         var pluginFn = function( options ) {
			   var text = options.logo ;
               var options = { 'el' : createLOGOButton(text) };
               var LOGO = new videojs.LOGO(this, options);
               this.controlBar.el().appendChild(LOGO.el());
             }; 
             
		videojs.plugin( 'LOGO', pluginFn );                  
})();
