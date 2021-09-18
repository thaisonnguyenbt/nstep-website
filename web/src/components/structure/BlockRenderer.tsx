import React, { ReactElement } from 'react';

import BasePortableText from '@sanity/block-content-to-react';

const BlockRenderer: React.FunctionComponent<any> = (
  props: any
): ReactElement => {
  const { children, style = 'normal' } = props.node;

  if (children && children.length) {
    const block = children[0];

    if (block.marks && block.marks.includes('text-center')) {
      const className = { className: `text-center` };
      if (/^h\d/.test(style)) {
        return React.createElement(style, className, props.children);
      }
      return React.createElement('div', className, props.children);
    }
  }

  // Fall back to default handling
  return BasePortableText.defaultSerializers.types.block(props);
};

export default BlockRenderer;
