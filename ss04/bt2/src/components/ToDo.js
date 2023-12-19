import {Component} from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTask: [
                {
                    id: 1,
                    task: "Đi học"
                },
                {
                    id: 2,
                    task: "Học lại"
                }
            ],
            item: {},
            keyCounter: 3
        };
    }

    handleChange = (event) => {
        this.setState({
            item: {
                id: this.state.keyCounter,
                task: event.target.value
            },
        });
    }
    handleAddItem = () => {
        if (this.state.item.task !=="" && this.state.item.task) {
            this.setState(
                {
                    ...this.state,
                    listTask: [...this.state.listTask, this.state.item],
                    keyCounter: this.state.keyCounter + 1
                })
        }else {
            alert("Vui lòng nhập công việc");
        }
    }

    render() {
        return <>
            <div className="container">
                <h2 className="mt-4">Todo List</h2>
                <div className="mb-4 mt-3">
                    <label htmlFor="toDo" className="form-label">Nhập tên công việc </label><br/>
                    <input type="text" className="form-control" id="toDo"
                           placeholder="Nhập công việc" onChange={this.handleChange}/>
                </div>
                <button className="btn btn-success" onClick={this.handleAddItem}>Thêm công việc</button>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Stt</th>
                        <th scope="col">Công việc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.listTask.map((job, index) => (
                        <tr key={job.id}>
                            <td>{index + 1}</td>
                            <td>{job.task}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    }
}

export default ToDo;