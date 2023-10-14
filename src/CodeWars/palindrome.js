const palindrome = num => {
    const is_palindrome = str => +str > 9 && str === [...str].reverse().join('');
    if (num !== parseInt(num) || num < 0) return 'Not valid';
    for (let i = 0; true; i++) {
        if (is_palindrome((num + i).toString())) return num + i;
        if (is_palindrome((num - i).toString())) return num - i;
    }
};
console.log(palindrome(8));    // Output: 11
console.log(palindrome(281));  // Output: 282
console.log(palindrome(1029)); // Output: 1001