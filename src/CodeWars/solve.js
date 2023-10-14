// function solve(a, b) {
//     const combinedString = a + b;
//     const uniqueChars = [];
//
//     for (let char of combinedString) {
//         if (!a.includes(char) || !b.includes(char)) {
//             uniqueChars.push(char);
//         }
//     }
//     return uniqueChars.join('')
// }
//

function solve(a, b) {
    const combine = a + b
    const uniqueChars = []

    for (let i of combine) {
        if (!a.includes(i) || !b.includes(i) ){
            uniqueChars.push(i)
        }
    }
    return uniqueChars.join('')
}

console.log(solve("xyab", "xzca"))