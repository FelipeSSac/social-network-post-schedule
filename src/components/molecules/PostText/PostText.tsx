import { useRef, useState } from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';

import { PickerGroupNames } from './utils/PickerGroupNames';
import { PickerStyle } from './utils/PickerStyle';

import { Container } from './styles';

export default function PostText() {
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

      area.value = `${textBeforeCursor}${emoji}${textAfterCursor}`;
    }
  };

  return (
    <Container>
      <button
        className="post-text__picker-button"
        type="button"
        onClick={togglePicker}
      >
        V
      </button>
      {showPicker && (
      <Picker
        onEmojiClick={onEmojiClick}
        groupNames={PickerGroupNames}
        pickerStyle={PickerStyle}
        disableSearchBar
        disableAutoFocus
      />
      )}
      <textarea
        ref={textareaRef}
        className="post-text__textarea"
        placeholder="Aqui vai o texto descritivo desse post"
      />
    </Container>
  );
}
