import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {IMAGES} from '../../utils/Images';
import {FontSize} from '../../types';
import Subtitle from './Subtitle';

interface AuthHeaderProps {
  logoStyle?: StyleProp<ImageStyle>;
  flareStyle?: StyleProp<ImageStyle>;
  titleTxt?: string;
}

export const AuthHeader = ({
  logoStyle,
  titleTxt,
  flareStyle,
}: AuthHeaderProps) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={IMAGES.LOGO}
        style={[
          {zIndex: 10, position: 'relative', marginBottom: 50},
          logoStyle,
        ]}
        resizeMode="contain"
      />
      {/* <Image
        source={IMAGES.FLARE}
        style={[styles.img, flareStyle]}
        resizeMode="contain"
      /> */}
      {/* <Image source={flare} style={styles.img} /> */}
      <Text style={styles.heading}>{titleTxt || "Let's get started"}</Text>
      <Subtitle />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
    zIndex: 0,
    top: '-25%',
    width: '110%',
    left: 0,
    marginHorizontal: 'auto',
    objectFit: 'cover',
  },
  txt: {
    opacity: 0.4,
    fontSize: FontSize.Medium_Large,
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    lineHeight: 25,
  },
});
