import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textarea from './Textarea';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Alert from './Alert';

function App() {


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(
        setAlert(null)
    , 1500);
}

  let heading = "Text Utility to perform some awsome things"
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>
  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textarea showAlert={showAlert} mode = {mode}  heading={heading} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
