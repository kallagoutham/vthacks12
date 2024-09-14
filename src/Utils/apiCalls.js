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

const createProfile = async ({userProfile})=>{
  var res;
  try{
    const response = await axios.post(`${configObj.apiUrl}/profile`,userProfile);
    res =response.data
  }catch(err){
    console.log(err)
  }
  return res;
}

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
  createProfile
};
export default apiObj;
