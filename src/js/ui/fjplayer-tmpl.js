const Logger = require('../utils/Logger');

/**
 * @module playerTemplate
 * @description The playerTemplate
 *
 */
class PlayerTemplate {
    constructor() {
        this.logger = new Logger(this);
        this.OPEN_DELIMITER = '<%=';
        this.CLOSE_DELIMITER = '%>';
        this.REGEX_STRING = '(<%=|%>)';
        this.DEFAULT_DELIMITER = '%';
        this.regExpChars = /[|\\{}()[\]^$+*?.]/g;
        this.template = '<figure id="<%= videoFigureId %>" class="fj-figure" controls-hidden="true" data-fullscreen="<%= fullScreenOnStart %>"> ' +
        '    <!-- video element -->  ' +
        '    <video id="<%= videoId %>" class="fj-video" width="<%= vwidth %>" crossorigin> </video> ' +
        '    <!-- Horizental Tpp --> ' +
        '    <div class="fj-horizental-top" id="<%= videoInfoId %>"> ' +
        '        <span class="fj-vertical-left  fj-control  fj-btn  fj-icon-leftarrow" aria-hidden="true" id="<%= backId %>"> </span> ' +
        '        <div class="fj-vertical-left  fj-vertical-separator "></div> ' +
        '        <div class="fj-vertical-left  fj-control  fj-btn fj-title fj-short-span " id="<%= titleId %>"> </div> ' +
        '        <span class="fj-vertical-right fj-control  fj-btn  fj-icon-share  " aria-hidden="true" id="<%= shareId %>"> </span> ' +
        '        <div class="fj-vertical-right  fj-vertical-separator "></div> ' +
        '        <span class="fj-vertical-right fj-control  fj-btn  fj-icon-download " aria-hidden="true" id="<%= downloadId %>"> </span> ' +
        '    </div> ' +
        '    <!-- Horizental Center --> ' +
        '    <div class="fj-horizental-center"> ' +
        '       <div class="fj-vertical-center">' +
        '           <div id="<%= errorDivId %>" class="fj-hide"> </div> ' +
        '           <div id="<%= spinnerId %>" class="fj-hide spinner"> </div> ' +
        '               <span class="fj-control fj-big-btn  fj-icon-play"  aria-hidden="true" id="<%= BigPlayBtnId %>"></span> ' +
        '       </div> ' +
        '    </div> ' +
        '    <!-- this will contains ads video or ads overlays --> ' +
        '    <div id="<%= adsContainerDivId %>" class=""></div> ' +
        '    <!-- Horizental Bottom Up used for menu  --> ' +
        '    <div class="fj-horizental-bottomUpper"> ' +
        '        <!-- video caption ued by dash player for caption --> ' +
        '        <div id="<%= videoCaptionId %>"></div> ' +
        '        <!-- this present the thumbs image if exist--> ' +
        '        <div class="thumbsBlockDiv  fj-hide" id="<%= thumbsDivId %>" > ' +
        '            <span class="thumbsBlock" id="<%= thumbsImgId %>"></span> ' +
        '            <span class="fjcontrols-control-text" id="<%= thumbstimerId %>"></span> ' +
        '        </div> ' +
        '        <!-- this present the subtitles or audios menu if exist  and when clicked--> ' +
        '        <div class="fj-vertical-left" id="<%= menuContainerDivId %>"> ' +
        '        </div> ' +
        '    </div> ' +
        '    <!-- Horizental Bottom down used for fj controls  --> ' +
        '    <div class="fj-horizental-bottomLower"  id="<%= videoControlsId %>"> ' +
        '        <!--  the video progress Bar --> ' +
        '        <div class="fj-vertical-center"> ' +
        '            <input class="fj-control-embd fj-video-progress" id="<%= progressBarId %>" type="range" min="0" /> ' +
        '        </div> ' +
        '        <!--  play,previous and next controls  --> ' +
        '        <span class="fj-vertical-left fj-control-embd fj-btn fj-icon-playPrevious" aria-hidden="true" id="<%= playpreviousBtnId %>" title="previous"> </span> ' +
        '        <span class="fj-vertical-left fj-control-embd fj-btn fj-icon-play" aria-hidden="true" id="<%= playpauseBtnId %>" title="Play"> </span> ' +
        '        <span class="fj-vertical-left fj-control-embd fj-btn fj-icon-playNext" aria-hidden="true" id="<%= playforwardBtnId %>" title="next"> </span> ' +
        '        <!--  mute and volume bar controls --> ' +
        '        <span class="fj-vertical-left fj-control-embd fj-btn fj-icon-volUp" aria-hidden="true" id="<%= muteBtnId %>" title="mute"> </span> ' +
        '        <div class="fj-vertical-left  volumebar" id="<%= volumeDivId %>"> ' +
        '            <input id="<%= volumeBarId %>" class="fj-control-embd" type="range" min="0"  /> ' +
        '        </div> ' +
        '        <!--  more description of the stream   --> ' +
        '        <div class="fj-vertical-left fj-text fj-short-span" title="Description" id="<%= descriptionId %>"> ' +
        '            <span></span> ' +
        '        </div> ' +
        '        <!--  full screen, audio and subtitles controls  --> ' +
        '        <span class="fj-vertical-right fj-control-embd fj-btn fj-icon-fullScreen " aria-hidden="true" id="<%= fullScreenBtnId %>" title="Fullscreen"> </span> ' +
        '        <span class="fj-vertical-right fj-control-embd fj-btn fj-icon-subs" aria-hidden="true" id="<%= subtitlesBtnId %>" title="Subtitles"> </span> ' +
        '        <span class="fj-vertical-right fj-control-embd fj-btn fj-icon-audios" aria-hidden="true" id="<%= audiosBtnId %>" title="Audios"> </span> ' +
        '        <!--  timers   --> ' +
        '        <div class="fj-vertical-right fj-text " title="times"> ' +
        '            <span id="<%= timerId %>">0:00:00</span><span>/</span><span id="<%= durationId %>">0:00:00</span> ' +
        '        </div> ' +
        '    </div> ' +
        '    <!--  this will contains overlays   --> ' +
        '    <div id="<%= overlaysContainerDivId %>" class="fj-overlayContainer fj-hide"> ' +
        '    </div> ' +
        '</figure> ';
    }

    /**
     *
     */
    createRegex() {
        let str = this.REGEX_STRING;
        const delim = String(this.DEFAULT_DELIMITER).replace(this.regExpChars, '\\$&');
        str = str.replace(/%/g, delim);
        return new RegExp(str);
    }

    /**
     *
     * @param {*} templateStr
     */
    parseTemplateText(templateStr) {
        const reg = this.createRegex();
        let str = templateStr;
        let result = reg.exec(str);
        const arr = [];
        let firstPos;

        while (result) {
            firstPos = result.index;
            if (firstPos !== 0) {
                arr.push(str.substring(0, firstPos));
                str = str.slice(firstPos);
            }
            arr.push(result[0]);
            str = str.slice(result[0].length);
            result = reg.exec(str);
        }

        if (str) {
            arr.push(str);
        }
        return arr;
    }

    /**
     *
     * @param {*} matchedArr
     * @param {*} dataObj
     */
    generateHtml(matchedArr, dataObj) {
        const newArr = [];
        this.logger.info('Generating html fr player');
        let k = 0;
        let opening = false;
        let key;
        let done = '';
        Object.keys(matchedArr).forEach((i) => {
            if (matchedArr[i] === this.OPEN_DELIMITER) {
                opening = true;
            } else if (matchedArr[i] === this.CLOSE_DELIMITER) {
                opening = false;
            } else {
                if (opening === true) { // wr'in key
                    key = matchedArr[i];
                    key = key.replace(/ +/g, '');
                    // this.logger.info('found key  ', key);
                    if (Object.prototype.hasOwnProperty.call(dataObj, key)) {
                        newArr[k] = dataObj[key];
                    } else {
                        throw new Error(' Needed Key is Not found key for html player template :', matchedArr[i]);
                    }
                } else {
                    newArr[k] = matchedArr[i];
                }
                k += 1;
            }
        });
        done = newArr.join('');
        return done;
    }

    /**
     *
     * @param {*} data
     */
    GetHtml(data) {
        const matches = this.parseTemplateText(this.template);
        return this.generateHtml(matches, data);
    }
}
module.exports = PlayerTemplate;
