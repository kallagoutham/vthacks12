import './App.css';
import Bot from './Components/Bot';
import Services from './Components/Services';
import BotSVG from './Components/BotSVG';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route,Routes } from "react-router-dom";
import apiObj from './Utils/apiCalls';
import { useEffect,useState } from 'react';
import './css/theme.css'; 

function App() {
  const [hello,setHello]=useState()
  useEffect(()=>{
    const hello = async()=>{
    const response = await apiObj.hello();
    setHello(response);
    }
    hello()
  },[]);
  return (
    <>
    {console.log(hello)}
    
    <Navbar/>
    <BotSVG/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
    <Route path="/bot" element={<Bot/>} />
    <Route path="/retake-survey" element={<BotSVG/>}/>
    </Routes>
    </>
  );
}

export default App;
