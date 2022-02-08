import { UserBox } from '../../molecules/UserBox';

import Logo from '../../../assets/images/header/Header-logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="header__wrapper">
        <img src={Logo} alt="mLabs" className="header__logo" />
        <UserBox userName="Anselmo Carlos" />
      </div>
    </Container>
  );
}
