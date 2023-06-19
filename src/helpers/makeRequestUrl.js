import { getInstanceInfo } from './localStorage';

export const makeRequestUrl = (method) => {
  const { idInstance, apiTokenInstance } = getInstanceInfo();

  return `waInstance${idInstance}/${method}/${apiTokenInstance}`;
};
