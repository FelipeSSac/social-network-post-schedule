import {
  ChangeEvent, DragEvent, useEffect, useRef, useState
} from 'react';

import { Button } from '../../atoms/Button';

import CloudIcon from '../../../assets/images/imageUpload/iu-cloud.svg';

import { IImageUploadProps } from './interfaces/IImageUploadProps';
import { Container } from './styles';

export default function ImageUpload({
  setFormData,
}: IImageUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  const [currentImage, setCurrentImage] = useState<File | undefined>();

  const handleButtonClick = () => {
    if (fileInput && fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      setCurrentImage(files[0]);
    }
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const { files } = event.dataTransfer;

    if (files.length > 0) {
      setCurrentImage(files[0]);
    }
  };

  const handleRemoveImage = () => {
    setCurrentImage(undefined);
  };

  const preventDefaultFunction = (event: any) => {
    event.preventDefault();
  };

  const onDragOver = preventDefaultFunction;
  const onDragEnter = preventDefaultFunction;
  const onDragLeave = preventDefaultFunction;

  const onImageUpload = () => {
    if (currentImage) {
      setFormData((prevState) => ({
        ...prevState,
        media: currentImage,
        mediaUrl: URL.createObjectURL(currentImage)
      }));

      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      media: undefined,
      mediaUrl: undefined
    }));
  };

  useEffect(() => {
    onImageUpload();
  }, [currentImage]);

  return (
    <Container
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {currentImage && (
      <button
        type="button"
        className="image-upload__close"
        onClick={handleRemoveImage}
      >
        &#10006;
      </button>
      )}
      <img
        src={CloudIcon}
        alt="Upload cloud"
        className="image-upload__cloud"
      />
      <h1
        className="image-upload__text"
      >
        {currentImage
          ? currentImage.name
          : 'Arraste e solte uma imagem aqui ou clique no botão abaixo'}
      </h1>
      <Button
        textColor="var(--primary-blue)"
        outlined
        className="image-upload__button"
        onClick={handleButtonClick}
      >
        Pesquisar imagens
      </Button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleInputChange}
        className="image-upload__input"
      />
    </Container>
  );
}
