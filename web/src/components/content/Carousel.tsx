import TwoColumns from 'components/content/TwoColmuns';
import RichText from 'components/structure/RichText';
import React, { ReactElement, useEffect, useState } from 'react';
import { Carousel } from 'schema';
import clsx from 'clsx';

interface CarouselProps {
  node: Carousel;
}
const CarouselComponent: React.FunctionComponent<CarouselProps> = ({
  node,
}: CarouselProps): ReactElement => {
  const [itemSelectedIndex, setItemSelectedIndex] = useState(0);

  useEffect(() => {
    if (node && node.content && node.content.length > 0) {
      setItemSelectedIndex(0);
    }
  }, [node]);

  const renderIndicators = () => {
    return (
      <div className="flex h-8 gap-2">
        {node?.content?.map((item, index) => {
          return (
            <button
              key={item._key}
              className={clsx(
                'rounded-full w-8 h-8',
                { 'bg-red-primary opacity-100': index === itemSelectedIndex },
                {
                  'bg-gray-primary opacity-[0.16]': index !== itemSelectedIndex,
                }
              )}
              onClick={() => selectItem(index)}
            >
              <div className="text-sm font-bold text-white">{index + 1}</div>
            </button>
          );
        })}
      </div>
    );
  };

  const selectItem = index => {
    if (index > -1 && index < (node?.content?.length ?? 0)) {
      setItemSelectedIndex(index);
    }
  };

  const getItemSelected: any = () => {
    return (
      node &&
      node.content &&
      node.content.length > 0 &&
      node.content[itemSelectedIndex]
    );
  };

  return (
    <div>
      {renderIndicators()}
      <div className="flex-1 h-12 mt-5 border-t border-opacity-25 border-gray-primary"></div>
      <div className="">
        <div key={getItemSelected()?.title}>
          <div className="flex">
            {getItemSelected()?.isSingleColumn &&
              getItemSelected()?.content && (
                <RichText blocks={getItemSelected()?.content} />
              )}
            {!getItemSelected()?.isSingleColumn &&
              getItemSelected()?.twoColumnsContent && (
                <TwoColumns node={getItemSelected()?.twoColumnsContent} />
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
