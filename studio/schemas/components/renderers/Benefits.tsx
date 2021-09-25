/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { BenefitItem, Benefits, SanityKeyed } from '../../generated-schema';
import clsx from 'clsx';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

export interface BenefitsProps {
  value: Benefits;
}

const BenefitsComponent: React.FunctionComponent<BenefitsProps> = ({
  value,
}: BenefitsProps): ReactElement => {
  const renderItems = (
    items: Array<SanityKeyed<BenefitItem>>
  ): ReactElement => {
    const cloneItems = [...items];
    var half_length = Math.ceil((cloneItems.length || 0) / 2);
    const leftRightItems = [cloneItems.splice(0, half_length), cloneItems];
    return (
      <>
        {leftRightItems.map((partialItems, index) => (
          <div
            key={index}
            className={clsx(
              'w-full md:w-1/2 flex flex-col flex-wrap flex-grow flex-shrink items-start',
              { 'md:pr-2 lg:pr-5': index === 0 },
              { 'md:pl-2 lg:pl-5': index === 1 }
            )}
          >
            {renderPartialItems(partialItems)}
          </div>
        ))}
      </>
    );
  };
  const renderPartialItems = (
    items?: Array<SanityKeyed<BenefitItem>>
  ): ReactElement => {
    return (
      <>
        {items?.map(benefit => {
          return (
            <div
              key={benefit.shortDesc}
              className="relative flex flex-col flex-grow flex-shrink w-full mb-3 benefits__item md:mb-11 pl-7"
            >
              <h4 className="mt-2 font-bold dark:text-white leading-normal-12 ">
                {benefit.shortDesc}
              </h4>
              <div className="mt-2 dark:text-white text-base font-normal leading-normal dark:opacity-[0.56] ">
                {benefit.description}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col flex-grow flex-shrink w-full md:w-1/3">
        <div className="w-full max-w-[22.75rem] flex flex-col flex-grow flex-shrink ">
          <h2 className="heading-2 dark:text-white">{value.title}</h2>
          <div className="my-3 md:my-4 text-lg font-normal leading-normal dark:text-white opacity-[0.56]">
            {value.description}
          </div>
        </div>
      </div>
      {value.benefitItems && (
        <div className="flex flex-wrap items-start flex-grow flex-shrink w-full md:w-2/3">
          {renderItems(value.benefitItems)}
        </div>
      )}
    </div>
  );
};

export default BenefitsComponent;
