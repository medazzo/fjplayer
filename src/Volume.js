import Logger from './Logger';

/**
 * @module Volume
 * @description The Volume is the Volume module used to play Volume.
 */
function Volume(volumebar, videoElement) {
    let instance,
        volBar = volumebar,
        volumePercentage = 0,
        video = videoElement,
        showingVolumeBar = true,
        usingVolumeBar = true,
        VolLevelUp = true,
        VolLevelDown = true,
        VolLevelOff = true,
        logger = new Logger('Volume');

    function goShowProgressBar() {
        logger.log(' Hallo Volume !');
        setTimeout(function() {
            if (usingVolumeBar === false) {
                showingVolumeBar = false;
            }
        }, 1000);
    }

    function goShowVolumeBar() {
        volBar.style.display = 'block';
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

    function getVolumeUp() {
        return VolLevelUp;
    }

    function getVolumeDown() {
        return VolLevelDown;
    }

    function getVolumeOff() {
        return VolLevelOff;
    }

    function isVolumeBarshown() {
        return showingVolumeBar;
    }

    function setVolume(newVolumePercentage) {
        video.volume = (newVolumePercentage / 100);
        volumePercentage = newVolumePercentage;
        if (newVolumePercentage === 0) {
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
        var rect = volBar.getBoundingClientRect();
        var vp = (($event.pageX - rect.left) / rect.width) * 100;
        setVolume(vp);
    }

    instance = {
        goShowProgressBar: goShowProgressBar,
        goShowVolumeBar: goShowVolumeBar,
        goUseVolumeBar: goUseVolumeBar,
        goHideVolumeBar: goHideVolumeBar,
        goMuteVolume: goMuteVolume,
        getVolumeUp: getVolumeUp,
        getVolumeDown: getVolumeDown,
        getVolumeOff: getVolumeOff,
        isVolumeBarshown: isVolumeBarshown,
        setVolumeProgressLevel: setVolumeProgressLevel,
        setVolume: setVolume
    };

    return instance;
};

export default Volume;