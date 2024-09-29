import React, { useState, useEffect } from 'react';
import '../css/CardPage.css';
import apiObj from '../Utils/apiCalls';
import { withRequiredAuthInfo } from '@propelauth/react';

const CardPage = withRequiredAuthInfo(({ userClass }) => {
  const [profile, setProfile] = useState({});
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
      const response = await apiObj.getProfile(userClass.username);
      setProfile(response?.data);
    };
    getProfile();
    handleFetchTasks();
    // eslint-disable-next-line
  }, [])
  const [activeTab, setActiveTab] = useState();

  const renderMeals = (meals) => {
    return Object.keys(meals).map((mealType) => {
      if (mealType === 'date' || mealType === 'water_intake') return null;
      const meal = meals[mealType];
      return (
        <div key={mealType} className="meal">
          <h3>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
          <p><strong>Dish:</strong> <a href={meal?.dish_url} target="_blank" rel="noopener noreferrer">{meal?.dish_name || "Kulfi"}</a></p>
          <p><strong>Calories:</strong> {meal?.calories || "500"}</p>
          <p><strong>Time:</strong> {meal?.time || "24 min"}</p>
          <p><strong>Macros:</strong> Carbs: {meal?.macros?.carbs || "200gm"}, Fat: {meal?.macros?.fat || "5gm"}, Protein: {meal?.macros?.protein || "40gm"}</p>
        </div>
      );
    });
  };

  const renderDietPlan = (dietPlan) => {
    return Object.keys(dietPlan).map((day) => {
      if (day === 'status') return null;
      const meals = dietPlan[day];
      return (
        <div key={day} className="day">
          <h2>{day.charAt(0).toUpperCase() + day.slice(1)} - {meals.date}</h2>
          {renderMeals(meals)}
          <div className="water-intake">
            <h3>Water Intake</h3>
            <p><strong>Morning:</strong> {meals?.water_intake?.morning || 2}</p>
            <p><strong>Afternoon:</strong> {meals?.water_intake?.afternoon || 2}</p>
            <p><strong>Evening:</strong> {meals?.water_intake?.evening || 3}</p>
          </div>
        </div>
      );
    });
  };
  const renderExercises = (exercises) => {
    return exercises.map((exercise, index) => (
      <div key={index} className="exercise">
        <p><strong>Exercise:</strong> {exercise?.name || "Pull Ups"}</p>
        <p><strong>Reps:</strong> {exercise?.reps || 15}</p>
        <p><strong>Sets:</strong> {exercise?.sets || 3}</p>
      </div>
    ));
  };

  const renderWorkoutPlan = (workoutPlan) => {
    return Object.keys(workoutPlan).map((day) => {
      if (day === 'status') return null;
      const workout = workoutPlan[day];
      return (
        <div key={day} className="day">
          <h2>{day.charAt(0).toUpperCase() + day.slice(1)} - {workout?.date || "Sep-15-2024"}</h2>
          <p><strong>Workout Name:</strong> {workout?.workout_name || "Bar Dips"}</p>
          {workout?.exercises ? renderExercises(workout?.exercises) : <p>Rest Day</p>}
          {workout?.calories_burned && <p><strong>Calories Burned:</strong> {workout?.calories_burned || "400 cal"}</p>}
          {workout?.time && <p><strong>Time:</strong> {workout?.time || "30 min"}</p>}
        </div>
      );
    });
  };

  const handleFetchTasks = async () => {
    var date = new Date().toISOString().split('T')[0];
    const response = await apiObj.getTasks(userClass.username, date);
    setTasks(response);
  }

  const taskCompleteHandler = async (e) => {
    const taskCardDiv = e.target.closest('.task-card');
    const taskDetailsDiv = taskCardDiv.querySelector('.task-details');
    const TaskPointsDiv = taskCardDiv.querySelector('.task-points');
    const taskPoints = TaskPointsDiv.querySelector('p').innerText;
    const taskPointsValue = taskPoints.split(':')[1];
    const taskName = taskDetailsDiv.querySelector('h3').innerText;
    const taskDescription = taskDetailsDiv.querySelector('p').innerText;
    var date = new Date().toISOString().split('T')[0];
    const response = await apiObj.completeTask(userClass.username, date,taskName,taskDescription,taskPointsValue);
    if (response.status === 200) {  
      handleFetchTasks();
    } else {    
      console.log("Error in completing task");
    } 
  }


    const renderTasks = (tasks) => {
    return tasks?.map((task, index) => (
      <div key={index} className="task-card">
        <div className="task-content">
          <div className="task-details">
            <h3>{task?.task_name || "Task Name"}</h3>
            <p><strong>Description:</strong> {task?.Description || "Task Description"}</p>
          </div>
          <div className="task-points">
            <p><strong>Points:</strong> {task?.points || "Task Points"}</p>
            <button className="task-button" onClick={taskCompleteHandler}>Complete</button>
          </div>
        </div>
      </div>
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'diet':
        return <div className="content-box">{renderDietPlan(profile?.diet_plan)}</div>;
      case 'workout':
        return <div className="content-box">{renderWorkoutPlan(profile?.workout_plan)}</div>;
      case 'tasks':
        return <div className="content-box">{renderTasks(tasks)}</div>;
      default:
        return <div className="content-box">Select a tab to view content.</div>;
    }
  };


  return (
    <div className="page-container">
      <div className="main-card">
        <div className="navigation">
          <button
            className={`nav-button ${activeTab === 'diet' ? 'active-nav' : ''}`}
            onClick={() => setActiveTab('diet')}
          >
            Diet Plan
          </button>
          <button
            className={`nav-button ${activeTab === 'workout' ? 'active-nav' : ''}`}
            onClick={() => setActiveTab('workout')}
          >
            Workout Plans
          </button>
          <button
            className={`nav-button ${activeTab === 'tasks' ? 'active-nav' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            Tasks
          </button>
        </div>
        <div className="content-wrapper">
          {renderContent()}
        </div>
      </div>
    </div>
  );
});

export default CardPage;
