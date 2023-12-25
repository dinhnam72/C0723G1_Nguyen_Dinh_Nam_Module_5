import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TodoList} from "./components/TodoList";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}></Route>
      </Routes>
    </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
