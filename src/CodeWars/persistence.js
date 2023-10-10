function persistence(num) {
    let count = 0;

    for (; num >= 10; count++) {
        let product = 1;
        for (; num > 0; num = Math.floor(num / 10)) {
            product *= num % 10;
        }
        num = product;
    }

    return count;
}
console.log(persistence(34))


function persistence2(num) {
    let i = 0
    for (i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}

console.log(persistence2(34))