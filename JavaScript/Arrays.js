(function () {
    var array = [1, 8, 5, 4, 9, 3, 7, 6, 2];
    console.log("Исходный массив: " + array.join(" "));

    var firstItem = array.slice(0, 5);
    console.log("Первые пять элементов: " + firstItem.join(" "));

    var lastItem = array.slice(array.length - 5);
    console.log("Последние пять элементов: " + lastItem.join(" "));

    var arraySort = array.slice(0);
    arraySort.sort(
        function (e1, e2) {
            return e2 - e1;
        }
    );
    console.log("Сотрированный массив: " + arraySort.join(" "));

    function getEven(array) {
        var arrayOut = [];

        for (var i = 0, j = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                arrayOut[j] = array[i];
                j++;
            }
        }
        return arrayOut;
    }

    function getSumEven(array) {
        var arrayEven = getEven(array);

        var sum = 0;
        for (var i = 0; i < arrayEven.length; i++) {
            sum += arrayEven[i];
        }
        return sum;
    }
    console.log("Сумма четных элементов массива: " + getSumEven(array));

    function createArray(numElement) {
        var temp = [];
        for (var i = 1; i <= numElement; i++) {
            temp[i] = i;
        }
        return temp;
    }

    function filterPow2(num) {
        var sqrtNum = Math.sqrt(num);
        var epsilon = Math.pow(10, -6);
        return sqrtNum - parseInt(sqrtNum) <= epsilon;
    }

    function getPow2Even(array) {
        var arrayOut = [];
        var arrayEven = getEven(array);

        for (var i = 0, j = 0; i < arrayEven.length; i++) {
            if (filterPow2(arrayEven[i])) {
                arrayOut[j] = arrayEven[i];
                j++;
            }
        }
        return arrayOut;
    }

    var arrayNum = createArray(100);
    console.log("Массив от 1 до 100: \n" + arrayNum.join(" "));

    var arrayPow2Even = getPow2Even(arrayNum);
    console.log("Отфильтрованный массив: " + arrayPow2Even.join(" "));
})();