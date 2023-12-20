import logo from './logo.svg';
import './App.css';
import StudentInfoComponents from "./components/StudentInfoComponent";

function App() {
  const studentList = [
    {
      id: 1,
      name: "Nguyễn La",
      age: 25,
      address: "Hà Nội"
    },
    {
      id: 2,
      name: "Trần Văn Bảy",
      age: 40,
      address: "Đà Nẵng"
    },
    {
      id: 3,
      name: "Bùi Thị Lài",
      age: 32,
      address: "Hồ Chí Minh"
    }
  ]
  return (
    <StudentInfoComponents studentList={studentList}/>
  );
}

export default App;
