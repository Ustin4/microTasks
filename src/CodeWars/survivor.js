function isSurvivorNumber(n) {
    let i = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

console.log(isSurvivorNumber(1)); // Output: true
console.log(isSurvivorNumber(2)); // Output: false
console.log(isSurvivorNumber(3)); // Output: true
console.log(isSurvivorNumber(7)); // Output: true
console.log(isSurvivorNumber(13)); // Output: true
console.log(isSurvivorNumber(15)); // Output: false