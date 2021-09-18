import React, { ReactElement } from 'react';
import { SectionHeader } from 'schema';

export interface SectionHeaderProps {
  node: SectionHeader;
}

const SectionHeaderComponent: React.FunctionComponent<SectionHeaderProps> = ({
  node,
}: SectionHeaderProps): ReactElement => {
  return (
    <h3 id={node.sectionId} className="text-red-500">
      {node.header}
    </h3>
  );
};

export default SectionHeaderComponent;
