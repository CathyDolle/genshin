import React from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CHAR
import paimon from '../assets/images/char/paimon.png';

// TEXT
import dailies from '../text/dailies';

const { post } = dailies;

function Dailies() {
  return (
    <Wrapper>
      <Visual src={paimon} position="left" height="95%" />
      <Content>
        {post.map(({ title, text, src }) => (
          <TextContent
            title={title}
            src={src}
            text={text}
          />
        ))}
      </Content>
    </Wrapper>
  );
}

export default Dailies;
