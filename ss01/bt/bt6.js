// 6. Sử dụng destructuring với rest parameter
// để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const numbers = [2,3,5,7,10];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);