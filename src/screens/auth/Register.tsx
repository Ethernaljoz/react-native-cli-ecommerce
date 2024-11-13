import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text,  View } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../AppNavigation';
import CustomTextInput from '../../components/CustomTextInput';
import { AppColors } from '../../theme/colors';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../../redux/api/usersApiSlice';
import { useAppDispatch } from '../../redux/hook';
import { setCredentials } from '../../redux/features/authSlice';
import { Toast } from 'toastify-react-native';




const RegisterSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8).max(20),
}).refine( (data)=> data.password === data.confirmPassword,{
  message:'password do not match',
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [register, {isLoading}] = useRegisterMutation();
  const dispatch = useAppDispatch();

    const onSubmit = async(data: RegisterSchemaType) => {
      try {
        const res = await register(data).unwrap();
        dispatch(setCredentials({...res}));
        Toast.success('Account creates successfuly');
        navigation.navigate('Login');

      } catch (error:any) {
        Toast.error(`Error ${error?.data.message}`);
      }
    };


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(RegisterSchema),
  });


  return (
    <ScreenWrapper>
       <ScrollView
      //  contentContainerStyle={styles.registerWrapper}
       >
        <View>


            <Text style={styles.registerText} >
              Register
            </Text>

          <View style={styles.formStyle}>
            <View>
                <Text style={styles.textLabel} >Username :</Text>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="enter your username"
                    />
                  )}
                />
                {errors.username && <Text style={styles.textError}>{errors.username.message}</Text>}

              </View>

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
                {errors.email && <Text style={styles.textError}>{errors.email.message}</Text>}
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
                {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
              </View>

              {/* ConfirmPassword input */}
              <View>
                <Text  style={styles.textLabel} >Confirm Password :</Text>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CustomTextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="confirm your password"
                      secureTextEntry
                    />
                  )}
                />
                {errors.confirmPassword && <Text style={styles.textError}>{errors.confirmPassword.message}</Text>}
              </View>

            <Pressable
            style={styles.pressableStyle}
              onPress={handleSubmit(onSubmit)}
            >
              {
                isLoading ? <ActivityIndicator size="large" color="white" /> :
              <Text style={styles.pressableText}>register</Text>
              }
            </Pressable>

          </View>

          <View style={styles.suggestionWrapper}>
            <Text style={styles.textLabel}>You have already an account ? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.goToSignIn}>
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


const styles = StyleSheet.create({
  textLabel:{
      color:AppColors.textColor,
      fontSize:18,
      fontWeight:'medium',
      marginBottom:4,
    },
    textError:{
      color:AppColors.mainColor,
      fontSize:16,
      fontWeight:'medium',
      marginTop:4,
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
    registerText:{
      textAlign:'center',
      color:AppColors.textColor,
      fontSize:40,
      fontWeight:'bold',
      marginBottom:20,
    },
    registerWrapper:{
      flex:1,
      justifyContent: 'center',
    },
    suggestionWrapper:{
      marginTop:15,
      flex:1,
      justifyContent: 'center',
      flexDirection:'row',
    },
    goToSignIn:{
      color:AppColors.mainColor,
      fontWeight:'bold',
      fontSize:20,
    },
});

