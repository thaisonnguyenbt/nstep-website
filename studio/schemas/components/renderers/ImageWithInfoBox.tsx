import React, { ReactElement } from 'react';
import { ImageWithInfoBox } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';

export interface ImageWithInfoBoxProps {
  value: ImageWithInfoBox;
}

const ImageWithInfoBoxComponent: React.FunctionComponent<ImageWithInfoBoxProps> =
  ({ value }: ImageWithInfoBoxProps): ReactElement => {
    return (
      <div
        id={value.buttonLink}
        className="relative w-screen bg-no-repeat bg-contain w-screen-container h-96"
        style={{
          backgroundColor: 'red',
          backgroundImage: `url('${imageUrlPathFor(value.backgroundImage)}')`,
        }}
      >
        <div className="top-1/2 -translate-y-1/2 w-[32%] min-w-[28.8125rem] absolute container left-2 sm:left-16 md:left-36 mt-2 sm:mt-4 md:mt-8 lg:mt-16 h-auto">
          <div className="relative h-auto p-12 rounded-lg bg-red-gradient shadow-1">
            <h3 className="font-bold text-2xl leading-[120%]">
              {value.header}
            </h3>
            <p className="mt-8 text-lg font-lato leading-[140%] text-white text-opacity-[0.72]">
              {value.description}
            </p>
            <button className="mt-8 h-12 bg-gray-primary rounded-sm flex gap-3.5 justify-center px-6 items-center">
              <span className="text-xs uppercase font-bold leading-[150%] tracking-[0.125rem]">
                {value.buttonText}
              </span>
              <img src="images/arrow_right_alt.png" />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ImageWithInfoBoxComponent;
