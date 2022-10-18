import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function RoundEdgeButton({title, onPressHandler, stylesContainer, stylesText}) {
  return (
    <View style={[styles.container, stylesContainer]}>
      <Pressable
        style={[styles.button]}
        onPress={onPressHandler}
        android_ripple={{color: '#aaa'}}>
        <Text style={[styles.buttonText, stylesText]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    marginVertical: 20,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
});
export default RoundEdgeButton;
