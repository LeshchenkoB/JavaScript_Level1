// Задание №4.Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products.filter(function (element) {
    if (("photos" in element) && element.photos.length > 0){
        return true;
    }
});

console.log(productsWithPhoto);
console.log(products.sort(function (item1, item2) {
  return item1.price-item2.price;
}));