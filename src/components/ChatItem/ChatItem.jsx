import styles from './ChatItem.module.css';
import userPlaceholder from '../../assets/user_placeholder.svg';

import { formatPhone } from '../../helpers/formatPhone';

// import { useAvatar } from '../../hooks/useAvatar';
import { useActions } from '../../hooks/useActions';
import { memo } from 'react';

import Avatar from '../Avatar/Avatar';

// eslint-disable-next-line no-unused-vars
const ChatItem = memo(function ChatItem({ id, name, num }) {
  const formatedPhone = formatPhone(id);

  // const { data, isSuccess } = useAvatar(num, id);
  // const avatar = isSuccess ? data.urlAvatar : userPlaceholder;

  const { setActiveChat, clearMessages } = useActions();

  const activateChat = () => {
    setActiveChat(id);
    clearMessages(id);
  };

  return (
    <li onClick={activateChat} className={styles.chatItem}>
      <Avatar src={userPlaceholder} />
      {name || formatedPhone}
    </li>
  );
});

export default ChatItem;
