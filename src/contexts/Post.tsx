import {
  createContext, useCallback, useMemo, useState
} from 'react';

import { IPostContext } from './interfaces/IPostContext';
import { IPostProviderProps } from './interfaces/IPostProviderProps';
import { IScheduleData } from './interfaces/IScheduleData';

export const PostContext = createContext<IPostContext>({} as IPostContext);

export function PostProvider({
  children,
}: IPostProviderProps) {
  const [schedulePost, setSchedulePost] = useState([] as IScheduleData[]);

  const addSchedule = useCallback((data: IScheduleData) => {
    setSchedulePost((prevState) => {
      const newState = [...prevState];

      newState.unshift(data);

      return newState;
    });
  }, []);

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
