import { Pressable, ScrollView, StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../AppNavigation';
import { AppColors } from '../../theme/colors';
import CustomTextInput from '../../components/CustomTextInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '../../redux/api/usersApiSlice';
import { useAppDispatch } from '../../redux/hook';
import { setCredentials } from '../../redux/features/authSlice';
import { Toast } from 'toastify-react-native';




const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});
type LoginSchemaType = z.infer<typeof LoginSchema>;



const LoginScreen = () => {

  const [login, {isLoading}] = useLoginMutation();
  const dispatch = useAppDispatch();

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams  >>();
  const onSubmit = async (data : LoginSchemaType) => {
    try{

      const res = await login(data).unwrap();
      dispatch(setCredentials({...res}));
      Toast.success('login successfully');

    }catch(error : any){
      Toast.error(`error ${error?.data.message}`);
    }
  };
  const { control, handleSubmit,formState:{ errors } } = useForm<LoginSchemaType>(
    {
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  }
);
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
                      autoCapitalize="none"
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


            <Pressable
            style={styles.pressableStyle}
              onPress={handleSubmit(onSubmit)}
            >
              {
                isLoading ? <ActivityIndicator size="large" color="white" /> :
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
