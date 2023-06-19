import Avatar from '../Avatar/Avatar';
import styles from './ChatHeader.module.css';
import avatarPlaceholder from '../../assets/user_placeholder.svg';

function ChatHeader({ avatarSrc, name, phone }) {
  return (
    <header className={ styles.chatHeader }>
      <Avatar src={ avatarSrc || avatarPlaceholder } />
      { name || phone }
    </header>
  );
}

export default ChatHeader;
