import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as bookService from "../service/bookService";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function UpdateBook(){
    const [book, setBook] = useState();
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const {id} =useParams();


    useEffect(() => {
        getAllCategory();
        getBookById();
    }, []);



    const getAllCategory = async () => {
        const res = await bookService.getAllCategory();
        setCategories(res.data);
    }

    const getBookById = async () => {
        const res = await bookService.getBookById(id);
        console.log(res.data)
        setBook(res.data);

    }
    if (!book){
        return null;
    }

    const initValue = {
       ...book,
        categories:JSON.stringify(book.categories)

    }

    const validateObject= {
        title: Yup.string()
            .required("Ten sach khong duoc de trong"),
        quantity: Yup.number()
            .required("So luong sach khong duoc de trong")
            .min(1,"So luong sach phai la so duong")
    }

    const update = async (value)=>{
        console.log(value)
        value.quantity = +value.quantity;
        value.categories = JSON.parse(value.categories);
        const res = await bookService.updateBook(value);
        console.log(res)
        if (res.status===200){
            toast.success("Sua sach thanh cong!");
            navigate("/")
        }else {
            toast.error("Sua sach that bai!");
            navigate(`/update/${value.id}`)
        }

    }

    return (
        <>
            <div className="container">
                <h2>Sua sach</h2>
                <Formik initialValues={initValue}
                        onSubmit={values => {
                            update(values);
                        }}
                        validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <label htmlFor="title">Ten sach</label>
                        <Field type="text" className="form-control"  id="title" name="title"/>
                        <ErrorMessage name="title" className="text-danger form-check" component="small"/><br/>
                        <label htmlFor="quantity">So luong</label>
                        <Field type="number" className="form-control"  id="quantity" name="quantity"/>
                        <ErrorMessage name="quantity" className="text-danger form-check" component="small"  /><br/>
                        <label htmlFor="categories">The loai sach</label>
                        <Field as="select" className="form-control w-25" id="categories" name="categories">
                            {categories.map(category => (
                                <option key={category.id} value={JSON.stringify(category)}>
                                    {category.type}
                                </option>
                            ))}
                        </Field>
                        <button type="submit" className="btn btn-primary mt-3">Luu</button>

                    </Form>
                </Formik>
            </div>

        </>
    )
}