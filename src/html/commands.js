/* ------------------------ */

var videos = new Array(10);
var playBtns = new Array(10);
var volBtns = new Array(10);
var widthV = new Array(10);
var savVolume = new Array(10);
var barVolume = new Array(10);
var barProgress = new Array(10);
var durations = new Array(10);
var muted = new Array(10);
var expanded = new Array(10);
var fullScreen = new Array(10);
var indexThumbsTrack = new Array(10);
var tdObj = new Array(10);
var tiObj = new Array(10);
var refreshed;
var maxUsedVid = 0;

function timerChecks(index) {
    for (var index = 0; index < maxUsedVid; index++) {
        var p = Math.round(videos[index].duration / 1000);
        var c = Math.round(videos[index].currentTime / p);
        barProgress[index].value = c;
        durations[index].innerHTML = ' <span>' + duration(videos[index].currentTime) + '</span><span>/</span><span>' + duration(videos[index].duration) + '</span>';
    }
}

function initUI(max) {
    maxUsedVid = max;
    for (var index = 0; index < maxUsedVid; index++) {
        expanded[index] = false;
        muted[index] = false;
        fullScreen[index] = false;
        savVolume[index] = 100;
        videos[index] = document.getElementById('Video' + index);
        console.log('>>>> Ping @ ', index);
        playBtns[index] = document.getElementById('playBtn' + index);
        console.log('>>>> Ping @ ', index);
        volBtns[index] = document.getElementById('volume' + index);
        console.log('>>>> Ping @ ', index);
        barVolume[index] = document.getElementById('bvolume' + index);
        console.log('>>>> Ping @ ', index);
        barProgress[index] = document.getElementById('bprogress' + index);
        console.log('>>>> Ping @ ', index);
        durations[index] = document.getElementById('timer' + index);
        console.log('>>>> Ping @ ', index);
        tdObj[index] = document.getElementById('thumbDiv' + index);
        console.log('>>>> Ping @ ', index);
        tiObj[index] = document.getElementById('thumbImgBlock' + index);
        console.log('>>>> Ping @ ', index);
        barVolume[index].value = savVolume[index];
        barProgress[index].value = 0;
        if (!videos[index].paused) {
            playBtns[index].innerHTML = '<span class=\"fa fa-pause\" title=\"pause\" onclick=\"goPlay(' + index + ')\">';
            console.log('pausing ');
        }
        widthV[index] = videos[index].videoWidth;
        for (var i = 0; i < videos[index].textTracks.length; i++) {
            if (videos[index].textTracks[i].kind === 'metadata') {
                indexThumbsTrack[index] = i;
                console.log('metadata @ ', i);
            }
        }
        console.log('>>>> LOADED @ ', index);
    }

    refreshed = setInterval(function() {
        timerChecks();
    }, 1000);
}


function goPlay(index) {
    console.log('goPlay ', index);
    if (videos[index].paused) {
        videos[index].play();
        playBtns[index].innerHTML = '<span class=\"fa fa-pause\" title=\"pause\" onclick=\"goPlay(' + index + ')\"></span>';
        console.log('playing ');
    } else {
        videos[index].pause();
        playBtns[index].innerHTML = '<span class=\"fa fa-play\" title=\"play\" onclick=\"goPlay(' + index + ')\"></span>';
        console.log('pausing ', index);
    }
}

function goBiggerScreen(index) {
    var widthF = (window.innerWidth * 4) / 5;
    console.log(' videoHeight  ', videos[index].videoHeight);
    console.log(' videoWidth  ', videos[index].videoWidth);
    console.log('expanding : ', widthV[index], '<==>', widthF);
    if (expanded[index]) {
        videos[index].width = widthV[index];
        expanded[index] = false;
    } else {
        videos[index].width = widthF;
        expanded[index] = true;
    }
}

function goFullScreen(index) {
    if (!fullScreen[index]) {
        if (videos[index].requestFullscreen) {
            videos[index].requestFullscreen();
        } else if (videos[index].mozRequestFullScreen) {
            videos[index].mozRequestFullScreen();
        } else if (videos[index].webkitRequestFullscreen) {
            videos[index].webkitRequestFullscreen();
        }
        fullScreen[index] = true;
    } else {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen)
            document.webkitCancelFullScreen();
        else if (document.msExitFullscreen)
            document.msExitFullscreen();
        fullScreen[index] = false;
    }
    console.log("Full Screen ", fullScreen[index]);
}

function ChangeVolume(index, val) {
    console.log(" Volume of index ", index, " is : ", val);
    if (val > 50) {
        volBtns[index].innerHTML = '<span title=\"volume-full\" class=\"fa fa-volume-up\"></span>';
    } else if (val > 5) {
        volBtns[index].innerHTML = '<span title=\"volume-down\" class=\"fa fa-volume-down\"></span>';
    } else {
        volBtns[index].innerHTML = '<span title=\"volume-mute\" class=\"fa fa-volume-off\"></span>';
    }
    if (val === 0)
        muted[index] = true;
    videos[index].volume = val / 100;
}

function GoMute(index) {
    console.log("Current Volume ", savVolume[index]);
    if (muted[index] === false) {
        savVolume[index] = (videos[index].volume * 100);
        muted[index] = true;
        ChangeVolume(index, 0);
        barVolume[index].value = 0;
    } else {
        muted[index] = false;
        ChangeVolume(index, savVolume[index]);
        barVolume[index].value = savVolume[index];
    }
}

function seek(index, val) {
    var p = Math.round((videos[index].duration / 100) * val);
    console.log(" Seeking from ", videos[index].currentTime, "to ", p, " sec");
    if (videos[index].seekable) {
        //pause
        if (!videos[index].paused) {
            videos[index].pause();
        }
        //change current time 
        videos[index].currentTime = p;
        //play
        videos[index].play();
    } else {
        console.error("cannot seek to ", p, " sec ");
    }
}

function duration(secDuration) {
    var sec_num = parseInt(secDuration, 10); // don't forget the second param  
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    if (hours == 0) {
        return (minutes + ':' + seconds);
    } else {
        if (hours < 10) { hours = "0" + hours; }
        return (hours + ':' + minutes + ':' + seconds);
    }
}

function goShowThumbs(index) {
    tdObj[index].style.visibility = 'visible';
}

function goHideThumbs(index) {
    tdObj[index].style.visibility = 'hidden';
}

function goRenderThumbs(index, event) {
    // first we convert from mouse to time position ..
    var rect = barProgress[index].getBoundingClientRect();
    var p = (event.pageX - rect.left) * (videos[index].duration / (rect.right - rect.left));
    if ((p > (videos[index].duration + 2)) || (p < 0)) { //some error ?
        console.error(" Position is bigger than duration >>", p, videos[index].duration);
        return;
    }
    //update ui
    var thumbTime = p;
    // ..then we find the matching cue..
    var c = videos[index].textTracks[indexThumbsTrack[index]].cues;
    if (c == null) { //track eleme,t is not supprted : Firefox 
        console.error(" cues is null @ ", indexThumbsTrack[index], " not supported , Firefox ?");
        return;
    }

    for (var i = 0; i < c.length; i++) {
        if (c[i].startTime <= p && c[i].endTime > p) {
            break;
        };
    }
    // ..next we unravel the JPG url and fragment query..
    var url = c[i].text.split('#')[0];
    var xywh = c[i].text.substr(c[i].text.indexOf("=") + 1).split(',');

    // ..and last we style the thumbnail overlay
    tiObj[index].style.backgroundImage = 'url(' + c[i].text.split('#')[0] + ')';
    tiObj[index].style.backgroundPosition = '-' + xywh[0] + 'px -' + xywh[1] + 'px';
    tiObj[index].style.width = xywh[2] + 'px';
    tiObj[index].style.height = xywh[3] + 'px';

    tdObj[index].style.left = event.pageX - xywh[2] / 2 + 'px';
    tdObj[index].style.top = rect.top - (xywh[3] * 1.5) + 'px'
    tdObj[index].style.width = xywh[2] + 'px';
}