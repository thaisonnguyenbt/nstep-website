import ImageTileWithDesc from 'components/content/ImageTileWithDesc';
import React, { ReactElement } from 'react';
import { ImageTilesGrid } from 'schema';

export interface ImageTilesGridProps {
  node: ImageTilesGrid;
}

const ImageTilesGridComponent: React.FunctionComponent<ImageTilesGridProps> = ({
  node,
}: ImageTilesGridProps): ReactElement => {
  return (
    <div className="flex flex-row">
      {node.imageTiles?.map(imageTile => {
        return (
          <div key={imageTile.title} className="flex-1 p-4">
            <ImageTileWithDesc node={imageTile} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageTilesGridComponent;
