import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
function BackgroundWrapper({children}) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,

    backgroundColor: 'white',
  },
});
export default BackgroundWrapper;
