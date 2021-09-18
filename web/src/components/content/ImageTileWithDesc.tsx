import React from 'react';
import { ImageTileWithDesc } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';

export interface ImageTileWithDescProps {
  node: ImageTileWithDesc;
}

const ImageTileWithDescComponent: React.FunctionComponent<ImageTileWithDescProps> =
  ({ node }: ImageTileWithDescProps) => {
    const image = node.image?.asset;

    return (
      <div>
        <img src={imageUrlFor(image).url() || ''} />
        <div>{node.title}</div>
        <div>{node.description}</div>
      </div>
    );
  };

export default ImageTileWithDescComponent;
