import styled from 'styled-components';

import CalendarIcon from '../../../assets/images/date/date-calendar.svg';
import ClockIcon from '../../../assets/images/date/date-clock.svg';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  gap: 1rem;


  .post-date__time,
  .post-date__date{
    height: 2.625rem;

    position: relative;

    border: 1px solid var(--secondary-gray);
    border-radius: 0.2rem;
    outline: 0;

    font-size: 0.8rem;
  }

  .post-date__date{
    flex: 3;
    padding: 0 0 0 2rem;

    &::-webkit-calendar-picker-indicator {
      width: 0.75rem;
      height: 0.818125rem;

      position: absolute;
      top: calc(50% + -0.5190625rem);
      left: -1rem;

      background-image: url(${CalendarIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .post-date__time{
    flex: 2;
    padding: 0 0 0 2.2rem;

    &::-webkit-calendar-picker-indicator {
      width: 0.726875rem;
      height: 0.7925rem;

      position: absolute;
      top: calc(50% + -0.50625rem);
      left: 0;

      background-image: url(${ClockIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  @media (max-width: 1234px) {
    .post-date__date::-webkit-calendar-picker-indicator{
      left: -1.4rem;
    }

    .post-date__time::-webkit-calendar-picker-indicator{
      top: calc(50% + -0.6190625rem);
      left: -0.1rem;
    }
  }

  @media (max-width: 1024px) {
    .post-date__date{
      padding: 0 0 0 2.5rem;

      &::-webkit-calendar-picker-indicator{
        top: calc(50% + -0.6090625rem);
      }
    }
  }

  @media (max-width: 565px) {
    .post-date__date::-webkit-calendar-picker-indicator{
      left: -1.8rem;
    }

    .post-date__time{
      padding: 0 0 0 2.6rem;

      &::-webkit-calendar-picker-indicator{
        top: calc(50% + -0.6190625rem);
        left: -0.1rem;
      }
    }
  }
`;
