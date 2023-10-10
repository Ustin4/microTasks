function cookingTime(eggs) {
    const maxEggs = 8;
    const cookingTime = 5;

    const batches = Math.ceil(eggs / maxEggs);
    return batches * cookingTime;
}

console.log(cookingTime(8))