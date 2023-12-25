import {useEffect, useState} from "react";
import * as customerService from "../../service/customerService";
import * as customerTypeService from "../../service/customerTypeService";
import {Link, NavLink} from "react-router-dom";
import {CustomerDelete} from "./CustomerDelete";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [customerTypeName, setCustomerTypeName] = useState("");
    const [customerTypes, setCustomerTypes] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllCustomerType();
    }, [])
    useEffect(() => {
        getAll();
    }, [nameSearch, customerTypeName, page])


    const getAll = async () => {
        const res = await customerService.getAllCustomer(page, nameSearch, customerTypeName);
        console.log(res.headers["x-total-count"]);
        const totalP = totalPageArray(Math.ceil(res.headers["x-total-count"] / 10));
        setTotalPage(totalP);
        setCustomers(res.data);
    }
    const getAllCustomerType = async () => {
        const data = await customerTypeService.getAllCustomerType();
        setCustomerTypes(data);
    }

    const totalPageArray = (totalP) => {
        const arr = [];
        for (let i = 0; i < totalP; i++) {
            arr[i] = i + 1;
        }
        return arr;
    }

    const handleSearchCustomerName = (event) => {
        setNameSearch(event);
        setPage(0);
    }
    const handleSearchCustomerType = (event) => {
        setCustomerTypeName(event);
        setPage(0);
    }

    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    if (!customers || !customerTypes) {
        return null;
    }

    return (
        <>
            <div className="body">
                <h2 className="text-center mt-1 mb-0 fw-bold">Danh Sách Khách Hàng</h2>
                <div className="container shadow pb-1">
                    <div className="d-flex pt-3 mb-1 ">
                        <NavLink
                            to="/customers/create"
                            className="btn btn-sm btn-primary rounded-3"
                        >
                            Thêm mới khách hàng
                        </NavLink>
                        <input className="form-control-sm rounded-3 border-1 w-25 ms-3 me-3 " placeholder="Nhập tên..."
                               name="nameSearch"
                               onChange={(event) => handleSearchCustomerName(event.target.value)}/>

                        <select
                            className="form-select-sm border-1 rounded-3 "
                            aria-label="Default select example"
                            name="customerTypeId"
                            onChange={(event) => handleSearchCustomerType(event.target.value)}
                        >
                            <option value="">Loại khách hàng</option>
                            {
                                customerTypes.map(c => (
                                    <option
                                        key={c.id}
                                        value={c.name}
                                    >{c.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div id="fix-tbody">
                        <table className="table table-hover border mb-0">
                            <thead className="table-primary">
                            <tr>
                                <th scope="col" className="">#</th>
                                <th scope="col" className="">Tên</th>
                                <th scope="col" className="">Ngày Sinh</th>
                                <th scope="col" className="">Giới Tính</th>
                                <th scope="col" className="">Loại Khách</th>
                                <th colSpan="2" scope="col" className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customers.length !== 0 ?
                                    customers.map((customer, index) => (
                                        <tr key={customer.id}>
                                            <td>{index + 1}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.dateOfBirth}</td>
                                            <td>{customer.gender ? "Nam" : "Nữ"}</td>
                                            <td>{customer.customerType.name}</td>
                                            <td className="text-center">
                                                <NavLink
                                                    to={`/customers/update/${customer.id}`}
                                                    className="btn btn-sm btn-outline-primary me-4 rounded-3">Sửa</NavLink>
                                                <button className="btn btn-sm btn-outline-danger rounded-3"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#staticBackdrop"
                                                        onClick={() => showModal(customer.id, customer.name)}
                                                >Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan="7" className="text-danger text-center">
                                            Không có khách hàng
                                            {
                                                nameSearch !== "" && <span> tên: <b>{nameSearch}</b></span>
                                            }
                                            {
                                                nameSearch !== "" && customerTypeName !== "" && <span> và </span>
                                            }
                                            {
                                                customerTypeName !== "" &&
                                                <span> loại khách: <b>{customerTypeName}</b></span>
                                            }
                                        </td>
                                    </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page <= 1 ? "disabled" : ""}`}
                                            aria-label="Previous" onClick={() => setPage(1)}>
                                        <small aria-hidden="true">&lt;&lt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page <= 1 ? "disabled" : ""}`}
                                            onClick={() => setPage(page - 1)} aria-label="Previous">
                                        <span aria-hidden="true">&lt;</span>
                                    </button>
                                </li>
                                {
                                    totalPage.map((item) => {
                                        return (
                                            <li className="page-item" key={item}>
                                                <button className={`page-link ${page === item ? "active" : ""}`}
                                                        id="page-number"
                                                        onClick={() => setPage(item)}>{item}</button>
                                            </li>
                                        )
                                    })
                                }

                                <li className="page-item">
                                    <button
                                        className={`page-link rounded-0 ${page >= totalPage[totalPage.length - 1] || totalPage.length === 0 ? "disabled" : ""}`}
                                        onClick={() => setPage(page + 1)} aria-label="Next">
                                        <small aria-hidden="true">&gt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button
                                        className={`page-link rounded-0 ${page >= totalPage[totalPage.length - 1] || totalPage.length === 0 ? "disabled" : ""}`}
                                        onClick={() => setPage(totalPage[totalPage.length - 1])} aria-label="Next">
                                        <small aria-hidden="true">&gt;&gt;</small>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <CustomerDelete
                setCustomers={setCustomers}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
        </>
    )
}