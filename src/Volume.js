import Logger from './Logger';

/**
 * @module Volume
 * @description The Volume is the Volume module used to play Volume.
 */
function Volume(volumeBarElement, videoElement, muteButtonElement) {
    let instance,
        volumebar = volumeBarElement,
        muteBtn = muteButtonElement,
        video = videoElement,
        logger = new Logger('Volume');

    function initialize() {

        muteBtn.addEventListener('click', function(e) {
            instance.onmuteClick(instance);
        });
        volumeBar.addEventListener('click', function(e) {
            instance.OnvbClick(e, instance);
        });
    }

    function OnvbClick(e, self) {
        var pos = self.volumeBar.value / 100;
        console.log(' volume from ', self.video.volume, ' to ', pos);
        if (pos > 0.6) {
            self.muteBtn.className = 'fa fa-volume-up';
        } else if (pos > 0) {
            self.muteBtn.className = 'fa fa-volume-down';
        } else {
            self.muteBtn.className = 'fa fa-volume-off';
        }
        self.video.volume = pos;
        console.log(' new volume is ', pos);
    };

    /**
     * Manage click for mute button
     */
    function onmuteClick(self) {
        self.video.muted = !self.video.muted;
        if (self.video.muted) {
            self.muteBtn.className = 'fa fa-volume-off';
            self.volumeBar.value = 0;
        } else if (self.video.volume > 0.6) {
            self.volumeBar.value = self.video.volume * 100;
            self.muteBtn.className = 'fa fa-volume-up';
        } else {
            self.volumeBar.value = self.video.volume * 100;
            self.muteBtn.className = 'fa fa-volume-down';
        }
    };

    instance = {
        initialize: initialize,
        OnvbClick: OnvbClick,
        onmuteClick: onmuteClick
    };

    return instance;
};

export default Volume;