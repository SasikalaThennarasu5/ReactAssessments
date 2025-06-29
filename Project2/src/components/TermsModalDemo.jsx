import React, { useState } from 'react';
import Modal from './Modal';
import './TermsModalDemo.css';

const TermsModalDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleClose = () => {
    if (isAgreed) {
      setModalOpen(false);
      setIsAgreed(false); // Reset checkbox for next time
    }
  };

  return (
    <div className="terms-container">
      <h2>Welcome to Our Site</h2>

      <button className="terms-btn" onClick={() => setModalOpen(true)}>
        Show Terms & Conditions
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h3>📜 Terms & Conditions</h3>
        <p>
          By using this service, you agree to our terms and conditions. Please
          read them carefully before continuing.
        </p>

        <label className="checkbox-label">
  <input
    type="checkbox"
    checked={isAgreed}
    onChange={(e) => setIsAgreed(e.target.checked)}
  />
  <span>I agree to the terms and conditions</span>
</label>
        <button
          className={`modal-action-btn ${isAgreed ? '' : 'disabled'}`}
          onClick={handleClose}
          disabled={!isAgreed}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default TermsModalDemo;
