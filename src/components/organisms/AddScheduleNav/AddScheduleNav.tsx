import { Button } from '../../atoms/Button';

import { Container } from './styles';

export default function AddScheduleNav() {
  return (
    <Container>
      <div className="add-schedule-nav__wrapper">
        <Button
          type="button"
          textColor="var(--primary-blue)"
          textOnly
        >
          Cancelar
        </Button>
        <Button
          type="button"
          textColor="var(--primary-blue)"
          outlined
        >
          Salvar rascunho
        </Button>
        <Button
          type="button"
        >
          Agendar
        </Button>
      </div>
    </Container>
  );
}
