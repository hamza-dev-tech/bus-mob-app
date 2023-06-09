import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const { width, height } = useWindowDimensions();

  return { portrait: height > width };
};

export default useOrientation;