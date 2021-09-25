/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { IconsBanner } from '../../generated-schema';
import { imageAltPathFor, imageUrlPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

interface IconsBannerProps {
  value: IconsBanner;
}

const IconsBannerComponent: React.FunctionComponent<IconsBannerProps> = ({
  value,
}: IconsBannerProps): ReactElement => {
  const { bannerItems } = value;
  if (!bannerItems) return <></>;
  return (
    <div className="flex flex-wrap justify-around mx-auto w-176 ">
      {bannerItems
        .filter(bannerItem => bannerItem.image?.asset)
        .map((bannerItem, index) => {
          return (
            <div
              className="w-32 md:w-[10.625rem] mb-4 flex flex-col items-start justify-start"
              key={`banner-${index}`}
            >
              <img
                className="h-10 md:h-16"
                src={imageUrlPathFor(bannerItem.image)}
                alt={imageAltPathFor(bannerItem.image)}
              />
              {bannerItem.showSeparator && (
                <div className="w-12 mt-3 border border-solid md:mt-5 border-red-primary" />
              )}
              <div className="mt-3 md:mt-5 text-gray-primary text-opacity-[0.56]">
                {bannerItem.iconText}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default IconsBannerComponent;
