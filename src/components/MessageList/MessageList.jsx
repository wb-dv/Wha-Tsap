import { useEffect } from 'react';
import { useState } from 'react';
import { useMessages } from '../../hooks/useMessages';

import MessageItem from '../MessageItem/MessageItem';

import styles from './MessageList.module.css';

function MessageList({ chatId, messages }) {
  const localMessages = useMessages(chatId);
  const [lastMessage, setLastMessage] = useState(null);
  
  useEffect(() => {
    setLastMessage(messages[0]);
  }, [messages])

  return (
    <ul className={styles.messageList}>
      {
        localMessages?.map((message, i, arr) => {
          let tail;
          if(i === 0 && lastMessage) {
            tail = lastMessage.type !== message.type;
          } else {
            tail = arr[i - 1]?.type !== message.type;
          }
  
          return <MessageItem 
            key={message.idMessage || message.timestamp} 
            text={message.textMessage || ''}
            type={message.type} 
            tail={tail} 
            time={message.timestamp} 
          />;
        }).reverse()
      }
      {
        messages.map((message, i, arr) => {
          const tail = arr[i + 1]?.type !== message.type;

          return <MessageItem 
            key={message.idMessage} 
            text={message.textMessage || ''} 
            type={message.type} 
            tail={tail} 
            time={message.timestamp} 
          />;
        })
      }
    </ul>
  );
}

export default MessageList;
