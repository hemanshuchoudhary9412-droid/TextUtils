import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/about';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light') //weather dark mode is enable or not
  const[alert,setAlert] = useState(null);

const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
}

  const toogleMode = ()=>{
    if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
  }

  return (
    <>
{/* <Router> */}
        <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact  path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse below:" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter text to analyse below:" mode={mode} />
          {/* </Routes> */}
        </div>
{/* // </Router> */}
    </>
  );
}

export default App;
