import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../AppNavigation';
import { AppColors } from '../../theme/colors';
import CustomTextInput from '../../components/CustomTextInput';

const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const onSubmit = (data: any) => {
    // login(data)
  };
  const { control, handleSubmit,formState:{ errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <ScreenWrapper>
      <ScrollView
      // contentContainerStyle={styles.loginWrapper}
      >
        <View>


            <Text style={styles.loginText} >
              Login
            </Text>

          <View style={styles.formStyle}>

              {/* Email input */}
              <View>
                <Text style={styles.textLabel}>Email:</Text>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your email"
                    />
                  )}
                />
              </View>

              {/* Password input */}
              <View>
                <Text  style={styles.textLabel} >Password :</Text>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your password"
                      secureTextEntry
                    />
                  )}
                />
              </View>


            <Pressable
            style={styles.pressableStyle}
              onPress={handleSubmit(onSubmit)}
            >
              {
                // loading ? <ActivityIndicator size="large" color="white" /> :
              <Text style={styles.pressableText}>Login</Text>
              }
            </Pressable>

          </View>

          <View style={styles.suggestionWrapper}>
            <Text style={styles.textLabel}>You dont have an account ? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.goToSignUp}>
              Sign up
              </Text>
            </Pressable>
          </View>

      </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textLabel:{
    color:AppColors.textColor,
    fontSize:18,
    fontWeight:'medium',
    marginBottom:4,
  },

  pressableStyle:{
    width:'100%',
    height:60,
    backgroundColor:AppColors.mainColor,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    marginTop:20,
  },
  pressableText:{
    color:AppColors.textColor,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
  },
  formStyle:{
    flex:1,
    flexDirection:'column',
    gap:20,
  },
  loginText:{
    textAlign:'center',
    color:AppColors.textColor,
    fontSize:40,
    fontWeight:'bold',
    marginBottom:20,
  },
  loginWrapper:{
    flex:1,
    justifyContent: 'center',
  },
  suggestionWrapper:{
    marginTop:15,
    flex:1,
    justifyContent: 'center',
    flexDirection:'row',
  },
  goToSignUp:{
    color:AppColors.mainColor,
    fontWeight:'bold',
    fontSize:20,
  },

});
