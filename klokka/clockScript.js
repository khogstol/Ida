// Set the start date
const startDate = new Date('2023-07-18T20:00:00');

function updateClock() {
    // Get the current time
    const now = new Date();

    // Calculate the time elapsed
    const elapsedTime = now - startDate;

    // Break down the elapsed time into days, hours, minutes, and seconds
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Display the elapsed time
    document.getElementById('clock').textContent = 
        `${days} dager, ${hours} timer, ${minutes} minuter, ${seconds} sekunder`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
