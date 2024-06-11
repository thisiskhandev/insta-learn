import {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputChangeEventData,
  ColorValue,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';

// Import Utils
import {COLORS} from '../../utils/colors';
import {FontSize} from '../../types';

// Imported Icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSet: any = {
  Feather: Feather,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  AntDesign: AntDesign,
  Ionicons: Ionicons,
  MaterialIcons: MaterialIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
};

interface InputProps {
  // Icon Props
  leftVectorIcon?: keyof typeof iconSet;
  rightVectorIcon?: keyof typeof iconSet;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  leftIconSize?: number;
  rightIconSize?: number;
  leftIconColor?: ColorValue;
  rightIconColor?: ColorValue;

  // Input Props
  value?: string;
  placeholderTxt: string;
  placeholderColor?: ColorValue;
  isUppercase?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLen?: number;
  inpStyle?: StyleProp<ViewStyle>;
  cursorColor?: ColorValue;
  isTypeSecure?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  inputRef?: () => {};
}

const InputField = (props: InputProps) => {
  const {
    // Icon Props
    leftVectorIcon,
    rightVectorIcon,
    isLeftIcon,
    isRightIcon,
    leftIconName,
    rightIconName,
    leftIconStyle,
    rightIconStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
    leftIconSize,
    rightIconSize,
    leftIconColor,
    rightIconColor,

    // Input Props
    value,
    placeholderTxt,
    placeholderColor,
    isUppercase,
    keyboardType,
    maxLen,
    inpStyle,
    cursorColor,
    isTypeSecure,
    onChange,
    onChangeText,
    onKeyPress,
    inputRef,
  } = props;

  const [text, setText] = useState(value);
  const LeftIcon = leftVectorIcon ? iconSet[leftVectorIcon] : null;
  const RightIcon = rightVectorIcon ? iconSet[rightVectorIcon] : null;

  return (
    <View style={styles.inpContainerStyle}>
      {isLeftIcon && LeftIcon && (
        <View style={[leftIconContainerStyle ?? styles.iconContainerDefault]}>
          <LeftIcon
            style={[leftIconStyle ?? styles.iconStyleDefault]}
            name={leftIconName ?? 'user'}
            size={leftIconSize ?? 24}
            color={leftIconColor ?? COLORS.WHITE}
          />
        </View>
      )}
      <TextInput
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={[
          styles.input,
          inpStyle,
          isUppercase && {textTransform: 'uppercase'},
          !isRightIcon && {paddingRight: 25},
        ]}
        placeholder={placeholderTxt}
        placeholderTextColor={placeholderColor || COLORS.TEXT_DARK}
        underlineColorAndroid="transparent"
        onChangeText={newText => {
          const updatedText = isUppercase ? newText.toUpperCase() : newText;
          setText(updatedText);
          onChangeText && onChangeText(updatedText);
        }}
        defaultValue={text}
        value={text}
        onKeyPress={onKeyPress}
        onChange={onChange}
        maxLength={maxLen || 100}
        ref={inputRef}
        cursorColor={cursorColor}
        secureTextEntry={isTypeSecure ?? false}
      />
      {isRightIcon && RightIcon && (
        <TouchableOpacity style={styles.touchIconStyle}>
          <View style={[styles.iconContainerDefault, rightIconContainerStyle]}>
            <RightIcon
              style={[rightIconStyle || styles.iconStyleDefault, {padding: 0}]}
              name={rightIconName ?? 'user'}
              size={rightIconSize ?? 24}
              color={rightIconColor ?? COLORS.WHITE}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inpContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    padding: 0,
    borderRadius: 12,
    backgroundColor: COLORS.TRANSPARENT,
  },
  iconStyleDefault: {
    padding: 10,
  },
  iconContainerDefault: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    width: '100%',
    fontSize: FontSize.Medium,
    color: COLORS.WHITE,
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  touchIconStyle: {
    backgroundColor: COLORS.TRANSPARENT,
    borderRadius: 100,
    padding: 5,
    paddingHorizontal: 6,
    marginHorizontal: 10,
  },
});
