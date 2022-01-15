const axios = require('axios');

(async () => {
    // 根據變數去抓去資料
    let stockNo = 2330;
    let queryDate = 20220115;
    try {
        // let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220110&stockNo=2609&_=1641716315023");

        // 增加變數 第一種寫法 不推薦 不好維護不好看
        // let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=" + queryDate + "&stockNo=" + stockNo + "&_=1641716315023");

        // 增加變數 第二種寫法
        // let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=${stockNo}&_=1641716315023`);
        // console.log(response.data);

        // 增加變數 第三種寫法
        let response = await axios.get(
            "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
            {
                // 這裡可以放一些設定
                // params: 放 query  string 的參數
                params: {
                    response: "json",
                    date: queryDate,
                    stockNo,
                },
            }
        )
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
})();

