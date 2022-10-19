import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
  Platform,
} from 'react-native';
import AuthTitle from '../components/AuthTitle';
import RoundEdgeInput from '../components/RoundEdgeInput';

import CheckBox from '@react-native-community/checkbox';
import RoundEdgeButton from '../components/RoundEdgeButton';
import {API_URL} from '../config/api';
import {storeToken} from '../utils/storage';
import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';
import {CommonActions} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const userSignIn = async user => {
  try {
    let res = await fetch(`${API_URL}/api/login`, {
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

function SignInScreen({navigation}) {
  const [rememberMe, setRememberMe] = useState(false);
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

  const handleSignIn = data => {
    userSignIn({...data}).then(data => {
      let {error, token} = data;
      if (error) {
        Alert.alert('Sign In Error', 'Incorrect email or password');
      } else {
        storeToken(token).then(() => {
          ToastAndroid.show('Sign In successfull', 2000);

          // reset navigation state :
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'HomeN'}],
            }),
          );
        });
      }
    });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <AuthTitle title="Sign In" />
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

        <View style={styles.rowSpaceBetween}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              onValueChange={() => setRememberMe(prev => !prev)}
              value={rememberMe}
            />
            <Text style={{color: 'black', fontSize: 16}}>Remember Me</Text>
          </View>
          <Pressable>
            <Text style={{color: '#aaa', fontSize: 16}}>Forgot Password?</Text>
          </Pressable>
        </View>
        <RoundEdgeButton
          title="Sign In"
          stylesContainer={{
            backgroundColor: '#f24e85',
            width: '100%',
            height: 52,
          }}
          stylesText={{color: 'white'}}
          onPressHandler={handleSubmit(handleSignIn)}
        />
      </View>
      <View>
        <View style={styles.rowSpaceBetween}>
          <Text style={{color: '#aaa', fontSize: 16}}>Don't have Account?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: 'dodgerblue', fontSize: 16}}>
              Create Account
            </Text>
          </Pressable>
        </View>
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
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
export default SignInScreen;
