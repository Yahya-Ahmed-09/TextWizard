
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React, {useState} from 'react'; 
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ='#30363B'
      document.body.style.color='white'
      showAlert("Dark mode is enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor ='white'
      document.body.style.color='black'
      showAlert("Light mode is enabled", "success")
    }
  }

  return (
    <>
    
  <Router>
  <Navbar title="Yahya" toggleMode ={toggleMode} mode={mode}/>
    <Alert alert={alert} />
    <Routes>
      <Route exact path='/' element={<Main heading= "Enter Some Text Below" mode={mode} showAlert={showAlert}/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    
    
  </Router>
    
    </>
  );
}

export default App;
