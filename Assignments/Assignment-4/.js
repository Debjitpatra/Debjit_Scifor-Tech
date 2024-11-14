console.log("Break Example");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // Outputs: 1, 2
}

console.log("Continue Example");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // Outputs: 1, 2, 4, 5
}
