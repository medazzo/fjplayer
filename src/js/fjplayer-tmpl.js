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
        '<figure id=\"<%= videoFigureId %>\" class=\"fjfigure\" data-fullscreen=\"<%= fullScreenOnStart %>\"> ' +
        '<video id=\"<%= videoId %>\" class=\"divofVideo\" width=\"<%= vwidth %>\"> ' +
        '    </video> ' +
        '<div id=\"<%= videoCaptionId %>\"></div>' +
        '<div class=\"divInfoTop\" id=\"<%= videoInfoId %>\"> ' +
        '    <span class=\" divIconBtn divconeontrolLeft fjcontrol-background fa  fa-arrow-left\"> </span> ' +
        '    <p class=\" divTspanitleSeparator divconeontrolLeft \"> </p> ' +
        '    <div id=\"<%= titleId %>\" class=\"fjcontrols-control-text  fjcontrol-background divIconBtn divconeontrolLeft\"> </div> ' +
        '    <span class=\" divIconBtn divconeontrolRight  fjcontrol-background fa  fa-share-alt \"> </span> ' +
        '    <p class=\" divTspanitleSeparator divconeontrolRight \"> </p> ' +
        '    <span class=\" divIconBtn divconeontrolRight fjcontrol-background  fa fa-download \"> </span> ' +
        '</div> ' +
        '<div class=\"divInfoCenter\" > ' +
        '    <div id=\"<%= spinnerId %>\" class=\"fj-hide spinner\"> </div> ' +
        '    <div class=\"fjcontrol-background divBigPlayBtn\"  id=\"<%= BigPlayBtnId %>\" > ' +
        '        <span class=\" divIconBtn  divconeontrolLeft fa  fa-play \"> </span> ' +
        '    </div> ' +
        '</div> ' +
        '<div class=\"fjcontrols-panel\" id=\"<%= videoControlsId %>\"> ' +
        '    <div class=\"fjcontrols-panel-controls  \"> ' +
        '       <div id=\"<%= subsdMenuContainerDivId %>\"></div> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-panel-controls\"> ' +
        '        <div class=\"hprogressbar\" id=\"<%= progressDivId %>\"> ' +
        '            <input id=\"<%= progressBarId %>\" type=\"range\" /> ' +
        '        </div> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-control divIconBtn divconeontrolIcon divconeontrolLeft clickable \"> ' +
        '        <span id=\"<%= playpauseBtnId %>\" class=\"fa fa-play\" title=\"Play\"></span> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-control divconeontrolIcon divIconBtn divconeontrolLeft clickable\"> ' +
        '        <span id=\"<%= muteBtnId %>\" title=\"volume-full\" class=\"fa fa-volume-up\"></span> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-control fjcontrols-control-left\"> ' +
        '        <div class=\"volumebar\" id=\"<%= volumeDivId %>\"> ' +
        '            <input class=\"clickable\" id=\"<%= volumeBarId %>\" type=\"range\" /> ' +
        '        </div> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-control  fjcontrols-control-left \"> ' +
        '        <div  class=\"fjcontrols-control fjcontrols-control-text\"> ' +
        '            <span id=\"<%= timerId %>\" >0:00:00</span><span>/</span><span id=\"<%= durationId %>\" >0:00:00</span> ' +
        '        </div> ' +
        '    </div> ' +
        '    <div class=\"fjcontrols-control divIconBtn divconeontrolIcon fjcontrols-control-right clickable\"> ' +
        '        <span id=\"<%= fullScreenBtnId %>\" title=\"Fullscreen\" class=\"fa fa-arrows-alt\"></span> ' +
        '    </div> ' +
        '    <div id=\"<%= expandDivId %>\" class=\"fjcontrols-control divIconBtn divconeontrolIcon fjcontrols-control-right clickable\"> ' +
        '        <span id=\"<%= expandBtnId %>\" class=\"fa fa-expand\" title=\"Double player size\"></span> ' +
        '    </div> ' +
        '    <div id=\"<%= subtitlesDivId %>\" class=\"fjcontrols-control divIconBtn divconeontrolIcon fjcontrols-control-right clickable\"> ' +
        '        <span id=\"<%= subtitlesBtnId %>\" class=\"fa fa-cc\" title=\"subtitles\"></span> ' +
        '    </div> ' +
        '</div> ' +
        '<div class=\"thumbsBlockDiv\" id=\"<%= thumbsDivId %>\"> ' +
        '    <span class=\"thumbsBlock\" id=\"<%= thumbsImgId %>\"></span> ' +
        '    <span class=\"fjcontrols-control-text\" id=\"<%= thumbstimerId %>\"></span> ' +
        '</div> ' +
        '<div id=\"<%= audMenuContainerDivId %>\"></div> ' +
        '<div id=\"<%= overlaysContainerDivId %>\"></div> ' +
        '<div id=\"<%= adsContainerDivId %>\"></div> ' +
        '</figure>';
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
                    if (dataObj.hasOwnProperty(key)) {
                        newArr[k] = dataObj[key];
                    } else {
                        throw new Error(" Needed Key is Not found key for html player template ", key);
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