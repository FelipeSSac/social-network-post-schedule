import { cloneElement } from 'react';
import { IconTypes } from './utils/IconTypes';

import { ISocialNetworkIconProps } from './interfaces/ISocialNetworkIconProps';
import { Container } from './styles';

export default function SocialNetworkIcon({
  socialNetwork,
}: ISocialNetworkIconProps) {
  const { icon, color } = IconTypes[socialNetwork];

  return (
    <Container color={color}>
      {cloneElement(icon, {
        className: 'social-network-icon__icon'
      })}
    </Container>
  );
}
