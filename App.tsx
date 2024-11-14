import React from 'react';
import AppLayout from './AppNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import ToastManager  from 'toastify-react-native';

const App = () => {
  return (
    <Provider store={store}>
        <AppLayout />
        <ToastManager />
    </Provider>
  );
};

export default App;
