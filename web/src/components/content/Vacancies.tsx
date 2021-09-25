import React, { ReactElement } from 'react';
import { Vacancies } from 'schema';

interface VacanciesProps {
  node: Vacancies;
}

const VacanciesComponent: React.FunctionComponent<VacanciesProps> = ({
  node,
}: VacanciesProps): ReactElement => {
  return (
    <div>
      <div className="text-sm leading-[120%] tracking-[0.25rem] uppercase">
        {node.header}
      </div>
      <div className="">
        {node.vacanciesList?.map(vacancy => {
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
