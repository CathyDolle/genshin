import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../templates/Wrapper/Wrapper';
import getArticle from '../redux/thunks/getArticle';
import { selectArticlebySlug } from '../redux/articleSlice';

const Articles = () => {
  const { slug } = useParams();
  const data = useSelector(selectArticlebySlug);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(slug));
  }, []);

  if (!data[0]) {
    return null;
  }

  const { title, content, date } = data[0];

  return (
    <Wrapper>
      {data[0] && (
        <>
          <h1>{title}</h1>
          <p>{new Date(date).toLocaleDateString()}</p>
          <p>{content}</p>
        </>
      )}
    </Wrapper>
  );
};

export default Articles;
