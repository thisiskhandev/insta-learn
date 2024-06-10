import React from 'react';
import {View} from 'react-native';
import {Container} from '../components/common/Container';
import Subtitle from '../components/common/Subtitle';
import Button from '../components/common/Button';
import {AuthHeader} from '../components/common/AuthHeader';
import CenterItems from '../components/common/CenterItems';

const GetStarted = () => {
  return (
    <Container>
      <CenterItems>
        <AuthHeader />
        <Button btnTitle="Create Account" />
        <Button btnTitle="Sign In" isWhite />
        <Subtitle
          subTitleTxt="Forget your account?"
          subStyle={{marginTop: 30}}
        />
      </CenterItems>
    </Container>
  );
};

export default GetStarted;
