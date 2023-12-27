import {useEffect, useState} from "react";
import * as todoService from "../service/todoService";
import {Field, Formik,ErrorMessage,Form} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function TodoList() {
    const  navigate = useNavigate();
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getAllTodo();
    }, []);
    const getAllTodo = async () => {
        try {
            const res = await todoService.getAllTodo();
            console.log(res.data)
            setTodoList(res.data)
        }catch (e) {
            navigate("/error")
        }

    }
    const initValue = {
        title:""
    }

    const validateObject = {
        title: Yup.string()
            .required("Tên không được để trống"),
    }


    const create = async (value) =>{
        console.log(value)
        try {
            const res = await todoService.createTodo(value);
            if (res.status===201){
                toast.success("Thêm mới thành công!");
                navigate("/")
            }else {
                toast.error(" Thêm mới thất bại!");
                navigate("/")
            }
        }catch (e) {
            navigate("/error")
        }

    }

    return (
        <>
            <Formik initialValues={initValue}
                    onSubmit={value =>
                    {create(value);
                    }}
                    validationSchema={Yup.object(validateObject)}
            >

               <Form>
                   <Field name="title" className="form-control d-flex w-25" />
                   <ErrorMessage name="title" component="small" className="text-danger"/><br/>
                   <button type="submit">Lưu</button>
               </Form>
            </Formik>
            <table className="table table-hover">
                <thead className="table-primary">
                <th>Stt</th>
                <th>Tên</th>
                </thead>
                <tbody>
                {todoList.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}