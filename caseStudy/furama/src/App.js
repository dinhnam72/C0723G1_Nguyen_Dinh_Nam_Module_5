import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/home/Header";
import {Footer} from "./components/home/Footer";
import {FacilityList} from "./components/facilities/FacilityList";
import {FacilityCreate} from "./components/facilities/FacilityCreate";
import {FacilityUpdate} from "./components/facilities/FacilityUpdate";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/facilities" element={<FacilityList/>}></Route>
                <Route path="/facilities/create" element={<FacilityCreate/>}></Route>
                <Route path="/facilities/update/:id" element={<FacilityUpdate/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
