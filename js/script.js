'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.mobile-menu-toggle'),
        menuButtonClose = document.querySelector('.mobile-menu-close'),
        mobileView = document.querySelectorAll('.mobile-view'),
        headerNav = document.querySelector('.header-nav');

    menuButton.addEventListener('click', () => {
        headerNav.classList.add('menu-display-toggle');
    });

    menuButtonClose.addEventListener('click', () => {
        headerNav.classList.remove('menu-display-toggle');
    });

    if (window.innerWidth > 1024) {
        mobileView.forEach(element => {
            element.style.display = 'none';
        });
    }

})