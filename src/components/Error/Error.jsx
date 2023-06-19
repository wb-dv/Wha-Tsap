import styles from './Error.module.css';

function Error({ message }) {
  return <div className={styles.error}>{message}</div>;
}

export default Error;
