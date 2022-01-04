// sum.js

// 第一種 for
function sum_for(n) {
  // TODO:
  // result = 1 + 2 + 3 + .... + n
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}
console.log(sum_for(1)); //1
console.log(sum_for(3)); //1+2+3=6
console.log(sum_for(5)); //1+2+3+4+5=15
console.log(sum_for(15)); //1+2+3+4+5+6+7+8+9+10+11+12+13+14+15=120


// 第二種 公式解
function sum_trapezoid(n){
  let result = ( 1 + n ) * n / 2;
  return result;
}
console.log(sum_trapezoid(1));
console.log(sum_trapezoid(3));
console.log(sum_trapezoid(5));
console.log(sum_trapezoid(15));


// 第三種 recursive 遞迴
// 缺點：效能不是最佳的
function sum_recursive(n) {
  // 停止點
  if (n < 1)
      return 0;
  return n + sum_recursive(n - 1);
}
console.log(sum_recursive(1)); //1
console.log(sum_recursive(3)); //1+2+3=6
console.log(sum_recursive(5)); //1+2+3+4+5=15
console.log(sum_recursive(15)); //1+2+3+4+5+6+7+8+9+10+11+12+13+14+15=120


// 第四種 reducer
const sum_reducer = (n) => {
  arr = [];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  let result = arr.reduce(reducer, 0);
  return result;
};
console.log(sum_reducer(1));
console.log(sum_reducer(3));
console.log(sum_reducer(5));
console.log(sum_reducer(15));



// 壓力測試
console.time('for')
for (let i = 0; i < 10000; i++)
    sum_for(100000); //  秒
    sum_for(50000); //  毫秒
    sum_for(10000); //  毫秒
    sum_for(100); //  毫秒
console.timeEnd('for')

console.time('trapezoid')
for (let i = 0; i < 10000; i++)
    sum_trapezoid(100000); // maximum call stack size exceeded
    sum_trapezoid(50000); // maximum call stack size exceeded
    sum_trapezoid(10000);
    sum_trapezoid(100);
console.timeEnd('trapezoid')

console.time('recursive');
for (let i = 0; i < 10000; i++)
    sum_recursive(100000);
    sum_recursive(50000);
    sum_recursive(10000);
    sum_recursive(100);
console.timeEnd('recursive');

console.time('reducer');
for (let i = 0; i < 10000; i++)
  sum_reducer(100000);
  sum_reducer(50000);
  sum_reducer(10000);
    sum_reducer(100);
console.timeEnd('reducer');