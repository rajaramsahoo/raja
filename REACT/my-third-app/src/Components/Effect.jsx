import { useEffect, useState } from "react";
function Effect(){
    let [counter ,setCounter] = useState(10)
    function HandleIncriment(){
        setCounter(counter + 1)
        console.log(counter)

    }
    useEffect(()=>{
        console.log("hay shree ram")
    },[counter])
    return(
        <>
        <h1>Increment</h1>
        <h1>count={counter}</h1>
        <button onClick={HandleIncriment}>Increment</button>
        </>
    )
}
export default Effect