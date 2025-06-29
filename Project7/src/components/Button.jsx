import React from 'react';
import './Button.css';

const Button = ({ label, variant = 'primary', onClick, icon: Icon }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {Icon && <span className="btn-icon"><Icon /></span>}
      {label}
    </button>
  );
};

export default Button;
