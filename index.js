import React from 'react';
import { AppRegistry, View } from 'react-native';
import MainNavigation from './src/navigation';

const App = () => (
  <View>
    <MainNavigation />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
