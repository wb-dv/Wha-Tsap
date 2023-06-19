import { memo } from 'react';
import styles from './Input.module.css';

const Input =  memo(function Input({ myRef, customClasses, ...props }) {
  return <input 
    className={`${styles.input} ${Array.isArray(customClasses) ? customClasses.join(' ') : ''}`} ref={myRef}
    {...props} 
    type="text" 
  />;
})

export default Input;
