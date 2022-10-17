import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import FormInput from '../components/FormInput';
import RoundEdgeButton from '../components/RoundEdgeButton';
import {addBasicDetails} from '../redux/actions';

/**
 * Edit profile S1
 * header : Basic Details
 * form
 *  name : {first,last}
 *
 *  mobile no
 *  dob
 *  email
 * next btn (dispatch,navigate to qualification)
 *
 */

function BasicDetailsFormScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleNext = () => {
    const basicDetails = {firstName, lastName, mobile, email};
    console.log('clicked next', basicDetails);
    dispatch(addBasicDetails(basicDetails));
    navigation.navigate('QualificationDetails');
  };
  return (
    <KeyboardAwareScrollView>
      <Text style={styles.title}>Basic Details</Text>
      <View style={styles.form}>
        <FormInput
          label={'First Name'}
          onChangeTextHandler={text => setFirstName(text)}
        />
        <FormInput
          label="Last Name"
          onChangeTextHandler={text => setLastName(text)}
        />
        <FormInput
          label={'Email'}
          onChangeTextHandler={text => setEmail(text)}
        />
        <FormInput
          label={'Mobile No'}
          onChangeTextHandler={text => setMobile(text)}
        />

        <RoundEdgeButton
          title="Next"
          backgroundColor="dodgerblue"
          color="white"
          fontSize={18}
          onPressHandler={handleNext}
          width={120}
          height={60}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
export default BasicDetailsFormScreen;
