const renderWithNextLine = text => text.split('\n').map(entry => <>{entry}<br /></>);

export { renderWithNextLine };