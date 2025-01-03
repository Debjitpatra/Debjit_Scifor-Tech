
function factorial(num) {
    if (num === 0) return 1; 
    return num * factorial(num - 1);
  }
  

  const number = 4; 
  console.log(`Factorial of ${number} is: ${factorial(number)}`);
  