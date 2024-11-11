import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput,  View } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../AppNavigation';
import CustomTextInput from '../../components/CustomTextInput';

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();

    const onSubmit = (data: any) => {
      // register(data);
    };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View >
          <View >
            <Text >
              Register
            </Text>
          </View>
          <View >
            <View >
              <View>
                <Text >Username :</Text>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your name"
                    />
                  )}
                />
              </View>
              <View>
                <Text >Email:</Text>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your name"
                      keyboardType="email-address"
                      // autoCapitalize="none"
                    />
                  )}
                />
              </View>
              <View>
                <Text >Password :</Text>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your name"
                      secureTextEntry
                    />
                  )}
                />
              </View>
            </View>

            <Pressable
              onPress={ handleSubmit(onSubmit)}
            >
              {
                // loading ? <ActivityIndicator size="large" color="white" /> :
              <Text >Register</Text>}
            </Pressable>
          </View>
          <View >
            <Text >You have already an account ? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text >
                Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RegisterScreen;


const styles = StyleSheet.create({});
