export function duration(secDuration) {
    var secNum = parseInt(secDuration, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - hours * 3600) / 60);
    var seconds = secNum - hours * 3600 - minutes * 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (hours === 0) {
        return minutes + ':' + seconds;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    return hours + ':' + minutes + ':' + seconds;
}
