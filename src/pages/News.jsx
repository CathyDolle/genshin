import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getNews from '../redux/thunks/getNews';
import { selectAllNews } from '../redux/newsSlice';
import VisualAndPostsTemplate from '../templates/VisualAndPosts';

import tartaglia from '../assets/images/char/tartaglia.png';

const News = () => {
  const dispatch = useDispatch();
  const Articles = useSelector(selectAllNews);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <VisualAndPostsTemplate visual={tartaglia} posts={Articles} />
  );
};

export default News;
