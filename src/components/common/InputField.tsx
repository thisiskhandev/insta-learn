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
import {COLORS} from '../../utils/colors';
import {useState} from 'react';
import {FontSize} from '../../types';
import Icon from 'react-native-vector-icons/Feather';

interface InputProps {
  value?: string;
  placeholderTxt: string;
  placeholderColor?: ColorValue;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  leftIconName?: string;
  rightIconName?: string;
  isUppercase?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeText?: (text: string) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  keyboardType?: KeyboardTypeOptions;
  maxLen?: number;
  inputRef?: () => {};
  inpStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  leftIconSize?: number;
  rightIconSize?: number;
  leftIconColor?: ColorValue;
  rightIconColor?: ColorValue;
  cursorColor?: ColorValue;
  isTypeSecure?: boolean;
}

const InputField = (props: InputProps) => {
  const {
    value,
    placeholderTxt,
    placeholderColor,
    isLeftIcon,
    isRightIcon,
    leftIconName,
    rightIconName,
    isUppercase,
    onChange,
    onChangeText,
    onKeyPress,
    keyboardType,
    maxLen,
    inputRef,
    inpStyle,
    leftIconStyle,
    rightIconStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
    leftIconSize,
    rightIconSize,
    leftIconColor,
    rightIconColor,
    cursorColor,
    isTypeSecure,
  } = props;

  const [text, setText] = useState(value);
  return (
    <View style={styles.inpContainerStyle}>
      {isLeftIcon && (
        <View style={[leftIconContainerStyle || styles.iconContainerDefault]}>
          <Icon
            style={[leftIconStyle || styles.iconStyleDefault]}
            name={leftIconName || 'user'}
            size={leftIconSize || 24}
            color={leftIconColor || COLORS.WHITE}
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
        // onChangeText={newText => setText(newText)}
        onChangeText={onChangeText}
        defaultValue={text}
        value={text}
        onKeyPress={onKeyPress}
        onChange={onChange}
        // onChange={e => console.log(e.nativeEvent.text)}
        maxLength={maxLen || 100}
        ref={inputRef}
        cursorColor={cursorColor}
        secureTextEntry={isTypeSecure ?? false}
      />
      {isRightIcon && (
        <TouchableOpacity style={styles.touchIconStyle}>
          <View style={[styles.iconContainerDefault, rightIconContainerStyle]}>
            <Icon
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
