import styled from 'styled-components';

import CalendarIcon from '../../../assets/images/date/date-calendar.svg';
import ClockIcon from '../../../assets/images/date/date-clock.svg';

export const Container = styled.form`
  width: 100%;
  height: fit-content;

  .new-schedule-form__wrapper{
    width: 95%;
    max-width: 1354px;
    height: fit-content;
    padding: 3.125rem 0 7.9375rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
  }

  .new-schedule-form__aside{
    flex: 1;
  }

  .new-schedule-form__aside__container{
    width: 100%;
    height: fit-content;

    display: flex;
    gap: 2.5rem
  }

  .new-schedule-form__post-text,
  .new-schedule-form__image-upload{
    margin-top: 2.5rem;
  }

  .new-schedule-form__post-preview{
    max-width: 649px;
    flex: 1;
  }

  .new-schedule-form__post-social-media__container{
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    gap: 1rem
  }

  .new-schedule-form__post-date__container{
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    gap: 1rem
  }

  .new-schedule-form__post-date__time,
  .new-schedule-form__post-date__date{
    height: 2.625rem;

    position: relative;

    border: 1px solid var(--secondary-gray);
    border-radius: 0.2rem;
    outline: 0;

    font-size: 0.8rem;
  }

  .new-schedule-form__post-date__date{
    flex: 3;
    padding: 0 0 0 2rem;

    &::-webkit-calendar-picker-indicator {
      width: 0.75rem;
      height: 0.818125rem;

      position: absolute;
      top: calc(50% + -0.4090625rem);
      left: -0.9rem;

      background: url(${CalendarIcon}) no-repeat;
    }
  }

  .new-schedule-form__post-date__time{
    flex: 2;
    padding: 0 0 0 2.2rem;

    &::-webkit-calendar-picker-indicator {
      width: 0.726875rem;
      height: 0.7925rem;

      position: absolute;
      top: calc(50% + -0.39625rem);
      left: 0.1rem;

      background: url(${ClockIcon}) no-repeat;
    }
  }

  .new-schedule-form__post-text__textarea{
    width: 100%;
    height: 9.125rem;
    padding: 0.5rem 0.8rem;

    border: 1px solid var(--secondary-gray);
    border-radius: 0.2rem;
    outline: 0;
    resize: none;

    font-size: 0.875rem;
  }
`;
