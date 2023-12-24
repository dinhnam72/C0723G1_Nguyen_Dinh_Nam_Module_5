export function CustomerList(){
    return (
        <>
            <div className="body">
                <div className="container shadow pb-1">
                    <div className="d-flex pt-3 mb-3 ">
                        <NavLink
                            to="/customers/create"
                            className="btn btn-sm btn-primary rounded-0"
                        >
                            Create customer
                        </NavLink>
                        <input className="form-control-sm rounded-0 border-1 w-25 ms-3" placeholder="Search name..."
                               name="nameSearch"
                               onChange={(event) => handleSearchCustomerName(event.target.value)}/>

                        <select
                            className="form-select-sm border-1 rounded-0"
                            aria-label="Default select example"
                            name="customerTypeId"
                            onChange={(event)=> handleSearchCustomerType(event.target.value)}
                        >
                            <option value="">All customer type</option>
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
                                <th scope="col" className="">Name</th>
                                <th scope="col" className="">Date of birth</th>
                                <th scope="col" className="">Gender</th>
                                <th scope="col" className="">Address</th>
                                <th scope="col" className="">Customer type</th>
                                <th scope="col" className="text-center">Action</th>
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
                                            <td>{customer.address}</td>
                                            <td>{customer.customerType.name}</td>
                                            <td className="text-center">
                                                <NavLink
                                                    to={`/customers/update/${customer.id}`}
                                                    className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                                <button className="btn btn-sm btn-outline-danger rounded-0"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#staticBackdrop"
                                                        onClick={() => showModal(customer.id, customer.name)}
                                                >Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan="7" className="text-danger text-center">
                                            Not found customer
                                            {
                                                nameSearch !== "" && <span> named: <b>{nameSearch}</b></span>
                                            }
                                            {
                                                nameSearch !== "" && customerTypeName !== "" && <span> and </span>
                                            }
                                            {
                                                customerTypeName !== "" &&
                                                <span> type: <b>{customerTypeName}</b></span>
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
                                    <button className={`page-link rounded-0 ${page<=1?"disabled":""}`}
                                            aria-label="Previous" onClick={()=>setPage(1)}>
                                        <small aria-hidden="true">&lt;&lt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page<=1?"disabled":""}`}
                                            onClick={()=>setPage(page-1)}  aria-label="Previous">
                                        <span aria-hidden="true">&lt;</span>
                                    </button>
                                </li>
                                {
                                    totalPage.map((item) =>{
                                        return(
                                            <li className="page-item" key={item}>
                                                <button className={`page-link ${page===item?"active":""}`} id="page-number"
                                                        onClick={()=>setPage(item)}>{item}</button>
                                            </li>
                                        )
                                    })
                                }

                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page>=totalPage[totalPage.length-1]||totalPage.length===0?"disabled":""}`}
                                            onClick={()=>setPage(page+1)} aria-label="Next">
                                        <small aria-hidden="true">&gt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page>=totalPage[totalPage.length-1]||totalPage.length===0?"disabled":""}`}
                                            onClick={()=> setPage(totalPage[totalPage.length-1])} aria-label="Next">
                                        <small aria-hidden="true">&gt;&gt;</small>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <ModalDeleteCustomer
                setCustomers={setCustomers}
                idDelete={idDelete}
                nameDelete={nameDelete}
            />
        </>
    )
}