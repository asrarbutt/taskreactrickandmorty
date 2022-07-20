import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from "./CharacterCard";

function App() {
    const [cName, setCname]=useState<string>("");
  return (
    <div className="App">
      <header className="App-header">




          <input placeholder={"Enter the Characters name"} onChange={e=>{

              setCname(e.target.value);

          }}/>
        <CharacterCard name={cName}/>
      </header>
    </div>
  );
}

export default App;
