import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import PlanScreen from '../screens/PlanScreen';
import AddPlanScreen from '../screens/AddPlanScreen';
import PickingMovieScreen from '../screens/PickingMovieScreen';

const Stack = createStackNavigator();

const PlanStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Register" component={PlanScreen} />
      <Stack.Screen name="Login" component={AddPlanScreen} />
      <Stack.Screen name="CinemaScreen" component={PickingMovieScreen} />
    </Stack.Navigator>
  );
};

export default PlanStack;
