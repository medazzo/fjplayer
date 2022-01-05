const Logger = require('./Logger');
require('../../css/player.less');

/**
 * @module Overlay
 * @description The Overlays is that manage overlays of a video :
 *     it manage overlays for information ads , media or ovelay on ads video.
 */
class FjError {
  constructor(code, type, message, overlaysDiv) {
    this.logger = new Logger(this);
    this.errorCode = code;
    this.errorType = type;
    this.errorMsg = message;
    this.OverlayDiv = overlaysDiv;
    this.OverlayClosingDiv = null;
    this.OverlayInnerDiv = null;

    this.StartOverlay();
  }

  StopOverlay(index) {
    let el = this.OverlayDiv;
    let elClone = null;
    // hide the div
    this.logger.warn(index, 'you overlay  is now stopped ');
    // remove the click event
    el = this.OverlayDiv;
    elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
    this.OverlayDiv = elClone;
    // hide the overlay , empty the div
    while (this.OverlayDiv.hasChildNodes()) {
      this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
    }
    this.OverlayDiv.innerHTML = '';
    this.OverlayDiv.classList.add('fj-hide');
    this.OverlayDiv.classList.remove('over-HL-error');
  }

  /**
     * Used to show an Overlay
     */
  StartOverlay() {
    // empty the div && show the div
    this.OverlayDiv.classList.add('over-HL-error');
    while (this.OverlayDiv.hasChildNodes()) {
      this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
    }
    this.OverlayInnerDiv = document.createElement('div');
    this.OverlayClosingDiv = document.createElement('div');
    this.OverlayInnerDiv.innerHTML = `${''
            + '<div class="fj-overlay-description">'
            + '   <p>'}${this.errorMsg}</p> `
            + '</div> '
            + `<div class="fj-overlay-link">${this.errorCode}</div>`;
    this.OverlayInnerDiv.style.cursor = 'pointer';
    this.OverlayClosingDiv.innerHTML = `${''
            + '<div>'
            + '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>'
            + '    <div class="fj-overlay-error">'}${this.errorType}</div>`
            + '</div>';
    this.OverlayClosingDiv.addEventListener('click', () => { this.StopOverlay(); });
    this.OverlayDiv.appendChild(this.OverlayClosingDiv);
    this.OverlayDiv.appendChild(this.OverlayInnerDiv);
    this.OverlayDiv.classList.remove('fj-hide');
    this.OverlayDiv.classList.add('over-HL');
  }
}
module.exports = FjError;
