const { readFile } = require("fs/promises");

(async () => {
    let result = await readFile("stock.txt", "utf-8");
    if(result === "2330") {
        console.log("good");
    } else {
        console.log("bad");
    }
}) ();