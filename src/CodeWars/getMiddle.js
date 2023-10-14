function getMiddle(s) {
    const array = s.length
    const middleIndex = Math.floor(array / 2);
    return array % 2 === 0 ? s.slice(middleIndex - 1, middleIndex + 1) : s.charAt(middleIndex);
}


// if (number % 2 === 0) {
//     console.log("Число является четным.");
// } else {
//     console.log("Число является нечетным.");
// }

console.log(getMiddle("test"))