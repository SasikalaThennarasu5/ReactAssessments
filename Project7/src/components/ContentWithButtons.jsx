import React from 'react';
import Button from './Button';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import './ContentWithButtons.css';

const ContentWithButtons = () => {
  const handleLearnMore = () => {
    alert('Learn more about our features.');
  };

  const handleGetStarted = () => {
    alert('Getting started...');
  };

  return (
    <div className="content-section">
      <h1>Welcome to Tracker</h1>
      <p>
        Tracker helps you manage your products, track performance, and scale your business with ease.
        Get started today and experience the difference.
      </p>
      <div className="btn-group">
        <Button
          label="Learn More"
          variant="secondary"
          onClick={handleLearnMore}
          icon={<FaInfoCircle />}
        />
        <Button
          label="Get Started"
          variant="primary"
          onClick={handleGetStarted}
          icon={<FaArrowRight />}
        />
      </div>
    </div>
  );
};

export default ContentWithButtons;
