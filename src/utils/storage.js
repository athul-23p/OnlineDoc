import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async token => {
  try {
    return await AsyncStorage.setItem('user_token', JSON.stringify({token}));
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async () => {
  try {
    return await AsyncStorage.removeItem('user_token');
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    let data = await AsyncStorage.getItem('user_token');
    data = JSON.parse(data);
    // console.log(data.token);
    if (data) {
      return {isLoggedIn: true, token: data.token};
    } else {
      return {isLoggedIn: false, token: null};
    }
  } catch (error) {
    console.log(error);
  }
};

export {storeToken, removeToken, getToken};
