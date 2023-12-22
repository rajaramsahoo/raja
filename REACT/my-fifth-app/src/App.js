import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect , useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const[users, setUsers] = useState([])
  
  function getAPI(){
    const url = "https://api.github.com/users";
    axios.get(url)
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAPI();
  },[])
  return (
    <>
    
   <h1>hey Raja</h1>
    {users.map((user)=>{
      return(
        <>
         <h3>{user.login}</h3>
        <a href={user.html_url} target='_blanck'> profile</a>
        </>
      )
    })}
    </>
  );
}

export default App;
