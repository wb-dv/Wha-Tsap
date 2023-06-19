import { memo } from 'react';
import styles from './Button.module.css';

const Button = memo(function Button({ children, customClasses, ...props }) {
  return (
    <button className={`${styles.button} ${Array.isArray(customClasses) ? customClasses.join(' ') : ''}`} {...props} type="button">
      {children}
    </button>
  );
});

export default Button;
