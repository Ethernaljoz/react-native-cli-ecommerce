
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/auth/Welcome';
import LoginScreen from './src/screens/auth/Login';
import RegisterScreen from './src/screens/auth/Register';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const AuthStack = createNativeStackNavigator();
// const RootStack = createBottomTabNavigator();

export const AuthStackScreen = ( )=>{
    return(
      <AuthStack.Navigator initialRouteName="welcome" >
        <AuthStack.Screen name="welcome"  component={WelcomeScreen} />
        <AuthStack.Screen name="login"  component={LoginScreen} />
        <AuthStack.Screen name="register"  component={RegisterScreen} />
      </AuthStack.Navigator>
    );
  };



