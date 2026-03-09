// write js code here if 
function showTimer() {
    const now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1; // Months start from 0
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if needed
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (hours < 10) hours = "0" + hours;
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    const timer = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    document.querySelector("p").textContent = timer;
}

// Update every second
setInterval(showTimer, 1000);

// Run immediately once
showTimer();