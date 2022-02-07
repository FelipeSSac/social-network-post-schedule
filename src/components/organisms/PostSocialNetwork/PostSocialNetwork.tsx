import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { SocialNetworkButton } from '../../atoms/SocialNetworkButton';

import { IPostSocialNetworkProps } from './interfaces/IPostSocialNetworkProps';
import { IButtonTypesKeys } from '../../atoms/SocialNetworkButton/interfaces/IButtonTypes';
import { ISocialNetwork } from './interfaces/ISocialNetwork';
import { Container } from './styles';

export default function PostSocialNetwork({
  setFormData
}: IPostSocialNetworkProps) {
  const [socialNetworks, setSocialNetworks] = useState([] as ISocialNetwork[]);

  const toggleSelect = (id: string) => {
    const index = socialNetworks.findIndex((socialNetwork) => socialNetwork.id === id);

    socialNetworks[index].selected = !socialNetworks[index].selected;

    setSocialNetworks([...socialNetworks]);

    setFormData((prevState) => {
      const newState = { ...prevState };

      if (newState?.social_network_key?.includes(socialNetworks[index].id)) {
        const newArray = newState.social_network_key
          .filter((filterItem) => filterItem !== socialNetworks[index].id);

        newState.social_network_key = newArray;

        return newState;
      }

      newState.social_network_key = [
        ...prevState.social_network_key,
        socialNetworks[index].id
      ];

      return newState;
    });
  };

  const ensureSocialNetworks = async () => {
    try {
      const response = await axios.get('../db/social-networks.json');
      const data = response?.data?.data?.map((item: ISocialNetwork) => ({
        ...item,
        selected: false,
      })) || [];

      setSocialNetworks(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Opps ocorreu um erro ao acessar os dados!');
    }
  };

  useEffect(() => {
    ensureSocialNetworks();
  }, []);

  return (
    <Container>
      {socialNetworks.length > 0 ? (
        socialNetworks?.map((socialNetwork: ISocialNetwork) => (
          <SocialNetworkButton
            key={socialNetwork?.id}
            socialNetwork={socialNetwork?.name as IButtonTypesKeys}
            disabled={socialNetwork?.status === 'disabled'}
            selected={socialNetwork?.selected}
            onClick={() => toggleSelect(socialNetwork?.id)}
          />
        ))
      ) : (
          <span>Carregando...</span>
      )}
    </Container>
  );
}
