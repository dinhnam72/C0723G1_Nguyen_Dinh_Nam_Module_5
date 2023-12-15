// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const numbers = [13, 22, 7, 4];

const sum = numbers.reduce((acc,currentValue)=>{
    return acc+currentValue;
},0);
console.log(sum)