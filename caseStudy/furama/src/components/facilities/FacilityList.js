import {useEffect, useState} from "react";
import * as facilityService from "../../services/facilityService"
import {NavLink} from "react-router-dom";
import {ModalDeleteFacility} from "./ModalDeleteFacility";

export function FacilityList() {
    const [facilities, setFacilities] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [nameSearch, setNameSearch] = useState("");

    useEffect(() => {
        getAll();
        console.log(getAll())
        console.log(nameSearch)
    }, [nameSearch])


    const getAll = async () => {
        let data = await facilityService.getAllFacility(nameSearch);
        setFacilities(data);
    }

    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    return (
        <>
            <div className="container body">
                <div className="d-flex pt-3 mb-3">
                    <NavLink
                        to="/facilities/create"
                        className="btn btn-sm btn-primary rounded-0 me-3"
                    >
                       Thêm mới
                    </NavLink>
                    <input className="form-control-sm rounded-0 border-1 w-25" placeholder="Tìm tên ..."
                           name="nameSearch"
                           onChange={(event) => setNameSearch(event.target.value)}
                    />

                </div>
                <div className="row">
                    {
                        facilities.map((facility)=>(
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={facility.id}>
                                <div className="card rounded-0">
                                    <img src={facility.pathImage} className="card-images-top rounded-0" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text fw-bold m-0">{facility.name}</p>
                                        <div className="navbar p-0">
                                            <div>Room area: {facility.area} m<sup>2</sup></div>
                                            <div>
                                                <NavLink to={`/facilities/update/${facility.id}`}
                                                         className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                                <button className="btn btn-sm btn-outline-danger rounded-0"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteFacility"
                                                        onClick={() => showModal(facility.id, facility.name)}
                                                >Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <ModalDeleteFacility
                setFacilities={setFacilities}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
        </>
    )
}