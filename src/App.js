import './App.css';
import Bot from './Bot';
import BotSVG from './BotSVG';
import Navbar from './Navbar';
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
