import './App.css';
import Bot from './Components/Bot';
import BotSVG from './Components/BotSVG';
import Navbar from './Components/Navbar';
import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar/>
    <BotSVG/>
    <Routes>
    <Route path="/bot" element={<Bot/>} />
    <Route path="/retake-survey" element={<BotSVG/>}/>
    </Routes>
    </>
  );
}

export default App;
