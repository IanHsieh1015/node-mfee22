// 執行順序 4 1 3 5 2
function test() {
    console.log(1);

    setTimeout(() => {
        console.log(2)
    }, 0);

    console.log(3);
}

console.log(4);
test();
console.log(5);

// 執行順序 4 1 3 5 2
function test() {
    console.log(1);

    Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
        }, 0);
    });

    console.log(3);
}

console.log(4);
test();
console.log(5);

// 執行順序 4 1 5 2 3
async function test() {
    console.log(1);

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
        }, 0);
    });

    console.log(3);
}

console.log(4);
test();
console.log(5);