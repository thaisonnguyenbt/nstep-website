import React, { ReactElement, useEffect, useState } from 'react';
import { TeamQuotesCarousel } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';
import RichText from 'components/structure/RichText';

export interface TeamQuotesCarouselProps {
  node: TeamQuotesCarousel;
}

const TeamQuotesCarouselComponent: React.FunctionComponent<TeamQuotesCarouselProps> =
  ({ node }: TeamQuotesCarouselProps): ReactElement => {
    const image = node.backgroundImage;

    const [quoteSelectedIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
      if (node && node.quotes && node.quotes.length > 0) {
        setQuoteIndex(0);
      }
    }, [node]);

    const renderIndicators = () => {
      return (
        <div className="flex h-3 gap-2">
          {node?.quotes?.map((quote, index) => {
            return (
              <div
                key={quote._key}
                className={`rounded bg-white ${
                  index == quoteSelectedIndex
                    ? 'w-2.5 h-2.5 opacity-100'
                    : 'w-2 h-2 opacity-[0.16]'
                }`}
              ></div>
            );
          })}
        </div>
      );
    };

    const nextItem = () => {
      const nextIndex = quoteSelectedIndex - 1;
      if (nextIndex > -1 && nextIndex < (node?.quotes?.length ?? 0)) {
        setQuoteIndex(nextIndex);
      }
    };

    const backItem = () => {
      const nextIndex = quoteSelectedIndex + 1;
      if (nextIndex > -1 && nextIndex < (node?.quotes?.length ?? 0)) {
        setQuoteIndex(nextIndex);
      }
    };

    const getQuoteSelected: any = () => {
      return (
        node &&
        node.quotes &&
        node.quotes.length > 0 &&
        node.quotes[quoteSelectedIndex]
      );
    };

    return (
      <div
        className="relative w-screen bg-cover w-screen-container"
        style={{
          backgroundImage: `url('${imageUrlPathFor(image)}')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="w-[32%] min-w-[28.8rem] container ml-auto mr-[12.5rem] h-[45rem]">
          <div className="h-[26.1rem] w-[28.8rem] relative bg-red-gradient shadow-1 top-[25rem] rounded-lg p-12">
            <div
              key={getQuoteSelected()?.name}
              className="pb-8 border-b border-white border-opacity-[0.24]"
            >
              <div className="font-lato italic text-xl leading-[140%] h-[10.5rem] overflow-y-scroll no-scrollbar">
                <RichText blocks={getQuoteSelected()?.quote} />
              </div>
              <div className="font-bold leading-[120%] mt-8">
                {getQuoteSelected()?.name}
              </div>
              <div className="leading-[120%] mt-1 text-white opacity-[0.72]">
                {getQuoteSelected()?.position}
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
