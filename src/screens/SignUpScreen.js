import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import AuthTitle from '../components/AuthTitle';
import RoundEdgeInput from '../components/RoundEdgeInput';
import RoundEdgeButton from '../components/RoundEdgeButton';
import {API_URL} from '../config/api';
import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';

import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const UserSchema = yup.object().shape({
  email: yup
    .string()
    .required('This is a required field')
    .email('Not a valid email'),
  password: yup
    .string()
    .required('This is a required field')
    .min(5, 'Too short'),
});

const userSignUp = async user => {
  try {
    let res = await fetch(`${API_URL}/api/register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function SignUpScreen({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(UserSchema),
  });

  const handleSignUp = data => {
    userSignUp({...data}).then(data => {
      let {error} = data;
      if (error) {
        Alert.alert('Sign Up Error', 'Something went wrong');
      } else {
        ToastAndroid.show('Sign Up successfull', 2000);
        setTimeout(() => navigation.navigate('SignIn'), 1000);
      }
    });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <AuthTitle title="Sign Up" />
        <View style={{marginVertical: 20}}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <RoundEdgeInput
                placeholder={'E-mail'}
                onChangeTextHandler={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text>{errors.email.message}</Text>}

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <RoundEdgeInput
                placeholder={'Password'}
                onChangeTextHandler={onChange}
                value={value}
                secure={true}
              />
            )}
            name="password"
          />
          {errors.password && <Text>{errors.password.message}</Text>}
        </View>

        <RoundEdgeButton
          title="Sign Up"
          stylesContainer={{
            backgroundColor: '#f24e85',
            width: '100%',
            height: 52,
          }}
          stylesText={{color: 'white'}}
          onPressHandler={handleSubmit(handleSignUp)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: '#aaa', fontSize: 16}}>
          Already have an Account?
        </Text>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: 'dodgerblue', fontSize: 16}}>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
export default SignUpScreen;
