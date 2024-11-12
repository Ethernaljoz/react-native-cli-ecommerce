import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreen} from './AppNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
