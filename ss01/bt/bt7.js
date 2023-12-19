// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const person = [
    {name:"Nam", age:"25"},
    {name:"Duy", age:"25"},
    {name:"Minh", age:"24"},
];

for (const { name, age } of person) {
    console.log(`Name: ${name}, Age: ${age}`);
}
