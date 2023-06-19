import ChatPlaceholder from '../ChatPlaceholder/ChatPlaceholder';
import ChatHeader from '../ChatHeader/ChatHeader';
import Loader from '../Loader/Loader';
import MessageList from '../MessageList/MessageList';
import SendingMessages from '../SendingMessages/SendingMessages';

import styles from './Chat.module.css';

import { useActiveChat } from '../../hooks/useActiveChat';
import { formatPhone } from '../../helpers/formatPhone';
import { memo } from 'react';

const Chat = memo(function Chat() {
  const {
    resultUserInfo: { data: userInfo, isSuccess: userInfoSuccess, isLoading: userInfoLoading },
    resultMessages: { data: messages, isSuccess: messagesSuccess, isLoading: messagesLoading },
  } = useActiveChat();

  const isSuccess = userInfoSuccess && messagesSuccess;
  const isLoading = userInfoLoading || messagesLoading;

  console.log('messages', messages);

  return (
    <main className={`${styles.chat} ${isSuccess ? styles.lightenBg : ''}`}>
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <>
          <ChatHeader avatarSrc={userInfo.avatar} name={userInfo.name} phone={userInfo.chatId ? formatPhone(userInfo.chatId) : ''} />
          <MessageList chatId={userInfo.chatId} messages={messages} />
          <SendingMessages chatId={userInfo.chatId} />
        </>
      ) : (
        <ChatPlaceholder />
      )}
    </main>
  );
});

export default Chat;
