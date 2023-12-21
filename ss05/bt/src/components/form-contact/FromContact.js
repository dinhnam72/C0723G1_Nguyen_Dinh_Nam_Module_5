import {useState} from "react";
import {Formik} from "formik";
import './FromContact.css'


function FormContact() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Không được để trống";
        }
        if (!form.email) {
            errors.email = "Không được để trống";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Email sai định dạng!";
        }
        if (!form.phone) {
            errors.phone = "Không được để trống";
        }
        if (!form.message) {
            errors.message = "Không được để trống";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Đăng ký thành công!!!");
    }

    return (
        <div>
            <h1>Đăng ký</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>

                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Tên</label>
                            <input type="text" name="name" value={form.name || ""} onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>

                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="email" name="email" value={form.email || ""} onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>

                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Số điện thoại</label>
                            <input type="number" name="phone" value={form.phone || ""} onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>

                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Lời nhắn</label>
                            <textarea type="text" name="message" value={form.message || ""} onChange={handleChange}/>
                            <p className="error">{errors.message}</p>
                        </div>
                        <button type="submit">Gửi</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormContact;