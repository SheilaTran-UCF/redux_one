import {createStackNavigator} from '@react-navigation/stack';

import CinemaScreen from '../screens/CinemaScreen';

import React from 'react';

const Stack = createStackNavigator();

const CinemaStack = () => {
  return (
    <Stack.Navigator initialRouteName="Cinema">
      <Stack.Screen name="Cinema" component={CinemaScreen} />
    </Stack.Navigator>
  );
};

export default CinemaStack;
