import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { instanceActions } from '../store/instanceSlice/instanceSlice';
import { chatsActions } from '../store/chatsSlice/chatsSlice';
import { activeChatActions } from '../store/activeChatSlice/activeChatSlice';
import { messagesActions } from '../store/messagesSlice/messagesSlice';

const allActions = {
  ...instanceActions,
  ...chatsActions,
  ...activeChatActions,
  ...messagesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
