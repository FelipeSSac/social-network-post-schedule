import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';

import { PostPreviewForecast } from '../../molecules/PostPreviewForecast';

import Empty from '../../../assets/images/postPreview/pp-empty.png';

import { IPostPreviewProps } from './interfaces/IPostPreviewProps';
import { ISocialNetwork } from '../PostSocialNetwork/interfaces/ISocialNetwork';
import { IPostPreviewItemsKeys } from '../../molecules/PostPreviewForecast/interfaces/IPostPreviewItems';
import { Container } from './styles';

export default function PostPreview({
  formData,
}: IPostPreviewProps) {
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
    <Container>
      {formData?.social_network_key?.length > 0 && socialNetworks?.length > 0 ? (
        <div className="post_preview__posts-container">
          {formData.social_network_key.map((id: string) => {
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
              formData={formData}
            />
            );
          })}
        </div>
      ) : (
        <>
          <h1 className="post-preview__empty-text">
            Aguardando conteúdo.
            Informe os canais e as mídias desejadas para visualização.
          </h1>
          <img
            src={Empty}
            alt="no preview"
            className="post-preview__empty-img"
          />
        </>
      )}
    </Container>
  );
}
