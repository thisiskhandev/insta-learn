import {Image, ImageStyle, StyleProp, StyleSheet, View} from 'react-native';
import {IMAGES} from '../../utils/Images';

interface FlareProps {
  extraStyle?: StyleProp<ImageStyle>;
  //   extraStyle?: any;
}

export const Flare = ({extraStyle}: FlareProps) => {
  return (
    // <View>
    <Image
      source={IMAGES.FLARE}
      style={[styles.img, extraStyle]}
      resizeMode="contain"
    />
    //   {/* <Image source={flare} style={styles.img} /> */}
    // </View>
  );
};

export default Flare;

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    // alignSelf: 'center',
    // bottom: '-1%',
    // alignItems: 'center',
    zIndex: 0,
    top: 0,
    // width: '120%',
    // height: '100%',
    objectFit: 'cover',
    // backgroundColor: 'red',
  },
});
