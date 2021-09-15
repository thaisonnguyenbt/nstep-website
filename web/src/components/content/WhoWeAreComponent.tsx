import PortableText from 'components/structure/PortableText';
import React, { ReactElement } from 'react';
import { WhoWeAre } from 'schema';

export interface WhoWeAreProps {
  node: WhoWeAre;
}

const WhoWeAreComponent: React.FunctionComponent<WhoWeAreProps> = ({
  node,
}: WhoWeAreProps): ReactElement => {
  if (!node) return <></>;

  return (
    <div style={{ border: '1px solid black' }}>
      <h3>{node.title}</h3>
      <PortableText blocks={node.leftContent} />
      <PortableText blocks={node.rightContent} />
    </div>
  );
};

export default WhoWeAreComponent;
