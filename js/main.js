'use strict';

function toggleMenu() {
    const elBtns = document.querySelectorAll('.menu-btn img')
    elBtns.forEach(btn => btn.classList.toggle('hide'))
    document.body.classList.toggle('show-nav')
}

function toggleActive(el) {
    const elNav = document.querySelectorAll('.main-nav a');
    elNav.forEach(nav => nav.classList.remove('active'))
    el.classList.add('active')
}
function toggleDropdownActive(el, ev) {
    if (!el) {
        document.querySelector('.dropdown-btn').classList.remove('drop-active');
        return;
    }
    ev.stopPropagation()
    const isDropIncluded = el.classList.contains('drop-active');
    const elNav = document.querySelectorAll('.main-nav li');
    elNav.forEach(nav => nav.classList.remove('drop-active'))
    if (!isDropIncluded) el.classList.add('drop-active'), 1000;
    else el.classList.remove('drop-active');
}

function toggleModal(elCard) {
    if (!elCard) document.querySelector('.modal').classList.toggle('show')
    else {
        if (window.innerWidth > 780) return;
        document.querySelector('.modal').classList.toggle('show');
    }
}
