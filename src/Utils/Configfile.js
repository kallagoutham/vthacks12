const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
};
const config1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
};

const apiUrl = process.env.REACT_APP_API_URL ?? "http://localhost:5000/api";

var configObj = {
  config,
  config1,
  apiUrl,
};
export default configObj;
