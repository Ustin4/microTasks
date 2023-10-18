function sortAnimal(animals) {
    const result = {
        "Cat": {name: "Cat", numberOfLegs: 4},
        "Snake": {name: "Snake", numberOfLegs: 0},
        "Dog": {name: "Dog", numberOfLegs: 4},
        "Pig": {name: "Pig", numberOfLegs: 4},
        "Human": {name: "Human", numberOfLegs: 2},
        "Bird": {name: "Bird", numberOfLegs: 2},
    }
    return result[animals]
}

console.log(sortAnimal("Bird"))