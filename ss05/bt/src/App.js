import logo from './logo.svg';
import './App.css';
import FormContact from "./components/form-contact/FromContact";
import FromMedical from "./components/from-medical/FromMedicalDeclaration";
import React from "react";
import {ToastContainer} from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
   // <FormContact/>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<FromMedical/>}/>
          </Routes>
          <ToastContainer/>
        </>
      </Router>

  );
}

export default App;
