function penalty(a_list) {
    let result = [];

    for (let i = 0; i < a_list.length; i++) {
        let number = a_list[i];
        result = result.concat(Array.from(number, digit => parseInt(digit)));
    }
    Math.min(...result)
    return result.map(value => value)
}

// console.log(penalty(['45', '30', '50', '1']))


function getSmallestNumber(arr) {
    return arr.sort((a, b) => a + b > b + a ? 1 : -1).join('');
}

console.log(getSmallestNumber(['45', '30', '50', '1'])); // Output: 1304550