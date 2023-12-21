import {useState} from 'react';
import {Formik} from "formik";


function FromMedical() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    const handleValidate = () => {
        const errors = {};
        if (!form.name) {
            errors.name = "Không được để trống";
        }
        if (!form.cmnd) {
            errors.cmnd = "Không được để trống";
        }
        if (!form.dob) {
            errors.dob = "Không được để trống";
        } else {
            const date = new Date(form.dob);
            if (date.getFullYear() > 1990) {
                errors.dob = "Năm sinh phải lớn hơn 1990";
            }
        }
        if (!form.nationality) {
            errors.nationality = "Không được để trống";
        }
        if (!form.province) {
            errors.province = "Không được để trống";
        }
        if (!form.district) {
            errors.district = "Không được để trống";
        }
        if (!form.wards) {
            errors.wards = "Không được để trống";
        }
        if (!form.village) {
            errors.village = "Không được để trống";
        }
        if (!form.phone) {
            errors.phone = "Không được để trống";
        }
        if (!form.email) {
            errors.email = "Không được để trống";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Email sai định dạng!";
        }
        return errors;
    }
    const handleSubmit = () => {
        alert("Khai báo thành công!!!")
    }
    return (
        <>
            <h1>Khai báo ý tế</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>

                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Họ và tên</label>
                            <input type="text" name="name" value={form.name || ""} onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>

                        <div className={`custom-input ${errors.cmnd ? "custom-input-error" : ""}`}>
                            <label>Số hộ chiếu/CMND</label>
                            <input type="number" name="cmnd" value={form.cmnd || ""} onChange={handleChange}/>
                            <p className="error">{errors.cmnd}</p>
                        </div>
                        <div className={`custom-input ${errors.dob ? "custom-input-error" : ""}`}>
                            <label>Năm sinh</label>
                            <input type="date" name="dob" value={form.dob || ""} onChange={handleChange}/>
                            <p className="error">{errors.dob}</p>
                        </div>
                        <div>
                            <label>Giới tính</label>
                            <input type="radio" id="nam" value="nam" name="gender"/>
                            <label htmlFor="nam">Nam</label>
                            <input type="radio" id="nu" value="nu" name="gender"/>
                            <label htmlFor="nu">Nữ</label>
                        </div>

                        <div className={`custom-input ${errors.nationality ? "custom-input-error" : ""}`}>
                            <label> Quốc tịch </label>
                            <input type="text" name="nationality" value={form.nationality || ""} onChange={handleChange}/>
                            <p className="error">{errors.nationality}</p>
                        </div>

                        <div>
                            <label>Công ty làm việc</label>
                            <input type="text" name="company"/>
                        </div>

                        <div>
                            <label>Bộ phận làm việc</label>
                            <input type="text" name="workingParts"/>
                        </div>
                        <div>
                            <label>Có thể khai báo y tế</label>
                            <checkbox></checkbox>
                        </div>
                        <div>
                            <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        </div>

                        <div className={`custom-input ${errors.province ? "custom-input-error" : ""}`}>
                            <label>Tỉnh thành</label>
                            <input type="text" name="province" value={form.province || ""} onChange={handleChange}/>
                            <p className="error">{errors.province}</p>
                        </div>

                        <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
                            <label>Quận /Huyện</label>
                            <input type="text" name="district" value={form.district || ""} onChange={handleChange}/>
                            <p className="error">{errors.district}</p>
                        </div>

                        <div className={`custom-input ${errors.wards ? "custom-input-error" : ""}`}>
                            <label>Phường /Xã</label>
                            <input type="text" name="wards" value={form.wards || ""} onChange={handleChange}/>
                            <p className="error">{errors.wards}</p>
                        </div>
                        <div className={`custom-input ${errors.village ? "custom-input-error" : ""}`}>
                            <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                            <input type="text" name="village" value={form.village || ""} onChange={handleChange}/>
                            <p className="error">{errors.village}</p>
                        </div>

                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Phone</label>
                            <input type="number" name="phone" value={form.phone || ""} onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>

                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="email" name="email" value={form.email || ""} onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );

}

export default FromMedical;