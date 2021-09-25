/* eslint-disable import/no-unresolved */
import React from 'react';
import sanity from '../../../sanity.json';
import BasePortableText from '@sanity/block-content-to-react';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

const RichText = ({ blocks }) => {
  return <BasePortableText blocks={blocks} {...sanity.api} />;
};

export default RichText;
