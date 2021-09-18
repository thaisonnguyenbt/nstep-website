import React, { ReactElement } from 'react';
import { PatnerLogos } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';

export interface PartnerLogosProps {
  node: PatnerLogos;
}

const PartnerLogosComponent: React.FunctionComponent<PartnerLogosProps> = ({
  node,
}: PartnerLogosProps): ReactElement => {
  const { title, logos } = node;

  if (logos) {
    return (
      <div className="mx-auto flex flex-wrap mt-20 mb-[7.5rem]">
        <h5 className="w-full mb-[3.25rem] text-xs font-semibold leading-tight text-center text-white text-opacity-25">
          {title}
        </h5>
        <div className="w-full mx-auto flex flex-wrap lg:justify-between justify-center">
          {logos
            .filter(logo => logo.image?.asset)
            .map(logo => {
              return (
                <div
                  className="flex flex-col w-[10.625rem]"
                  key={logo.targetLink}
                >
                  <img src={imageUrlFor(logo.image?.asset).url() || ''} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return <></>;
};

export default PartnerLogosComponent;
