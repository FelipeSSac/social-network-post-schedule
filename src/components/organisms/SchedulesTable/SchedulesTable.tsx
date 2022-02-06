import { Container } from './styles';

export default function SchedulesTable() {
  return (
    <Container>
      <thead className="schedules-table__thead">
        <tr>
          <th className="schedules-table__th">Redes sociais</th>
          <th className="schedules-table__th">Mídia</th>
          <th className="schedules-table__th">Texto</th>
          <th className="schedules-table__th">Data</th>
          <th className="schedules-table__th">Ações</th>
          <th className="schedules-table__th">Status</th>
        </tr>
      </thead>
      <tbody className="schedules-table__tbody">
        <tr className="schedules-table__tr">
          <td className="schedules-table__td">1</td>
          <td className="schedules-table__td">cell2_1</td>
          <td className="schedules-table__td">cell3_1</td>
          <td className="schedules-table__td">cell4_1</td>
          <td className="schedules-table__td">cell5_1</td>
          <td className="schedules-table__td">cell6_1</td>
        </tr>
        <tr className="schedules-table__tr">
          <td className="schedules-table__td">1</td>
          <td className="schedules-table__td">cell2_2</td>
          <td className="schedules-table__td">cell3_2</td>
          <td className="schedules-table__td">cell4_2</td>
          <td className="schedules-table__td">cell5_2</td>
          <td className="schedules-table__td">cell6_2</td>
        </tr>
        <tr className="schedules-table__tr">
          <td className="schedules-table__td">1</td>
          <td className="schedules-table__td">cell2_3</td>
          <td className="schedules-table__td">cell3_3</td>
          <td className="schedules-table__td">cell4_3</td>
          <td className="schedules-table__td">cell5_3</td>
          <td className="schedules-table__td">cell6_3</td>
        </tr>
        <tr className="schedules-table__tr">
          <td className="schedules-table__td">1</td>
          <td className="schedules-table__td">cell2_4</td>
          <td className="schedules-table__td">cell3_4</td>
          <td className="schedules-table__td">cell4_4</td>
          <td className="schedules-table__td">cell5_4</td>
          <td className="schedules-table__td">cell6_4</td>
        </tr>
        <tr className="schedules-table__tr">
          <td className="schedules-table__td">1</td>
          <td className="schedules-table__td">cell2_5</td>
          <td className="schedules-table__td">cell3_5</td>
          <td className="schedules-table__td">cell4_5</td>
          <td className="schedules-table__td">cell5_5</td>
          <td className="schedules-table__td">cell6_5</td>
        </tr>
      </tbody>
    </Container>
  );
}
