import { useEffect } from 'react';
import { useDeleteMessageNotificationMutation, useReceiveMessageNotificationQuery } from '../store/api/messageApi';
import { useActions } from './useActions';
import { useInstanceInfo } from './useInstanceInfo';

export const useReceivengMessages = () => {
  const { idInstance, apiTokenInstance } = useInstanceInfo();

  const instanceIsExist = idInstance && apiTokenInstance;

  const { data, isFetching } = useReceiveMessageNotificationQuery(
    { idInstance, apiTokenInstance },
    {
      skip: !instanceIsExist,
      pollingInterval: 1,
    }
  );

  const [deleteNotification] = useDeleteMessageNotificationMutation();

  const { addMessage } = useActions();

  useEffect(() => {
    if (instanceIsExist && !isFetching && data?.receiptId) {
      addMessage({
        chatId: data.body.senderData.chatId,
        textMessage: data.body.messageData?.textMessageData?.textMessage,
        timestamp: data.body.timestamp,
        type: 'incoming',
        idMessage: data.body.idMessage,
        receiptId: data.receiptId,
      });
      deleteNotification({ idInstance, apiTokenInstance, receiptId: data.receiptId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return { data, isFetching };
};
