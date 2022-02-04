import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 4.1875rem;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #fff;

  .add-schedule-nav__wrapper{
    width: 95%;
    max-width: 1354px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
`;
