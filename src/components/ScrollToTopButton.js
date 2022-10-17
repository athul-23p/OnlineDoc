import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Button_Size = 30;
function ScrollToTopButton({onPressHandler, style, isVisible}) {
  return (
    <>
      {isVisible ? (
        <Pressable style={[styles.button, {...style}]} onPress={onPressHandler}>
          <Icon name="up" size={Button_Size} color="white" />
        </Pressable>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#5179F4',
    elevation: 4,
  },
});
export default ScrollToTopButton;
