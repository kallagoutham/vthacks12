import React, { useState } from "react";
import "../css/BotSVG.css";
import apiObj from "../Utils/apiCalls";
import { withRequiredAuthInfo } from "@propelauth/react";

const BotSVG = withRequiredAuthInfo(({ userClass }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handlePromptSubmit = async () => {
    var res = "";
    try {
      // eslint-disable-next-line
      const response = await apiObj.updateDietandWorkOutPlan(userClass.username, prompt);
      console.log("Hiiii");
      res = response;
    } catch (err) {
      console.log("Error in updating diet and workout plan");
    }
    setPrompt('');
    setShowPrompt(false);
    return res;
  };

  return (
    <div className="logo-container">
      <div
        className="overlay-svg"
        onClick={() => { setShowPrompt(!showPrompt); }}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0015 2C6.36858 2 2 6.12644 2 11.7011C2 14.6169 3.1954 17.1356 5.14023 18.8751C5.30192 19.0215 5.40077 19.2238 5.40843 19.4444L5.4636 21.2245C5.46756 21.3554 5.50365 21.4833 5.56868 21.5969C5.63371 21.7106 5.7257 21.8065 5.83653 21.8762C5.94736 21.9459 6.07364 21.9873 6.20423 21.9968C6.33483 22.0062 6.46575 21.9834 6.58544 21.9303L8.57088 21.0552C8.74023 20.9816 8.92797 20.9671 9.10421 21.0146C10.0161 21.2651 10.987 21.4008 11.9985 21.4008C17.6314 21.4008 22 17.2751 22 11.7004C22 6.12644 17.6322 2 12.0015 2ZM17.2529 9.57854L14.7487 13.5502C14.6544 13.6997 14.5302 13.8281 14.3839 13.9272C14.2376 14.0263 14.0724 14.0941 13.8986 14.1262C13.7248 14.1583 13.5463 14.154 13.3742 14.1137C13.2021 14.0734 13.0403 13.9979 12.8989 13.892L10.9065 12.3992C10.8178 12.3329 10.71 12.2971 10.5992 12.2971C10.4885 12.2971 10.3807 12.3329 10.292 12.3992L7.60383 14.4398C7.24751 14.7119 6.77625 14.282 7.01533 13.9034L9.51954 9.9318C9.61378 9.7823 9.73796 9.65394 9.88427 9.55481C10.0306 9.45568 10.1958 9.38793 10.3696 9.35582C10.5434 9.32371 10.7219 9.32795 10.894 9.36826C11.0661 9.40857 11.2279 9.48408 11.3693 9.59004L13.3617 11.0828C13.4504 11.149 13.5582 11.1849 13.669 11.1849C13.7797 11.1849 13.8875 11.149 13.9762 11.0828L16.6644 9.04215C17.0245 8.76628 17.4958 9.19617 17.2529 9.57854Z"
          />
        </svg>
      </div>
      {showPrompt && <>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="prompt-input"
        />
        <button type="submit" className="prompt-submit" onClick={() => { handlePromptSubmit() }}>Submit</button>
      </>
      }
    </div>
  );
});

export default BotSVG;