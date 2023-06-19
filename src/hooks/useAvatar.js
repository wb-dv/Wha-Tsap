import { useEffect } from 'react';
import { useGetUserAvatarMutation } from '../store/api/contactApi';
import { useInstanceInfo } from './useInstanceInfo';

export const useAvatar = (num, id) => {
  const { idInstance, apiTokenInstance } = useInstanceInfo();

  const [getUserAvatar, result] = useGetUserAvatarMutation();

  useEffect(() => {
    getUserAvatar({ idInstance, apiTokenInstance, chatId: id })
      .unwrap()
      .catch(() => {
        setTimeout(() => getUserAvatar({ idInstance, apiTokenInstance, chatId: id }), 1000 * (num / 10));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};
