import { Header } from '../../organisms/Header';
import { Router } from '../../../routes';
import { Container } from './styles';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main className="layout__main">
        <Router />
      </main>
    </Container>
  );
}
