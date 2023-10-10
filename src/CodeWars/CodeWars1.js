function littleBoySum(a, b) {
    // Преобразуем числа в строки
    const strA = String(a);
    const strB = String(b);

    // Находим максимальную длину строки
    const maxLength = Math.max(strA.length, strB.length);

    // Добавляем нули к строкам, чтобы они имели одинаковую длину
    const paddedA = strA.padStart(maxLength, '0');
    const paddedB = strB.padStart(maxLength, '0');

    let result = '';

    // Проходимся в цикле по каждой позиции чисел (начиная с правого конца)
    for (let i = maxLength - 1; i >= 0; i--) {
        const digitA = Number(paddedA[i]);
        const digitB = Number(paddedB[i]);

        // Суммируем числа на текущей позиции и значение переноса разряда
        let sum = digitA + digitB ;

        // Если сумма больше 9, учтем перенос разряда
        if (sum > 9) {
            sum -= 10;
        }

        // Добавляем остаток от суммы (последнюю цифру) к результату
        result = String(sum) + result;
    }


    // Возвращаем результат, преобразованный в число
    return Number(result);
}

// Пример использования
console.log(littleBoySum(0,0)); // Вывод: 1180