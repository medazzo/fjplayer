'use strict';
/**
 * @module playerTemplate
 * @description The playerTemplate
 *
 */
function playerTemplate() {
    var _OPEN_DELIMITER = '<%=',
        _CLOSE_DELIMITER = '%>',
        _REGEX_STRING = '(<%=|%>)',
        _DEFAULT_DELIMITER = '%',
        regExpChars = /[|\\{}()[\]^$+*?.]/g,
        template =
        '<figure id=\"<%= videoFigureId %>\" class="fj-figure" data-fullscreen=\"<%= fullScreenOnStart %>\"> ' +
        '    <!-- video element -->  ' +
        '    <video id=\"<%= videoId %>\" class="fj-video" width=\ "<%= vwidth %>\"> </video> ' +
        '    <!-- Horizental Tpp --> ' +
        '    <div class="fj-horizental-top" id=\"<%= videoInfoId %>\"> ' +
        '        <span class=" fj-vertical-left  fj-control  fj-btn  fj-icon-leftarrow" aria-hidden="true"> </span> ' +
        '        <div class=" fj-vertical-left  fj-vertical-separator "></div> ' +
        '        <div class=" fj-vertical-left  fj-control  fj-btn " id=\"<%= titleId %>\"> </div> ' +
        '        <span class=" fj-vertical-right fj-control  fj-btn  fj-icon-share  " aria-hidden="true"> </span> ' +
        '        <div class=" fj-vertical-right  fj-vertical-separator "></div> ' +
        '        <span class=" fj-vertical-right fj-control  fj-btn  fj-icon-download " aria-hidden="true"> </span> ' +
        '    </div> ' +
        '    <!-- Horizental Center --> ' +
        '    <div class="fj-horizental-center"> ' +
        '       <div class="fj-vertical-center">' +
        '           <div id=\"<%= spinnerId %>\" class=" fj-hide spinner"> </div> ' +
        '           <span class=" fj-control fj-big-btn  fj-icon-play"  aria-hidden="true" id=\"<%= BigPlayBtnId %>\"></span> ' +
        '    </div> ' +
        '    </div> ' +
        '    <!-- Horizental Bottom Up used for menu  --> ' +
        '    <div class="fj-horizental-bottomUpper"> ' +
        '        <!-- video caption ued by dash player for caption --> ' +
        '        <div id=\"<%=videoCaptionId %>\"></div> ' +
        '        <!-- this present the thumbs image if exist--> ' +
        '        <div class="thumbsBlockDiv" id=\"<%= thumbsDivId %>\" style="left: 349px; width: 160px;"> ' +
        '            <span class="thumbsBlock" id=\"<%= thumbsImgId %>\"></span> ' +
        '            <span class="fjcontrols-control-text" id=\"<%= thumbstimerId %>\"></span> ' +
        '        </div> ' +
        '        <!-- this present the subtitles or audios menu if exist  and when clicked--> ' +
        '        <div class="fj-vertical-left" id=\"<%=menuContainerDivId %>\"> ' +
        '            <!-- this will contains ads video or ads overlays --> ' +
        '            <div id=\"<%=adsContainerDivId%>\"></div> ' +
        '        </div> ' +
        '    </div> ' +
        '    <!-- Horizental Bottom down used for fj controls  --> ' +
        '    <div class="fj-horizental-bottomLower"  id=\"<%=videoControlsId%>\"> ' +
        '        <!--  the video progress Bar --> ' +
        '        <div class="fj-vertical-center"> ' +
        '            <input class=" fj-control-embd fj-video-progress" id=\"<%=progressBarId%>\" type="range" min="0" /> ' +
        '        </div> ' +
        '        <!--  play,previous and next controls  --> ' +
        '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-playPrevious" aria-hidden="true" id=\"<%=playpreviousBtnId%>\" title="previous"> </span> ' +
        '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-play" aria-hidden="true" id=\"<%=playpauseBtnId%>\" title="Play"> </span> ' +
        '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-playNext" aria-hidden="true" id=\"<%=playforwardBtnId%>\" title="next"> </span> ' +
        '        <!--  mute and volume bar controls  --> ' +
        '        <span class=" fj-vertical-left fj-control-embd fj-btn  fj-icon-volUp" aria-hidden="true" id=\"<%=muteBtnId%>\" title="mute"> </span> ' +
        '        <div class="fj-vertical-left  volumebar" id=\"<%=volumeDivId%>\"> ' +
        '            <input id=\"<%=volumeBarId%>\" class="fj-control-embd" type="range" min="0"  /> ' +
        '        </div> ' +
        '        <!--  more description of the stream   --> ' +
        '        <div class=" fj-vertical-left fj-desc " title="Description" id=\"<%=descriptionId%>\"> ' +
        '            <span></span> ' +
        '        </div> ' +
        '        <!--  full screen, audio and subtitles controls  --> ' +
        '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-fullScrenn " aria-hidden="true" id=\"<%=fullScreenBtnId%>\" title="Fullscreen"> </span> ' +
        '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-subs" aria-hidden="true" id=\"<%=subtitlesBtnId%>\" title="Subtitles"> </span> ' +
        '        <span class=" fj-vertical-right fj-control-embd fj-btn  fj-icon-audios" aria-hidden="true" id=\"<%=audiosBtnId%>\" title="Audios"> </span> ' +
        '        <!--  timers   --> ' +
        '        <div class=" fj-vertical-right fj-timers " title="times"> ' +
        '            <span id=\"<%= timerId %>\">0:00:00</span><span>/</span><span id=\"<%= durationId %>\">0:00:00</span> ' +
        '        </div> ' +
        '    </div> ' +
        '    <!--  this will contains overlays   --> ' +
        '    <div id=\"<%= overlaysContainerDivId %>\" class="fjOvcontainer"> ' +
        '    </div> ' +
        '</figure> ';
    /**
     *
     */
    function createRegex() {
        var str = _REGEX_STRING;
        var delim = String(_DEFAULT_DELIMITER).replace(regExpChars, '\\$&');
        str = str.replace(/%/g, delim);
        return new RegExp(str);
    };
    /**
     *
     * @param {*} templateStr
     */
    function parseTemplateText(templateStr) {
        var reg = createRegex();
        var str = templateStr;
        var result = reg.exec(str);
        var arr = [];
        var firstPos;

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
    };
    /**
     *
     * @param {*} matchedArr
     * @param {*} dataObj
     */
    function generateHtml(matchedArr, dataObj) {
        var newArr = [],
            k = 0,
            opening = false,
            closing = false,
            key,
            done = '';
        for (var i in matchedArr) {
            if (matchedArr[i] === _OPEN_DELIMITER) {
                opening = true;
            } else if (matchedArr[i] === _CLOSE_DELIMITER) {
                opening = false;
                closing = true;
            } else {

                if (opening === true && closed === false) { // wr'in key
                    key = matchedArr[i];
                    key = key.replace(/ +/g, "");
                    // console.error(" W>>>>>>>><>  ", key);
                    if (dataObj.hasOwnProperty(key)) {
                        newArr[k] = dataObj[key];
                    } else {
                        throw new Error(" Needed Key is Not found key for html player template :", matchedArr[i]);
                    }
                } else {
                    newArr[k] = matchedArr[i];
                }
                k++;
            }
        }
        done = newArr.join("");
        return done;
    }
    /**
     * 
     * @param {*} data 
     */
    function GetHtml(data) {
        var matches = parseTemplateText(template);
        return generateHtml(matches, data);
    };
    // ************************************************************************************
    // PUBLIC API
    // ************************************************************************************
    return {
        GetHtml: GetHtml,
        constructor: playerTemplate
    };
};
export default playerTemplate;