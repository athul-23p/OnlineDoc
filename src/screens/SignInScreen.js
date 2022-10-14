import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AuthTitle from '../components/AuthTitle';
import RoundEdgeInput from '../components/RoundEdgeInput';

import CheckBox from '@react-native-community/checkbox';
import RoundEdgeButton from '../components/RoundEdgeButton';
import {API_URL} from '../config/api';

import {getToken, storeToken} from '../utils/storage';
import {KeyboardAwareScrollView} from '@pietile-native-kit/keyboard-aware-scrollview';

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

function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailInput = text => setEmail(text);
  const handlePasswordInput = password => {
    setPassword(password);
  };

  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Sign In', 'Fill Email & Password fields');
    }
    userSignIn({email, password}).then(data => {
      let {error, token} = data;
      if (error) {
        Alert.alert('Sign In Error', 'Incorrect email or password');
      } else {
        storeToken(token).then(() => {
          setEmail('');
          setPassword('');
          ToastAndroid.show('Sign In successfull', 2000);
          setTimeout(() => navigation.navigate('HomeN'), 1000);
        });
      }
    });
  };

  useEffect(() => {
    getToken().then(({token}) => {
      if (token) navigation.navigate('HomeN');
    });
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <AuthTitle title="Sign In" />
        <View style={{marginVertical: 20}}>
          <RoundEdgeInput
            placeholder={'E-mail'}
            onChangeTextHandler={handleEmailInput}
            value={email}
          />
          <RoundEdgeInput
            placeholder={'Password'}
            onChangeTextHandler={handlePasswordInput}
            value={password}
            secure={true}
          />
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
          color="white"
          backgroundColor="#f24e85"
          width="100%"
          height={52}
          onPressHandler={handleSignIn}
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
