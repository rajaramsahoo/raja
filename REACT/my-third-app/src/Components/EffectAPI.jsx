import axios from "axios";
import { useEffect, useState } from "react"
function EffectAPI(){
    const [user, setUsers]=useState([])
    function hitapi(){
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
        .then((response)=>{
            setUsers(response.data)
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }
    useEffect(()=>{

        hitapi()
       
    },[])

    return(
       <>
       <h1>useEffect</h1>
       <h1>{user.map(ele=>{
        return (
            <>
            <p>name:{ele.name}</p>
            <p>username:{ele.username}</p>
            <h2>email:{ele.email}</h2>
            <hr/>
            </>
        )
       })}</h1>
       </>
    )
}
export default EffectAPI
