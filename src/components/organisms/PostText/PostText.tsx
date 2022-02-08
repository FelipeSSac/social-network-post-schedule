import { ChangeEvent, useRef, useState } from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { useOutside } from '../../../hooks/useOutside';

import Emoji from '../../../assets/images/postText/Pt-emoji.png';

import { PickerGroupNames } from './utils/PickerGroupNames';
import { PickerStyle } from './utils/PickerStyle';

import { IPostTextProps } from './interfaces/IPostTextProps';
import { Container } from './styles';

export default function PostText({
  setFormData,
}: IPostTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [showPicker, setShowPicker] = useState(false);
  const [lastSelection, setLastSelection] = useState(0);

  const togglePicker = () => {
    setShowPicker((prevState) => (!prevState));
  };

  const onEmojiClick = (_: any, emojiObject: IEmojiData) => {
    if (textareaRef && textareaRef.current) {
      const { emoji } = emojiObject;
      const area = textareaRef.current;

      const cursorPosition = area.selectionStart || lastSelection;
      setLastSelection(cursorPosition);

      const textBeforeCursor = area.value
        .substring(0, cursorPosition);
      const textAfterCursor = area.value
        .substring(cursorPosition, area.value.length);

      const value = `${textBeforeCursor}${emoji}${textAfterCursor}`;

      area.value = value;

      setFormData((prevState) => ({
        ...prevState,
        text: value,
      }));
    }
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  useOutside(containerRef, () => setShowPicker(false));

  return (
    <Container ref={containerRef}>
      <button
        className="post-text__picker-button"
        type="button"
        onClick={togglePicker}
      >
        <img
          className="post-text__picker-button__image"
          src={Emoji}
          alt="Emoji"
        />
      </button>
      {showPicker && (
      <Picker
        onEmojiClick={onEmojiClick}
        groupNames={PickerGroupNames}
        pickerStyle={PickerStyle}
        preload
        disableSearchBar
        disableAutoFocus
      />
      )}
      <textarea
        ref={textareaRef}
        className="post-text__textarea"
        onChange={onChange}
        data-testid="post-text"
        placeholder="Aqui vai o texto descritivo desse post"
      />
    </Container>
  );
}
