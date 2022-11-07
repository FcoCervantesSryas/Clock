let timer = document.getElementById("time");

function getDate () {
    let text = " am";
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    // Make an 12 format time
    if (hours > 12){
        text = " pm"
        hours = hours - 12}

    // We add 0's to the times
    hours = (hours < 10) ? "0"+hours : hours
    minutes = (minutes < 10) ? "0"+minutes : minutes
    seconds = (seconds < 10) ? "0"+seconds : seconds
    // We add the "am" or "pm"
    let time = hours.concat(":", minutes ,":", seconds, text)

    // Let's put it on the display
    timer.textContent = time
}
setInterval(getDate, 1000)