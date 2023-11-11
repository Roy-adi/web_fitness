import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: '#bcb8ea' }}>
      <div className="container d-flex justify-content-center py-5">
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
      
        <FontAwesomeIcon icon={fab.faFacebook} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <FontAwesomeIcon icon={fab.faTwitter} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <FontAwesomeIcon icon={fab.faLinkedin} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <FontAwesomeIcon icon={fab.faPinterest} />
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" style={{marginLeft: '10px'}} href="#">RayGymNation</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
