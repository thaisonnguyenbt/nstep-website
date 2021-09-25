import ImageTileWithDesc from 'components/content/ImageTileWithDesc';
import React, { ReactElement } from 'react';
import { ImageTilesGrid } from 'schema';
import clsx from 'clsx';

export interface ImageTilesGridProps {
  node: ImageTilesGrid;
}

const ImageTilesGridComponent: React.FunctionComponent<ImageTilesGridProps> = ({
  node,
}: ImageTilesGridProps): ReactElement => {
  const { imageTiles } = node;
  if (!imageTiles) return <></>;
  const cols = imageTiles.length > 3 ? 4 : 3;
  return (
    <div
      className={clsx(
        'grid gap-[4.5rem] mt-[4.5rem] mb-[12.25rem] sm:grid-cols-1 md:grid-cols-2',
        { 'lg:grid-cols-3': cols === 3 },
        { 'lg:grid-cols-4': cols === 4 }
      )}
    >
      {imageTiles?.map(imageTile => {
        return (
          <div key={imageTile.title}>
            <ImageTileWithDesc node={imageTile} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageTilesGridComponent;
