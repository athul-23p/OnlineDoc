import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Card({person}) {
  const {avatar, first_name, last_name} = person;

  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.image} />
      <View style={{width: '60%'}}>
        <Text style={styles.name}>{`Dr ${first_name} ${last_name}`}</Text>
        <Text style={styles.department}>Dermatologist</Text>
        <View style={styles.location}>
          <Icon name="location-pin" color="#aaa" size={18} />
          <Text style={styles.locationText}>Lorem</Text>
        </View>
      </View>
      <View>
        <Icon
          name="star"
          color="#FA568F"
          size={30}
          style={{alignSelf: 'flex-end'}}
        />
        <Text style={styles.ratingText}>4.3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '97%',
    backgroundColor: '#fff',
    // shadowColor: '#aaa',
    elevation: 10,
    marginTop: 15,
    marginHorizontal: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    color: '#5D6A9F',
    fontSize: 20,
  },
  department: {
    color: 'grey',
    fontSize: 18,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5,
    color: 'darkred',
    fontWeight: '600',
  },
  rating: {},
  ratingText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4A599A',
  },
});
export default Card;
