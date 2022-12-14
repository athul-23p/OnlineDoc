import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function RoundEdgeInput({
  placeholder,
  onChangeTextHandler,
  value,
  secure,
  style,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeTextHandler}
      secureTextEntry={secure}
      style={[styles.input, {...style}]}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    marginVertical: 20,
    borderColor: '#d66fb2',
    borderRadius: 25,
    fontSize: 18,
  },
});
export default RoundEdgeInput;
