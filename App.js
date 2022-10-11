/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  AuthContext,
  AuthContextProvider,
} from './src/context/AuthContextProvider';

import DrawerNavigator from './src/navigators/DrawerNavigator';
import StackNavigator from './src/navigators/StackNavigator';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const {token} = useContext(AuthContext);
  console.log(token);
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {token !== null ? <DrawerNavigator /> : <StackNavigator />}
      </NavigationContainer>
    </AuthContextProvider>
  );
};

const Wrapper = props => {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
};
const styles = StyleSheet.create({});

export default Wrapper;
