import Logger from './Logger';
require('../css/player.less');
import * as Const from './constants';
/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */
function FjError(code, type, message, overlaysDiv) {
    var logger = new Logger(this),
        errorCode = code,
        errorType = type,
        errorMsg = message,
        OverlayDiv = overlaysDiv,
        OverlayClosingDiv = null,
        OverlayInnerDiv = null;

    StartOverlay();

    function StopOverlay(index) {
        var el = OverlayDiv;
        var elClone = null;
        // hide the div
        logger.warn(index, 'you overlay  is now stopped ');
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
        OverlayDiv.classList.remove('over-HL-error');
    };

    /**
     * Used to show an Overlay
     */
    function StartOverlay() {
        // empty the div && show the div
        OverlayDiv.classList.add('over-HL-error');
        while (OverlayDiv.hasChildNodes()) {
            OverlayDiv.removeChild(OverlayDiv.firstChild);
        }
        OverlayInnerDiv = document.createElement('div');
        OverlayClosingDiv = document.createElement('div');
        OverlayInnerDiv.innerHTML = '' +
            '<div class="fj-overlay-description">' +
            '   <p>' + errorMsg + '</p> ' +
            '</div> ' +
            '<div class="fj-overlay-link">' + errorCode + '</div>';
        OverlayInnerDiv.style.cursor = 'pointer';
        OverlayClosingDiv.innerHTML = '' +
            '<div>' +
            '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>' +
            '    <div class="fj-overlay-error">' + errorType + '</div>' +
            '</div>';
        OverlayClosingDiv.addEventListener('click', function() { StopOverlay(); });
        OverlayDiv.appendChild(OverlayClosingDiv);
        OverlayDiv.appendChild(OverlayInnerDiv);
        OverlayDiv.classList.remove('fj-hide');
        OverlayDiv.classList.add('over-HL');
    };

    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        constructor: FjError
    };
};
export default FjError;