//Задание №1 Объясните почему код даёт именно такие результаты?
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 потому что благодаря префиксной форме инкремента
// значение переменной а сначала увеличиваем на 1, становится равное 2,
// затем присваиваем переменной с

//пример 2
d = b++;
alert(d); //ответ: 1 потому что при постфиксной форме инремента сначала идет выполнение
// присваивание в переменную d значения переменной b (на этапе объявления была присвоена 1),
// а затем значение переменной b увеличивается на 1 и становится равное 2.

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5 потому что в примере №1 значеие переменной а стало равно 2, и
// в этом примере из-за префиксной формы инкремента это значение сначала еще раз
// увеличилось на 1 (стало равное 3) и в результате в переменную с записалось (2+3)=5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4 потому, что в примере №2 переменная b стала равной 2, а поскольку
// тут постфиксная форма инкримента, то сначала идет сложение и присвоение суммы переменной d,
// затем только переменная b увеличится до 3-х
alert(a); //3 потому что в примере №3 переменная a стала равной 3-м
alert(b); //3 в первой инструкции примера №4 переменная b становится равной 3
// в результате постфиксной формы инкремента