var args = process.argv.slice(2);
var t1 = parseInt(args[0]);
var t2 = parseInt(args[1]);

function timeToStr(value, str1, str24, str50) {
   if ((value % 100) >= 10 && (value % 100) <= 19) return str50;
   mod = value % 10;
   if (mod === 1) return str1;
   if (mod >= 2 && mod <= 4) return str24;
   return str50;
}

function getTimeInHumanFormat(hours, minutes, seconds) {
    if (hours == 0 && minutes == 0 && seconds == 0) {
        return '0 секунд';
    }
    hoursSuffix = timeToStr(hours, 'час', 'часа', 'часов');
    minutesSuffix = timeToStr(minutes, 'минута', 'минуты', 'минут');
    secondsSuffix = timeToStr(seconds, 'секунда', 'секунды', 'секунд');
    var h = hours !== 0 ? hours.toString() + ' ' + hoursSuffix + ' ' : '';
    var m = minutes !== 0 ? minutes.toString() + ' ' + minutesSuffix + ' ' : '';
    var s = seconds !== 0 ? seconds.toString() + ' ' + secondsSuffix: '';
    return `${h}${m}${s}`;
}

function getHumanTimeFromSum(secs1, secs2) {
    var secondsSum = secs1 + secs2;
    var hours = Math.floor(secondsSum / 3600);
    var minutes = Math.floor((secondsSum - hours * 3600) / 60);
    var seconds = secondsSum - hours * 3600 - minutes * 60;
    return getTimeInHumanFormat(hours, minutes, seconds);
}

console.log(getHumanTimeFromSum(t1, t2));