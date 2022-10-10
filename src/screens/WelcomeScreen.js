import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import RoundEdgeButton from '../components/RoundEdgeButton';
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen({navigation}) {
  return (
    <LinearGradient colors={['#8e2de2', '#4a00e0']} style={styles.container}>
      <Text style={[styles.title, styles.allUpperCase, styles.whiteText]}>
        Online doctor is always with you
      </Text>
      <Image style={styles.image} />
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
    marginHorizontal: 40,
  },
});

export default WelcomeScreen;
