import {Image, View} from 'react-native';
import {IMAGES} from '../../utils/Images';

export const Logo = () => {
  return (
    <View>
      <Image source={IMAGES.LOGO} style={{zIndex: 10, position: 'relative'}} />
    </View>
  );
};

export default Logo;
