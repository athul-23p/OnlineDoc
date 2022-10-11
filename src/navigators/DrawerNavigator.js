import {createDrawerNavigator} from '@react-navigation/drawer';
import SignInScreen from '../screens/SignInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SignIn" component={SignInScreen} />
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
