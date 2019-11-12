"use strict";

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

/**
 * функция обрабатывает клик по кнопке в карточке товара и попеременно
 * вызывает функции показа или скрытия текста о товаре
 * @param{MouseEvent} clickedButtonEvent
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        text: cardNode.querySelector('.desc'),
        button: cardNode.querySelector('button')
    }
    const textOnButton=card.button.innerText;
    if (textOnButton === 'Показать описание'){
        showMoreText(card);
    } else if (textOnButton === 'Скрыть описание'){
        hideMoreText(card);
    }
}

/**
 * функция скрывает текст с описанием товара
 * @param {object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElementElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLDivElement} card.text
 * @param {HTMLButtonElementlement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.text.classList.add('hidden');
    card.button.innerText = 'Показать описание';
}

/**
 * функция показывает текст с описанием товара
 * @param {object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElementElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLDivElement} card.text
 * @param {HTMLButtonElementlement} card.button
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    card.text.classList.remove('hidden');
    card.button.innerText = 'Скрыть описание';
}