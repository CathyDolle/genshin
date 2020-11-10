import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getArticle from '../../redux/thunks/getArticle';
import { selectArticlebySlug } from '../../redux/articleSlice';
import NotFoundAtom from '../../components/NotFound';

const Article = () => {
  const { slug } = useParams();
  const data = useSelector(selectArticlebySlug);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(slug));
  }, []);

  if (!data[0]) {
    return <NotFoundAtom />;
  }

  const { title, content, date } = data[0];

  return (
    <>
      <h1>{title}</h1>
      <p>{new Date(date).toLocaleDateString()}</p>
      <p>{content}</p>
    </>
  );
};

export default Article;
