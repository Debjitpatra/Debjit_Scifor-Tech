
function findOddEven(numbers) {
    const odd = [];
    const even = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });

    console.log("Odd Num:", odd);
    console.log("Even Num:", even);
}
findOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
