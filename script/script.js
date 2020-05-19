/* eslint-disable no-unused-vars */


// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    function countTimer(deadline) {
        const timerHours = document.querySelector("#timer-hours"),
            timerMinutes = document.querySelector("#timer-minutes"),
            timerSeconds = document.querySelector("#timer-seconds");
            // eslint-disable-next-line no-undef
        function getTimeRemaining() {
            const  dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            // day = Math.floor(timeRemaining / 60 / 60 / 24);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }
        function updateClock() {
            const timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            const x = setInterval(updateClock, 1000);
            if (timer.timeRemaining <= 0) {
                clearInterval(x);
                timerHours.textContent = "00";
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                document.querySelector(".timer-numbers").style.color = "red";
            }
        }
        updateClock();
    }
    countTimer('20 may 2020');
});




