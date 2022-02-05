import { cloneElement } from 'react';

import { ButtonTypes } from './utils/ButtonTypes';

import { ISocialNetworkButtonProps } from './interfaces/ISocialNetworkButtonProps';
import { Container } from './styles';

export default function SocialNetworkButton({
  socialNetwork, ...rest
}: ISocialNetworkButtonProps) {
  const { icon, label } = ButtonTypes[socialNetwork];

  return (
    <Container type="button" {...rest}>
      {cloneElement(icon, {
        alt: label,
        className: 'social-network-button__icon'
      })}
    </Container>
  );
}
