import React from 'react';
import useToggle from '../hooks/useToggle';
import './ToggleDemo.css';

const ToggleDemo = () => {
  const [isVisible, toggleVisibility] = useToggle();

  // ✅ Console log the boolean value
  console.log('isVisible:', isVisible);

  return (
    <div className="toggle-demo">
      <h2>useToggle Hook Demo</h2>

      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {/* ✅ Show boolean with color */}
      <p>
        Toggle value:{' '}
        <strong className={isVisible ? 'true-text' : 'false-text'}>
          {isVisible.toString()}
        </strong>
      </p>

      {isVisible && (
        <p className="message">🎉 You toggled the message successfully!</p>
      )}
    </div>
  );
};

export default ToggleDemo;
