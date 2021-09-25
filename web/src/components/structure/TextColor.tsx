import React, { ReactElement } from 'react';

const TextColor: React.FunctionComponent<any> = (props: any): ReactElement => {
  return (
    <span style={{ color: props.mark?.hex || 'inherit' }}>
      {props.children}
    </span>
  );
};

export default TextColor;
