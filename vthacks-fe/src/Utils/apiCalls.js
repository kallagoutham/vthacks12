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
    const response = await axios.post(`${configObj.apiUrl}/api/generate_diet_plan/${username}`, { user_propmt: user_prompt }, {
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
    const response = await axios.post(`${configObj.apiUrl}/api/generate_workout_recommendation/${username}`, { user_propmt: user_prompt }, { ...configObj.config });
    res = response.data
  } catch (err) {
    console.log(err)
  }
  return res;
}

const getProfile = async (username) => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/api/profile/${username}`, {
      ...configObj.config,
      params: {},
    });
    res = response.data;
  } catch (err) {
    res = err;
  }
  return res;
};

const getTasks = async (username, date) => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/api/tasks/${username}/${date}`, {
      ...configObj.config,
      params: {},
    });
    res = response.data;
  } catch (err) {
    res = err;
  }
  return res;
};

const completeTask = async (username, date, taskName, taskDescription, taskPointsValue) => {
  var res;
  try {
    const response = await axios.get(`${configObj.apiUrl}/api/tasks/complete/${username}/${date}/${taskName}/${taskPointsValue}`, {
      ...configObj.config,
      params: {},
    });
    res = response.data;
  } catch (err) {
    res = err;
  }
  return res;
};

const updateDietandWorkOutPlan = async (username, prompt) => {
  var res;
  try {
    const response = await axios.post(`${configObj.apiUrl}/api/generate_diet_plan/${username}`, { user_propmt: prompt }, {
      ...configObj.config,
    });
    if (response.status === "success") {
      res = response.data
      try {
         // eslint-disable-next-line
        const response = await axios.post(`${configObj.apiUrl}/api/generate_workout_recommendation/${username}`, { user_propmt: prompt }, { ...configObj.config, });

      } catch (err) {
        console.log(err)
      }
      res = response.data;
      console.log(res)
      return res;
    }
  } catch (err) {
    console.log(err)
  }
  return res;
}

var apiObj = {
  hello,
  getProfile,
  createProfile,
  generateDietPlan,
  generateWorkOutPlan,
  getTasks,
  completeTask,
  updateDietandWorkOutPlan
};
export default apiObj;
