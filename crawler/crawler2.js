const axios = require('axios');

(async () => {
    try {
        let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220110&stockNo=2609&_=1641716315023");
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
})();

