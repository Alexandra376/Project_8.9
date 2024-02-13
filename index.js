const maxNumber = (array) => {
    let max = array[0];
    for (let i =  1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};
console.log(maxNumber([1, 2, 3, 10, 15]));

const multiplicationTable = (number) => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${number} * ${i} = ${number * i}\n`;
    }
    return result;
}
console.log(multiplicationTable(5));

const isEvenNumber = (array) => {
    let count = 0;
    for (const number of array) {
        if (number % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(isEvenNumber([1, 10, 14, 20]))

const reverseArray = (array) => {
    return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4]))

const countCost = (price, quantity) => ({
    result: price * quantity,
})
console.log(countCost(10, 5).result);

const isEven = (number) => number % 2 === 0;
console.log(isEven(10));

const reverseOfString = (string) => string.split('').reverse().join('');
console.log(reverseOfString('hello'));

const temperatureConverter = (celsius) => (celsius * 1.8000) + 32;
console.log(temperatureConverter(19));
