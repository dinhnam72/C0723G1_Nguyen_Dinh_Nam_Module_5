import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {BookList} from "./components/BookList";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {CreateBook} from "./components/CreateBook";

function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<BookList/>}></Route>
     <Route path="/create" element={<CreateBook/>}></Route>
   </Routes>
       <ToastContainer/>
   </>
  );
}

export default App;
