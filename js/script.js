'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const menuButtonToggle = document.querySelector('.mobile-menu-toggle'),
        menu = document.querySelector('.header__menu'),
        body = document.querySelector('body'),
        modal = document.querySelector('.modal'),
        modalCallButtons = document.querySelectorAll('.advantages__btn'),
        modalCloseButton = document.querySelector('.btn__modal-close');
    let modalOpen = false;

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
    });

    function modalToggle(button, modalElement) {
        button.addEventListener('click', () => {
            if (modalOpen) {
                modalElement.style.visibility = 'hidden';
                modalElement.style.opacity = '0';
                body.style.overflowY = '';
                modalOpen = false;
            } else {
                modalElement.style.visibility = 'visible';
                modalElement.style.opacity = '1';
                body.style.overflowY = 'hidden';
                modalOpen = true;
            }
        });
    }

    modalCallButtons.forEach(button => {
        modalToggle(button, modal);
    });

    modalToggle(modalCloseButton, modal);

})