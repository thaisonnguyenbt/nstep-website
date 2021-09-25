import React from 'react';
import { ImageTileWithDesc } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';

export interface ImageTileWithDescProps {
  node: ImageTileWithDesc;
}

const ImageTileWithDescComponent: React.FunctionComponent<ImageTileWithDescProps> =
  ({ node }: ImageTileWithDescProps) => {
    const { title, image, direction, description } = node;
    const isVertical = direction == 'vertical';
    const descriptions = description?.split('\n');

    return isVertical ? (
      <div>
        <img className="w-full rounded" src={imageUrlPathFor(image)} />
        <div className="text-lg mt-8 mb-3 font-bold leading-[1.35rem]">
          {title}
        </div>
        <div className="text-black dark:text-white font-lato text-opacity-[0.56] dark:text-opacity-[0.56]">
          {descriptions && descriptions.length > 0 && (
            <span>{descriptions[0]}</span>
          )}
          {descriptions && descriptions.length > 1 && (
            <div>{descriptions[1]}</div>
          )}
        </div>
      </div>
    ) : (
      <div className="flex flex-row">
        <div className="bg-red-gradient w-[42.544%] shadow-1 rounded-l flex flex-col justify-center pl-[6.4%] pr-[7%]">
          <div className="text-2xl font-bold leading-[1.8rem] mb-3">
            {title}
          </div>
          <div className="text-black dark:text-white font-lato text-opacity-[0.72] dark:text-opacity-[0.72]">
            {description}
          </div>
        </div>
        <div className="w-[57.456%]">
          <img className="w-full rounded-r" src={imageUrlPathFor(image)} />
        </div>
      </div>
    );
  };

export default ImageTileWithDescComponent;
