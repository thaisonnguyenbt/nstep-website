import React, { ReactElement } from 'react';
import { FullWidthImage } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';

export interface FullWidthImageProps {
  node: FullWidthImage;
}

const FullWidthImageComponnent: React.FunctionComponent<FullWidthImageProps> =
  ({ node }: FullWidthImageProps): ReactElement => {
    const image = node.image?.asset;

    if (!image) {
      return <></>;
    }
    return (
      <div key={image._ref} className="w-screen">
        <img
          className="relative w-screen"
          style={{ left: 'calc((1536px - 100vw) / 2)' }}
          src={imageUrlFor(image).url() || ''}
        />
      </div>
    );
  };

export default FullWidthImageComponnent;
