// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages"
// bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 192,
    displayInfo() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
    }
};

// Gọi phương thức để hiển thị thông tin về sách
book.displayInfo();