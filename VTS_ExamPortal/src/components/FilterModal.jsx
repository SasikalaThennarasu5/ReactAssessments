import React from 'react';
import './FilterModal.css';

const FilterModal = ({ onClose, onOnline, onOffline }) => {
  return (
    <div className="filter-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h5>Filter By</h5>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Trainee Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Course Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Duration" />
          </div>
          <div className="mb-3">
            <label className="me-3"><input type="radio" name="mode" onClick={onOnline} /> Online</label>
            <label><input type="radio" name="mode" onClick={onOffline} /> Offline</label>
          </div>
          <button type="button" className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
