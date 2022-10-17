import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, StatusBar} from 'react-native';
import RoundEdgeButton from '../components/RoundEdgeButton';
import LinearGradient from 'react-native-linear-gradient';
import {getToken} from '../utils/storage';

function WelcomeScreen({navigation}) {
  useEffect(() => {
    getToken().then(({token}) => {
      if (token) navigation.replace('HomeN');
    });
  }, []);

  return (
    <LinearGradient
      colors={['#879DFF', '#5179F4']}
      start={{x: 0.3, y: 0.3}}
      end={{x: 0.7, y: 0.7}}
      style={styles.container}>
      <StatusBar backgroundColor={'#879DFF'} />
      <Text style={[styles.title, styles.allUpperCase, styles.whiteText]}>
        Online doctor is always with you
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
      <RoundEdgeButton
        title="get started"
        color="darkblue"
        backgroundColor="white"
        width={300}
        height={60}
        fontSize={22}
        onPressHandler={() => navigation.navigate('SignIn')}
      />

      <View style={{marginVertical: 30}}>
        <Text style={[styles.whiteText, styles.allUpperCase, styles.smallText]}>
          Don't have and account ?
        </Text>
        <Text style={[styles.whiteText, styles.mediumText]}>Sign in here</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    padding: 30,
  },
  allUpperCase: {
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  smallText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  mediumText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  whiteText: {
    color: '#fff',
  },
  image: {
    height: 380,
    width: 200,
    marginHorizontal: 40,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
