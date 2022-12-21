const sortArray = (numbers: number[]) => {
    for (let i = 1; i < numbers.length; i++) {
        let temp = numbers[i];
        let k = i;

        for (let j = i - 1; j >= 0; j--) {
            if (temp < numbers[j]) {
                numbers[k] = numbers[j];
                numbers[j] = temp;
                k = j
            }
        }

    }
    return numbers;
}
let arrNumber = [5, 3, 4, 5, 3, 2, 1, 2];
console.table(sortArray(arrNumber))