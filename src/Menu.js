import Logger from './Logger';

/**
 * @module Menu
 * @description The Menu is the Menu module used to play Menu.
 */
function Menu(menuObj, videoElement, menuTracksArray, settingBtnObj) {
    let instance,
        video = videoElement,
        tracksArray = menuTracksArray,
        menudiv = menuObj,
        menuBtn = settingBtnObj,
        logger = new Logger('Menu');

    function goSettingMenu() {
        var rect;
        logger.log(' Hallo menu');
        // second call :to  hide
        if (menudiv.style.visibility === 'visible') {
            menudiv.style.visibility = 'hidden';
        }

        rect = menuBtn.getBoundingClientRect();
        menudiv.style.left = rect.left + 'px';
        menudiv.style.top = rect.top - (rect.height * Math.max(tracksArray.subs.length,
            tracksArray.audio.length)) + 'px';
        menudiv.style.visibility = 'visible';
    }

    function setSubs(index) {
        // json array
        var i;
        for (i = 0; i < tracksArray.subs.length; i++) {
            if (tracksArray.subs[i].index === index) {
                tracksArray.subs[i].actif = true;
            } else {
                tracksArray.subs[i].actif = false;
            }
        }
        // video array
        for (i = 0; i < video.textTracks.length; i++) {
            if (i === index) {
                video.textTracks[i].mode = 'showing';
            } else {
                video.textTracks[i].mode = 'hidden';
            }
        }
        // finish
        menudiv.style.visibility = 'hidden';
    }

    function setAudio(index) {
        // json array
        var i;
        for (i = 0; i < tracksArray.audio.length; i++) {
            if (tracksArray.audio[i].index === index) {
                tracksArray.audio[i].actif = true;
            } else {
                tracksArray.audio[i].actif = false;
            }
        }
        // video array
        for (i = 0; i < video.videoTracks.length; i++) {
            if (i === index) {
                video.videoTracks[i].selected = true;
            } else {
                video.videoTracks[i].selected = false;
            }
        }
        // finish
        menudiv.style.visibility = 'hidden';
    }

    instance = {
        goSettingMenu: goSettingMenu,
        setSubs: setSubs,
        setAudio: setAudio
    };


    return instance;
};

export default Menu;