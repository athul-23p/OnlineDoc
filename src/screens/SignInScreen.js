import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import AuthTitle from '../components/AuthTitle';
import RoundEdgeInput from '../components/RoundEdgeInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RoundEdgeButton from '../components/RoundEdgeButton';
import {API_URL} from '../config/api';
import {storeToken} from '../utils/storage';

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
    fetch(`${API_URL}/api/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then(res => res.json())
      .then(data => {
        let {error, token} = data;
        if (error) {
          Alert.alert('Sign In Error', 'Incorrect email or password');
        } else {
          storeToken(token).then(() => {
            console.log('token stored');
          });
        }
      });
  };

  return (
    <View style={styles.container}>
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
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <BouncyCheckbox
          onPress={() => setRememberMe(prev => !prev)}
          text="Remember Me"
          isChecked={rememberMe}
          textStyle={{textDecorationLine: 'none'}}
        />
        <Pressable>
          <Text style={{color: '#aaa'}}>Forgot Password?</Text>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: '#aaa'}}>Don't have Account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'dodgerblue'}}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {},
});
export default SignInScreen;
