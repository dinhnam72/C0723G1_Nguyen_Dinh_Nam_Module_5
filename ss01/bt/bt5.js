// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const numbers = [2,3,5,7,10];
const check  = numbers.find((n)=>n>3);
if (check){
    console.log("Mảng có phẩn tử đâu tiên lớn hơn 3: " +check)
}else {
    console.log("Không có phần tử nào lớn hơn 3")
}
