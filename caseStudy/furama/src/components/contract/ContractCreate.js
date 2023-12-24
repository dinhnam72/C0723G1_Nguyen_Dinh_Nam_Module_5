export function ContractCreate() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6 border-primary">
                    <div className=" text-content">
                        <h2 className="text-primary">Create Contract</h2>
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
                                <label htmlFor="name" className="form-label col-sm-2">Contract code</label>
                                <div className="col-sm-10">
                                    <Field type="text" id="name" className="form-control" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="customer" className="form-label col-sm-2">Customer</label>
                                <div className="col-sm-10">
                                    <Field type="text" id="customer" className="form-control"/>
                                    <datalist id="datalistCustomers">
                                        <option value=""></option>
                                        {
                                            customers.map(customer => (
                                                <option key={customer.id} value={JSON.stringify(customer)}>
                                                    {customer.name}
                                                </option>
                                            ))
                                        }
                                    </datalist>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="facility" className="form-label col-sm-2">Facility</label>
                                <div className="col-sm-10">
                                    <Field as="select" id="facility" className="form-control"/>
                                    <option value="">Select</option>
                                    {
                                        facilities.map(facility => (
                                            <option key={facility.id} value={JSON.stringify(facility)}>
                                                {facility.name}
                                            </option>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="startDate" className="form-label col-sm-2">Start date</label>
                                <div className="col-sm-10">
                                    <Field type="date" id="startDate" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="endDate" className="form-label col-sm-2">End date</label>
                                <div className="col-sm-10">
                                    <Field type="date" id="endDate" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="totalPayment" className="form-label col-sm-2">Total payment</label>
                                <div className="col-sm-10">
                                    <Field type="number" id="totalPayment" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="deposit" className="form-label col-sm-2">Deposit</label>
                                <div className="col-sm-10">
                                    <Field type="number" id="deposit" className="form-control" required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="form-label col-sm-2"></label>
                                <div className="col-sm-10">
                                    <NavLink to="/contracts" role="button"
                                             className="btn btn-sm btn-secondary">Back</NavLink>
                                    <button type="submit" className="btn btn-sm btn-primary ms-3">Save</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}