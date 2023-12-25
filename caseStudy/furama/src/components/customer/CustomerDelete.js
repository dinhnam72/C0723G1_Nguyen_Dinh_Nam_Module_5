import * as customerService from "../../service/customerService"
import {toast} from "react-toastify";
export function CustomerDelete({idDelete,nameDelete, setCustomers}){
    const handleDelete = async () => {
        let status = await customerService.deleteCustomer(idDelete);
        if (status===200){
            toast.success(`Xóa ${nameDelete} thành công!`);
            setCustomers(await customerService.getAllCustomer(0,"",""));
        } else {
            toast.error(`Xóa ${nameDelete} thất bại!`);
        }
    }
    return(
        <>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 fw-bold text-bg-danger" id="staticBackdropLabel">
                                Xóa Khách Hàng
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc chắn muốn xóa khách hàng <span className="text-danger fw-bold">
                                {nameDelete}</span></p>
                            <p className="text-danger">
                                <span className="text-decoration-underline">Lưu ý:</span>
                                &nbsp; Bạn sẽ không thể hoàn tác điều này!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm rounded-3"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button type="button" className="btn btn-danger btn-sm rounded-3" data-bs-dismiss="modal"
                                    onClick={handleDelete}>
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}