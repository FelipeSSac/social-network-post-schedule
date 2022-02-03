import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8.939375rem 0 6.5625rem 0;


  @media (max-width: 605px) {
    padding: 8.939375rem 0 2rem 0;
  }

  .home__image{
    width: 95%;
    max-width: 25.5rem;
    height: auto;
    aspect-ratio: 408 / 461 ;
    margin: 0 auto;

    display: block;
  }

  .home__button{
    margin: 4.495625rem auto 0;

    display: block;
  }
`;
