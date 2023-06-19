import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

import { useActions } from '../../hooks/useActions';
import { useChats } from '../../hooks/useChats';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Error from '../Error/Error';

import styles from './AddChat.module.css';
import { phoneToId } from '../../helpers/formatPhone';

function AddChat() {
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const { addChat } = useActions();
  const [, phones] = useChats();

  const buttonCustomClasses = useMemo(() => [styles.button], []);
  const inputCustomClasses = useMemo(() => [styles.input], []);

  const phoneIsExisted = 'Номер уже добавлен';
  const notValidFormatPhone = 'Формат номера телефона - 79998889988';

  const changePhone = useCallback((e) => {
    setPhone(e.target.value);
  }, []);


  const addAndValidatePhone = useCallback(() => {
    if (phones[phone]) {
      setIsValidPhone(phoneIsExisted);
    } else if (/^\d{11}$/.test(phone)) {
      addChat({phone, id: phoneToId(phone)});
      setIsValidPhone(true);
      setPhone('');
    } else {
      setIsValidPhone(notValidFormatPhone);
    }
  }, [addChat, phone, phones]);

  const onDownEnter = useCallback((e) => {
    if(e.keyCode === 13) {
      addAndValidatePhone()
    }
  }, [addAndValidatePhone])

  return (
    <div className={styles.addChat}>
      <Input 
        value={phone} 
        onChange={changePhone} 
        customClasses={inputCustomClasses} 
        placeholder="Введите номер телефона"
        onKeyUp={onDownEnter}
      />
      <Button customClasses={buttonCustomClasses} onClick={addAndValidatePhone}>
        +
      </Button>
      {typeof isValidPhone === 'string' && <Error message={isValidPhone} />}
    </div>
  );
}

export default AddChat;
