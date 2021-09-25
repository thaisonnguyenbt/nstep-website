import React, { ReactElement } from 'react';
import { LineBreak } from 'schema';

export interface LineBreakProps {
  node: LineBreak;
}

const LineBreakComponent: React.FunctionComponent<LineBreakProps> = ({
  node,
}: LineBreakProps): ReactElement => {
  if (node.style === 'divider') {
    return (
      <hr
        className={node.isFullScreenWidth ? `relative w-screen-container` : ''}
        style={{
          width: node.isFullScreenWidth ? '100vw' : '100%',
          color: node?.color?.hex || 'gray',
          borderTop: `${node.size || 1}px solid ${node?.color?.hex}`,
        }}
      />
    );
  }
  return <></>;
};

export default LineBreakComponent;
