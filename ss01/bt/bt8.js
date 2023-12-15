// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const numbersList = [6, 8, 3, 4, 5];

// Sử dụng Spread operator để truyền mảng số vào hàm
const result = sumNumbers(...numbersList);

console.log(result);