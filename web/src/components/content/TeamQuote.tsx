import RichText from 'components/structure/RichText';
import React, { ReactElement } from 'react';
import { TeamQuote } from 'schema';
import { imageUrlPathFor } from 'utils/CommonUtils';

interface TeamQuoteProps {
  node: TeamQuote;
}

const TeamQuoteComponent: React.FunctionComponent<TeamQuoteProps> = ({
  node,
}: TeamQuoteProps): ReactElement => {
  return (
    <div className="border-l-2 border-red-primary pl-7 py-8 pb-8">
      <RichText blocks={node.quote} />
      <div className="flex mt-7">
        <div className="mr-5">
          <img src={imageUrlPathFor(node.picture)} />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h3 className="font-bold text-sm leading-4 text-gray-primary">
            {node.name}
          </h3>
          <h4 className="mt-1 text-sm leading-5 text-gray-primary text-opacity-72">
            {node.position}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TeamQuoteComponent;
