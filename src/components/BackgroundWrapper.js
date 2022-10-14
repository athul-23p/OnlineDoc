import React from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';

// wrapper component for list & detail screens
function BackgroundWrapper({children, style}) {
  return (
    <ImageBackground
      style={[styles.container, {...style}]}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover">
      <StatusBar backgroundColor={'#B4DD9B'} barStyle="dark-content" />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default BackgroundWrapper;
