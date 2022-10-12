import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
  StyleSheet,
} from 'react-native';
import {useEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {getToken, removeToken} from '../utils/storage';
import ListScreen from '../screens/ListScreen/ListScreen';

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
    removeToken().then(() => {
      ToastAndroid.show('Log out successful', 2000);
      navigation.navigate('SignIn');
    });
  };
  // eve.holt@reqres.in
  return (
    <LinearGradient
      colors={['#879DFF', '#5179F4']}
      start={{x: 0, y: 0}}
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
          <Pressable onPress={() => navigation.navigate('ListDoctors')}>
            <Text style={styles.menuLink}>Search</Text>
          </Pressable>
          {Screens.map(screen => (
            <Text style={styles.menuLink} key={Math.random()}>
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
      <Drawer.Screen
        name="ListDoctors"
        component={ListScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuLink: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
export default DrawerNavigator;
