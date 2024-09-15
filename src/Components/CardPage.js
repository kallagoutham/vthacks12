import React, { useState } from 'react';
import '../css/CardPage.css';

const CardPage = () => {
  const [activeTab, setActiveTab] = useState('diet');

  const renderContent = () => {
    switch (activeTab) {
      case 'diet':
        return <div className="content-box">This is the Diet Plan section.</div>;
      case 'workout':
        return <div className="content-box">This is the Workout Plans section.</div>;
      case 'tasks':
        return <div className="content-box">This is the Tasks section.</div>;
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
};

export default CardPage;
