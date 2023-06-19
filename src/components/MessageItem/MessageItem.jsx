import { memo } from 'react';
import styles from './MessageItem.module.css';

const MessageItem = memo(function MessageItem({ text, type, tail, time }) {
  const date = new Date(time * 1000);

  const messageClass = [styles.messageItem];

  switch (type) {
    case 'incoming':
      messageClass.push(styles.incoming);
      break;
    case 'outgoing':
      messageClass.push(styles.outgoing);
      break;
    default:
  }

  if (tail) messageClass.push(styles.tail);

  return (
    <li className={messageClass.join(' ')}>
      <div>{text}</div>
      <time className={styles.time} dateTime={date.toLocaleString()}>
        {date.toLocaleTimeString().slice(0, 5)}
      </time>
    </li>
  );
});

export default MessageItem;
