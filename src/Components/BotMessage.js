import { FaRobot } from "react-icons/fa"; // You can use any bot icon or import a custom one.

const BotMessage = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#e0f7fa",
    borderRadius: "10px",
    marginBottom: "15px",
    maxWidth: "400px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }}>
    <FaRobot style={{ marginRight: "10px", color: "#29d8cd" }} />
    <span>👋 Let's start with some basic info.</span>
  </div>
);

export default BotMessage;
