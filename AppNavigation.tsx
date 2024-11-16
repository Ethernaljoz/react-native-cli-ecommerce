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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppColors } from './src/theme/colors';

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
    <RootStack.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      tabBarStyle:{
        backgroundColor:AppColors.backgroundColor,
        // fontWeight:'bold',
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        }
         else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        }
         else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName!} size={size} color={color} />;
      },
      tabBarActiveTintColor: AppColors.mainColor,
      tabBarInactiveTintColor: 'gray',
    })} >
      <RootStack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <RootStack.Screen name="Search" component={SearchScreen} />
      <RootStack.Screen name="Cart" component={CartScreen} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
};

const AppLayout = () => {
  const {userInfo} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {userInfo ? <RootStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default AppLayout;
