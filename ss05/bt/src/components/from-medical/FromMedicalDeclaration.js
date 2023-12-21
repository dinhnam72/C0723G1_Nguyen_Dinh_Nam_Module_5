import {Form, Field, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function FromMedical() {
    const navigate = useNavigate();
    const initValue = {
        name: "",
        idCard: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        company: "",
        department: "",
        hasHealthInsurance: "",
        province: "",
        district: "",
        ward: "",
        houseNumber: "",
        phoneNumber: "",
        email: "",
        movingHistory: "",
        symptoms: [],
        contact: [],
    };
    const validateObject = {
        name: Yup.string()
            .required("Vui lòng nhập họ và tên!"),
        idCard: Yup.string()
            .required("Vui lòng nhập số hộ chiếu /CMND!"),
        dateOfBirth: Yup.date()
            .required("Vui lòng nhập ngày sinh!")
            .min(new Date('1990-01-01'), "Năm sinh phải lơn hơn 1990!"),
        nationality: Yup.string()
            .required("Vui lòng nhập quốc tịch!"),
        province: Yup.string()
            .required("Vui lòng nhập tỉnh /thành"),
        district: Yup.string()
            .required("Vui lòng nhập quận /huyện"),
        ward: Yup.string()
            .required("Vui lòng nhập phường /xã"),
        houseNumber: Yup.string()
            .required("Vui lòng nhập số nhà, phố, tổ dân phố /thôn /đội"),
        phoneNumber: Yup.string()
            .required("Vui lòng nhập số điện thoại"),
        email: Yup.string()
            .required("Vui lòng nhập email")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không hợp lệ!")
    }

    const create = (values) => {
        values.gender = +values.gender;
        values.hasHealthInsurance = +values.hasHealthInsurance;
        alert(JSON.stringify(values,null,2))
        toast.success("Đã gửi thành công!");
        navigate("/");
    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                    create(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div className="w-25 m-auto">
                    <Form>
                        <h3>Tờ khai y tế</h3>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="name">Họ và tên</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="idCard">Số hộ chiếu/CMND</label>
                            <Field type="text" className="form-control" id="idCard" name="idCard"/>
                            <ErrorMessage name="idCard" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="dateOfBirth">Ngày sinh</label>
                            <Field type="date" className="form-control" id="dateOfBirth" name="dateOfBirth"/>
                            <ErrorMessage name="dateOfBirth" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <div className="form-check-inline">Giới tính</div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                            <ErrorMessage name="gender" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="nationality">Quốc tịch</label>
                            <Field type="text" className="form-control" id="nationality" name="nationality"/>
                            <ErrorMessage name="nationality" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="company">Công ty làm việc</label>
                            <Field type="text" className="form-control" id="company" name="company"/>
                            <ErrorMessage name="company" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="department">Bộ phận làm việc</label>
                            <Field type="text" className="form-control" id="department" name="department"/>
                            <ErrorMessage name="department" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3 form-check">
                            <label className="form-check-label" htmlFor="hasHealthInsurance">Có bảo hiểm y tế</label>
                            <Field type="checkbox" className="form-check-input" id="hasHealthInsurance"
                                   name="hasHealthInsurance" value="1"/>
                        </div>
                        <div className="mt-3">
                            <h5>Địa chỉ liên lạc tại Việt Nam</h5>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="province">Tỉnh thành</label>
                            <Field type="text" className="form-control" id="province" name="province"/>
                            <ErrorMessage name="province" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="district">Quận /huyện </label>
                            <Field type="text" className="form-control" id="district" name="district"/>
                            <ErrorMessage name="district" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="ward">Phường /xã </label>
                            <Field type="text" className="form-control" id="ward" name="ward"/>
                            <ErrorMessage name="ward" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="houseNumber">Số nhà, phố, tổ dân phố /thôn
                                /đội </label>
                            <Field type="text" className="form-control" id="houseNumber" name="houseNumber"/>
                            <ErrorMessage name="houseNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="phoneNumber">Điện thoại</label>
                            <Field type="text" className="form-control" id="phoneNumber" name="phoneNumber"/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="email">Email</label>
                            <Field type="text" className="form-control" id="email" name="email"/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>

                        <div className="mt-3">
                            <label className="label-control" htmlFor="movingHistory">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia /vùng lãnh thổ nào không?
                                    (Có thể đi qua nhiều quốc gia)</h5>
                            </label>
                            <Field type="textarea" className="form-control" id="movingHistory" name="movingHistory"/>
                            <ErrorMessage name="movingHistory" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>

                        <div className="mt-3">
                            <label className="label-control">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h5>
                            </label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="fever" name="symptoms"
                                       value="fever"/>
                                <label className="form-check-label" htmlFor="fever">Sốt</label>
                                <ErrorMessage name="fever" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="cough" name="symptoms"
                                       value="cough"/>
                                <label className="form-check-label" htmlFor="cough">Ho</label>
                                <ErrorMessage name="cough" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="shortnessOfBreath"
                                       name="symptoms" value="shortnessOfBreath"/>
                                <label className="form-check-label" htmlFor="shortnessOfBreath">Khó thở</label>
                                <ErrorMessage name="shortnessOfBreath" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="pneumonia" name="symptoms"
                                       value="pneumonia"/>
                                <label className="form-check-label" htmlFor="pneumonia">Viêm phổi</label>
                                <ErrorMessage name="pneumonia" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="soreThroat" name="symptoms"
                                       value="soreThroat"/>
                                <label className="form-check-label" htmlFor="soreThroat">Đau họng</label>
                                <ErrorMessage name="soreThroat" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="tired" name="symptoms"
                                       value="tired"/>
                                <label className="form-check-label" htmlFor="tired">Mệt mỏi</label>
                                <ErrorMessage name="tired" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label className="label-control">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h5>
                            </label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="patient" name="contact"
                                       value="patient"/>
                                <label className="form-check-label" htmlFor="patient">Người bệnh hoặc nghi ngờ mắc bệnh
                                    COVID-19</label>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="epidemicArea"
                                       name="contact" value="epidemicArea"/>
                                <label className="form-check-label" htmlFor="epidemicArea">Người từ nước có bệnh
                                    COVID-19</label>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="peopleSymptoms" name="contact"
                                       value="peopleSymptoms"/>
                                <label className="form-check-label" htmlFor="peopleSymptoms">
                                    Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                            </div>
                        </div>

                        <div className="mt-3">
                            <button className="btn btn-primary btn-sm w-100" type="submit">Gửi</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
