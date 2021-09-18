import React, { ReactElement } from 'react';

const className = { className: `text-center` };

const TextCenter: React.FunctionComponent<any> = (props: any): ReactElement => {
  return React.createElement('div', className, props.children);
};

export default TextCenter;
