import { memo } from 'react';
import { useReceivengMessages } from '../../hooks/useReceivengMessages';

import Chat from '../Chat/Chat';
import LeftSitebar from '../LeftSitebar/LeftSitebar';
// import styles from './WhaTsap.module.css';

const WhaTsap = memo(function WhaTsap() {
  useReceivengMessages();
  return (
    <>
      <LeftSitebar />
      <Chat />
    </>
  );
});

export default WhaTsap;
