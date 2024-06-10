import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FontFamily, FontSize, FontWeight} from '../../types';

interface ButtonProps {
  btnTitle?: string;
  extraBtnStyle?: any;
  isWhite?: boolean;
}

const Button = ({btnTitle, extraBtnStyle, isWhite}: ButtonProps) => {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[styles.btn, isWhite && {backgroundColor: COLORS.WHITE}]}>
        <Text
          style={[
            extraBtnStyle,
            styles.btnTxt,
            isWhite && {color: COLORS.TEXT_DARK},
          ]}>
          {btnTitle || 'Common Buton'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.BUTTON,
    padding: 0,
    margin: 0,
    textAlign: 'center',
    borderRadius: 12,
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: FontFamily.Nunito,
    fontSize: FontSize.Medium_Large,
    fontWeight: FontWeight.Bold,
  },
});
