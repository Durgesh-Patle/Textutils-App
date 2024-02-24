// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('dark') // whether dark mode is enable or not 

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze Below" />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
