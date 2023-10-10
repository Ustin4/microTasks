function transformArray(a, k) {
    for (let i = 0; i < k; i++) {
        const maxValue = Math.max(...a);
        a = a.map((x) => maxValue - x);
    }
    return a;
}