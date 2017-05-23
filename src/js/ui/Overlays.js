import Logger from '../utils/Logger';
require('../../css/player.less');
import * as Const from '../defs/constants';
import Eventing from '../utils/Eventing';
/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */
function Overlays() {
    var logger = new Logger(this),
        overlays = null,
        settled = false,
        OverlayDiv = null,
        OverlayInnerDiv = null,
        events = new Eventing(),
        OverlayClosingDiv = null;

    function Setup(overs) {
        var i = 0;
        if (overs === null || overs === undefined) {
            settled = false;
            return;
        }
        overlays = overs;
        settled = true;
        for (i = 0; i < overlays.length; i++) {
            overlays[i].started = false;
            overlays[i].clicked = 0;
        }
        logger.info('Setup is settled ', settled, ' cheking overlays .. ', overlays);
    };

    function clicked(index) {
        var item = overlays[index];
        overlays[index].clicked++;
        events.fireEvent(Const.OverlayEvents.OVERLAY_USER_CLICKED);
        window.open(item[Const.FJCONFIG_URL], '_blank');
    };

    function StopOverlay(index) {
        var el = OverlayDiv;
        var elClone = null;
        // hide the div
        logger.warn(index, 'you overlay  is now stopped ', overlays[index].handler);
        // remove the click event
        el = OverlayDiv;
        elClone = el.cloneNode(true);
        el.parentNode.replaceChild(elClone, el);
        OverlayDiv = elClone;
        // hide the overlay , empty the div
        while (OverlayDiv.hasChildNodes()) {
            OverlayDiv.removeChild(OverlayDiv.firstChild);
        }
        OverlayDiv.innerHTML = '';
        OverlayDiv.classList.add('fj-hide');
        events.fireEvent(Const.OverlayEvents.OVERLAY_ENDED);
    };

    /**
     * Used to show an Overlay
     */
    function StartOverlay(index) {
        var url = null;
        var item = overlays[index];
        overlays[index].started = true;
        overlays[index].endTimer =
            setTimeout(function() { StopOverlay(index); }, item[Const.FJCONFIG_DURATION] * 1000);
        // empty the div && show the div
        while (OverlayDiv.hasChildNodes()) {
            OverlayDiv.removeChild(OverlayDiv.firstChild);
        }
        OverlayInnerDiv = document.createElement('div');
        OverlayClosingDiv = document.createElement('div');
        OverlayInnerDiv.innerHTML = '' +
            '<div class="fj-overlay-description">' +
            '   <p>' + item[Const.FJCONFIG_DATA] + '</p> ' +
            '</div> ' +
            '<div class="fj-overlay-link">' + item[Const.FJCONFIG_URL] + '</div>';
        OverlayInnerDiv.style.cursor = 'pointer';
        OverlayClosingDiv.innerHTML = '' +
            '<div>' +
            '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>' +
            '    <div class="fj-overlay-annonce">Annonce</div>' +
            '</div>';
        OverlayClosingDiv.addEventListener('click', function() { StopOverlay(index); });
        OverlayDiv.appendChild(OverlayClosingDiv);
        OverlayDiv.appendChild(OverlayInnerDiv);
        OverlayDiv.classList.remove('fj-hide');
        OverlayDiv.classList.add('over-HL');
        events.fireEvent(Const.OverlayEvents.OVERLAY_STARTED);
        // add click
        url = item[Const.FJCONFIG_URL];
        logger.info('Setting click on overlay going to  ', url);
        OverlayInnerDiv.addEventListener('click', function() { clicked(index); });
        logger.log(index, 'you overlay just started and will end in ' +
            item[Const.FJCONFIG_DURATION] + ' sec', overlays[index].handler);
    };

    /**
     * Function to be called from event 'timeupdate' from video
     * called to check if overlays has to Start
     */
    function CheckOverlays(secondes) {
        var i = 0;
        var item = null;
        var show = 0;
        if (settled !== true) {
            return;
        }
        for (i = 0; i < overlays.length; i++) {
            item = overlays[i];
            show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
            if (secondes === show) {
                logger.info(i, ' starting overlay .. ');
                if (overlays[i].started === false) {
                    logger.info(i, ' starting a new  overlay .. ');
                    overlays[i].started = true;
                    StartOverlay(i);
                } else {
                    logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
                        ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
                }
            }
        }
    };

    function initialize(overdiv) {
        OverlayDiv = overdiv;
    };
    /**
     *
     */
    function on(name, handler) {
        return events.on(name, handler);
    };
    /**
     *
     */
    function off(name, handler) {
        return events.off(name, handler);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        StartOverlay: StartOverlay,
        StopOverlay: StopOverlay,
        clicked: clicked,
        initialize: initialize,
        Setup: Setup,
        on: on,
        off: off,
        CheckOverlays: CheckOverlays,
        constructor: Overlays
    };
};
export default Overlays;