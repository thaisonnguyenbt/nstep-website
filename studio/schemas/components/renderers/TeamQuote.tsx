/* eslint-disable import/no-unresolved */
import RichText from './RichText';
import React, { ReactElement } from 'react';
import { TeamQuote } from '../../generated-schema';
import { imageUrlPathFor } from '../../utils/CommonUtils';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

interface TeamQuoteProps {
  value: TeamQuote;
}

const TeamQuoteComponent: React.FunctionComponent<TeamQuoteProps> = ({
  value,
}: TeamQuoteProps): ReactElement => {
  return (
    <div>
      <RichText blocks={value.quote} />
      <h3>{value.name}</h3>
      <h4>{value.position}</h4>
      <img src={imageUrlPathFor(value.picture)} />
    </div>
  );
};

export default TeamQuoteComponent;
