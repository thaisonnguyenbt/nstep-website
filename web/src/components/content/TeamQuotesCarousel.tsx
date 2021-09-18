import React, { ReactElement } from 'react';
import { TeamQuotesCarousel } from 'schema';
import { imageUrlFor } from 'utils/CommonUtils';
import RichText from 'components/structure/RichText';

export interface TeamQuotesCarouselProps {
  node: TeamQuotesCarousel;
}

const TeamQuotesCarouselComponent: React.FunctionComponent<TeamQuotesCarouselProps> =
  ({ node }: TeamQuotesCarouselProps): ReactElement => {
    const image = node.backgroundImage?.asset;

    return (
      <div>
        <img src={imageUrlFor(image).url() || ''} />
        {node.quotes?.map(quote => {
          return (
            <div key={quote.name}>
              <RichText blocks={quote.quote} />
              <div>{quote.name}</div>
              <div>{quote.position}</div>
            </div>
          );
        })}
      </div>
    );
  };

export default TeamQuotesCarouselComponent;
