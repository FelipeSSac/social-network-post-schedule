import styled from 'styled-components';

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

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .new-schedule-form__aside{
    flex: 1;
  }

  .new-schedule-form__aside__container{
    width: 100%;
    height: fit-content;

    display: flex;
    gap: 2.5rem;

    @media (max-width: 508px) {
      flex-direction: column;
    }
  }

  .new-schedule-form__post-text,
  .new-schedule-form__image-upload{
    margin-top: 2.5rem;
  }

  .new-schedule-form__post-preview{
    max-width: 649px;
    flex: 1;
  }
`;
