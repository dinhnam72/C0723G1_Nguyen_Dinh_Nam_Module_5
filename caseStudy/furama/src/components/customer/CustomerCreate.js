export function CustomerCreate(){
    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Create Customer</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    create(values);
                                }}
                                validationSchema={Yup.object(validateObject)}
                            >
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control" />
                                            <ErrorMessage name="name" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="dateOfBirth" className="form-label col-sm-3">
                                            Date of birth
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="date"
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="dateOfBirth" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3">
                                            Gender
                                        </label>
                                        <div className="col-sm-9">
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio1"
                                                       value="1"/>
                                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Field className="form-check-input" type="radio" name="gender"
                                                       id="inlineRadio2"
                                                       value="0"/>
                                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="idCard" className="form-label col-sm-3">
                                            Id card
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="idCard" name="idCard" className="form-control"
                                            />
                                            <ErrorMessage name="idCard" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="phoneNumber" className="form-label col-sm-3">
                                            Phone number
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="phoneNumber" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="form-label col-sm-3">
                                            Email
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="email" id="email" name="email" className="form-control"
                                            />
                                            <ErrorMessage name="email" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="address" className="form-label col-sm-3">
                                            Address
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="address" component="div" className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
                                            <NavLink
                                                to="/customers"
                                                className="btn btn-sm btn-secondary me-4 rounded-0"
                                            >
                                                Back
                                            </NavLink>
                                            <button type="submit" className="btn btn-sm btn-primary rounded-0">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}