import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import User from './Components/User';

function App() {
  const [users, setUsers] = useState([])
  function getApi() {
    const url = "https://api.github.com/users";
    axios.get(url)
      .then((res) => {
        // console.log(res.data)
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  useEffect(() => {
    getApi()
  }, [])

  async function SearchUser(userName){
    try{
      const url = `https://api.github.com/search/users?q=${userName}`

      let res = await axios.get(url)
      console.log(res.data)
      setUsers(res.data.items)

    }
    catch(err){
      console.log(err)
    }
  }
  function clearUser(e){
    e.preventDefault();
    setUsers([])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home users={users} SearchUser={SearchUser} clearUser={clearUser}/>} />
        <Route path="/raja" element={<h1>jay jagannath</h1>} />
        <Route path="/jinu" element={<h1>kia dela udai HIMANSU ra suna chdhei</h1>} />
        <Route path='/user/:uname' element={<User />}/>
      </Routes>
    </>
  );
}

export default App;
