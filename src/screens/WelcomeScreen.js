import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import RoundEdgeButton from '../components/RoundEdgeButton';
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen({navigation}) {
  return (
    <LinearGradient
      colors={['#7F9BFE', '#5478F7']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
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
