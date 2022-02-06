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
`;
