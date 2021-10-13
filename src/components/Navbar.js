import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  const state = useSelector((state) => state.covid19Data);
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="left">
        <span className="back"><FaArrowLeft onClick={() => history.goBack()} /></span>
        <span className="year">{state[0] && state[0].date.split('-')[0]}</span>
      </div>
      <span className="middle">Corona Virus</span>
      <div className="right">
        <span className="mic">
          <BsFillMicFill />
        </span>
        <span className="settings">
          <BsFillGearFill />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
