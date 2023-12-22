function CountVar(){
    let count =0;
    function incriment(){
        count = count+1;
        console.log(count);

    }
    
    return(
        <>
        <h1>count with normal variable</h1>
        <h1>count:{count}</h1>;
        <button onClick={incriment}>Increase the count </button>
        </>
    )
}
export default CountVar