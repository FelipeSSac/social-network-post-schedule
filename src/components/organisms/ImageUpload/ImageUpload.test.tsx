import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { ImageUpload } from '.';

describe('Image Upload', () => {
  const setState = jest.fn();

  let file: File;

  beforeEach(() => {
    file = new File(["[/path/]"], "file.png", { type: "image/png" });
  });

  afterEach(cleanup);


  it('should render the Image Upload', () => {
    const { baseElement } = render(
      <ImageUpload setFormData={setState} />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it(`should have a file at input's file list`, async () => {
    const { getByTestId } = render(
      <ImageUpload setFormData={setState} />
    );

    const input = getByTestId('file-input');

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    let image = document.getElementById("file-input");

    expect(image).toBeInTheDocument();
    // @ts-expect-error
    expect(image.files.length).toBe(1);
    // @ts-expect-error
    expect(image.files[0].name).toBe("file.png");
  })

  it(`should render file's name`, async () => {
    const { getByTestId, getByText } = render(
      <ImageUpload setFormData={setState} />
    );

    const input = getByTestId('file-input');

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const fileName = getByText('file.png');

    expect(fileName).toBeInTheDocument();
  })

  it(`should have button to remove file`, async () => {
    const { getByTestId, getByText } = render(
      <ImageUpload setFormData={setState} />
    );

    const input = getByTestId('file-input');

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const button = getByText('✖');

    expect(button).toBeInTheDocument();
  })

  it(`should remove file from state`, async () => {
    const { getByTestId, getByText } = render(
      <ImageUpload setFormData={setState} />
    );

    const input = getByTestId('file-input');

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const button = getByText('✖');

    fireEvent.click(button);

    const filePlaceholder = getByText('Arraste e solte uma imagem aqui ou clique no botão abaixo');

    expect(filePlaceholder).toBeInTheDocument();
  })

  it(`should get file by data transfer`, async () => {
    const { getByText } = render(
      <ImageUpload setFormData={setState} />
    );

    const receiver = getByText('Arraste e solte uma imagem aqui ou clique no botão abaixo');

    fireEvent.drop(receiver, {
      dataTransfer: {files: [file] },
    })

    const filename = getByText('file.png');

    expect(filename).toBeInTheDocument();
  })

  it(`should remove data transfer's file from state`, () => {
    const { getByText } = render(
      <ImageUpload setFormData={setState} />
    );

    const receiver = getByText('Arraste e solte uma imagem aqui ou clique no botão abaixo');

    fireEvent.drop(receiver, {
      dataTransfer: {files: [file] },
    })

    const button = getByText('✖');

    fireEvent.click(button);

    const filePlaceholder = getByText('Arraste e solte uma imagem aqui ou clique no botão abaixo');

    expect(filePlaceholder).toBeInTheDocument();
  })
})
