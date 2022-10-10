import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

function RoundEdgeButton({
  title,
  onPressHandler,
  backgroundColor,
  color,
  width,
  height,
  fontSize,
}) {
  return (
    <Pressable
      style={[styles.button, {backgroundColor, width, height}]}
      onPress={onPressHandler}
      android_ripple={{color: '#aaa'}}>
      <Text style={[styles.buttonText, {color, fontSize: fontSize || 18}]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
export default RoundEdgeButton;
