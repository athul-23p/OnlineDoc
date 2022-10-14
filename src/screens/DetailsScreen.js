import React, {useEffect, useState} from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';
import {API_URL} from '../config/api';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';

const getUserDetails = async id => {
  try {
    let res = await fetch(`${API_URL}/api/users/${id}`);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const ICON_SIZE = 20;
const ICON_COLOR = '#777';

function DetailsScreen({route}) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {id} = route.params;

  useEffect(() => {
    setIsLoading(true);
    getUserDetails(id).then(({data}) => {
      // static data
      data.dob = new Date(1973, 4, 23).toDateString();
      data.weight = 56;
      data.height = 175;
      data.location = 'Lorem';
      data.phone = '00000 00000';
      data.email = 'loremipsum@gmail.com';
      data.medicalHistory = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nibh cras pulvinar mattis nunc. Gravida rutrum quisque non tellus orci ac auctor augue. Nibh sit amet commodo nulla. Elementum facilisis leo vel fringilla est ullamcorper eget. Dui accumsan sit amet nulla facilisi morbi. Eu turpis egestas pretium aenean pharetra. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Adipiscing elit duis tristique sollicitudin nibh. Aliquet risus feugiat in ante metus. Dis parturient montes nascetur ridiculus mus.

Scelerisque felis imperdiet proin fermentum. Tincidunt eget nullam non nisi. Nibh praesent tristique magna sit amet purus gravida quis. Ac ut consequat semper viverra nam libero justo laoreet sit. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sed risus pretium quam vulputate dignissim. Donec adipiscing tristique risus nec feugiat in fermentum. Felis donec et odio pellentesque. Justo nec ultrices dui sapien. Tellus in metus vulputate eu scelerisque felis.

Aliquam ut porttitor leo a diam sollicitudin. Amet consectetur adipiscing elit ut. Tempus egestas sed sed risus pretium quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas sed enim ut sem viverra aliquet eget. Congue nisi vitae suscipit tellus mauris a diam maecenas. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Praesent elementum facilisis leo vel fringilla. Magna etiam tempor orci eu lobortis elementum nibh. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sed vulputate odio ut enim blandit.`;
      setIsLoading(false);
      setUser(data);
    });
  }, []);

  console.log(user);
  return (
    <BackgroundWrapper>
      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          color="#B7DFA1"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontWeight: '400',
                marginVertical: 10,
                marginTop: 30,
              }}>{`${user.first_name} ${user.last_name}`}</Text>
            <Image source={{uri: user.avatar}} style={styles.avatar} />
          </View>

          {/* stats section    */}
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <View style={styles.ruler} />
            <View style={[styles.stats]}>
              <View style={[styles.row, styles.paddingHorizontal]}>
                <View style={styles.flexRow}>
                  <Icon
                    name="calendar-alt"
                    size={ICON_SIZE}
                    color={ICON_COLOR}
                  />
                  <Text style={[styles.flexRowText]}>{user.dob}</Text>
                </View>
                <View style={styles.flexRow}>
                  <Icon
                    name="weight-hanging"
                    size={ICON_SIZE}
                    color={ICON_COLOR}
                  />
                  <Text style={[styles.flexRowText]}>{user.weight} Kg</Text>
                </View>
              </View>
              <View style={[styles.row, styles.paddingHorizontal]}>
                <View style={styles.flexRow}>
                  <IonIcon
                    name="location-sharp"
                    size={ICON_SIZE}
                    color={ICON_COLOR}
                  />
                  <Text style={[styles.flexRowText]}>{user.location}</Text>
                </View>
                <View style={styles.flexRow}>
                  <Icon
                    name="ruler-vertical"
                    size={ICON_SIZE}
                    color={ICON_COLOR}
                  />
                  <Text style={[styles.flexRowText]}>{user.height} cm</Text>
                </View>
              </View>
            </View>

            <View style={styles.ruler} />

            {/* contact details */}
            <View styles={[styles.contactDetails]}>
              <View style={[styles.flexRow, styles.paddingHorizontal]}>
                <Icon name="phone" size={ICON_SIZE} color={ICON_COLOR} />
                <Text style={[styles.flexRowText]}>{user.phone}</Text>
              </View>
              <View style={[styles.flexRow, styles.paddingHorizontal]}>
                <IonIcon name="mail" size={ICON_SIZE} color={ICON_COLOR} />
                <Text style={[styles.flexRowText]}>{user.email}</Text>
              </View>
            </View>

            {/* medical history */}
            <View style={styles.ruler} />
            <View styles={[styles.medicalHistory]}>
              <Text
                style={[
                  styles.paddingHorizontal,
                  {fontSize: 20, fontWeight: '700', color: 'black'},
                ]}>
                Medical History
              </Text>
              <Text
                style={[
                  styles.paddingHorizontal,
                  {color: 'black', lineHeight: 20},
                ]}>
                {user.medicalHistory}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  ruler: {
    borderTopWidth: 2,
    borderColor: '#aaa',
    marginVertical: 10,
  },
  avatar: {
    height: 120,
    width: 120,
    marginVertical: 20,
    borderRadius: 45,
    borderWidth: 1,
  },
  stats: {},
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  flexRowText: {
    marginLeft: 10,
    color: '#555555',
  },
  paddingHorizontal: {paddingHorizontal: 15},
  contactDetails: {paddingHorizontal: 15},
  medicalHistory: {paddingHorizontal: 15},
});
export default DetailsScreen;
