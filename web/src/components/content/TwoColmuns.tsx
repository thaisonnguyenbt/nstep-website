import RichText from 'components/structure/RichText';
import React, { ReactElement } from 'react';
import { TwoColums } from 'schema';

export interface TwoColumsProps {
  node: TwoColums;
}

const TwoColumns: React.FunctionComponent<TwoColumsProps> = ({
  node,
}: TwoColumsProps): ReactElement => {
  if (!node) return <></>;
  const { dropColumnScreenSize, leftPercentage = '1/2' } = node;
  let rightPercentage = '1/2';
  switch (leftPercentage) {
    case '1/3':
      rightPercentage = '2/3';
      break;
    case '1/4':
      rightPercentage = '3/4';
      break;
    case '1/5':
      rightPercentage = '4/5';
      break;
    case '1/6':
      rightPercentage = '5/6';
      break;
    case '2/3':
      rightPercentage = '1/3';
      break;
    case '3/4':
      rightPercentage = '1/4';
      break;
    case '4/5':
      rightPercentage = '1/5';
      break;
    case '5/6':
      rightPercentage = '1/6';
      break;
    default:
      break;
  }

  const responsiveAt = dropColumnScreenSize?.toLowerCase();

  const dropClassName = responsiveAt
    ? `block ${responsiveAt}:inline-block`
    : 'block';

  return (
    <div>
      <div className="block">
        <div
          className={`${dropClassName} ${responsiveAt}:w-${leftPercentage} pr-4 align-top`}
        >
          <RichText blocks={node.leftContent} />
        </div>
        <div
          className={`${dropClassName} ${responsiveAt}:w-${rightPercentage}`}
        >
          <RichText blocks={node.rightContent} />
        </div>
      </div>
      {/* template literals in tailwindcss doesn't work - force include it in this way */}
      <div className="block h-0">
        <div className="sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block" />
        <div className="sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block" />
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2" />
        <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3" />
        <div className="sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3" />
        <div className="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4" />
        <div className="sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4" />
        <div className="sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5" />
        <div className="sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5" />
        <div className="sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-1/6" />
        <div className="sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 2xl:w-5/6" />
      </div>
    </div>
  );
};

export default TwoColumns;
