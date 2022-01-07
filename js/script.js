'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const menuButtonToggle = document.querySelector('.mobile-menu-toggle'),
        menu = document.querySelector('.header__menu'),
        body = document.querySelector('body');

    menuButtonToggle.addEventListener('click', (event) => {
        if (menu.classList.contains('hide-mobile-menu')) {
            menu.classList.remove('hide-mobile-menu');
            event.currentTarget.classList.add('mobile-menu-toggle-close');
            body.style.overflowY = 'hidden';
        } else {
            menu.classList.add('hide-mobile-menu');
            event.currentTarget.classList.remove('mobile-menu-toggle-close');
            body.style.overflowY = '';
        }
    })

})