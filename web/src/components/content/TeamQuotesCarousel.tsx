import React, { ReactElement, useEffect, useState } from 'react';
import { TeamQuote, TeamQuotesCarousel } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';
import RichText from 'components/structure/RichText';
import clsx from 'clsx';

export interface TeamQuotesCarouselProps {
  node: TeamQuotesCarousel;
}

const TeamQuotesCarouselComponent: React.FunctionComponent<TeamQuotesCarouselProps> =
  ({ node }: TeamQuotesCarouselProps): ReactElement => {
    const image = node.backgroundImage;

    const [itemSelectedIndex, setItemSelectedIndex] = useState(0);

    useEffect(() => {
      if (node && node.quotes && node.quotes.length > 0) {
        setItemSelectedIndex(0);
      }
    }, [node]);

    const renderIndicators = () => {
      return (
        <div className="flex h-3 gap-2">
          {node?.quotes?.map((quote, index) => {
            return (
              <div
                key={quote._key}
                className={clsx(
                  'rounded bg-white',
                  { 'w-2.5 h-2.5 opacity-100': index === itemSelectedIndex },
                  { 'w-2 h-2 opacity-[0.16]': index !== itemSelectedIndex }
                )}
              ></div>
            );
          })}
        </div>
      );
    };

    const nextItem = () => {
      const nextIndex = itemSelectedIndex - 1;
      if (nextIndex > -1 && nextIndex < (node?.quotes?.length ?? 0)) {
        setItemSelectedIndex(nextIndex);
      }
    };

    const backItem = () => {
      const nextIndex = itemSelectedIndex + 1;
      if (nextIndex > -1 && nextIndex < (node?.quotes?.length ?? 0)) {
        setItemSelectedIndex(nextIndex);
      }
    };

    const itemSelected: any =
      node &&
      node.quotes &&
      node.quotes.length > 0 &&
      node.quotes[itemSelectedIndex];

    return (
      <div
        className="relative w-screen bg-cover w-screen-container bg-no-repeat pt-1/2-vw h-0"
        style={{
          backgroundImage: `url('${imageUrlPathFor(image)}')`,
        }}
      >
        <div className="bottom-[-7rem] w-full-w-p min-w-full-w-p sm:w-[32%] sm:min-w-[28.8rem] absolute container h-auto right-auto md:right-[13.889%]">
          <div className="relative bg-red-gradient shadow-1 rounded-lg p-4 md:p-12 h-auto">
            <div
              key={itemSelected?.name}
              className="pb-8 border-b border-white border-opacity-[0.24]"
            >
              <div className="font-lato italic text-xl leading-[140%] h-[10.5rem] overflow-y-scroll no-scrollbar">
                <RichText blocks={itemSelected?.quote} />
              </div>
              <div className="font-bold leading-[120%] mt-8">
                {itemSelected?.name}
              </div>
              <div className="leading-[120%] mt-1 text-white opacity-[0.72]">
                {itemSelected?.position}
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              {renderIndicators()}
              <div className="flex gap-2">
                <button onClick={nextItem}>
                  <img src="images/ic_back_white_rounded.png" />
                </button>
                <button onClick={backItem}>
                  <img src="images/ic_next_white_rounded.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default TeamQuotesCarouselComponent;
