import { useEffect, useState } from 'react';

import { Button } from '../../atoms/Button';

import { IAddScheduleNavProps } from './interfaces/IAddScheduleNavProps';
import { Container } from './styles';

export default function AddScheduleNav({
  formData
}: IAddScheduleNavProps) {
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleEnableSubmit = () => {
    if (!!formData?.publication_day
      && !!formData?.publication_time
      && formData?.social_network_key?.length > 0
      && disableSubmit
    ) {
      setDisableSubmit(false);

      return;
    }

    if (!disableSubmit && (
      !formData?.publication_day
      || !formData?.publication_time
      || formData?.social_network_key?.length === 0
    )) {
      setDisableSubmit(true);
    }
  };

  useEffect(() => {
    handleEnableSubmit();
  }, [formData]);

  return (
    <Container>
      <nav className="add-schedule-footer__nav">
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
          type="submit"
          disabled={disableSubmit}
        >
          Agendar
        </Button>
      </nav>
    </Container>
  );
}
