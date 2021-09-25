/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { NstepImage, PartnerLogos } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';
import { imageAltPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

export interface PartnerLogosProps {
  value: PartnerLogos;
}

const PartnerLogosComponent: React.FunctionComponent<PartnerLogosProps> = ({
  value,
}: PartnerLogosProps): ReactElement => {
  const { title, logos } = value;
  if (!logos) return <></>;
  const exchangeImage = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    toImage: NstepImage | undefined
  ): void => {
    if (toImage) {
      e.currentTarget.src = imageUrlPathFor(toImage);
      e.currentTarget.alt = imageAltPathFor(toImage);
    }
  };
  return (
    <div className="mx-auto my-20 flex flex-wrap">
      <h6 className="heading-6 w-full mb-3 md:mb-[3.25rem] text-center uppercase  text-gray-primary text-opacity-25 dark:text-white dark:text-opacity-25">
        {title}
      </h6>
      <div className="w-full mx-auto flex flex-wrap justify-center lg:justify-between ">
        {logos
          .filter(logo => logo.image?.asset)
          .map(logo => {
            return (
              <div
                className="w-[10.625rem] flex flex-col items-center justify-center hover:rounded-sm hover:bg-gray-300 dark:hover:bg-white dark:hover:bg-opacity-5"
                key={logo.targetLink}
              >
                <img
                  src={imageUrlPathFor(logo.image)}
                  alt={imageAltPathFor(logo.image)}
                  onMouseOver={e => exchangeImage(e, logo.hoverImage)}
                  onMouseOut={e => exchangeImage(e, logo.image)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PartnerLogosComponent;
