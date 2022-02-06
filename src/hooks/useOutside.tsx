/* eslint-disable no-unused-vars */
import { RefObject, useEffect } from 'react';

export function useOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      event.stopPropagation();

      const element = ref?.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
