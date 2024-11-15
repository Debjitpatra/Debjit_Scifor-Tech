
function calculate(x, y, operator) {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return  x / y ;
        
    }
}

console.log(calculate(4, 2, '+'));
console.log(calculate(4, 2, '-'));
console.log(calculate(4, 2, '*'));
console.log(calculate(4, 2, '/'));