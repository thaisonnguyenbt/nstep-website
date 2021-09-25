import React, { ReactElement } from 'react';
import { HighlightBoxesBanner } from '../../generated-schema';
import RichText from './RichText';

interface HighlightBoxesBannerProps {
  value: HighlightBoxesBanner;
}

const HighlightBoxesBannerComponent: React.FunctionComponent<HighlightBoxesBannerProps> =
  ({ value }: HighlightBoxesBannerProps): ReactElement => {
    return (
      <div className="flex flex-wrap justify-around highlight-boxes-banner gap-9">
        {value.contentBoxes?.map((box, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[22.25rem] pt-12 px-10 pb-10 rounded-lg bg-white shadow-red-top-curl"
            >
              <RichText blocks={box.content} />
            </div>
          );
        })}
      </div>
    );
  };
export default HighlightBoxesBannerComponent;
