/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { FullWidthImage } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

export interface FullWidthImageProps {
  value: FullWidthImage;
}

const FullWidthImageComponnent: React.FunctionComponent<FullWidthImageProps> =
  ({ value }: FullWidthImageProps): ReactElement => {
    const image = value.image;
    if (!image) {
      return <></>;
    }
    return (
      <div className="relative w-screen w-screen-container">
        <img className="relative w-screen" src={imageUrlPathFor(image)} />
      </div>
    );
  };

export default FullWidthImageComponnent;
