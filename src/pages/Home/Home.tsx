import { Button } from '../../components/atoms/Button';

import EmptyIconRaw from '../../assets/images/home/home-empty.svg';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <img src={EmptyIconRaw} alt="Empty" className="home__image" />
      <Button
        type="button"
        className="home__button"
        bgColor="var(--primary-orange)"
      >
        Agendar Post
      </Button>
    </Container>
  );
}
