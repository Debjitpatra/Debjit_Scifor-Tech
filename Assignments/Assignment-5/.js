const numbers = [0, 0, 0, 0, -1, -2, -3, -4, 1, 2, 3, 4];


let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++; 
    } else if (numbers[i] < 0) {
        negativeCount++; 
    } else {
        zeroCount++;
    }
}


console.log("Positive numbers:", positiveCount);
console.log("Negative numbers:", negativeCount);
console.log("Zeros:", zeroCount);
