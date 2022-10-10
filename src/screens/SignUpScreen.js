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

function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = text => setEmail(text);
  const handlePasswordInput = password => {
    setPassword(password);
  };

  const handleSignUp = () => {
    if (email === '' || password === '') {
      Alert.alert('Sign In', 'Fill Email & Password fields');
    }
    fetch(`${API_URL}/api/register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => {
        ToastAndroid.show('Sign Up successfull', 2000);
        setTimeout(() => navigation.navigate('SignIn'), 3000);
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

      <RoundEdgeButton
        title="Sign Up"
        color="white"
        backgroundColor="#f24e85"
        width="100%"
        height={52}
        onPressHandler={handleSignUp}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: '#aaa'}}>Already have an Account?</Text>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: 'dodgerblue'}}>Sign In</Text>
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
export default SignUpScreen;
