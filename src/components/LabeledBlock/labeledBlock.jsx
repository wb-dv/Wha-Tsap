import styles from './LabeledBlock.module.css';

function LabeledBlock({ children }) {
  return <div className={styles.labeledBlock}>{children}</div>;
}

export default LabeledBlock;
