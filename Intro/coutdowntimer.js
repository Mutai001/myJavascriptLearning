// Method 1

let countdown = 6 * 60;

setInterval(function() {
    countdown--;

    if (countdown === 0) {
        countdown = 6 * 60;
    }

    document.getElementById("countdown").innerHTML = countdown;
}, 1000);

//Method 2
function getRemainingTime() {
    const todayDate = new Date()
    const remainingDate = futureDate - todayDate;
    let days = remainingDate / oneDay;

    days = Math.floor(days);

    let hours = Math.floor((remainingDate % oneDay) / oneHour);
    let minutes = Math.floor((remainingDate % oneHour) / oneMinute);
    let seconds = Math.floor((remainingDate % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`)
        }
        return item
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (remainingDate < 0) {
        clearInterval(countdown);
        launching.innerHTML = `<h4> Lauching has started</h4>`
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// Metho 3