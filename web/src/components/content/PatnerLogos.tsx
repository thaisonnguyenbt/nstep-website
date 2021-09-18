import React, { ReactElement } from 'react';
import { PatnerLogos } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';

export interface PartnerLogosProps {
  node: PatnerLogos;
}

const PatnerLogosComponent: React.FunctionComponent<PartnerLogosProps> = ({
  node,
}: PartnerLogosProps): ReactElement => {
  const { logos } = node;

  if (logos) {
    return (
      <>
        {logos
          .filter(logo => logo.image?.asset)
          .map(logo => {
            return (
              <img
                key={logo.targetLink}
                src={imageUrlFor(logo.image?.asset).url() || ''}
              />
            );
          })}
      </>
    );
  }

  return <></>;
};

export default PatnerLogosComponent;
