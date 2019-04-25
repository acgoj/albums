import { Provider } from 'react-redux';
import React from 'react';
import { AppRegistry } from 'react-native';
import { store } from './src/state/store';
import { SwitchNavigator, setTopLevelNavigator } from './src/navigation';

const App = () => (
  <Provider store={store}>
    <SwitchNavigator ref={refs => setTopLevelNavigator(refs)} />
  </Provider>
);

AppRegistry.registerComponent('albums', () => App);
