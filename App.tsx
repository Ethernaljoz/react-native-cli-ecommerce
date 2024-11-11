import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen } from './AppNavigation';





const App = () => {
  return (
   <NavigationContainer>
    <AuthStackScreen />
   </NavigationContainer>
  );
};

export default App;


