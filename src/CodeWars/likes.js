function likes(names) {
    switch (names.length) {
        case 0 :
            return "no one likes this"
        case 1:
            return `${names} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} like this`
    }
}


console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Peter', 'Peter']))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
