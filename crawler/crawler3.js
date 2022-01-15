const axios = require('axios');
const { readFile } = require("fs/promises");

(async () => {
    // 根據變數去抓去資料
    // TODO: 從stock.txt 中讀出檔案代碼
    let stockNo = await readFile("stock.txt", "utf-8");
    let queryDate = 20220115;

    try {

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

