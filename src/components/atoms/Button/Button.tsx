import { IButtonProps } from './interfaces/IButtonProps';
import { Container } from './styles';

export default function Button({
  type = 'button',
  children,
  ...rest
}: IButtonProps) {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}
