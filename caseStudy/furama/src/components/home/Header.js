import {NavLink} from "react-router-dom";
import "./Header.css"
export function Header(){
    return(
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                                                  alt="Logo" width="63" height="90"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active-cus hover"
                                             aria-current="page">Trang Chủ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/facilities" className="nav-link hover">Dịch Vụ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/customers" className="nav-link hover">Khách Hàng</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contracts" className="nav-link hover">Hợp Đồng</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}