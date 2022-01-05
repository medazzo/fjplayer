const Logger = require('../utils/Logger');
require('../../css/player.less');
const Const = require('../defs/constants');
const Eventing = require('../utils/Eventing');
/**
 * @module Overlay
 * @description The Overlays is that manage this.overlaysof a video :
 *     it manage this.overlaysfor information ads , media or ovelay on ads video.
 */
class Overlays {
  constructor() {
    this.logger = new Logger(this);
    this.overlays = null;
    this.settled = false;
    this.OverlayDiv = null;
    this.OverlayInnerDiv = null;
    this.events = new Eventing();
    this.OverlayClosingDiv = null;
  }

  Setup(overs) {
    let i = 0;
    if (overs === null || overs === undefined) {
      this.settled = false;
      return;
    }
    this.overlays = overs;
    this.settled = true;
    for (i = 0; i < this.overlays.length; i += 1) {
      this.overlays[i].started = false;
      this.overlays[i].clicked = 0;
    }
    this.logger.info('Setup is this.settled', this.settled, ' cheking this.overlays.. ', this.overlays);
  }

  clicked(index) {
    const item = this.overlays[index];
    this.overlays[index].clicked += 1;
    this.events.fireEvent(Const.OverlayEvents.OVERLAY_USER_CLICKED);
    window.open(item[Const.FJCONFIG_URL], '_blank');
  }

  StopOverlay(index) {
    let el = this.OverlayDiv;
    let elClone = null;
    // hide the div
    this.logger.warn(index, 'you overlay  is now stopped ', this.overlays[index].handler);
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
    this.events.fireEvent(Const.OverlayEvents.OVERLAY_ENDED);
  }

  /**
     * Used to show an Overlay
     */
  StartOverlay(index) {
    let url = null;
    const item = this.overlays[index];
    this.overlays[index].started = true;
    this.overlays[index].endTimer = setTimeout(() => { this.StopOverlay(index); },
      item[Const.FJCONFIG_DURATION] * 1000);
    // empty the div && show the div
    while (this.OverlayDiv.hasChildNodes()) {
      this.OverlayDiv.removeChild(this.OverlayDiv.firstChild);
    }
    this.OverlayInnerDiv = document.createElement('div');
    this.OverlayClosingDiv = document.createElement('div');
    this.OverlayInnerDiv.innerHTML = `${''
            + '<div class="fj-overlay-description">'
            + '   <p>'}${item[Const.FJCONFIG_DATA]}</p> `
            + '</div> '
            + `<div class="fj-overlay-link">${item[Const.FJCONFIG_URL]}</div>`;
    this.OverlayInnerDiv.style.cursor = 'pointer';
    this.OverlayClosingDiv.innerHTML = ''
            + '<div>'
            + '    <span class=" fj-overlay-closing  fj-control-embd fj-btn fj-icon-windowClose" aria-hidden="true"></span>'
            + '    <div class="fj-overlay-annonce">Annonce</div>'
            + '</div>';
    this.OverlayClosingDiv.addEventListener('click', () => { this.StopOverlay(index); });
    this.OverlayDiv.appendChild(this.OverlayClosingDiv);
    this.OverlayDiv.appendChild(this.OverlayInnerDiv);
    this.OverlayDiv.classList.remove('fj-hide');
    this.OverlayDiv.classList.add('over-HL');
    this.events.fireEvent(Const.OverlayEvents.OVERLAY_STARTED);
    // add click
    url = item[Const.FJCONFIG_URL];
    this.logger.info('Setting click on overlay going to  ', url);
    this.OverlayInnerDiv.addEventListener('click', () => { this.clicked(index); });
    this.logger.log(index, `you overlay just started and will end in ${
      item[Const.FJCONFIG_DURATION]} sec`, this.overlays[index].handler);
  }

  /**
     * Function to be called from event 'timeupdate' from video
     * called to check if this.overlayshas to Start
     */
  CheckOverlays(secondes) {
    let i = 0;
    let item = null;
    let show = 0;
    if (this.settled !== true) {
      return;
    }
    for (i = 0; i < this.overlays.length; i += 1) {
      item = this.overlays[i];
      show = parseInt(item[Const.FJCONFIG_SHOW_AT], 10);
      if (secondes === show) {
        this.logger.info(i, ' starting overlay .. ');
        if (this.overlays[i].started === false) {
          this.logger.info(i, ' starting a new  overlay .. ');
          this.overlays[i].started = true;
          this.StartOverlay(i);
        } else {
          this.logger.info(i, ' already started ', item[Const.FJCONFIG_URL],
            ' @@ ', item[Const.FJCONFIG_SHOW_AT]);
        }
      }
    }
  }

  initialize(overdiv) {
    this.OverlayDiv = overdiv;
  }

  /**
     *
     */
  on(name, handler) {
    return this.events.on(name, handler);
  }

  /**
     *
     */
  off(name, handler) {
    return this.events.off(name, handler);
  }
}
module.exports = Overlays;
