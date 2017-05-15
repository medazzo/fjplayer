import Logger from './Logger';
require('../css/player.css');
/**
 *  Class player in whinch the player is implemented
 */
function SubsMenu(mainVideo, subsBtnId, subsdMenuContDivId) {
    var logger = new Logger(this),
        video = mainVideo,
        subtitlesBtn = null,
        subtitlesBtnId = subsBtnId,
        subsMenuListId = 'smml' + subtitlesBtnId,
        menuListSubs = null,
        subsdMenuContainerDivId = subsdMenuContDivId,
        subsMenuDiv = null,
        SubsExist = false,
        mediaPlayer = null;
    /**
     * cbx Subs Mgt
     */
    function activateSubs(item) {
        var i, litem, k;
        var index = Array.prototype.indexOf.call(menuListSubs.childNodes, item);
        var tindex = item.getAttribute('index');
        logger.log('clicked is  selected @ index ', index, ' text index ', tindex);

        if (video.textTracks) {
            mediaPlayer.setTextTrack(tindex);

            for (i = 0; i < menuListSubs.children.length; i++) {
                litem = menuListSubs.children[i];
                k = litem.getAttribute('index');
                if (tindex === k) {
                    litem.className = 'subtitles-menu-item-actif';
                    logger.log('Setting item @  ', i);
                } else {
                    litem.className = 'subtitles-menu-item';
                    logger.log('Unsetting item @  ', i);
                }
            }
        }

        subsMenuDiv.style.display = 'none';
    };
    /**
     * Event CALLBACK ; called on menu Click
     */
    function onshowHideMenu(menuContainer, ev) {
        menuContainer.style.position = 'absolute';
        menuContainer.style.left = (ev.pageX - 20) + 'px';
        menuContainer.style.top = (ev.pageY - 90) + 'px';

        if (menuContainer.style.display === 'none') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
        logger.log(' Showing or Hiding an menu ', menuContainer);
    };
    /**
     * Used to Hide menu
     */
    function HideMenu() {
        if (SubsExist === true) {
            subsMenuDiv.style.display = 'none';
        }
    };
    /**
     * Setting Subs menu and cbx
     */
    function Setup(playerMedia) {
        var i = 0;
        var item = null;
        SubsExist = false;
        mediaPlayer = playerMedia;
        logger.warn(' Trying to setup menu subs !!! ', video.textTracks);
        subsMenuDiv = document.getElementById(subsdMenuContainerDivId);
        subsMenuDiv.style.display = 'none';
        // check if exist
        for (i = 0; i < video.textTracks.length; i++) {
            logger.warn(' @ text track number  ', i, ' and it type is ',
                video.textTracks[i].kind);
            if ((video.textTracks[i].kind === 'captions') ||
                (video.textTracks[i].kind === 'subtitles')) {
                SubsExist = true;
                break;
            }
        }
        if (SubsExist === false) {
            logger.log(' Subs Menu Not created !! ');
            return SubsExist;
        }
        // Setting btn
        subtitlesBtn = document.getElementById(subtitlesBtnId);
        logger.log('Setting the btn ', subtitlesBtn, ' from id ', subtitlesBtnId);
        // video array
        menuListSubs = document.getElementById(subsMenuListId);
        // clear old
        if (menuListSubs !== null) {
            while (menuListSubs.firstChild) {
                menuListSubs.removeChild(menuListSubs.firstChild);
            }
        }

        // Add events for subtitles button
        subtitlesBtn.addEventListener('click', function(ev) {
            onshowHideMenu(subsMenuDiv, ev);
        });

        subsMenuDiv.className = 'settingMenuDiv';
        subsMenuDiv.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + subsMenuListId + '\" >' +
            '</ul>	' +
            '</div>';
        // video array
        menuListSubs = document.getElementById(subsMenuListId);
        for (i = 0; i < video.textTracks.length; i++) {
            if ((video.textTracks[i].kind === 'captions') ||
                (video.textTracks[i].kind === 'subtitles')) {
                item = document.createElement('li');
                if (video.textTracks[i].mode === 'showing') {
                    item.className = 'subtitles-menu-item-actif';
                } else {
                    item.className = 'subtitles-menu-item';
                }
                item.setAttribute('index', i);
                item.innerHTML = video.textTracks[i].label;
                menuListSubs.appendChild(item);
                item.addEventListener('click', function(ev) {
                    activateSubs(this);
                });
                logger.log('Setting Subs List @ ', i, ' item is ', item);
            }
        }
        logger.log(' Subs Menu  created !! ', menuListSubs);
        return SubsExist;
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        Setup: Setup,
        HideMenu: HideMenu,
        constructor: SubsMenu
    };
};
export default SubsMenu;