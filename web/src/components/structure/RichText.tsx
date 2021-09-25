import React from 'react';
import clientConfig from 'config/client-config';
import BasePortableText from '@sanity/block-content-to-react';
import serializers, {
  SanitySerializers,
} from 'components/structure/Serializers';
import { RichText } from 'schema';

export interface RichTextProps {
  blocks?: RichText;
  customSerializers?: SanitySerializers;
}

const PortableText: React.FunctionComponent<RichTextProps> = ({
  blocks,
  customSerializers,
}: RichTextProps) => {
  const dynamicSerializers: SanitySerializers = {
    ...customSerializers,
    types: {
      ...serializers.types,
      ...customSerializers?.types,
    },
    marks: { ...serializers.marks, ...customSerializers?.marks },
  };
  return (
    <BasePortableText
      blocks={blocks}
      serializers={dynamicSerializers}
      {...clientConfig.sanity}
    />
  );
};

export default PortableText;
