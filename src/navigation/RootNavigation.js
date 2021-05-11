import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import RootTabNavigator from './RootTabNavigator';

import auth from '@react-native-firebase/auth';

const RootNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <RootTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
