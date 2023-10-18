// function reduce(fraction) {
//     const [num, denominator] = fraction
//
//     const gcd = (a, b) => {
//         if (b === 0) {
//             return a
//         }
//         return gcd(b, a % b)
//     }
//
//     const commonDivision = gcd(num,denominator)
//
//     const numResult = num/commonDivision
//     const denominatorResult = denominator/commonDivision
//
//     return [numResult,denominatorResult]
// }

function reduce(fraction) {
    const [num, denominator] = fraction

    const gnc = (a, b) => {
        if (b === 0) {
            return a
        }
        return gnc(b, a % b)
    }
    const comonDivision = gnc(num,denominator)

    const numResult = num/comonDivision
    const deniminatorResult = denominator/comonDivision
    return [numResult,deniminatorResult]
}


console.log(reduce([60, 20]))