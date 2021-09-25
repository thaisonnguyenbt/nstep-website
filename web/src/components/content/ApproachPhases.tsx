import React, { ReactElement } from 'react';
import { ApproachPhases } from 'schema';

interface ApproachPhasesProps {
  node: ApproachPhases;
}

const ApproachPhasesComponent: React.FunctionComponent<ApproachPhasesProps> = ({
  node,
}: ApproachPhasesProps): ReactElement => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-12">
      {node.phases?.map((phase, index) => {
        const isLatest =
          index == (node && node.phases && node.phases?.length - 1);
        return (
          <div key={phase._key} className="flex">
            <div className="relative w-px h-6 border-l-4 border-red-primary bottom-3"></div>
            <div
              key={phase.action}
              className={`flex-1 border-t border-gray-primary border-opacity-50 pt-12 ${
                !isLatest ? 'pr-12' : 'pr-6'
              }`}
            >
              <div className="font-lato text-sm font-light leading-[120%] tracking-[0.125rem] uppercase text-gray-primary">
                {phase.header}
              </div>
              <h3 className="text-xl font-semibold leading-[120%] text-red-primary mt-4">
                {phase.action}
              </h3>
              <div className="font-lato text-gray-primary text-opacity-[0.56] mt-5">
                {phase.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApproachPhasesComponent;
