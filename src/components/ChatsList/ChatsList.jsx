import { useChats } from '../../hooks/useChats';
import { useInstanceInfo } from '../../hooks/useInstanceInfo';
import { useGetChatsQuery } from '../../store/api/chatsApi';

import ChatItem from '../ChatItem/ChatItem';

import styles from './ChatsList.module.css';

function ChatsList() {
  const [chatsList,] = useChats();

  const instanceInfo = useInstanceInfo();

  const { data, isSuccess } = useGetChatsQuery(instanceInfo);

  return (
    <ul className={styles.chatsList}>
      {
        isSuccess && chatsList.map((chat, i) => (
          <ChatItem key={chat.phone} id={chat.id} name={chat.name} num={i} />
        )).reverse()
      }
      {isSuccess ? 
        data.map((chat, i) => (
         <ChatItem key={chat.id} id={chat.id} name={chat.name} num={i} />
        ))
        : 
        <div>Загрузка</div>
      }
    </ul>
  );
}

export default ChatsList;
