import React, { ReactElement } from 'react';
import { ImageWithInfoBox } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';

export interface ImageWithInfoBoxProps {
  node: ImageWithInfoBox;
}

const ImageWithInfoBoxComponent: React.FunctionComponent<ImageWithInfoBoxProps> =
  ({ node }: ImageWithInfoBoxProps): ReactElement => {
    const image = node.backgroundImage?.asset;

    return (
      <div>
        <img src={imageUrlFor(image).url() || ''} />
        <div className="bg-red-300">
          <h3>{node.header}</h3>
          <p>{node.description}</p>
          <button className="bg-red-500">{node.buttonText}</button>
          <div>{node.buttonLink}</div>
        </div>
      </div>
    );
  };

export default ImageWithInfoBoxComponent;
