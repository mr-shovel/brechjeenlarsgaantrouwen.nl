// Set the date for the countdown
const countdownDate = new Date('August 30, 2025 00:00:00').getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the element with id="countdown"
    document.getElementById('countdown').innerHTML = `Nog maar ${days} dagen, ${hours} uur, ${minutes} minuten en ${seconds} seconden`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }

}, 1000);
