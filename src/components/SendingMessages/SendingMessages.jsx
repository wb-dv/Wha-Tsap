import { useCallback, useState, useMemo, useRef } from 'react';
import { useSendMessage } from '../../hooks/useSendMessage';

import Button from '../Button/Button';

import styles from './SendingMessages.module.css';

function SendingMessages({ chatId }) {
  const [message, setMessage] = useState('');
  const editableDivRef = useRef();

  const customButtonClasses = useMemo(() => [styles.button], []);

  const inputClassName = message ? `${styles.input} ${styles.noPlaceholder}` : styles.input;

  const onInput = (e) => {
    setMessage(e.target.textContent);
  };

  const { sendMessage } = useSendMessage(chatId, message);

  const onClick = useCallback(() => {
    sendMessage();
    editableDivRef.current.textContent = '';
    setMessage('');
  }, [sendMessage]);

  const onDownEnter = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className={styles.sendingMessages}>
      <div 
        onInput={onInput} 
        onKeyUp={onDownEnter} 
        ref={editableDivRef} 
        className={inputClassName} 
        contentEditable="true" 
        tabIndex={1} 
      />
      <Button onClick={onClick} customClasses={customButtonClasses} />
    </div>
  );
}

export default SendingMessages;
