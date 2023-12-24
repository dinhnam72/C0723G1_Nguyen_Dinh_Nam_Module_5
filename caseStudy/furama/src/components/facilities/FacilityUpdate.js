import * as facilityTypeService from "../../service/facilityTypeService";
import * as accompaniedServiceService from "../../service/accompaniedServiceService";
import * as facilityService from "../../service/facilityService";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useEffect, useState} from "react";
export function FacilityUpdate(){
    const navigate = useNavigate();
    const [facilityTypes, setFacilityTypes] = useState([]);
    const [facility, setFacility] = useState();
    const [accompaniedServices, setAccompaniedServices] = useState([]);
    const {id} = useParams();
    const otherUtilities = ["Elevator", "Hairdryer", "Television", "Money safe"];
    const freeServices = ["Have breakfast", "Parking and shuttle", "Air conditional", "Wifi"];

    useEffect(() => {
        getAllFacilityType();
        getAllAccompaniedService();
    }, []);

    useEffect(() => {
        getFacilityById();
    }, [id])
    const getAllFacilityType = async () => {
        let data = await facilityTypeService.getAllFacilityType();
        setFacilityTypes(data);
    }

    const getAllAccompaniedService = async () => {
        let data = await accompaniedServiceService.getAllAccompaniedService();
        setAccompaniedServices(data);
    }

    const getFacilityById = async () => {
        let data = await facilityService.getFacilityById(id);
        setFacility(data);
    }

    const checkAccompaniedService = (accompaniedService, accompaniedServices) =>
        accompaniedServices.find(a => a === accompaniedService);

    if (!facilityTypes || !accompaniedServices || !facility) {
        return null;
    }

    const initValue = {
        ...facility,
        accompaniedServices:
            facility.accompaniedServices.map((a, index) => {
                facility.accompaniedServices[index] = JSON.stringify(facility.accompaniedServices[index])
                facility.accompaniedServices[index] = facility.accompaniedServices[index].replaceAll(/\\+|"{3}/g, "")
                facility.accompaniedServices[index] = facility.accompaniedServices[index].replaceAll(/"\{/g, "{")
                facility.accompaniedServices[index] = facility.accompaniedServices[index].replaceAll(/}"/g, "}")
            })

    }

    accompaniedServices.map((a, index) => {
        accompaniedServices[index] = JSON.stringify(accompaniedServices[index])
        accompaniedServices[index] = accompaniedServices[index].replaceAll(/\\+|"{3}/g, "")
        accompaniedServices[index] = accompaniedServices[index].replaceAll(/"\{/g, "{")
        accompaniedServices[index] = accompaniedServices[index].replaceAll(/}"/g, "}")
    })

    const validateObject = {
        name: Yup.string()
            .required("Vui lòng nhập tên"),
        rentalCosts: Yup.number()
            .required("Vui lòng nhập chi phí thuê")
            .min(0, "Chi phí thuê phải lớn hơn 0"),
        area: Yup.number()
            .required("Vui lòng nhập diện tích")
            .min(20, "Diện tích bể bơi phải lớn hơn 20"),
        capacity: Yup.number()
            .required("Vui lòng nhập thể tích ")
            .min(1, "Thể tích phải lớn hơn 0")
            .integer("Dung lượng phải là số nguyên"),
        rentalType: Yup.string()
            .required("Vui lòng nhập loại hình thuê"),
        poolArea: formatStyle.id !== 3 ?
            Yup.number()
                .required("Vui lòng nhập diện tích hồ bơi")
                .min(20, "Diện tích bể bơi phải lớn hơn 20")
            :
            Yup.number().notRequired(),
        numberFloor:
            formatStyle.id !== 3 ?
                Yup.number()
                    .required("Vui lòng nhập số tầng")
                    .min(1, "Số tầng phải lớn hơn 0")
                    .integer("Số tầng phải là số nguyên")
                :
                Yup.number().notRequired(),
    }

    const update = async (values) => {
        console.log(values)
        values.accompaniedServices.map((item, index) => {
            values.accompaniedServices[index] = JSON.parse(values.accompaniedServices[index]);
        })

        let status = await facilityService.updateFacility(values);
        if (status === 200) {
            toast.success("Update successfully!");
            navigate("/facilities");
        } else {
            toast.error("Update failed!");
            navigate(`/facilities/update/${facility.id}`);
        }
    }

    if (!facility){
        return null;
    }
    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Update {facility.facilityType.name}</h2>
                            </div>
                            <Formik
                                initialValues={facility}
                                onSubmit={values => {
                                    update(values);
                                }}
                                // validationSchema={Yup.object(validateObject)}
                            >
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control"/>
                                            <ErrorMessage name="name" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="area" className="form-label col-sm-3">
                                            Area
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="number"
                                                id="area"
                                                name="area"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="area" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalType" className="form-label col-sm-3">
                                            Rental type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                className="form-select"
                                                aria-label="Default select example"
                                                component="select"
                                                name="rentalType"
                                                id="rentalType"
                                            >
                                                <option defaultValue="">--Select--</option>
                                                <option value="hours">Hours</option>
                                                <option value="day">Day</option>
                                                <option value="month">Month</option>
                                                <option value="year">Year</option>
                                            </Field>
                                            <ErrorMessage name="rentalType" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalCosts" className="form-label col-sm-3">
                                            Rental costs
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="rentalCosts" name="rentalCosts"
                                                   className="form-control"
                                            />
                                            <ErrorMessage name="rentalCosts" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="capacity" className="form-label col-sm-3">
                                            Capacity
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="capacity" name="capacity" className="form-control"
                                            />
                                            <ErrorMessage name="capacity" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    {
                                        facility.facilityType.id === 3 ?
                                            <div className="row mb-3">
                                                <label className="form-label col-sm-3">
                                                    Free Service
                                                </label>
                                                <div className="col-sm-9">

                                                    <div>
                                                        {
                                                            freeServices.map((freeService, index) => (
                                                                <div className="form-check form-check-inline"
                                                                     key={index}>
                                                                    <Field className="form-check-input" type="checkbox"
                                                                           name="freeServices"
                                                                           value={freeService}
                                                                           id={`freeServices${freeService}`}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor={`freeServices${freeService}`}>{freeService}</label>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    facility.facilityType.id === 1 &&
                                                    <div className="row mb-3">
                                                        <label htmlFor="poolArea" className="form-label col-sm-3">
                                                            Pool area
                                                        </label>
                                                        <div className="col-sm-9">
                                                            <Field
                                                                type="number"
                                                                id="poolArea"
                                                                name="poolArea"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name="poolArea" component="div"
                                                                          className="mt-2 form-text text-danger"
                                                            ></ErrorMessage>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="row mb-3">
                                                    <label htmlFor="roomStandards" className="form-label col-sm-3">
                                                        Room Standards
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            component="select"
                                                            name="roomStandards"
                                                            id="roomStandards"
                                                        >
                                                            <option value="Superior">Superior</option>
                                                            <option value="Deluxe">Deluxe</option>
                                                            <option value="Suite">Suite</option>
                                                            <option value="Presidential">President</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="form-label col-sm-3">
                                                        Other Utilities
                                                    </label>
                                                    <div className="col-sm-9">
                                                        {
                                                            otherUtilities.map((otherUtility, index) => (
                                                                <div className="form-check form-check-inline"
                                                                     key={index}>
                                                                    <Field className="form-check-input" type="checkbox"
                                                                           name="otherUtilities"
                                                                           id={`otherUtilities${index}`}
                                                                           value={otherUtility}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor={`otherUtilities${index}`}>{otherUtility}</label>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="numberFloor" className="form-label col-sm-3">
                                                        Number floor
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            type="number"
                                                            id="numberFloor"
                                                            name="numberFloor"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage name="numberFloor" component="div"
                                                                      className="mt-2 form-text text-danger"
                                                        ></ErrorMessage>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3">
                                            Accompanied Service
                                        </label>
                                        <div className="col-sm-9">
                                            {
                                                accompaniedServices.map((accompaniedService, index) => (
                                                    <div className="form-check form-check-inline"
                                                         key={JSON.parse(accompaniedService).id}>
                                                        <Field className="form-check-input" type="checkbox"
                                                               name="accompaniedServices"
                                                               value={accompaniedService}
                                                               checked={
                                                                   checkAccompaniedService(accompaniedService, facility.accompaniedServices)
                                                               }
                                                               id={`accompaniedService${index}`}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor={`accompaniedService${index}`}>{JSON.parse(accompaniedService).name}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="pathImage" className="form-label col-sm-3">
                                            Path Image
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="pathImage" name="pathImage"
                                                   className="form-control"/>
                                            <ErrorMessage name="pathImage" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
                                            <NavLink
                                                to="/facilities"
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