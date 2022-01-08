// Stack(函式記憶) 後進先出 Last In First Out (LIFO)

function multiply(a, b) {
    return a * b;  // 執行第8行
}

function square(n) {
    return multiply(n, n);  // 執行第12行
}

function printSquare(n) {
    let result = square(n); // 執行第13行
    console.log(result);    
}

printSquare(4);