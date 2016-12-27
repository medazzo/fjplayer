/* ------------------------ */

var videos = new Array(10);
var playBtns = new Array(10);
var volBtns = new Array(10);
var widthV = new Array(10);
var savVolume = new Array(10);
var barVolume = new Array(10);
var progVolume = new Array(10);
var durations = new Array(10);
var muted = new Array(10);
var expanded = new Array(10);
var fullScreen = new Array(10);
var refreshed;
var maxUsedVid = 0;

function timerChecks(index) {
    for (var index = 0; index < maxUsedVid; index++) {
        var p = Math.round(videos[index].duration / 100);
        var c = Math.round(videos[index].currentTime / p);
        progVolume[index].value = c;
        durations[index].innerHTML = ' <span>' + duration(videos[index].currentTime) + '</span><span>/</span><span>' + duration(videos[index].duration) + '</span>';
        console.log('>>>> Ping @ ', index);
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
        playBtns[index] = document.getElementById('playBtn' + index);
        volBtns[index] = document.getElementById('volume' + index);
        barVolume[index] = document.getElementById('bvolume' + index);
        progVolume[index] = document.getElementById('bprogress' + index);
        durations[index] = document.getElementById('timer' + index);
        barVolume[index].value = savVolume[index];
        progVolume[index].value = 0;
        if (!videos[index].paused) {
            playBtns[index].innerHTML = '<span class=\"fa fa-pause\" title=\"pause\" onclick=\"goPlay(' + index + ')\">';
            console.log('pausing ');
        }
        widthV[index] = videos[index].videoWidth;
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

function showPic(index, val) {

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