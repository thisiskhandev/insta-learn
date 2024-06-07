import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../utils/colors';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: '100%',
    position: 'relative',
  },
});
