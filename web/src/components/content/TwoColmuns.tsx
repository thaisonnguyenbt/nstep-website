import RichText from 'components/structure/RichText';
import React, { ReactElement } from 'react';
import { TwoColums } from 'schema';

export interface TwoColumsProps {
  node: TwoColums;
}

const TwoColumns: React.FunctionComponent<TwoColumsProps> = ({
  node,
}: TwoColumsProps): ReactElement => {
  if (!node) return <></>;

  return (
    <div className="flex flex-row">
      <div className="flex-1 pr-16">
        <RichText blocks={node.leftContent} />
      </div>
      <div className="flex-1">
        <RichText blocks={node.rightContent} />
      </div>
    </div>
  );
};

export default TwoColumns;
