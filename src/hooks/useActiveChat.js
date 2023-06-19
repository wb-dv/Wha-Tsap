import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetUserInfoMutation } from '../store/api/contactApi';
import { useGetChatMessagesMutation } from '../store/api/messageApi';
import { useInstanceInfo } from './useInstanceInfo';

export const useActiveChat = () => {
  const id = useSelector((store) => store.activeChat);

  const { idInstance, apiTokenInstance } = useInstanceInfo();

  const [getActiveUser, resultUserInfo] = useGetUserInfoMutation();

  const [getChatMessages, resultMessages] = useGetChatMessagesMutation();

  useEffect(() => {
    if (id) {
      const params = { idInstance, apiTokenInstance, chatId: id };

      getActiveUser(params);
      getChatMessages(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { resultUserInfo, resultMessages };
};
