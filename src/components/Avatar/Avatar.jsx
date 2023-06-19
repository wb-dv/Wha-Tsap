import { memo } from 'react';
import styles from './Avatar.module.css';

const Avatar = memo(function Avatar({ src }) {
  return <img className={styles.avatar} src={src} alt="Аватар" />;
});

export default Avatar;
