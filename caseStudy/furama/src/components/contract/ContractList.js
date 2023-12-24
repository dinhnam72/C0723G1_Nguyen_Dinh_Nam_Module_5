import {useEffect, useState} from "react";
import * as contractService from "../../service/contractService"
import {NavLink} from "react-router-dom";
export function ContractList() {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async ()=>{
        const data =await contractService.getAllContract();
        setContracts(data);
    }

    return (
        <>
            <div className="container">
                <NavLink
                    to="/contracts/create"
                    className="btn btn-sm btn-primary rounded-0 mt-3"
                >
                    Create contract
                </NavLink>
                <table className="table table-hover mt-3 shadow-lg">
                    <thead className="table-primary">
                    <tr>
                        <th>No.</th>
                        <th>Contract code</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Total Payment</th>
                        <th>Deposit</th>
                    </tr>
                    </thead>
                    <tbody className="table-light">
                    {
                        contracts.map((contrat, index)=>(
                            <tr key={contrat.id}>
                                <td>{index+1}</td>
                                <td>{contrat.contractCode}</td>
                                <td>{contrat.startDate}</td>
                                <td>{contrat.endDate}</td>
                                <td>{contrat.totalPayment}</td>
                                <td>{contrat.deposit}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}