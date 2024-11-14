import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import {AppColors} from '../../theme/colors';
import {useAppDispatch} from '../../redux/hook';
import {useLogoutMutation} from '../../redux/api/usersApiSlice';
import {Toast} from 'toastify-react-native';
import {logout} from '../../redux/features/authSlice';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout());
      Toast.success('logout successfully');
    } catch (error:any) {
      Toast.error(`error ${error?.data.message}`);
    }
  };

  return (
    <ScreenWrapper>
      <View>
        <Text>ProfileScreen</Text>
        <Pressable style={styles.pressableStyle} onPress={() => handleLogout()}>
          <Text style={styles.pressableText}>Logout</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  pressableStyle: {
    width: '100%',
    height: 60,
    backgroundColor: AppColors.mainColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pressableText: {
    color: AppColors.textColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
