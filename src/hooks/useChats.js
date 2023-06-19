import { useSelector } from 'react-redux';

export const useChats = () => {
  const { list, phones } = useSelector((store) => store.chats);
  return [list, phones];
};
