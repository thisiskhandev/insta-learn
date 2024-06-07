import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

interface LinkableProps {
  linkTitle?: string;
  link?: string;
}

const Linkable = ({linkTitle, link}: LinkableProps) => {
  return (
    <View>
      <Text style={styles.txt}>{linkTitle}</Text>
    </View>
  );
};

export default Linkable;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.ACCENT,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    
  },
});
