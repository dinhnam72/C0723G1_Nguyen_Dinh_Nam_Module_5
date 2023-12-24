import "./Footer.css";
import {NavLink} from "react-router-dom";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 footer-left">
                            <h5> Thể Loại </h5>
                            <span><NavLink to="/facilities">Dịch Vụ</NavLink></span>
                            <br/>
                            <span><NavLink to="/customers">Khách Hàng</NavLink></span>
                            <br/>
                            <span><NavLink to="/contracts">Hợp Đồng</NavLink></span>
                        </div>
                        <div className="col-sm-8 footer-right">
                            <h5>Liên Hệ </h5>
                            <span>Add: 103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</span>
                            <br/>
                            <span>ĐT: 84-236-3847 333/888 * Fax: 84-236-3847 666</span>
                            <br/>
                            <span>Email: <a className="link"
                                            href="mailto:reservation@furamavietnam.com">reservation@furamavietnam.com</a>
                * <a className="link" href="https://www.furamavietnam.com/undefined/">www.furamavietnam.com</a></span>
                            <br/>
                            <span>GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,</span>
                            <br/>
                            <span> Sabre-GD 032771, Worldspan- GD DADFU</span>
                            <br/>
                            <br/>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom"><span>&copy; 2023 Furama Resort Danang</span></div>
            </div>
        </>
    )
}