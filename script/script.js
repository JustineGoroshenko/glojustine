/* eslint-disable no-unused-vars */


// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', () => {

    // eslint-disable-next-line strict
    'use strict';
    //Timer
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

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }
        function updateClock() {
            const timer = getTimeRemaining();
            timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
            timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
            timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
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
    countTimer('21 may 2020');

    //Toggle menu


    const toggleMenu = () => {

        const handlerMenu = () => {
            if (!menu.style.transform || menu.style.transform === "translate(-100%)") {
                menu.style.transform = "translate(0)";
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };
        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector("menu"),
            closeBtn = document.querySelector(".close-btn"),
            menuItems = menu.querySelectorAll('ul>li');

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu)
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    toggleMenu();

});




