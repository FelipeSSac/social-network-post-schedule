import { IStatusLabelProps } from './interfaces/IStatusLabelProps';
import { Container, StatusDot } from './styles';

export default function StatusLabel({
  status
}: IStatusLabelProps) {
  return (
    <Container>
      <div className="status-label__container">
        <StatusDot
          color={status?.color}
        />
        <span className="status-label__text">
        {status?.name}
        </span>
      </div>
    </Container>
  );
}
