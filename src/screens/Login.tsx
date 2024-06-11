import {Container} from '../components/common/Container';
import Subtitle from '../components/common/Subtitle';
import Button from '../components/common/Button';
import {AuthHeader} from '../components/common/AuthHeader';
import CenterItems from '../components/common/CenterItems';
import {verticalScale} from 'react-native-size-matters';
import React, {useState} from 'react';
import {COLORS} from '../utils/colors';
import InputField from '../components/common/InputField';
import {FeatherIcon} from '../components/common/iconComponent';

const Login = () => {
  return (
    <Container>
      <CenterItems>
        <AuthHeader
          titleTxt="Sign in"
          logoStyle={{width: verticalScale(200)}}
        />
        <InputField
          placeholderTxt="Username"
          isLeftIcon
          leftVectorIcon="Feather"
          leftIconName="user"
        />
        <InputField
          placeholderTxt="Password"
          rightIconName="eye"
          isLeftIcon
          leftVectorIcon="Feather"
          leftIconName="lock"
          rightVectorIcon="Entypo"
          isRightIcon
          rightIconContainerStyle={{
            backgroundColor: COLORS.TRANSPARENT,
            borderRadius: 100,
          }}
          cursorColor={COLORS.ACCENT}
          isTypeSecure
        />
        <Button btnTitle="Sign In" />
        <Subtitle subTitleTxt="Or Sign in with?" subStyle={{marginTop: 30}} />
      </CenterItems>
    </Container>
  );
};

export default Login;
