import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getIndispensable from '../redux/thunks/getIndispensable';
import { selectAllIndispensableArticle } from '../redux/indispensableSlice';
import VisualAndPostsTemplate from '../templates/VisualAndPosts';

const Indispensables = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectAllIndispensableArticle);

  useEffect(() => {
    dispatch(getIndispensable());
  }, []);

  return (
    <VisualAndPostsTemplate posts={articles} />
  );
};

export default Indispensables;
