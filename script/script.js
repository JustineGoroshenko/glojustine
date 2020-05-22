/* eslint-disable no-trailing-spaces */
/* eslint-disable no-use-before-define */
/* eslint-disable no-inner-declarations */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */


// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', () => {

    // eslint-disable-next-line strict
    'use strict';
    //Timer
    /*
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
    countTimer('23 may 2020'); */

    //Toggle menu
    const toggleMenu = () => {
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector("menu"),
            closeBtn = document.querySelector(".close-btn"),
            menuItems = menu.querySelectorAll('ul>li');

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        let popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content'),
            windowWidth = document.documentElement.clientWidth,
            elemWidth = popupContent.clientWidth,
            center = ((windowWidth / 2) - elemWidth);
       
        const popupAnimation = () => {
            popup.style.display = 'block';
            let speed = 20;
            let time = setInterval(() => {
                const left = parseInt(popupContent.style.left);
                if (left >= center) {
                    clearInterval(time);
                    speed = 0;
                } else {
                    popupContent.style.left = 100 + 'px';
                }
                popupContent.style.left = left + speed +  'px';
            }, 3); 
        };
        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (document.documentElement.clientWidth  <  768) {
                    popup.style.display = 'block';
                } else {
                    popupAnimation();
                }
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            console.log();
        });
    };
    togglePopUp();

    //Scroll Button

    const scrollButton = () => {
        let scrollBtn = document.querySelector('a[href*="#service-"]'),
            section = document.querySelector("#service-block");
        scrollBtn.addEventListener('click', () => {
            let i = 10;
            let int = setInterval(function() {
              window.scrollBy(0, i);
              i += 5;
              if (i >= 40) clearInterval(int);
            }, 20);
        });
    };
    scrollButton();


});
