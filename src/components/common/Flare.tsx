import {Image, ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import {IMAGES} from '../../utils/Images';

interface FlareProps {
  extraStyle?: StyleProp<ImageStyle>;
  //   extraStyle?: any;
}

export const Flare = ({extraStyle}: FlareProps) => {
  return (
    <View>
      <Image source={IMAGES.FLARE} style={[styles.img, extraStyle]} />
      {/* <Image source={flare} style={styles.img} /> */}
    </View>
  );
};

export default Flare;

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    zIndex: 100,
    alignSelf: 'center',
    bottom: '100%',
    top: 10,
    alignItems: 'center',
    width: '100%',
  },
});
