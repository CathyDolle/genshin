import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';
import colorContext from '../contexts/element';
import { elements } from '../components/Elements/elementsData';

/**
 * Template for pages with character visual on the left
 * @param visual Source of visual you want to put, if not defined take
 * the visual of the current theme
 * @param posts List of posts object
 * @return {JSX.Element}
 * @constructor
 */
const VisualAndPostsTemplate = ({ visual, posts, visualPosition }) => {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);
  return (
    <Wrapper>
      <Visual src={visual || CurrentElement.leftChar} position={visualPosition} height="95%" />
      <Content>
        {posts.map(({
          title, text, src, to, linkText, external,
        }) => (
          <TextContent
            title={title}
            linkText={linkText}
            src={src}
            text={text}
            to={to}
            external={external}
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
    external: PropTypes.bool,
    src: PropTypes.string,
  })),
};

export default VisualAndPostsTemplate;
