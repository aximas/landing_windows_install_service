'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const menuButtonToggle = document.querySelector('.mobile-menu-toggle'),
        menu = document.querySelector('.header__menu'),
        menuLinks = document.querySelectorAll('.menu__link'),
        body = document.querySelector('body'),
        modal = document.querySelector('.modal'),
        modalCallButtons = document.querySelectorAll('.btn__order-master'),
        modalCloseButton = document.querySelector('.btn__modal-close');
    let modalOpen = false;

    // mobile menu toggle
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

    // close mobile menu if menu link clicked
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            menu.classList.add('hide-mobile-menu');
            menuButtonToggle.classList.remove('mobile-menu-toggle-close');
            body.style.overflowY = '';
        });
    })

    // modal window toggle
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

    // add events for all buttons
    modalCallButtons.forEach(button => {
        modalToggle(button, modal);
    });

    // add event for close modal window
    modalToggle(modalCloseButton, modal);

})