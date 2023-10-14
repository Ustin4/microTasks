function findTheWitch(arr) {
    const length = arr[0].length;

    for (let i = 0; i < length; i++) {
        let witchFound = true;

        for (let j = 1; j < arr.length; j++) {
            const current = arr[j];
            const previous = arr[j - 1];

            if (Math.abs(current[i].charCodeAt() - previous[i].charCodeAt()) > 1) {
                witchFound = false;
                break;
            }
        }

        if (witchFound) {
            return arr[0][i];
        }
    }

    return null;
}

console.log(findTheWitch(["a b", " ba"]));     // Output: "a"
console.log(findTheWitch(["ab kl", "ba kl", "a blk"]));  // Output: "b"
console.log(findTheWitch(["icwth", "wicth", "witch"]));  // Output: "w"
console.log(findTheWitch(["abcdef", "abcfde"]));         // Output: "f"
console.log(findTheWitch(["hop", "hpo", "pho"]));        // Output: null