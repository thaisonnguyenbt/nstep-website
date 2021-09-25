import React, { ReactElement } from 'react';
import { HighlightBoxesBanner } from 'schema';
import RichText from 'components/structure/RichText';
import { SanitySerializers } from 'components/structure/Serializers';

interface HighlightBoxesBannerProps {
  node: HighlightBoxesBanner;
}

const customSerializers: SanitySerializers = {
  // eslint-disable-next-line react/display-name
  list: (props: { type: string; children: ReactElement }) => (
    <ul className="my-5 text-base list-disc ml-7 font-lato text-gray-primary text-opacity-56">
      {props.children}
    </ul>
  ),
  // eslint-disable-next-line react/display-name
  listItem: (props: { type: string; children: ReactElement }) => (
    <li>{props.children}</li>
  ),
};
const HighlightBoxesBannerComponent: React.FunctionComponent<HighlightBoxesBannerProps> =
  ({ node }: HighlightBoxesBannerProps): ReactElement => {
    return (
      <div className="flex flex-wrap justify-around highlight-boxes-banner gap-9">
        {node.contentBoxes?.map((box, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[22.25rem] pt-12 px-10 pb-10 rounded-lg bg-white shadow-red-top-curl"
            >
              <RichText
                blocks={box.content}
                customSerializers={customSerializers}
              />
            </div>
          );
        })}
      </div>
    );
  };
export default HighlightBoxesBannerComponent;
