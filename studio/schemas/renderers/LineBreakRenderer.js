import React from 'react';

const LineBreakRenderer = ({ value }) => {
  return (
    <hr
      style={{
        width: '1000px',
        borderTop: `${value.size || 1}px solid ${value.color || 'gray'}`,
      }}
    ></hr>
  );
};

export default LineBreakRenderer;
