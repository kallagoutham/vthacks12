import axios  from "axios";
import configObj from "./Configfile";

const hello = async () => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/`, {
      ...configObj.config,
    });
    res = response.data;
  } catch (err) {
    res = err;
  }
  return res;
};

const getProfile = async (email) => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/profile`, {
      ...configObj.config,
      params: { email: email },
    });
    res = response.data;
  } catch (err) {
    res = err;
  }
  return res;
};

var apiObj = {
  hello,
  getProfile,
};
export default apiObj;
