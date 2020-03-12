(function useArrays() {
    function getEvenNumbersArray(array) {
        return array.filter(function (e) {

            return e % 2 === 0
        });
    }

    function getEvenNumbersSum(array) {
        var evenArray = getEvenNumbersArray(array);
        return evenArray.reduce(function (sum, currentItem) {

            return sum + currentItem;
        }, 0);
    }

    function createArray(elementsQuantity) {
        var array = [];
        for (var i = 1; i <= elementsQuantity; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersPow2Array(array) {
        var evenArray = getEvenNumbersArray(array);
        return evenArray.map(function (e) {

            return Math.pow(e, 2);
        });
    }

    console.log("Работа с массивами:");
    var array = [1, 8, 5, 4, 9, 3, 7, 6, 2];
    console.log("Исходный массив: " + array.join(" "));

    var subarrayFirstItems = array.slice(0, 5);
    console.log("Первые пять элементов: " + subarrayFirstItems.join(" "));

    var subarrayLastItems = array.slice(array.length - 5);
    console.log("Последние пять элементов: " + subarrayLastItems.join(" "));

    var sortedDescendingArray = array.slice(0);
    sortedDescendingArray.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Сотрированный массив: " + sortedDescendingArray.join(" "));

    console.log("Сумма четных элементов массива: " + getEvenNumbersSum(array));

    var arrayNumber = createArray(100);
    console.log("Массив от 1 до 100:\n" + arrayNumber.join(" "));

    var evenNumbersPow2Array = getEvenNumbersPow2Array(arrayNumber);
    console.log("Массив квадратов четных чисел:\n" + evenNumbersPow2Array.join(" "));
    console.log("\n\n");
})();