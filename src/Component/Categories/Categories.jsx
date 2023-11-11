import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Categories.css'
const Categories = () => {
  return (
    <>
    <div className="col-md-4">
        <div className="service-card">
          <div className="icon-wrapper">
          <FontAwesomeIcon icon={faDumbbell} bounce style={{color: "#e6262b",}} />
          </div>
          <h3>Tracking Lead</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>

      <div className="col-md-4">
      <div className="service-card">
        <div className="icon-wrapper">
        <FontAwesomeIcon icon={faDumbbell} bounce style={{color: "#e6262b",}} />
        </div>
        <h3>Tracking Lead</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quisquam consequatur necessitatibus eaque.
        </p>
      </div>
    </div>
    <div className="col-md-4">
    <div className="service-card">
      <div className="icon-wrapper">
      <FontAwesomeIcon icon={faDumbbell} bounce style={{color: "#e6262b",}} />
      </div>
      <h3>Tracking Lead</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quisquam consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  </>
  );
};

export default Categories;
