import React, { ReactElement } from 'react';
import { Benefits } from 'schema';

export interface BenefitsProps {
  node: Benefits;
}

const BenefitsComponent: React.FunctionComponent<BenefitsProps> = ({
  node,
}: BenefitsProps): ReactElement => {
  return (
    <div>
      <div>{node.title}</div>
      <div>{node.description}</div>
      {node.benefitItems?.map(benefit => {
        return (
          <div key={benefit.shortDesc}>
            <h3>{benefit.shortDesc}</h3>
            <div>{benefit.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsComponent;
