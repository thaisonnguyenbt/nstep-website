/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { SectionHeader } from '../../generated-schema';
import '../../../styles/components.css?raw';
import '../../../styles/tailwind.min.css?raw';

export interface SectionHeaderProps {
  value: SectionHeader;
}

const SectionHeaderComponent: React.FunctionComponent<SectionHeaderProps> = ({
  value,
}: SectionHeaderProps): ReactElement => {
  return (
    <section>
      <h5 id={value.sectionId} className="text-red-600">
        {value.header}
      </h5>
    </section>
  );
};

export default SectionHeaderComponent;
