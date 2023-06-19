import { useSelector } from 'react-redux';

export const useInstanceInfo = () => {
  const instanceInfo = useSelector((store) => store.instanceInfo);
  return instanceInfo;
};
