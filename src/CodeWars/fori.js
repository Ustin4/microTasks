const bu = (bu) => {
    let f = []

    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 4; j++) {
            f.push(bu[i][j])
        }
    }
    return f

}

console.log(bu(['cola', 'snacks', 'milk', 'water']))

