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
    <View style={[styles.container, {backgroundColor, width, height}]}>
      <Pressable
        style={[styles.button, {}]}
        onPress={onPressHandler}
        android_ripple={{color: '#aaa'}}>
        <Text style={[styles.buttonText, {color, fontSize: fontSize || 18}]}>
          {title}
        </Text>
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
  },
});
export default RoundEdgeButton;
