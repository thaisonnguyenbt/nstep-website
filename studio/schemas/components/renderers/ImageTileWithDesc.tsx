/* eslint-disable import/no-unresolved */
import React from 'react';
import { ImageTileWithDesc } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

export interface ImageTileWithDescProps {
  value: ImageTileWithDesc;
}

const ImageTileWithDescComponent: React.FunctionComponent<ImageTileWithDescProps> =
  ({ value }: ImageTileWithDescProps) => {
    const image = value.image;
    const isVertical = value.direction == 'vertical';

    return isVertical ? (
      <div>
        <img className="w-full rounded" src={imageUrlPathFor(image)} />
        <div className="text-lg mt-8 mb-3 font-bold leading-[1.35rem]">
          {value.title}
        </div>
        <div className="dark:text-white font-lato dark:text-opacity-[0.56]">
          {value.description}
        </div>
      </div>
    ) : (
      <div className="flex flex-row">
        <div className="bg-red-gradient w-[42.544%] shadow-1 rounded-l flex flex-col justify-center pl-[6.4%] pr-[7%]">
          <div className="text-2xl font-bold leading-[1.8rem] mb-3">
            {value.title}
          </div>
          <div className="dark:text-white font-lato dark:text-opacity-[0.72]">
            {value.description}
          </div>
        </div>
        <div className="w-[57.456%]">
          <img className="w-full rounded-r" src={imageUrlPathFor(image)} />
        </div>
      </div>
    );
  };

export default ImageTileWithDescComponent;
