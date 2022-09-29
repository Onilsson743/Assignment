var countDownDate = new Date('2022-10-15T00:00:00');

setInterval(function() {

    // Distance between today and countDownDate in milliseconds
    var distance = countDownDate - (new Date().getTime());

    // Calculate and set time
    var days = Math.floor(distance/(1000*60*60*24));
    document.getElementById("countdown-days").innerHTML = days;

    var hours = Math.floor((distance % (1000*60*60*24)) / (1000 * 60 * 60));
    document.getElementById("countdown-hours").innerHTML = hours;

    var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
    document.getElementById("countdown-minutes").innerHTML = minutes;

    var seconds = Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("countdown-seconds").innerHTML = seconds;

}, 1000);