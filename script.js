// Countdown Timer untuk Pertandingan Berikutnya

// (DIREVISI) Tetapkan tanggal dan waktu pertandingan baru
const countDownDate = new Date("June 28, 2025 19:00:00").getTime();

// Fungsi countdown tetap sama
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("countdown-timer");
    if (timerElement) {
        timerElement.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (timerElement) {
            timerElement.innerHTML = "GAME ON!";
        }
    }
}, 1000);