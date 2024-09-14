import React, { useState } from "react";
import { withRequiredAuthInfo } from "@propelauth/react";
import "../css/Bot.css";

const Bot = withRequiredAuthInfo(({ userClass }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [answers, setAnswers] = useState({
    gender: "",
    age: "",
    religion: "",
    sexualIdentity: "",
    occupation: "",
    height: "",
    weight: "",
    medicalCondition: "",
    smoking: "",
    alcohol: "",
    preferredFood: "",
    physicalActivity: "", // Added field
    idealWeight: "",
    fitnessLevel: "",
  });

  const validate = () => {
    let tempErrors = {};

    if (step === 1 && !answers.gender) tempErrors.gender = "Gender is required";
    if (step === 1 && !answers.age) tempErrors.age = "Age is required";
    if (step === 2 && !answers.religion)
      tempErrors.religion = "Religion is required";
    if (step === 2 && !answers.sexualIdentity)
      tempErrors.sexualIdentity = "Sexual Identity is required";
    if (step === 3 && !answers.height) tempErrors.height = "Height is required";
    if (step === 3 && !answers.weight) tempErrors.weight = "Weight is required";
    if (step === 3 && !answers.medicalCondition)
      tempErrors.medicalCondition = "Medical condition is required";
    if (step === 4 && !answers.smoking)
      tempErrors.smoking = "Smoking information is required";
    if (step === 4 && !answers.alcohol)
      tempErrors.alcohol = "Alcohol consumption information is required";
    if (step === 5 && !answers.preferredFood)
      tempErrors.preferredFood = "Preferred food is required";
    if (step === 5 && !answers.physicalActivity)
      tempErrors.physicalActivity = "Physical activity is required"; // Added validation
    if (step === 6 && !answers.idealWeight)
      tempErrors.idealWeight = "Ideal weight is required";
    if (step === 6 && !answers.fitnessLevel)
      tempErrors.fitnessLevel = "Fitness level is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFinish = () => {
    setStep(step + 1);
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
      <div className="bot-message">
        {step === 1 && (
          <div>
            <p>👋 Hello {userClass.firstName}, Let's Start your BetterYou Journey!!</p>
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

        {step === 2 && (
          <div>
            <p>Tell me more about you.</p>
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
                name="sexualIdentity"
                value={answers.sexualIdentity}
                onChange={handleInputChange}
              >
                <option value="">Select Sexual Identity</option>
                <option value="heterosexual">Heterosexual</option>
                <option value="homosexual">Homosexual</option>
                <option value="bisexual">Bisexual</option>
                <option value="other">Other</option>
              </select>
              {errors.sexualIdentity && (
                <span className="error">{errors.sexualIdentity}</span>
              )}
            </label>
            <label>
              Occupation*{" "}
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

        {step === 3 && (
          <div>
            <p>Medical Details</p>
            <label>
              Height *{" "}
              <input
                type="number"
                name="height"
                value={answers.height}
                onChange={handleInputChange}
              />
              {errors.height && <span className="error">{errors.height}</span>}
            </label>
            <label>
              Weight*{" "}
              <input
                type="number"
                name="weight"
                value={answers.weight}
                onChange={handleInputChange}
              />
              {errors.weight && <span className="error">{errors.weight}</span>}
            </label>
            <label>
              Existing Medical Condition*{" "}
              <input
                type="text"
                name="medicalCondition"
                value={answers.medicalCondition}
                onChange={handleInputChange}
              />
              {errors.medicalCondition && (
                <span className="error">{errors.medicalCondition}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <p>Habits</p>
            <label>
              Smoking*{" "}
              <select
                name="smoking"
                value={answers.smoking}
                onChange={handleInputChange}
              >
                <option value="">Select Smoking Frequency</option>
                <option value="none">None</option>
                <option value="fewCigarettes">Few Cigarettes</option>
                <option value="regularly">Regularly</option>
              </select>
              {errors.smoking && (
                <span className="error">{errors.smoking}</span>
              )}
            </label>
            <label>
              Alcohol Consumption*{" "}
              <select
                name="alcohol"
                value={answers.alcohol}
                onChange={handleInputChange}
              >
                <option value="">Select Alcohol Consumption</option>
                <option value="never">Never</option>
                <option value="social">Social Drinker</option>
                <option value="frequent">Frequent Consumer</option>
                <option value="veryOften">Very Often</option>
              </select>
              {errors.alcohol && (
                <span className="error">{errors.alcohol}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 5 && (
          <div>
            <p>Preferences</p>
            <label>
              Preferred Food*{" "}
              <input
                type="text"
                name="preferredFood"
                value={answers.preferredFood}
                onChange={handleInputChange}
              />
              {errors.preferredFood && (
                <span className="error">{errors.preferredFood}</span>
              )}
            </label>
            <label>
              Physical Activity* {/* New field */}
              <select
                name="physicalActivity"
                value={answers.physicalActivity}
                onChange={handleInputChange}
              >
                <option value="">Select Physical Activity</option>
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
              {errors.physicalActivity && (
                <span className="error">{errors.physicalActivity}</span>
              )}
            </label>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 6 && (
          <div>
            <p>Fitness Goals</p>
            <label>
              Desired Weight*{" "}
              <input
                type="number"
                name="idealWeight"
                value={answers.idealWeight}
                onChange={handleInputChange}
              />
              {errors.idealWeight && (
                <span className="error">{errors.idealWeight}</span>
              )}
            </label>
            <label>
              Fitness Level*{" "}
              <select
                name="fitnessLevel"
                value={answers.fitnessLevel}
                onChange={handleInputChange}
              >
                <option value="">Select Fitness Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.fitnessLevel && (
                <span className="error">{errors.fitnessLevel}</span>
              )}
            </label>
            <button onClick={handleFinish}>Finish</button>
          </div>
        )}

       {step > 6 && answers}
      </div>
    </div>
  );
});

export default Bot;
