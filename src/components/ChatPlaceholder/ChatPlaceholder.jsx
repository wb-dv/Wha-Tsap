import styles from './ChatPlaceholder.module.css';

import chatIcon from '../../../icon.svg';

function ChatPlaceholder() {
  return (
    <div className={styles.chatPlaceholder}>
      <img className={styles.img} src={chatIcon} alt="Картинка-заглушка" />
      <h1>Wha-Tsap</h1>
      <span>Отправляйте и получайте сообщения без необходимости оставлять телефон подключённым.</span>
    </div>
  );
}

export default ChatPlaceholder;
