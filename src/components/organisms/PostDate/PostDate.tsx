import { ChangeEvent } from 'react';
import { IPostDateProps } from './interfaces/IPostDateProps';
import { Container } from './styles';

export default function PostDate({
  setFormData,
}: IPostDateProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container>
      <input
        type="date"
        className="post-date__date"
        name="publication_day"
        onChange={onChange}
      />
      <input
        type="time"
        className="post-date__time"
        name="publication_time"
        onChange={onChange}
      />
    </Container>
  );
}
