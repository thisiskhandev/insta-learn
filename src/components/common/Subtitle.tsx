import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';

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
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    lineHeight: 25,
  },
});
