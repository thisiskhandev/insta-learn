import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FontFamily, FontSize, FontWeight} from '../../types';

interface LinkableProps {
  linkTitle?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Linkable = ({linkTitle, onPress}: LinkableProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.txt}>{linkTitle}</Text>
    </TouchableOpacity>
  );
};

export default Linkable;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.ACCENT,
    fontWeight: FontWeight.Bold,
    textDecorationLine: 'underline',
    fontSize: FontSize.Medium,
    fontFamily: FontFamily.Nunito,
  },
});
