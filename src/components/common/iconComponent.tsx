import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GestureResponderEvent, TextStyle} from 'react-native';
type Props = {
  iconName: string;
  size: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  iconStyle?: TextStyle;
};

const commonIconStyle = {
  color: 'red',
  fontSize: 16,
};
export const FontAwesomeIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <FontAwesome
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const EntypoIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <Entypo
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const FeatherIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <Feather
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const EvilIconsIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <EvilIcons
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const AntDesignIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <AntDesign
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const FontAwesome5Icon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <FontAwesome5
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const IoniconsIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <Ionicons
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
      style={[commonIconStyle, iconStyle]}
    />
  );
};
export const MaterialCommunityIconsIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <MaterialCommunityIcons
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
    />
  );
};
export const MaterialIconsIcon = ({
  iconName,
  size,
  color,
  iconStyle,
  onPress,
}: Props) => {
  return (
    <MaterialIcons
      name={iconName}
      size={size}
      color={color}
      onPress={onPress}
    />
  );
};
