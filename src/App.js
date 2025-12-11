
import { useState } from 'react';
import './Appa.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';
import{ BrowserRouter as Router , Routes, Route } from "react-router-dom";
 //import { Routes, Route, Router } from 'react-router-dom';


function App() {
  const [mode , setMode] = useState('light');  // Whether dark mode enable or not

  const [alert , setAlert] = useState(null); 

  const showAlert= (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }



   const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#09182d';
      showAlert("Dark mode has been enable" ,"success :");
     // document.title= "TextUtils - Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable ", "success :");
      //document.title= "TextUtils - Light mode";
    }
   }
  return (
    <>
   <Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-2">
  
  <Routes>
    <Route path ="/" element={<Textform showAlert={showAlert} heading="Try Textutils - Word counter , Character Counter , Remove Extra Spaces" mode={mode} />}
    />
    <Route 
            path="/about" element={<About mode={mode}/>} 
          />
        
  </Routes>
  {/*<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />*/}
  
  </div>
  </Router>
  
 
   
 {/*<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
 <About/>*/}
  
     
    </>
     
      
    
  );
}

export default App;
