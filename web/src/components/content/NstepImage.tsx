import React, { ReactElement } from 'react';
import { NstepImage } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';

interface NstepImageProps {
  node: NstepImage;
}

const NstepImageComponent: React.FunctionComponent<NstepImageProps> = ({
  node,
}: NstepImageProps): ReactElement => {
  if (!node) {
    return <></>;
  }
  return <img src={imageUrlPathFor(node)} alt={node.alt} />;
};

export default NstepImageComponent;
