import React, { ReactElement } from 'react';
import { ImageWithInfoBox } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';

export interface ImageWithInfoBoxProps {
  node: ImageWithInfoBox;
}

const ImageWithInfoBoxComponent: React.FunctionComponent<ImageWithInfoBoxProps> =
  ({ node }: ImageWithInfoBoxProps): ReactElement => {
    const image = node.backgroundImage;

    return (
      <div
        id={node.buttonLink}
        className="relative w-screen bg-cover w-screen-container bg-no-repeat pt-[62.5%] h-0"
        style={{ backgroundImage: `url('${imageUrlPathFor(image)}')` }}
      >
        <div className="top-1/2 -translate-y-1/2 w-[32%] min-w-[28.8125rem] absolute container left-2 sm:left-16 md:left-36 mt-2 sm:mt-4 md:mt-8 lg:mt-16 h-auto">
          <div className="relative bg-red-gradient shadow-1 rounded-lg p-12 h-auto">
            <h3 className="font-bold text-2xl leading-[120%]">{node.header}</h3>
            <p className="mt-8 text-lg font-lato leading-[140%] text-white text-opacity-[0.72]">
              {node.description}
            </p>
            <button className="mt-8 h-12 bg-gray-primary rounded-sm flex gap-3.5 justify-center px-6 items-center">
              <span className="text-xs uppercase font-bold leading-[150%] tracking-[0.125rem]">
                {node.buttonText}
              </span>
              <img src="images/arrow_right_alt.png" />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ImageWithInfoBoxComponent;
