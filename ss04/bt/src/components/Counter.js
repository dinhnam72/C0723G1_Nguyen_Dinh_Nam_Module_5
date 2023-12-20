import {useState} from "react";
function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const increaseByOne =() =>{
        setCount1(prevCount=>prevCount+1)
    }
    const increaseByTwo =() =>{
        setCount2(prevCount=>prevCount+2)
    }
    return (
        <div>
            <h1>Counter: {count1}</h1>
            <button onClick={increaseByOne}>Add 1</button>
            <h1>Counter: {count2}</h1>
            <button onClick={increaseByTwo}>Add 2</button>
        </div>
    );

}
export default Counter;