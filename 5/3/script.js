"use strict";

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('span');
const openBtn = document.querySelector('button');

openBtn.addEventListener('click', function () {
    modal.classList.remove('blur-out-contract-bck', 'hidden');
    modal.classList.add('focus-in-expand-fwd');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('focus-in-expand-fwd');
    modal.classList.add('blur-out-contract-bck');
    setTimeout(function () {
        modal.classList.add('hidden');
    },1000);
});