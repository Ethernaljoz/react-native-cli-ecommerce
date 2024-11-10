import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

    const onSubmit = (data: any) => {
      register(data);
    };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
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
                    <TextInput
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
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your name"
                      autoCapitalize="none"
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
                    <TextInput
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
                loading ? <ActivityIndicator size="large" color="white" /> :
              <Text >Register</Text>}
            </Pressable>
          </View>
          <View >
            <Text >You have already an account ? </Text>
            <Pressable onPress={() => navigation.navigate('login')}>
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


