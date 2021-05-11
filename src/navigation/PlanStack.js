import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import PlanScreen from '../screens/PlanScreen';
import AddPlanScreen from '../screens/AddPlanScreen';
import PickingMovieScreen from '../screens/PickingMovieScreen';

const Stack = createStackNavigator();

const PlanStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="PlanHome" component={PlanScreen} />
      <Stack.Screen name="AddPlan" component={AddPlanScreen} />
      <Stack.Screen name="Picking" component={PickingMovieScreen} />
    </Stack.Navigator>
  );
};

export default PlanStack;
