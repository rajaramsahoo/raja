import { useState } from "react"

function Search(props){
    const[userName, setUserName]= useState('');

    function onChangeHandler(e){
        setUserName(e.target.value)
    }
    function onSumbitHandler(e){
        e.preventDefault();
        props.SearchUser(userName);

    }

    return(
        <>
        <h1>Github search</h1>
        <form>
            <input type="text" placeholder="Enter username to search" onChange={onChangeHandler}/>
            <button onClick={onSumbitHandler}>Search</button>
            <button onClick={props.clearUser}>Clear</button>
        </form>

        </>
    )
}
export default Search