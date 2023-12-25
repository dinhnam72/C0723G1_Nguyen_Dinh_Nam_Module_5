import axios from "axios";
export const getAllTodo = async ()=>{
    try {
        return await axios.get("http://localhost:8080/todos")
    }catch (e){
       return [];
    }
}
export const createTodo = async (todo)=>{
    try {
        return await axios.post("http://localhost:8080/todos/",todo)
    }catch (e){
        return [];
    }
}