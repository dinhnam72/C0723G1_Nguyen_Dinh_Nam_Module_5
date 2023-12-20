import "./Student.css";
import {useState} from "react";

function StudentInfoComponents({studentList}) {
    const [student, setStudent] = useState(studentList);
    return (
        <>
            <h1>Student List</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {student.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default StudentInfoComponents;