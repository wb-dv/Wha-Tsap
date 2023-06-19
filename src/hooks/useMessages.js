import { useSelector } from 'react-redux';

export const useMessages = (chatId) => {
  const messages = useSelector((store) => store.messages[chatId]?.list);

  return messages;
};
