import {ReactNode} from 'react';
import {View} from 'react-native';

interface CenterProps {
  children: ReactNode;
}

const CenterItems = ({children}: CenterProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default CenterItems;
