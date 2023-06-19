import { memo } from 'react';
import { useRef } from 'react';
import { setToLocaleStorage } from '../../helpers/localStorage';
import { useActions } from '../../hooks/useActions';

import Button from '../Button/Button';
import Input from '../Input/Input';
import LabeledBlock from '../LabeledBlock/labeledBlock';

import styles from './RegistrationForm.module.css';

const RegistrationForm = memo(function RegistrationForm() {
  const idInstance = useRef();
  const apiTokenInstance = useRef();

  const { setInstanceInfo } = useActions();

  const saveData = () => {
    const instanceInfo = {
      idInstance: idInstance.current.value,
      apiTokenInstance: apiTokenInstance.current.value,
    };
    if (instanceInfo.idInstance && instanceInfo.apiTokenInstance) {
      setToLocaleStorage(instanceInfo);
      setInstanceInfo(instanceInfo);
    }
  };

  return (
    <form className={styles.form}>
      <header className={styles.header}>Введите ваши учетные данные из системы GREEN-API</header>
      <LabeledBlock>
        <label className={styles.label} htmlFor="idInstance">
          idInstance:
        </label>
        <Input id="idInstance" myRef={idInstance} defaultValue="" customClasses={[styles.input]} />
      </LabeledBlock>
      <LabeledBlock>
        <label className={styles.label} htmlFor="apiTokenInstance">
          apiTokenInstance:
        </label>
        <Input id="apiTokenInstance" myRef={apiTokenInstance} defaultValue="" customClasses={[styles.input]} />
      </LabeledBlock>
      <Button onClick={saveData} customClasses={[styles.button]}>
        Сохранить
      </Button>
    </form>
  );
});

export default RegistrationForm;
