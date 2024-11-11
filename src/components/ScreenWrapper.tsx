import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppColors } from '../theme/colors';

interface screenProps{
    children:React.ReactNode
}

const ScreenWrapper = ({children}:screenProps) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View style={[{paddingTop}, styles.container]} >
      {
        children
      }
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: AppColors.backgroundColor,
    paddingHorizontal:20,
  },
});
