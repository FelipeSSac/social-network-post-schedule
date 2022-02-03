import DefaultUser from '../../../assets/images/header/header-user.png';

import { IUserBoxProps } from './interfaces/IUserBoxProps';
import { Container } from './styles';

export default function UserBox({
  userImage, userName
}: IUserBoxProps) {
  return (
    <Container>
      <img
        src={userImage || DefaultUser}
        alt={userName}
        className="user-box__image"
      />
      <h1
        className="user-box__name"
      >
        {userName}
      </h1>
    </Container>
  );
}
