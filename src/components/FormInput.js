import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import RoundEdgeInput from './RoundEdgeInput';

function FormInput({label, onChangeTextHandler, style}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <RoundEdgeInput
        onChangeTextHandler={onChangeTextHandler}
        style={{...styles.input}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  input: {marginVertical: 5},
});
export default FormInput;
