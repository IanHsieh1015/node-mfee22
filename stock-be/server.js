const express = require("express");

require("dotenv").config();

let app = express();
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`簡易版 server 已經啟動 在port ${port} 上`);
});