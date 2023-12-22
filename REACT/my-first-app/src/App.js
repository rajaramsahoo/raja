import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer5 from './Components/Footer'
import Greeting from './Greeting'
import Addition from './Components/Addition';
import Fruits from './Components/Fruits';



function App() {
  let fruits = ["Apple", "Mango","Kiwi", "Sita phala", "Jambu"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>welcome to react baby</p>
        <h1>for math opertion use flowerbracket = {5+5}=5+5</h1>
        <Header/>
        <Content />
        <Footer5  />
        <Greeting name1="raja"  name2="jinu"/>
        <Addition a={12} b={25}/>
        <Addition a={12} b={5}/>
        <Addition a="123" b={25}/>
        <Fruits f={fruits}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
