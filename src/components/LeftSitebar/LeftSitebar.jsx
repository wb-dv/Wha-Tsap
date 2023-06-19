import AddChat from '../AddChat/AddChat';
import ChatsList from '../ChatsList/ChatsList';
import styles from './LeftSitebar.module.css';

function LeftSitebar() {
  return (
    <aside className={styles.leftSitebar}>
      <AddChat />
      <ChatsList />
    </aside>
  );
}

export default LeftSitebar;
