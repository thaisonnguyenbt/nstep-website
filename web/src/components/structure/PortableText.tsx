import React from 'react';
import clientConfig from 'config/client-config';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from 'components/structure/Serializers';
import { BodyPortableText } from 'schema';

export interface PortableTextProps {
  blocks?: BodyPortableText;
}

const PortableText: React.FunctionComponent<PortableTextProps> = ({
  blocks,
}: PortableTextProps) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;
