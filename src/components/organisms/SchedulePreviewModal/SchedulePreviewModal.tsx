import { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';

import { PostPreviewForecast } from '../../molecules/PostPreviewForecast';

import { ISchedulePreviewModalProps } from './interfaces/ISchedulePreviewModalProps';
import { ISocialNetwork } from '../PostSocialNetwork/interfaces/ISocialNetwork';
import { IPostPreviewItemsKeys } from '../../molecules/PostPreviewForecast/interfaces/IPostPreviewItems';
import { Container } from './styles';

const SchedulePreviewModal = forwardRef<
  HTMLDivElement, ISchedulePreviewModalProps
>(({
  schedule,
}, ref) => {
  const [socialNetworks, setSocialNetworks] = useState([] as ISocialNetwork[]);

  const ensureSocialNetwork = async () => {
    try {
      const response = await axios.get('../db/social-networks.json');
      const data = response?.data?.data || [];

      setSocialNetworks(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Opps ocorreu um erro ao acessar os dados!');
    }
  };

  useEffect(() => {
    ensureSocialNetwork();
  }, []);
  return (
    <Container ref={ref}>
      {(schedule?.social_network_key?.length > 0 && socialNetworks?.length > 0) && (
        schedule.social_network_key.map((id: string) => {
          const socialNetwork = socialNetworks.find((findSocialNetwork) => (
            findSocialNetwork.id === id
          ));

          if (!socialNetwork) {
            return null;
          }

          const key = uuid();

          return (
            <PostPreviewForecast
              key={key}
              socialNetwork={socialNetwork?.name as IPostPreviewItemsKeys}
              formData={schedule}
            />
          );
        })
      )}
    </Container>
  );
});

export default SchedulePreviewModal;
