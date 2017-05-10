import Logger from './Logger';
require('../css/player.css');
/**
 *  Class player in whinch the player is implemented
 */
function AudsMenu(Playervideo, playerId, MenuContainerDivId) {
    var logger = new Logger(this),
        video = Playervideo,
        audMenuDiv = null,
        menuListAud = null,
        id = playerId,
        audsBtnId = 'lb' + id,
        audsMenuListId = 'amml' + id,
        audMenuListId = null,
        audsbuttonDivID = null,
        audsbuttonDiv = null,
        audsBtn = null,
        audMenuContainerDivId = MenuContainerDivId;

    /**
     * Aubs cbx Mgt
     */
    function activateAudio(item) {
        var i = 0;
        var litem;
        var index = Array.prototype.indexOf.call(menuListAud.childNodes, item);
        var tindex = item.getAttribute('index');
        logger.log('clicked is  selected @ index ', index, ' text index ', tindex);
        if (video.audioTracks) {
            if (video.audioTracks[index].enabled) {
                logger.log('AlREADY  selected @ index ', tindex);
                return;
            }

            for (i = 0; i < menuListAud.children.length; i++) {
                litem = menuListAud.children[i];
                logger.log('cheking item @  ', i);
                if (i === index) {
                    video.audioTracks[i].enabled = true;
                    litem.className = 'subtitles-menu-item-actif';
                    logger.log('Setting item @  ', i);
                } else {
                    video.audioTracks[i].enabled = false;
                    litem.className = 'subtitles-menu-item';
                    logger.log('Unsetting item @  ', i);
                }
            }
        }
        audMenuDiv.style.display = 'none';
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
        if (audMenuDiv === true) {
            audMenuDiv.style.display = 'none';
        }
    };
    /**
     * Setting Auds menu and cbx
     */
    function Setup(buttonDivID) {
        var i = 0;
        var item = null;
        audMenuDiv = document.getElementById(audMenuContainerDivId);
        // check if exist
        if ((!video.audioTracks) || (video.audioTracks.length <= 1)) {
            // hide audio button
            logger.log(' Audio Menu not created !');
            return;
        }
        // Setting inner of btn div
        audsbuttonDivID = buttonDivID;
        audsbuttonDiv = document.getElementById(audsbuttonDivID);
        audsbuttonDiv.innerHTML = '<span id=\"' + audsBtnId + '\"  ' +
            '  class=\"fa fa-language\" title=\"audios\" ></span>';

        audsBtn = document.getElementById(audsBtnId);
        // video array
        menuListAud = document.getElementById(audsMenuListId);
        // clear old
        if (menuListAud !== null) {
            while (menuListAud.firstChild) {
                menuListAud.removeChild(menuListAud.firstChild);
            }
        }

        // Add events for languages button
        audsBtn.addEventListener('click', function(ev) {
            onshowHideMenu(audMenuDiv, ev);
        });

        audMenuDiv.className = 'settingMenuDiv';
        audMenuDiv.innerHTML =
            '<div class=\"settingMenuSubMenuLeft\" >' +
            '<ul class=\"subtitles-menu\" id=\"' + audMenuListId + '\" >' +
            '</ul>	' +
            '</div>';

        for (i = 0; i < video.audioTracks.length; i++) {
            item = document.createElement('li');
            if (video.audioTracks[i].enabled) {
                item.className = 'subtitles-menu-item-actif';
            } else {
                item.className = 'subtitles-menu-item';
            }
            item.innerHTML = video.audioTracks[i].language + '::' + video.audioTracks[i].label;
            menuListAud.appendChild(item);
            item.addEventListener('click', function(ev) {
                activateAudio(this);
            });
        }

        logger.log(' Audio Menu created !', video.audioTracks.length, '! ', menuListAud);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        Setup: Setup,
        HideMenu: HideMenu,
        constructor: AudsMenu
    };
};
export default AudsMenu;