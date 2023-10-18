function decrypt(s) {

    const sum = s.split('')
    sum.unshift('1')

    return sum.join('') - s

}

function restorePhoneNumber(s) {
    // Преобразуем строку в число
    const num = parseInt(s, 10);

    // Перебираем все возможные исходные числа
    for (let i = 0; i <= 999; i++) {
        // Выполняем алгоритм обратного преобразования
        const result = i * 10 + i;

        // Проверяем, совпадает ли результат с заданным числом
        if (result === num) {
            // Если совпадает, возвращаем исходное число
            return i.toString();
        }
    }

    // Если не найдено совпадение, возвращаем "невозможно"
    return "невозможно";
}

// Пример использования

// console.log(restorePhoneNumber(353)); // Выведет "123"

function decryptPhoneNumber(s) {
// Умножаем входное число на 10 и прибавляем его к исходному числу
    let result = parseInt(s) * 10 + parseInt(s);

// Отрезаем лишние цифры, чтобы получить исходный номер телефона
    result = result.toString().slice(0, s.length);

// Проверяем, не получили ли мы невозможный результат
    if (result === s) {
        return "Невозможно";
    } else {
        return result;
    }
}

// Пример использования:
let s = "353";
let result = decryptPhoneNumber(s);

console.log(result)


// console.log(decrypt("353"))