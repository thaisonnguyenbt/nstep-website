/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { Vacancies } from '../../generated-schema';
import '../../../styles/tailwind.min.css?raw';
import '../../../styles/components.css?raw';

interface VacanciesProps {
  value: Vacancies;
}

const VacanciesComponent: React.FunctionComponent<VacanciesProps> = ({
  value,
}: VacanciesProps): ReactElement => {
  return (
    <div className="w-176">
      <div className="text-sm leading-[120%] tracking-[0.25rem] uppercase">
        {value.header}
      </div>
      <div className="">
        {value.vacanciesList?.map(vacancy => {
          return (
            <div
              className="py-14 border-b dark:border-white dark:border-opacity-[0.08]"
              key={vacancy.jobTitle}
            >
              <div className="flex flex-row gap-6 mb-2">
                <div className="text-lg  leading-[120%] font-semibold dark:text-white dark:text-opacity-50">
                  {vacancy.employmentType}
                </div>
                <div className="text-lg  leading-[120%] font-semibold dark:text-white dark:text-opacity-50">
                  {vacancy.country}
                </div>
              </div>
              <div className="text-2xl font-semibold leading-[120%]">
                {vacancy.jobTitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacanciesComponent;
