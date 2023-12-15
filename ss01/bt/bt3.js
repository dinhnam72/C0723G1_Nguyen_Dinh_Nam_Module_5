// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
const numbers = [13, 22, 7, 4];

// const V=4;
// const check = numbers.some((n)=> n===V);
// if (check){
//     console.log( V+' có trong mảng.')
// }else {
//     console.log('Không tìm thấy')
// }
const checkForNumber = (numbers,target)=>{
    const containsTarget = numbers.some(n =>n===target);
    return containsTarget? target + " có trong mảng":"Không tìm thấy";
}
const result = checkForNumber(numbers,4);
console.log(result)
const result1 = checkForNumber(numbers,5);
console.log(result1)