import React from 'react';
import Button from './Button';
import { FaEdit, FaSignOutAlt } from 'react-icons/fa';
import './ButtonDemo.css';

const ButtonDemo = () => {
  return (
    <div className="profile-container">
      <h2>Welcome back, Sasikala!</h2>

      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="User Avatar"
          className="avatar"
        />
        
        <h3>Sasikala Thennarasu</h3>
        <p>Email: sasikala@example.com</p>

        <div className="button-row">
          <Button
            label="Edit Profile"
            variant="primary"
            onClick={() => alert('Edit profile clicked')}
            icon={FaEdit}
          />
          <Button
            label="Logout"
            variant="secondary"
            onClick={() => alert('Logged out')}
            icon={FaSignOutAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
