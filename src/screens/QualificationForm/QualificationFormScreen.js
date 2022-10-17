import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import RoundEdgeButton from '../../components/RoundEdgeButton';
import QFInputGroup from './components/QFInputGroup';

function QualificationFormScreen(props) {
  const [qualifications, setQualifications] = useState([{}]);

  const handleNext = () => {};
  return (
    <KeyboardAwareScrollView>
      <Text>Qualification Details</Text>
      {qualifications.map(data => (
        <QFInputGroup />
      ))}

      <Pressable
        onPress={() => {
          setQualifications([...qualifications, {}]);
        }}>
        <Text>Add</Text>
      </Pressable>

      <RoundEdgeButton
        title="Next"
        backgroundColor="dodgerblue"
        color="white"
        fontSize={18}
        onPressHandler={handleNext}
        width={120}
        height={60}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
export default QualificationFormScreen;
