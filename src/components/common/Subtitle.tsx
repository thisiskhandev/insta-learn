import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FontFamily, FontSize} from '../../types';

interface SubtitleProps {
  subTitleTxt?: string;
  subStyle?: StyleProp<TextStyle>;
}

const Subtitle = ({subTitleTxt, subStyle}: SubtitleProps) => {
  return (
    <Text style={[styles.txt, subStyle]}>
      {subTitleTxt ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
    </Text>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  txt: {
    opacity: 0.4,
    fontSize: FontSize.Medium_Large,
    fontFamily: FontFamily.Nunito,
    textAlign: 'center',
    color: COLORS.WHITE,
    marginTop: 20,
    lineHeight: 25,
  },
});
