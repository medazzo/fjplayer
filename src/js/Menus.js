import Logger from './Logger';
require('../css/player.less');
/**
 *  Class player in whinch the player is implemented
 */
function Menus(mainVideo, subsBtnId, audiosBtnId, MenusContDivId) {
    var logger = new Logger(this),
        video = mainVideo,
        mediaPlayer = null,
        subtitlesBtnId = subsBtnId,
        audsBtnId = audiosBtnId,
        subsMenuListId = 'smml' + subtitlesBtnId,
        audsMenuListId = 'amml' + audiosBtnId,
        MenusContainerDivId = MenusContDivId,
        menusDiv = document.getElementById(MenusContainerDivId),
        SubsExist = false,
        subsMenuDiv = null,
        subsList = null,
        audsExist = false,
        audsMenuDiv = null,
        audsList = null;

    /**
     *Hide Menu Subtitles
     */
    function HideMenuSubs() {
        if ((SubsExist === true) &&
            (subsMenuDiv.classList.contains('fj-hide') === false)) {
            subsMenuDiv.classList.add('fj-hide');
        }
    };
    /**
     * Hide Menu Audios
     */
    function HideMenusAuds() {
        if ((audsExist === true) &&
            (audsMenuDiv.classList.contains('fj-hide') === false)) {
            audsMenuDiv.classList.add('fj-hide');
        }
    };

    /**
     * 
     * @param {*Funtion Callback used to activate item of list
     */
    function activate(item, isItSubs) {
        var i, litem, k, list;
        if (isItSubs === true) {
            list = subsList;
        } else {
            list = audsList;
        }
        var index = Array.prototype.indexOf.call(list.childNodes, item);
        var tindex = item.getAttribute('index');
        logger.info('clicked is  selected @ index ', index, ' text index ', tindex);

        if (isItSubs === true) {
            mediaPlayer.setTextTrack(tindex);
        }

        for (i = 0; i < list.children.length; i++) {
            litem = list.children[i];
            k = litem.getAttribute('index');
            if (tindex === k) {
                if (isItSubs === false) {
                    video.audioTracks[i].enabled = true;
                }
                litem.className = 'subtitles-menu-item-actif';
                logger.log('Setting item @  ', i);
            } else {
                if (isItSubs === false) {
                    video.audioTracks[i].enabled = false;
                }
                litem.className = 'subtitles-menu-item';
                logger.log('Unsetting item @  ', i);
            }
        }
        if (isItSubs === true) {
            HideMenuSubs();
        } else {
            HideMenusAuds();
        }
    };

    /**
     * Event CALLBACK ; called on menu Click
     */
    function onshowHideMenu(menuContainer, ev) {
        if (menuContainer.classList.contains('fj-hide')) {
            // menuContainer.style.position = 'absolute';
            // menuContainer.style.left = (ev.pageX - 20) + 'px';
            // menuContainer.style.top = (ev.pageY - 90) + 'px';
            menuContainer.classList.remove('fj-hide');
        } else {
            menuContainer.classList.add('fj-hide');
        }
    };
    /**
     * Used to Hide menu
     */
    function HideMenus() {
        HideMenuSubs();
        HideMenusAuds();
    };
    /**
     * 
     * @param {*} playerMedia 
     */
    function SetupSubs(playerMedia) {
        logger.info('Calling for setup Subs !!!');
        var subtitlesBtn = null;
        var i = 0;
        var activated = false;
        var item = null;
        SubsExist = false;
        mediaPlayer = playerMedia;
        logger.info(' Trying to setup menu subs , text tracks length : ', video.textTracks);
        // check if exist
        if ((!video.textTracks) || (video.textTracks.length <= 0)) {
            SubsExist = false;
            logger.log(' Subs Menu not created !');
            return false;
        }
        // check if video contains subs  exist
        for (i = 0; i < video.textTracks.length; i++) {
            logger.debug(' @ text track number  ', i, ' and it type is ',
                video.textTracks[i].kind);
            if ((video.textTracks[i].kind === 'captions') ||
                (video.textTracks[i].kind === 'subtitles')) {
                SubsExist = true;
                break;
            }
        }
        if (SubsExist === false) {
            logger.info(' Subs Menu Not created !! ');
            return SubsExist;
        }
        // Setting btn
        subtitlesBtn = document.getElementById(subtitlesBtnId);
        logger.info('Setting the btn ', subtitlesBtn, ' from id ', subtitlesBtnId);
        // video array
        subsList = document.getElementById(subsMenuListId);
        // clear old
        if (subsList !== null) {
            while (subsList.firstChild) {
                subsList.removeChild(subsList.firstChild);
            }
        } else {
            subsMenuDiv = document.createElement('div');
            subsMenuDiv.classList.add('settingMenuDiv');
            subsMenuDiv.classList.add('fj-hide');
            subsMenuDiv.innerHTML =
                '<div class="fj-list-title"> Soutitres </div> ' +
                '<ul class=\"fj-list\"  id=\"' + subsMenuListId + '\" >' +
                '</ul>	';
            menusDiv.appendChild(subsMenuDiv);
            // Add events for subtitles button
            subtitlesBtn.addEventListener('click', function(ev) {
                onshowHideMenu(subsMenuDiv, ev);
            });
            //  subs list
            subsList = document.getElementById(subsMenuListId);
        }
        // loop
        for (i = 0; i < video.textTracks.length; i++) {
            if ((video.textTracks[i].kind === 'captions') ||
                (video.textTracks[i].kind === 'subtitles')) {
                item = document.createElement('li');
                if (video.textTracks[i].mode === 'showing') {
                    item.className = 'subtitles-menu-item-actif';
                    activated = true;
                } else {
                    item.className = 'subtitles-menu-item';
                }
                item.setAttribute('index', i);
                item.innerHTML = video.textTracks[i].label;
                subsList.appendChild(item);
                item.addEventListener('click', function(ev) {
                    activate(this, true);
                });
                logger.debug('Setting Subs List @ ', i, ' item is ', item);
            }
        }

        // off item
        item = document.createElement('li');
        if (activated === false) {
            item.className = 'subtitles-menu-item-actif';
        } else {
            item.className = 'subtitles-menu-item';
        }
        item.setAttribute('index', -1);
        item.innerHTML = 'off';
        subsList.appendChild(item);
        item.addEventListener('click', function(ev) {
            activate(this);
        });
        logger.log('Setting Subs List @ ', -1, ' item is ', item);

        logger.log(' Subs Menu  created !! ', subsMenuDiv);
        return SubsExist;
    };

    /**
     * Setting Auds menu and cbx
     */
    function SetupAuds(playerMedia) {
        logger.info('Calling for setup Auds !!!');
        var audsBtn = null;
        var i = 0;
        var item = null;
        audsExist = false;
        logger.info(' Trying to setup menu Auds , text tracks length : ', video.audioTracks);

        // check if exist
        if ((!video.audioTracks) || (video.audioTracks.length <= 1)) {
            audsExist = false;
            logger.log(' Audio Menu not created !');
            return false;
        }
        // Setting inner of btn div
        audsBtn = document.getElementById(audsBtnId);
        logger.info('Setting the btn ', audsBtn, ' from id ', audsBtnId);
        // video array
        audsList = document.getElementById(audsMenuListId);
        // clear old
        if (audsList !== null) {
            while (audsList.firstChild) {
                audsList.removeChild(audsList.firstChild);
            }
        } else {
            audsMenuDiv = document.createElement('div');
            audsMenuDiv.classList.add('settingMenuDiv');
            audsMenuDiv.classList.add('fj-hide');
            audsMenuDiv.innerHTML =
                '<div class="fj-list-title"> Audios </div> ' +
                '<ul class=\"fj-list\"  id=\"' + audsMenuListId + '\" >' +
                '</ul>	';
            menusDiv.appendChild(audsMenuDiv);
            // Add events for audios button
            audsBtn.addEventListener('click', function(ev) {
                onshowHideMenu(audsMenuDiv, ev);
            });
            //  audios list
            audsList = document.getElementById(audsMenuListId);
        }


        for (i = 0; i < video.audioTracks.length; i++) {
            item = document.createElement('li');
            if (video.audioTracks[i].enabled) {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }

            item.setAttribute('index', i);
            item.innerHTML = video.audioTracks[i].label;
            audsList.appendChild(item);
            item.addEventListener('click', function(ev) {
                activate(this, false);
            });
        }

        logger.debug(' Audio Menu created !', video.audioTracks.length, '! ', audsList);
        return audsExist;
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        SetupSubs: SetupSubs,
        SetupAuds: SetupAuds,
        HideMenus: HideMenus,
        constructor: Menus
    };
};
export default Menus;