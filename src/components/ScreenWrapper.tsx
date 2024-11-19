import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../theme/colors';

interface screenProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({children}: screenProps) => {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
