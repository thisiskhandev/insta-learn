import {Container} from '../components/common/Container';
import Subtitle from '../components/common/Subtitle';
import Button from '../components/common/Button';
import {AuthHeader} from '../components/common/AuthHeader';
import CenterItems from '../components/common/CenterItems';
import {verticalScale} from 'react-native-size-matters';
import React, {useState} from 'react';
import {COLORS} from '../utils/colors';
import InputField from '../components/common/InputField';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../utils/Images';
import Linkable from '../components/common/Linkable';
import {commonStyles} from '../utils/styles';

const Login = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  const [oldIconName, setNewIconName] = useState('eye-off');

  const hanldePasswordToggle = () => {
    setShowPassword(prevState => !prevState);
    if (!isShowPassword) {
      setNewIconName('eye-off');
    } else {
      setNewIconName('eye');
    }
  };

  return (
    <Container>
      <CenterItems>
        <AuthHeader
          titleTxt="Sign in"
          logoStyle={{width: verticalScale(200), marginBottom: 10}}
        />
        <InputField
          placeholderTxt="Username"
          isLeftIcon
          leftVectorIcon="Feather"
          leftIconName="user"
        />
        <InputField
          placeholderTxt="Password"
          rightIconName={oldIconName}
          isLeftIcon
          leftVectorIcon="Feather"
          leftIconName="lock"
          rightVectorIcon="Feather"
          isRightIcon
          rightIconContainerStyle={{
            backgroundColor: COLORS.TRANSPARENT,
            borderRadius: 100,
          }}
          cursorColor={COLORS.ACCENT}
          isTypeSecure={isShowPassword}
          onPress={hanldePasswordToggle}
          rightIconColor={COLORS.ACCENT}
        />
        <Button btnTitle="Sign In" />
        <Subtitle subTitleTxt="Or Sign in with?" subStyle={{marginTop: 20}} />
        <SocialLogin />
        <View
          style={[
            commonStyles.flexRowAlignCenter,
            {
              gap: 20,
              margin: 0,
            },
          ]}>
          <Subtitle
            subTitleTxt="Don't have an account?"
            subStyle={{marginTop: 0}}
          />
          <Linkable linkTitle="Signup here" />
        </View>
      </CenterItems>
    </Container>
  );
};

export default Login;

const SocialLogin = () => {
  const socialLoginObj = [
    {
      socialName: 'Google SignIn',
      IconImage: IMAGES.ICON_GOOGLE,
    },
    {
      socialName: 'Facebook SignIn',
      IconImage: IMAGES.ICON_FB,
    },
  ];
  return (
    <View style={{flex: 1, flexDirection: 'row', gap: 20, marginTop: 20}}>
      {socialLoginObj.map((items, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() =>
              console.log(
                Alert.alert('You are trying to login', items.socialName, [
                  {
                    text: 'Cancle',
                    onPress: () => console.log('Cancle Pressed!'),
                  },
                  {
                    text: 'Ok',
                    onPress: () => console.log('Oky Pressed!'),
                  },
                ]),
              )
            }>
            <Image source={items.IconImage} resizeMode="contain" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
