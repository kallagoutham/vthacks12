import React, { useState } from "react";
import { withRequiredAuthInfo } from "@propelauth/react";
import apiObj from "../Utils/apiCalls";
import "../css/Bot.css";
import CircularProgress from "@mui/material/CircularProgress";

const Bot = withRequiredAuthInfo(({ userClass }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [answers, setAnswers] = useState({
    user_name: userClass.username,
    email: userClass.email,
    // mobile: userClass.phone_number,
    address: "",
    country: "",
    gender: "",
    age: "",
    religion: "",
    sex: "",
    occupation: "",
    height: "",
    weight: "",
    medical_condition: "",
    mental_health: "",
    physical_activity_level: "",
    habits: "",
    time_comitment: "",
    preferred_food: "",
    preferred_cusine: "",
    preferred_exercise: "",
    ideal_weight: "",
    ideal_fitness_level: "",
    diet_plan: {},
    workout_plan: {},
  });

  const validate = () => {
    let tempErrors = {};

    // if (step === 1 && !answers.user_name)
    //   tempErrors.user_name = "User name is required";
    // if (step === 1 && !answers.email) tempErrors.email = "Email is required";
    // if (step === 1 && !answers.mobile)
    //   tempErrors.mobile = "Mobile number is required";
    // if (step === 1 && !answers.address)
    //   tempErrors.address = "Address is required";
    if (step === 1 && !answers.country)
      tempErrors.country = "Country is required";
    if (step === 2 && !answers.gender) tempErrors.gender = "Gender is required";
    if (step === 2 && !answers.age) tempErrors.age = "Age is required";
    if (step === 3 && !answers.religion)
      tempErrors.religion = "Religion is required";
    if (step === 3 && !answers.sex)
      tempErrors.sex = "Sexual Identity is required";
    if (step === 3 && !answers.occupation)
      tempErrors.occupation = "Type of occupation is required";
    if (step === 4 && !answers.height) tempErrors.height = "Height is required";
    if (step === 4 && !answers.weight) tempErrors.weight = "Weight is required";
    if (step === 4 && !answers.medical_condition)
      tempErrors.medical_condition = "Medical condition is required";
    // if (step === 5 && !answers.mentalHealth)
    //   tempErrors.mentalHealth = "Mental health information is required";
    if (step === 5 && !answers.physical_activity_level)
      tempErrors.physical_activity_level =
        "Physical activity level is required";
    if (step === 6 && !answers.habits)
      tempErrors.habits = "Habits information is required";
    if (step === 6 && !answers.time_comitment)
      tempErrors.time_comitment = "Time commitment is required";
    if (step === 7 && !answers.preferred_food)
      tempErrors.preferred_food = "Preferred food is required";
    if (step === 7 && !answers.preferred_cusine)
      tempErrors.preferredCuisine = "Preferred cuisine is required";
    if (step === 8 && !answers.preferred_exercise)
      tempErrors.preferred_exercise = "Preferred exercise is required";
    if (step === 8 && !answers.ideal_weight)
      tempErrors.ideal_weight = "Ideal weight is required";
    if (step === 8 && !answers.ideal_fitness_level)
      tempErrors.ideal_fitness_level = "Fitness level is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFinish = async () => {
    setLoading(true);
    setStep(step + 1);
    var response;
    try {
      response = await apiObj.createProfile(answers);
    } catch (error) {
      console.error("Error creating profile:", error);
    }
    if (response.message === "added user successfully") {
      try {
        response = await apiObj.generateDietPlan(answers, null);
      } catch (err) {
        console.log("error while generating diet plan");
      }
      if (response.status === "success") {
        try {
          response = await apiObj.generateWorkOutPlan(answers, null);
        } catch (err) {
          console.log("error while generating diet plan");
        }
        if (response.status === "success") {
          console.log("Diet Plan and WorkOut Plan generated successfully...");
        }
      }
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  return (
    <div className="bot-container">
      {loading && <CircularProgress />}
      <div className="bot-message">
        {step === 1 && (
          <div>
            <p>
              👋 Hello {userClass.firstName}, Let's Start your BetterYou
              Journey!!
            </p>
            {/* <label>
              User Name *{" "}
              <input
                type="text"
                name="user_name"
                value={answers.user_name}
                onChange={handleInputChange}
              />
              {errors.user_name && (
                <span className="error">{errors.user_name}</span>
              )}
            </label> */}
            {/* <label>
              Email *{" "}
              <input
                type="email"
                name="email"
                value={answers.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label> */}
            {/* <label>
              Mobile *{" "}
              <input
                type="text"
                name="mobile"
                value={answers.mobile}
                onChange={handleInputChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </label> */}
            <label>
              Address{" "}
              <input
                type="text"
                name="address"
                placeholder="ex: 700 Health Sciences Drive"
                value={answers.address}
                onChange={handleInputChange}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </label>
            <label>
              Country *{" "}
              <input
                type="text"
                name="country"
                placeholder="ex: USA"
                value={answers.country}
                onChange={handleInputChange}
              />
              {errors.country && (
                <span className="error">{errors.country}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p>Tell me more about you.</p>
            <label>
              Gender *{" "}
              <select
                name="gender"
                value={answers.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </label>
            <label>
              Age *{" "}
              <input
                type="number"
                name="age"
                value={answers.age}
                onChange={handleInputChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <p>Tell me more about your background.</p>
            <label>
              Religion *{" "}
              <select
                name="religion"
                value={answers.religion}
                onChange={handleInputChange}
              >
                <option value="">Select Religion</option>
                {/* Add more religion options here */}
                <option value="christianity">Christianity</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="buddhism">Buddhism</option>
                <option value="other">Other</option>
              </select>
              {errors.religion && (
                <span className="error">{errors.religion}</span>
              )}
            </label>
            <label>
              Sexual Identity *{" "}
              <select
                name="sex"
                value={answers.sex}
                onChange={handleInputChange}
              >
                <option value="">Select Sexual Identity</option>
                <option value="heterosexual">Heterosexual</option>
                <option value="homosexual">Homosexual</option>
                <option value="bisexual">Bisexual</option>
                <option value="other">Other</option>
              </select>
              {errors.sex && <span className="error">{errors.sex}</span>}
            </label>
            <label>
              Type of Occupation*{" "}
              <select
                name="occupation"
                value={answers.occupation}
                onChange={handleInputChange}
              >
                <option value="">Select Occupation</option>
                <option value="physical">Involves Physical Work</option>
                <option value="rigorous">Rigorous Physical Work</option>
                <option value="dailyLabour">Daily Labour</option>
                <option value="noRigorous">No Rigorous Work</option>
                <option value="deskJob">Desk Job</option>
                <option value="lightWalking">Light Walking</option>
              </select>
              {errors.occupation && (
                <span className="error">{errors.occupation}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <p>Medical Details</p>
            <label>
              Height*(in cms){" "}
              <input
                type="number"
                name="height"
                value={answers.height}
                onChange={handleInputChange}
              />
              {errors.height && <span className="error">{errors.height}</span>}
            </label>
            <label>
              Weight*(in lbs){" "}
              <input
                type="number"
                name="weight"
                value={answers.weight}
                onChange={handleInputChange}
              />
              {errors.weight && <span className="error">{errors.weight}</span>}
            </label>
            <label>
              Medical Condition*{" "}
              <input
                type="text"
                placeholder="ex: I am a diabetic patient since last 3 years and use medication..."
                name="medical_condition"
                value={answers.medical_condition}
                onChange={handleInputChange}
              />
              {errors.medical_condition && (
                <span className="error">{errors.medical_condition}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 5 && (
          <div>
            <p>Physical Fitness</p>
            {/* <label>
              Mental Health *{" "}
              <input
                type="text"
                name="mentalHealth"
                value={answers.mentalHealth}
                onChange={handleInputChange}
              />
              {errors.mentalHealth && (
                <span className="error">{errors.mentalHealth}</span>
              )}
            </label> */}
            <label>
              {/* Daily Physical Activity level*{" "} */}
              <select
                name="physical_activity_level"
                value={answers.physical_activity_level}
                onChange={handleInputChange}
              >
                <option value="">Select Level</option>
                <option value="sedentary">Sedentary</option>
                <option value="light">Lightly active</option>
                <option value="moderate">Moderately active</option>
                <option value="intense">Intensely active</option>
              </select>
              {errors.physical_activity_level && (
                <span className="error">{errors.physical_activity_level}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 6 && (
          <div>
            <p>Habits and Time Commitment</p>
            <label>
              Habits*{" "}
              <input
                type="text"
                name="habits"
                placeholder="ex: I smoke often and also a social drinker..."
                value={answers.habits}
                onChange={handleInputChange}
              />
              {errors.habits && <span className="error">{errors.habits}</span>}
            </label>
            <label>
              Time Commitment* (in hrs){" "}
              <input
                type="number"
                name="time_comitment"
                value={answers.time_comitment}
                onChange={handleInputChange}
              />
              {errors.time_comitment && (
                <span className="error">{errors.time_comitment}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 7 && (
          <div>
            <p>Food Preferences</p>
            <label>
              Preferred Food *{" "}
              <input
                type="text"
                name="preferred_food"
                placeholder="ex: Non Vegetarian excluding pork.."
                value={answers.preferred_food}
                onChange={handleInputChange}
              />
              {errors.preferred_food && (
                <span className="error">{errors.preferred_food}</span>
              )}
            </label>
            <label>
              Preferred Cuisine *{" "}
              <input
                type="text"
                name="preferred_cusine"
                placeholder="ex: Thai and Chineese..."
                value={answers.preferred_cusine}
                onChange={handleInputChange}
              />
              {errors.preferred_cusine && (
                <span className="error">{errors.preferred_cusine}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 8 && (
          <div>
            <p>Fitness Goals</p>
            <label>
              Preferred Exercise *{" "}
              <input
                type="text"
                name="preferredExercise"
                placeholder="ex: I prefer to do chest exercises..."
                value={answers.preferredExercise}
                onChange={handleInputChange}
              />
              {errors.preferredExercise && (
                <span className="error">{errors.preferredExercise}</span>
              )}
            </label>
            <label>
              Desired Weight*{" "}
              <input
                type="number"
                name="ideal_weight"
                value={answers.ideal_weight}
                onChange={handleInputChange}
              />
              {errors.ideal_weight && (
                <span className="error">{errors.ideal_weight}</span>
              )}
            </label>
            <label>
              Desired Fitness Level*{" "}
              <input
                name="ideal_fitness_level"
                value={answers.ideal_fitness_level}
                onChange={handleInputChange}
                placeholder="ex: I want to participate in marathon after 45 days...."
              ></input>
              {errors.ideal_fitness_level && (
                <span className="error">{errors.ideal_fitness_level}</span>
              )}
            </label>
            <button onClick={handleFinish}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Bot;
