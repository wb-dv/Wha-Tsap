import { memo } from 'react';
import styles from './Container.module.css';

const Container = memo(function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
});

export default Container;
