import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/auth/Welcome';
import LoginScreen from './src/screens/auth/Login';
import RegisterScreen from './src/screens/auth/Register';
import HomeScreen from './src/screens/protected/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppSelector} from './src/redux/hook';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/screens/protected/Search';
import CartScreen from './src/screens/protected/Cart';
import ProfileScreen from './src/screens/protected/Profile';

export type AuthStackParams = {
  Welcome : undefined;
  Login : undefined;
  Register : undefined;
};
export type RootStackParams = {
  Home : undefined;
  Search : undefined;
  Cart : undefined;
  Profile : undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();
const RootStack = createBottomTabNavigator<RootStackParams>();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name="Register"
        options={{headerShown: false}}
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Search" component={SearchScreen} />
      <RootStack.Screen name="Cart" component={CartScreen} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
};

const AppLayout = () => {
  const {userInfo} = useAppSelector(state => state.auth);
  console.log('====================================');
  console.log(userInfo);
  console.log('====================================');

  return (
    <NavigationContainer>
      {userInfo ? <RootStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default AppLayout;
