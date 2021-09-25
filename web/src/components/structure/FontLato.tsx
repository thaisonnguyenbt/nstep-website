import React, { ReactElement } from 'react';

const FontLato: React.FunctionComponent<any> = (props: any): ReactElement => {
  return <span className="font-lato">{props.children}</span>;
};

export default FontLato;
