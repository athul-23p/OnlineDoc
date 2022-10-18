import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import FormInput from '../components/FormInput';
import RoundEdgeButton from '../components/RoundEdgeButton';
import formStyle from '../styles/forms';
import {addBasicDetails} from '../redux/actions';
import {emptyField} from '../utils/validate';

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

    // validate : empty fields
    if (!emptyField(basicDetails)) {
      Alert.alert('Form error', 'Fill all the fields');
      return;
    }

    console.log('clicked next', basicDetails);
    dispatch(addBasicDetails(basicDetails));
    navigation.navigate('QualificationDetails');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={formStyle.container}>
      <View>
        <Text style={formStyle.title}>Basic Details</Text>
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
        </View>
      </View>
      <RoundEdgeButton
        title="Next"
        stylesContainer={{
          backgroundColor: 'dodgerblue',
          width: 120,
          height: 60,
        }}
        stylesText={{fontSize: 18, color: 'white'}}
        onPressHandler={handleNext}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
export default BasicDetailsFormScreen;
