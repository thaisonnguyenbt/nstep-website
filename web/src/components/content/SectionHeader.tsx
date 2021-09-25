import React, { ReactElement } from 'react';
import { SectionHeader } from 'schema';

export interface SectionHeaderProps {
  node: SectionHeader;
}

const SectionHeaderComponent: React.FunctionComponent<SectionHeaderProps> = ({
  node,
}: SectionHeaderProps): ReactElement => {
  return (
    <section>
      <h5 id={node.sectionId} className="section-heading">
        {node.header}
      </h5>
    </section>
  );
};

export default SectionHeaderComponent;
