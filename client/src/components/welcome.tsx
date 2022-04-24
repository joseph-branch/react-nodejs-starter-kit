import React, { useEffect, useMemo } from 'react';

import { useProcedure } from '../hooks/useProcedure';

export const Welcome: React.FC = () => {
  const { execute: getProjectName, result: project } = useProcedure<null, string>('projectName');

  useEffect(() => {
    getProjectName(null);
  }, [getProjectName]);

  const projectName: string = useMemo(() => {
    if (!project) return '';

    return project;
  }, [project]);

  return (
    <div className="h-full flex items-center">
      <p className="flex flex-1 justify-center text-xl font-bold text-blue-300 gap-1">
        Welcome to project <span className="italic">{projectName}</span>
      </p>
    </div>
  );
};
