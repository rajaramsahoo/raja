import { useState } from "react";
import '../App.css';
function CountSates() {
    const [counter, setCount] = useState(0)
    function increment() {
        setCount(counter + 1)
        console.log(counter);

    }

    return (
        <>
            <h1 style={{ color: "Blue" }}>Add css</h1>
            <h1 className="asd">count with states</h1>
            <h1 >count:{counter}</h1>;
            <button onClick={increment}>Increase </button>
        </>
    )
}
export default CountSates