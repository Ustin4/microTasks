function countRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return -1;
    }

    const combinedString = str1 + str1;

    for (let i = 0; i < str1.length; i++) {
        const rotatedString = combinedString.slice(i, i + str1.length);
        if (rotatedString === str2) {
            return i;
        }
    }

    return -1;
}

// Пример использования
console.log(countRotations("coffee", "eecoff")); // 2
console.log(countRotations("eecoff", "coffee")); // 4
console.log(countRotations("moose", "Moose")); // -1
console.log(countRotations("isn't", "'tisn")); // 2
console.log(countRotations("Esham", "Esham")); // 0
console.log(countRotations("dog", "god")); // -1