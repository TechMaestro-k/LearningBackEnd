function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}


function showTime(){
    const now = new Date();
    const hours=formatTimeUnit(now.getHours());
    const minutes=formatTimeUnit(now.getMinutes())
    const seconds=formatTimeUnit(now.getSeconds())
    const timeString=`${hours}:${minutes}:${seconds}`;

    console.clear();
    console.log(timeString);
}

setInterval(showTime, 1000);