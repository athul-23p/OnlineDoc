import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import FormInput from '../components/FormInput';
import RoundEdgeButton from '../components/RoundEdgeButton';
import formStyle from '../styles/forms';
import {addBasicDetails} from '../redux/actions';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers//yup';
import * as yup from 'yup';

/**
 * Edit profile S1
 * header : Basic Details
 * form
 *  name : {first,last}
 *  mobile no
 *  email
 * next btn (dispatch,navigate to qualification)
 *
 */

const BasicDetailsSchema = yup.object().shape({
  firstName: yup.string().required('This a required field'),
  lastName: yup.string().required('This a required field'),
  email: yup
    .string()
    .required('This a required field')
    .email('Not a valid email'),
  mobile: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Not a valid phone number',
    ),
});

function BasicDetailsFormScreen({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
    },
    resolver: yupResolver(BasicDetailsSchema),
  });
  const dispatch = useDispatch();
  const handleNext = data => {
    console.log('clicked next', data);
    dispatch(addBasicDetails(data));
    navigation.navigate('QualificationDetails');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={formStyle.container}>
      <View>
        <Text style={formStyle.title}>Basic Details</Text>
        <View style={styles.form}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                label={'First Name'}
                onChangeTextHandler={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors?.firstName && <Text>This field is required.</Text>}

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                label="Last Name"
                onChangeTextHandler={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
          {errors?.lastName && <Text>This field is required.</Text>}

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                label={'Email'}
                onChangeTextHandler={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors?.email && <Text>{errors.email.message}</Text>}

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <FormInput
                label={'Mobile No'}
                onChangeTextHandler={onChange}
                value={value}
              />
            )}
            name="mobile"
          />
          {errors?.mobile && <Text>{errors.mobile.message}</Text>}
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
        onPressHandler={handleSubmit(handleNext)}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
export default BasicDetailsFormScreen;
