import {
  createContext, useMemo, useState
} from 'react';

import { IPostContext } from './interfaces/IPostContext';
import { IPostProviderProps } from './interfaces/IPostProviderProps';
import { IScheduleData } from './interfaces/IScheduleData';

export const PostContext = createContext<IPostContext>({} as IPostContext);

export function PostProvider({
  children,
}: IPostProviderProps) {
  const [schedulePost, setSchedulePost] = useState(() => {
    const jsonSchedules = localStorage.getItem('@mLabs: Schedules');

    if (jsonSchedules) {
      return JSON.parse(jsonSchedules) as IScheduleData[];
    }

    return [] as IScheduleData[];
  });

  const addSchedule = (data: IScheduleData) => {
    setSchedulePost((prevState) => {
      const newState = [...prevState];

      newState.unshift(data);

      localStorage.setItem('@mLabs: Schedules', JSON.stringify(newState));

      return newState;
    });
  };

  const contextValue = useMemo(() => ({
    schedulePost,
    addSchedule,
  } as IPostContext), [schedulePost]);

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
}
