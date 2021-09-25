/* eslint-disable import/no-unresolved */
import ImageTileWithDesc from './ImageTileWithDesc';
import React, { ReactElement } from 'react';
import { ImageTilesGrid } from '../../generated-schema';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

export interface ImageTilesGridProps {
  value: ImageTilesGrid;
}

const ImageTilesGridComponent: React.FunctionComponent<ImageTilesGridProps> = ({
  value,
}: ImageTilesGridProps): ReactElement => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem] mt-[4.5rem] mb-[12.25rem]">
      {value.imageTiles?.map(imageTile => {
        return (
          <div key={imageTile.title}>
            <ImageTileWithDesc value={imageTile} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageTilesGridComponent;
