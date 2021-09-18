import React, { ReactElement } from 'react';
import { LineBreak } from 'schema';

export interface LineBreakProps {
  node: LineBreak;
}

const LineBreakComponent: React.FunctionComponent<LineBreakProps> = (
  props: LineBreakProps
): ReactElement => {
  const { style } = props.node;
  if (style === 'break') {
    return <br />;
  } else if (style === 'divider') {
    return <hr className="lineBreak" />;
  }
  return <></>;
};

export default LineBreakComponent;
