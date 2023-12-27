import axios from "axios";

export const getAllCategory = async ()=>{
    try {
        return await axios.get("http://localhost:8080/categories");
    }catch (e){
        console.log(e);
    }
 }
export const getAllBook = async (searchName)=>{
    try {
        return await axios.get("http://localhost:8080/books?title_like="+searchName);
    }catch (e){
        console.log(e);
    }
}

export const createBook = async (book)=>{
    try {
        return await axios.post("http://localhost:8080/books",book);
    }catch (e){
        console.log(e);
    }
}
export const getBookById = async (id)=>{
    try {
        return await axios.get("http://localhost:8080/books/"+id);
    }catch (e){
        console.log(e);
    }
}

export const updateBook = async (book)=>{
    try {
        return await axios.patch("http://localhost:8080/books/"+book.id,book);
    }catch (e){
        console.log(e);
    }
}
export const deleteBook = async (id)=>{
    try {
        return await axios.delete(`http://localhost:8080/books/${id}`);
    }catch (e){
        console.log(e);
    }
}