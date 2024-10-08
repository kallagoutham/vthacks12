import "./App.css";
import Bot from "./Components/Bot";
import Services from "./Components/Services";
import BotSVG from "./Components/BotSVG";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import { Route, Routes } from "react-router-dom";
import apiObj from "./Utils/apiCalls";
import { useEffect, useState } from "react";
import "./css/theme.css";
import CardPage from "./Components/CardPage";

function App() {
  // eslint-disable-next-line
  const [hello, setHello] = useState();
  useEffect(() => {
    const hello = async () => {
      const response = await apiObj.hello();
      setHello(response);
    };
    hello();
  }, []);
  return (
    <>
      {/* {console.log(hello)} */}
      <Navbar />
      <BotSVG />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/survey" element={<Bot />} />
        <Route path="/retake-survey" element={<BotSVG />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
