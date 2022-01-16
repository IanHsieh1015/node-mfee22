// exports = module.exports = {};
// exports 本身是一個物件

exports.color = "red";

let name = "default";

// 給值
exports.setName = function (firstName, lastName) {
  name = `${firstName} ${lastName}`;
};

// 傳值
exports.showName = function () {
  console.log(`Hi, ${name}`);
};

// return module.exports;