import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Pressable, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {getToken, removeToken} from '../utils/storage';

const Drawer = createDrawerNavigator();

const Screens = [
  'Medical Records',
  'Message',
  'Clinics',
  'Reminder',
  'News',
  'Promotion',
  'Support',
];

function CustomDrawerContent(props) {
  const {navigation} = props;
  const [token, setToken] = useState(null);

  useEffect(() => {
    getToken().then(({token}) => setToken(token));
  }, []);

  const handleLogout = () => {
    removeToken().then(() => navigation.navigate('SignIn'));
  };

  return (
    <LinearGradient
      colors={['#7F12FE', '#5478F7']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <DrawerContentScrollView {...props}>
        <Pressable onPress={() => navigation.closeDrawer()}>
          <AntIcon name="close" size={30} color="white" />
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={{
              width: 70,
              height: 70,
              resizeMode: 'cover',
              borderRadius: 35,
              borderColor: 'white',
              borderWidth: 2,
            }}
          />
          <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
            {token}
          </Text>
        </View>
        {/* <DrawerItemList {...props} /> */}

        <View style={{marginVertical: 10}}>
          {Screens.map(screen => (
            <Text
              style={{
                marginVertical: 8,
                fontSize: 18,
                fontWeight: '600',
                color: 'white',
              }}
              key={Math.random()}>
              {screen}
            </Text>
          ))}
        </View>
      </DrawerContentScrollView>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={handleLogout}>
        <MaterialIcon name="logout" size={40} color="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textTransform: 'uppercase',
            marginLeft: 10,
          }}>
          Log Out
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#7895FD',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
