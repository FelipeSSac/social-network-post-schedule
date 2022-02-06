import { ICardProps } from './interfaces/ICardProps';
import { Container } from './styles';

export default function Card({
  title, children, ...rest
}: ICardProps) {
  return (
    <Container {...rest}>
      <div className="card__header">
        <h1 className="card__header__title">
          {title}
        </h1>
      </div>
      <div className="card__content">
        {children}
      </div>
    </Container>
  );
}
