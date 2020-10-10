import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import Search from './screens/Search';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Search />
    </>
  );
};

export default App;
