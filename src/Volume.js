import Logger from './Logger';

/**
 * @module Volume
 * @description The Volume is the Volume module used to play Volume.
 */
function Volume(volumebar, videoElement) {
    let instance,
        vb = volumebar,
        volumePercentage = 0,
        video = videoElement,
        showingVolumeBar = true,
        usingVolumeBar = true,
        VolLevelUp = true,
        VolLevelDown = true,
        VolLevelOff = true,
        logger = new Logger('Menu');

    function goShowProgressBar() {
        logger.log(' Hallo Volume !');
        /* $timeout(function() {
            if (usingVolumeBar === false) {
                showingVolumeBar = false;
            }
        }, 1000);*/
    }

    function goShowVolumeBar() {
        vb.style.display = 'block';
        showingVolumeBar = true;
    }

    function goUseVolumeBar() {
        usingVolumeBar = true;
    }

    function goHideVolumeBar() {
        usingVolumeBar = false;
        showingVolumeBar = false;
        volumePercentage = 100;
    }


    function setVolume(newVolumePercentage) {
        video.volume = (newVolumePercentage / 100);
        volumePercentage = newVolumePercentage;
        if (newVolumePercentage == 0) {
            VolLevelUp = false;
            VolLevelDown = false;
            VolLevelOff = true;
        } else if (newVolumePercentage > 60) {
            VolLevelUp = true;
            VolLevelDown = false;
            VolLevelOff = false;
        } else {
            VolLevelUp = false;
            VolLevelDown = true;
            VolLevelOff = false;
        }
    }

    function goMuteVolume() {
        if (volumePercentage === 0) {
            setVolume(100);
        } else {
            setVolume(0);
        }
    }

    function setVolumeProgressLevel($event) {
        // need ti get object now when it shown        
        var rect = vb.getBoundingClientRect();
        var vp = (($event.pageX - rect.left) / rect.width) * 100;
        setVolume(vp);
    }


    instance = {
        goShowProgressBar: goShowProgressBar,
        goShowVolumeBar: goShowVolumeBar,
        goUseVolumeBar: goUseVolumeBar,
        goHideVolumeBar: goHideVolumeBar,
        goMuteVolume: goMuteVolume,
        setVolumeProgressLevel: setVolumeProgressLevel
    };


    return instance;
};

export default Volume;