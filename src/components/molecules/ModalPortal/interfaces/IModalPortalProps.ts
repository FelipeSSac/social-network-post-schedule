import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface IModalPortalProps {
  children: ReactElement;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  callback?: Function;
}
