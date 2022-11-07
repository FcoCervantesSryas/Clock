let timer = document.getElementById("time");

function getDate () {
    let pm = false;
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    // Make an 12 format time
    if (hours > 12){
        pm = true
        hours = hours - 12}

    // We add 0's to the times
    if (hours < 10){
        hours = "0".concat(hours.toString())
    } else {hours = hours.toString()}

    if (minutes < 10){
        minutes = "0".concat(minutes.toString())
    } else {minutes = minutes.toString()}
    
    if (seconds < 10){
        seconds = "0".concat(seconds.toString())
    } else {seconds = seconds.toString()}

    // We add the "am" or "pm"
    let time = hours.concat(":", minutes ,":", seconds)
    if (pm){time = time.concat(" pm")
    } else {ime = time.concat(" am")}

    // Let's put it on the display
    timer.textContent = time
    setTimeout(getDate, 1000)
}
getDate()