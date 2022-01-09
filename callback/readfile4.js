// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值

const { readFile } = require("fs");
let readfilePromise = new Promise((resolve, reject) => {
    readFile("test.txt", "utf-8", (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
        // insert to myasql
    });
});
// console.log(readfilePromise);
// readfilePromise
// .then((result) => {
//     //接住resolve的結果
//     console.log(`這是 Promise 的 result: ${result}`)
// })
// .catch((err) => {
//     console.log(`這是 Promise 的 err: ${err}`)
// })

// 原先未加 try catch 版本
// async function main() {
//     let result = await readfilePromise;
//     console.log(`這是 Promise 的 result: ${result}`);

//     let err = await readfilePromise;
//     console.log(`這是 Promise 的 err: ${err}`);
// }

// main();


// 加 try catch 版本
async function main() {
    try {
        let result = await readfilePromise;
        console.log(`這是 Promise 的 result: ${result}`);
    } catch(err) {
        err = await readfilePromise;
        console.log(`這是 Promise 的 err: ${err}`);
    }
}

main();

// 箭頭函示
(async () => {
    let result = await readfilePromise;
    console.log(`這是 Promise 的 result: ${result}`);
})();
