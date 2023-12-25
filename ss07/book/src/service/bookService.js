import axios from "axios";

export const getAllCategory = async ()=>{
    try {
        return await axios.get("http://localhost:8080/categories");
    }catch (e){
        return [];
    }
 }
export const getAllBook = async ()=>{
    try {
        return await axios.get("http://localhost:8080/books");
    }catch (e){
        return [];
    }
}

export const createBook = async (book)=>{
    try {
        return await axios.post("http://localhost:8080/books",book);
    }catch (e){
        return [];
    }
}
export const deleteBook = async (id)=>{
    try {
        return await axios.delete(`http://localhost:8080/books/${id}`);
    }catch (e){
        return [];
    }
}