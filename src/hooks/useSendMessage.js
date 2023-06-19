import { useSendMessageMutation } from '../store/api/messageApi';
import { useActions } from './useActions';
import { useInstanceInfo } from './useInstanceInfo';

export const useSendMessage = (chatId, textMessage) => {
  const { addMessage } = useActions();

  const { idInstance, apiTokenInstance } = useInstanceInfo();

  const [send] = useSendMessageMutation();

  const sendMessage = () => {
    if (textMessage.trim() !== '') {
      addMessage({
        chatId,
        textMessage,
        timestamp: Math.trunc(Date.now() / 1000),
        type: 'outgoing',
        idMessage: Date.now(),
      });
      send({ idInstance, apiTokenInstance, chatId, message: textMessage });
    }
  };

  return { sendMessage };
};
