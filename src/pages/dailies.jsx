import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDailies from '../redux/thunks/getDailies';
import { selectAllDailies } from '../redux/dailiesSlice';
import VisualAndPostsTemplate from '../templates/VisualAndPosts';

import paimon from '../assets/images/char/paimon.png';

const Dailies = () => {
  const dispatch = useDispatch();
  const Articles = useSelector(selectAllDailies);

  useEffect(() => {
    dispatch(getDailies());
  }, []);

  return (
    <VisualAndPostsTemplate visual={paimon} posts={Articles} />
  );
};

export default Dailies;
