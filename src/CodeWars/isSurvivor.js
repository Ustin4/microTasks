function isSurvivor(n) {
    if (n === 1) {
        return true;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Test.assertEquals(survivor(1),true)

// Test.assertEquals(survivor(13),true)

// Test.assertEquals(survivor(8),false)

// Test.assertEquals(survivor(134),false)

// Test.assertEquals(survivor(289),true)

console.log(isSurvivor(1)); // true
console.log(isSurvivor(13)); // true
console.log(isSurvivor(8)); // true
console.log(isSurvivor(134)); // true
console.log(isSurvivor(289)); // true
