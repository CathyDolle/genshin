// import React from 'react';
import { screen, render } from '@testing-library/react';
import RenderWithNextLine from '../TextRenderer';

const textWithLineBreak = 'I am a broken\ntext.';

describe('RenderWithNextLine', () => {
  it('should render one br tag with a line broke text', () => {
    render(RenderWithNextLine(textWithLineBreak));
    expect(screen.getAllByTestId('line-break')).toHaveLength(2);
  });
});
