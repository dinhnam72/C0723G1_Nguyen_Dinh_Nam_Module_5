import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";

export function CreateBook() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategory()
    }, []);

    const getAllCategory = async () => {
        try {
            const res = await bookService.getAllCategory();
            setCategories(res.data);
        } catch (e) {
            navigate("/error")
        }

    }

    const initValue = {
        title: "",
        quantity: "",
        categories: {}
    }

    const validateObject = {
        title: Yup.string()
            .required("Ten sach khong duoc de trong"),
        quantity: Yup.number()
            .required("So luong sach khong duoc de trong")
            .min(1, "So luong sach phai la so duong"),
    }

    const createValue = async (value) => {
        value.quantity = +value.quantity;
        value.categories = JSON.parse(value.categories);
        try {
            const res = await bookService.createBook(value);
            console.log(res)
            if (res.status === 201) {
                toast.success("Them sach thanh cong!");
                navigate("/")
            } else {
                toast.error("Them sach that bai!");
                navigate("/create")
            }
        } catch (e) {
            navigate("/error")
        }
    }

    return (
        <>
            <div className="container">
                <h2>Them moi</h2>
                <Formik initialValues={initValue}
                        onSubmit={values => {
                            createValue(values);
                        }}
                        validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <label htmlFor="title">Ten sach</label>
                        <Field type="text" className="form-control" id="title" name="title"/>
                        <ErrorMessage name="title" className="text-danger form-check" component="small"/><br/>
                        <label htmlFor="quantity">So luong</label>
                        <Field type="number" className="form-control" id="quantity" name="quantity"/>
                        <ErrorMessage name="quantity" className="text-danger form-check" component="small"/><br/>
                        <label htmlFor="categories">The loai sach</label>
                        <Field as="select" className="form-control w-25" id="categories" name="categories">
                            <option value="">---Loai sach---</option>
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