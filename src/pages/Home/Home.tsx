import { useNavigate } from 'react-router';

import { Button } from '../../components/atoms/Button';

// @ts-expect-error
import EmptyIconRaw from '../../assets/images/home/home-empty.svg?component';

import { Container } from './styles';

export default function Home() {
  const navigate = useNavigate();

  const handleNewSchedule = () => {
    navigate('/newSchedule');
  };

  return (
    <Container>
      <EmptyIconRaw className="home__image" />
      <Button
        type="button"
        className="home__button"
        bgColor="var(--primary-orange)"
        onClick={handleNewSchedule}
      >
        Agendar Post
      </Button>
    </Container>
  );
}
