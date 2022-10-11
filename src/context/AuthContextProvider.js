import React, {createContext, useEffect, useState} from 'react';
import {getToken, removeToken, storeToken} from '../utils/storage';

const AuthContext = createContext();
function AuthContextProvider({children}) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    getToken().then(auth => {
      console.log(auth);
      if (auth.isLoggedIn) {
        setToken(auth.token);
      }
    });
  }, []);

  const handleLogin = tokenString => {
    setToken(() => tokenString);
    storeToken(tokenString).then(() => {
      console.log('logged in');
    });
  };
  const handleLogout = () => {
    setToken(() => null);
    removeToken().then(() => {
      console.log('logged out');
    });
  };

  console.log('token:context', token);
  return (
    <AuthContext.Provider value={{token, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContextProvider, AuthContext};
