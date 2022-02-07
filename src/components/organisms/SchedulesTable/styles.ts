import styled from 'styled-components';

export const Container = styled.table`
  width: 95%;
  margin: 3.5rem auto 0;

  .schedules-table__thead{
    height: 4.0625rem;

    position: relative;
    z-index: 5;

    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .schedules-table__th,
  .schedules-table__td{
    padding: 1rem;

    position: relative;

    &:not(:first-of-type):before{
      content: "";
      width: 1px;
      height: 102.5%;

      display: block;

      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: var(--tertiary-gray);
    }
  }

  .schedules-table__tbody{
    position: relative;
    z-index: 4;
  }

  .schedules-table__tr{
    height: 4.375rem;
    margin: 0;

    &:nth-child(even){
      background-color: #FFF;
    }

    &:nth-child(odd){
      background-color: #F2F2F2;
    }
  }

  .schedules-table__social-network{
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .schedules-table__image{
    width: 100%;
    max-width: 3.125rem;
    height: auto;
    max-height: 3.125rem;
    aspect-ratio: 1;
    margin: 0 auto;

    display: block;

    object-fit: cover;
  }

  .schedules-table__text,
  .schedules-table__date{
    font-size: 0.875rem;

    white-space: wrap;
    word-wrap: break-word;
  }

  .schedules-table__date{
    text-align: center;
  }

  .schedules-table__preview-button{
    width: fit-content;
    height: fit-content;

    display: inline;

    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    color: var(--primary-blue);
    font-size: 0.875rem;
    text-decoration: underline;
    text-align: center;
  }
`;
