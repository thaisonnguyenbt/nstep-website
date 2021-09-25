import React, { PropsWithChildren, ReactElement } from 'react';

const Margin: React.FunctionComponent<PropsWithChildren<any>> = ({
  mark,
  children,
}: any): ReactElement => {
  const style = {};

  if (mark.top) {
    style['marginTop'] = mark.top + 'px';
  }
  if (mark.bottom) {
    style['marginBottom'] = mark.bottom + 'px';
  }
  if (mark.left) {
    style['marginLeft'] = mark.left + 'px';
  }
  if (mark.right) {
    style['marginRight'] = mark.right + 'px';
  }

  return <div style={style}>{children}</div>;
};

export default Margin;
