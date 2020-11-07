import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getIndispensable from '../redux/thunks/getIndispensable';
import { selectAllIndispensableArticle } from '../redux/indispensableSlice';
import VisualAndPostsTemplate from '../templates/VisualAndPosts';

const Indispensables = () => {
  const dispatch = useDispatch();
  const Articles = useSelector(selectAllIndispensableArticle);

  useEffect(() => {
    dispatch(getIndispensable());
  }, []);

  return (
    <VisualAndPostsTemplate posts={Articles} />
  );
};

export default Indispensables;
