import React from 'react';
import clientConfig from 'config/client-config';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from 'components/structure/Serializers';
import { RichText } from 'schema';

export interface RichTextProps {
  blocks?: RichText;
}

const PortableText: React.FunctionComponent<RichTextProps> = ({
  blocks,
}: RichTextProps) => {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  );
};

export default PortableText;
