import React from 'react';

const TextColor = props => {
  return (
    <span
      style={{
        color: props.hex || 'inherit',
      }}
    >
      {props.children}
    </span>
  );
};

export default TextColor;
