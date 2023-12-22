import logo from './logo.svg';
import './App.css';
import Addition from './Components/Addition';
import { Route, Routes } from 'react-router-dom';
const raja = (()=>
  
    <h1>hey </h1>
  )
  const biodata = {
    name : "rajaram",
    age :  "25"
  }

function App() {
  
  return (
    <>
        <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/javascript" element={<h1>javascript</h1>} />
      <Route path="/react" element={<h1>react</h1>} />
      <Route path="/raja" Component={raja} />
      <Route path="/biodata" element={<h1>{biodata.age}</h1>} />
      {/* <Route path="/Addition" element={<Addition a={5} b={6}/> } /> */}
      <Route path="/Addition" element={<Addition a={50} b={600}/> } />


    </Routes>
    <Addition a={5} b={2}/>

    </>
  );
}

export default App;
