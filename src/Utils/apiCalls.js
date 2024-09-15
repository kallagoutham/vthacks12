import axios from "axios";
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

const createProfile = async (userProfile) => {
  var res;
  try {
    const response = await axios.post(`${configObj.apiUrl}/api/profile`, userProfile);
    res = response.data
  } catch (err) {
    console.log(err)
  }
  return res;
}

const generateDietPlan = async (username, user_prompt = null) => {
  var res;
  try {
    const response = await axios.post(`${configObj.apiUrl}/api/generate_diet_plan/${username}`,{user_propmt: user_prompt}, {
      ...configObj.config,
    });
    res = response.data
  } catch (err) {
    console.log(err)
  }
  return res;
}

const generateWorkOutPlan = async (username, user_prompt = null) => {
  var res;
  try {
    console.log(username)
    const response = await axios.post(`${configObj.apiUrl}/api/generate_workout_recommendation/${username}`, {user_propmt: user_prompt}, { ...configObj.config });
    res = response.data
  } catch (err) {
    console.log(err)
  }
  return res;
}

const getProfile = async (email) => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/api/profile`, {
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
  createProfile,
  generateDietPlan,
  generateWorkOutPlan,
};
export default apiObj;
