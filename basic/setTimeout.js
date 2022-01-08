// EventLoop (查詢關鍵字)

// console.log("start");
// setTimeout(function() {
//     console.log("Timeout");
// }, 0);
// console.log("end");

// 執行順序
// 1.start
// 2.end
// 3.Timeout


console.log("start");
setTimeout(function() {
    console.log("Timeout1");
    // 要花很久時間的事
    for (let i = 0; i < 100000; i++) {
        let result = 0;
        for (let j = 0; j < 100000; j++) {  
            result += j;
        }
    }
}, 0);
setTimeout(function() {
    console.log("Timeout2");
}, 0);
console.log("end"); 

// 執行順序
// 1.start
// 2.end
// 3.Timeout1
// 4.Timeout2


// JavaScript會先跳過Timeout(因有等候時間)，等到時間到再執行
// console.log("start");
// setTimeout(function() {
//     console.log("Timeout");
// }, 1000);  // 等候時間
// console.log("end");

// PHP不會跳過sleep，會等sleep結束再執行下一行(end)
// echo "start"
// sleep(5) // 等候時間 sleep PHP函數 
// echo "end"