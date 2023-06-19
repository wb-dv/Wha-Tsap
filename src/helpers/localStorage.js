export const getInstanceInfo = () => {
  const instanceInfo = {
    idInstance: localStorage.getItem('idInstance') || '',
    apiTokenInstance: localStorage.getItem('apiTokenInstance') || '',
  };

  return instanceInfo;
};

export const setToLocaleStorage = (items) => {
  for (const key in items) {
    localStorage.setItem(key, items[key]);
  }
};
