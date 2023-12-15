// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng
// "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function mess(...nameList) {
    if (nameList.length===0){
        return "Welcome!";
    }else {
        const name1=nameList.join(' , ');
        return `Welcome,${name1}!`  ;
    }
}
// const names = ["Hoa","Lài","Nhung"];
// console.log(mess(names))
const names1= mess();
console.log(names1)