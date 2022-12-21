var sortArray = function (numbers) {
    for (var i = 1; i < numbers.length; i++) {
        var temp = numbers[i];
        var k = i;
        for (var j = i - 1; j >= 0; j--) {
            if (temp < numbers[j]) {
                numbers[k] = numbers[j];
                numbers[j] = temp;
                k = j;
            }
        }
    }
    return numbers;
};
var arrNumber = [5, 3, 4, 5, 3, 2, 1, 2];
console.table(sortArray(arrNumber));
