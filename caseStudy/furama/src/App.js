import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/home/Header";
import {Footer} from "./components/home/Footer";
import {FacilityList} from "./components/facilities/FacilityList";
import {FacilityCreate} from "./components/facilities/FacilityCreate";
import {FacilityUpdate} from "./components/facilities/FacilityUpdate";
import {CustomerList} from "./components/customer/CustomerList";
import "react-toastify/dist/ReactToastify.min.css";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<FacilityList/>}></Route>
                    <Route path="/facilities" element={<FacilityList/>}></Route>
                    <Route path="/facilities/create" element={<FacilityCreate/>}></Route>
                    <Route path="/facilities/update/:id" element={<FacilityUpdate/>}></Route>
                    <Route path="/customers" element={<CustomerList/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <ToastContainer/>
        </>

    );
}

export default App;
