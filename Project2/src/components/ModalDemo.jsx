import React, { useState } from 'react';
import Modal from './Modal';

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={showModal}>Show Terms & Conditions</button>

      <Modal isOpen={isModalOpen} onClose={hideModal}>
        <h2>Terms & Conditions</h2>
        <p>
          By using this application, you agree to our terms and conditions.
          Please make sure to read all the terms carefully before proceeding.
        </p>
      </Modal>
    </div>
  );
};

export default ModalDemo;
