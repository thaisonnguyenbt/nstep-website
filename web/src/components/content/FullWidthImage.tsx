import React, { ReactElement } from 'react';
import { FullWidthImage } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';

export interface FullWidthImageProps {
  node: FullWidthImage;
}

const FullWidthImageComponnent: React.FunctionComponent<FullWidthImageProps> =
  ({ node }: FullWidthImageProps): ReactElement => {
    const image = node.image;

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
