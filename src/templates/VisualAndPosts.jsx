import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Visual from '../components/Visual';
import Content from '../components/Content';
import { elements } from '../data/elementsData';
import Wrapper from './Wrapper/Wrapper';
import TextContent from '../modules/TextContent/TextContent';

/**
 * Template for pages with character visual on the left
 * @param visual Source of visual you want to put, if not defined take
 * the visual of the current theme
 * @param posts List of posts object
 * @param visualPosition Position of the visual
 * @return {JSX.Element}
 * @constructor
 */
const VisualAndPostsTemplate = ({ visual, visualPosition, posts }) => {
  const element = useSelector((state) => state.app.element);
  const CurrentElement = elements.find(({ name }) => element === name);

  return (
    <Wrapper>
      <Visual src={visual || CurrentElement.leftChar} position={visualPosition} height="95%" />
      <Content>
        {posts.map(({
          id, title, image, to, linkText, text,
        }) => (
          <TextContent
            title={title}
            linkText={linkText}
            src={`https://genshin.cchampou.me${image.url}`}
            text={text}
            to={to}
            key={id}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

VisualAndPostsTemplate.defaultProps = {
  visual: null,
  visualPosition: 'left',
  posts: [],
};

VisualAndPostsTemplate.propTypes = {
  visual: PropTypes.string,
  visualPosition: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    linkText: PropTypes.string,
    to: PropTypes.string,
    src: PropTypes.string,
  })),
};

export default VisualAndPostsTemplate;
