import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

interface ButtonProps {
  btnTitle?: string;
  btnTxtColor?: string;
}

const Button = ({btnTitle, btnTxtColor}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: btnTxtColor ? btnTxtColor : COLORS.WHITE}}>
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
    textTransform: 'uppercase',
    fontFamily: 'Nunito Sans',
    fontSize: 16,
  },
});
