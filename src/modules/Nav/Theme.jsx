import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import night from '../../assets/images/logo/night.svg';
import day from '../../assets/images/logo/day.svg';
import { setLight, getLightTheme } from '../../redux/appSlice';

const Theme = () => {
  const light = useSelector(getLightTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setLight(!light));
  };

  return (
    <button type="button" onClick={toggleTheme}><img src={!light ? night : day} className="mode" alt="mode" /></button>
  );
};

export default Theme;
