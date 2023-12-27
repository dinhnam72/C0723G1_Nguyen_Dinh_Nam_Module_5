import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import {Field, Formik} from "formik";
import {useNavigate} from "react-router-dom";


export function BookList(){
    const [books, setBooks] = useState([]);
    const [idDelete, setIdDelete] = useState("");
    const [nameDelete, setNameDelete] = useState("");
    const [searchName, setSearchName] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        getAllBook();
    }, [searchName]);


    const getAllBook= async ()=>{
        try {
            const res = await bookService.getAllBook(searchName);
            setBooks(res.data)
        }catch (e){
            navigate("/error");
        }


    }

    const showModal=(id,name)=>{
        setIdDelete(id);
        setNameDelete(name);
    }
    const handelDelete= async ()=>{
        try {
            const res =await bookService.deleteBook(idDelete);
            if (res.status===200){
                toast.success("Xoa thanh cong!")
            }else {
                toast.error("Xoa that bai")
            }
        }catch (e){
            navigate("/error");
        }

    }
    return(
        <>
            <div className="container">
                <h2 className="text-center fw-bold mt-3 mb-3">Danh Sach</h2>
               <NavLink to="/create" className="btn btn-success mb-3">Them moi sach</NavLink>

                <input name="searchname" className="w-25 form-control mb-3"
                 onChange={(event)=>{setSearchName(event.target.value)}}
                />
                <table className="table table-hover">
                    <thead className="table-primary">
                    <tr>
                        <th>Stt</th>
                        <th>Ten sach</th>
                        <th>The loai</th>
                        <th>So luong</th>
                        <th colSpan="2">Chuc nang</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.categories.type}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink to={`/update/${book.id}`} className="btn btn-warning">Sua</NavLink>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => showModal(book.id, book.title)}
                                >
                                    Xoa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xoa sach</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Ban co chac muon xoa <span className="text-danger">{nameDelete}</span> ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huy</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={handelDelete}
                            >Xac nhan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}