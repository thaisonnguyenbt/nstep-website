/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { NstepImage } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

interface NstepImageProps {
  value: NstepImage;
}

const NstepImageComponent: React.FunctionComponent<NstepImageProps> = ({
  value,
}: NstepImageProps): ReactElement => {
  if (!value) {
    return <></>;
  }
  return <img src={imageUrlPathFor(value)} alt={value.alt} />;
};

export default NstepImageComponent;
