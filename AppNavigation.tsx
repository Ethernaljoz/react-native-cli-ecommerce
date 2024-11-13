
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/auth/Welcome';
import LoginScreen from './src/screens/auth/Login';
import RegisterScreen from './src/screens/auth/Register';
import HomeScreen from './src/screens/protected/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type AuthStackParams = {
  Welcome:undefined;
  Login:undefined;
  Register:undefined;
}
export type RootStackParams = {
  Home:undefined;
}


const AuthStack = createNativeStackNavigator<AuthStackParams>();
const RootStack = createBottomTabNavigator<RootStackParams>();

export const AuthStackScreen = ( )=>{
    return(
      <AuthStack.Navigator initialRouteName="Login" >
        <AuthStack.Screen name="Welcome"  component={WelcomeScreen} />
        <AuthStack.Screen name="Login" options={{headerShown:false}}  component={LoginScreen} />
        <AuthStack.Screen name="Register" options={{headerShown:false}}  component={RegisterScreen} />
      </AuthStack.Navigator>
    );
  };


export const RootStackScreen = ()=>{
return(
  <RootStack.Navigator>
    <RootStack.Screen name ="Home" component={HomeScreen} />
  </RootStack.Navigator>
);
};
