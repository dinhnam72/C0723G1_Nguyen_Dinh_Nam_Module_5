// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const person = [
    {name:"Nam", age:"25"},
    {name:"Duy", age:"25"},
    {name:"Minh", age:"24"},
];

const p = person.map(({name, age}) => `Name: ${name}, Age: ${age}\n`);
console.log(`Mảng đã trích xuất\n ` + p);
