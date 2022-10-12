import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function AuthTitle({title}) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 29,
    color: '#4084e3',
    fontWeight: '500',
  },
});

export default AuthTitle;
