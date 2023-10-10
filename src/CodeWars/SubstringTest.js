function SubstringTest(str1, str2) {

    str1 = str1.toLocaleLowerCase()
    str2 = str2.toLocaleLowerCase()

    for (let i = 0; i < str1.length - 1; i++) {
        for (let j = 0; j < str2.length - 1; j++) {
            if (str1.substr(i, 2) === str2.substr(j, 2)) {
                return true
            }
        }
    }
    return false
}

console.log(SubstringTest("Something", "Home"))