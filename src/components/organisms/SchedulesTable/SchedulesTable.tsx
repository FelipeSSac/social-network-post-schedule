import axios from 'axios';
import {
  useEffect, useState
} from 'react';
import { toast } from 'react-hot-toast';

import { SocialNetworkIcon } from '../../atoms/SocialNetworkIcon';
import { StatusLabel } from '../../atoms/StatusLabel';

import { ensureDateTimePtBr } from '../../../utils/ensureDateTimePtBr';

import { ISchedulesTableProps } from './interfaces/ISchedulesTableProps';
import { IStatusData } from './interfaces/IStatusData';
import { ISocialNetwork } from '../PostSocialNetwork/interfaces/ISocialNetwork';
import { Container } from './styles';
import { IIconTypesKeys } from '../../atoms/SocialNetworkIcon/interfaces/IIconTypes';

export default function SchedulesTable({
  schedules, previewSchedule, sortByDate, sortByStatus
}: ISchedulesTableProps) {
  const [statusData, setStatusData] = useState([
  ] as IStatusData[]);

  const [socialNetworkConfig, setSocialNetworkConfig] = useState([] as ISocialNetwork[]);
  const [statusConfig, setStatusConfig] = useState([] as IStatusData[]);

  const ensureStatus = async () => {
    try {
      const response = await axios.get('../db/schedules-status.json');
      const data = response?.data?.data || [];

      setStatusConfig(data);

      const findStatus = schedules.map(({ status_key }) => {
        const status = data.find((item: IStatusData) => item.id === status_key);

        return status;
      });

      setStatusData((
        schedules.map((item, index) => (findStatus[index] as IStatusData))
      ));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Opps ocorreu um erro ao acessar os dados!');
    }
  };

  const ensureSocialNetwork = async () => {
    try {
      const response = await axios.get('../db/social-networks.json');
      const data = response?.data?.data || [];

      setSocialNetworkConfig(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Opps ocorreu um erro ao acessar os dados!');
    }
  };

  useEffect(() => {
    ensureStatus();
    ensureSocialNetwork();
  }, [schedules]);

  return (
    <Container>
      <thead className="schedules-table__thead">
        <tr>
          <th className="schedules-table__th">Redes sociais</th>
          <th className="schedules-table__th">Mídia</th>
          <th className="schedules-table__th">Texto</th>
          <th className="schedules-table__th schedules-table__th-click" onClick={sortByDate}>Data</th>
          <th className="schedules-table__th">Ações</th>
          <th className="schedules-table__th schedules-table__th-click" onClick={sortByStatus}>Status</th>
        </tr>
      </thead>
      <tbody className="schedules-table__tbody">
        {schedules?.length > 0 && schedules.map((schedule, index) => (
        <tr className="schedules-table__tr" key={schedule.id}>
          <td className="schedules-table__td">
            <div className="schedules-table__social-network">
            {socialNetworkConfig?.length > 0 && schedule?.social_network_key?.map((key) => {
              const socialNetwork = socialNetworkConfig.find((item) => item.id === key);

              return (
                <SocialNetworkIcon
                  key={key}
                  socialNetwork={socialNetwork?.name as IIconTypesKeys}
                />
              );
            })}
            </div>
          </td>
          <td className="schedules-table__td">
            {schedule?.media && (
            <img
              src={schedule?.media}
              alt="Post preview"
              className="schedules-table__image"
            />
            )}
          </td>
          <td className="schedules-table__td">
            <p className="schedules-table__text">
              {schedule.text}
            </p>
          </td>
          <td className="schedules-table__td">
            <p className="schedules-table__date">
              {schedule.publication_date
                && ensureDateTimePtBr(schedule.publication_date)}
            </p>
          </td>
          <td className="schedules-table__td">
            <button
              type="button"
              className="schedules-table__preview-button"
              onClick={() => previewSchedule(schedule)}
            >
              Preview
            </button>
          </td>
          <td className="schedules-table__td">
            {(statusConfig.length > 0) && (
              <StatusLabel status={statusData[index]} />
            )}
          </td>
        </tr>
        ))}
      </tbody>
    </Container>
  );
}
