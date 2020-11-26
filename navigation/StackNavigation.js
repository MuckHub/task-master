import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../screens/AuthScreen';

import SignUpScreen from '../screens/SignUpScreen';
import BottomTabs from '../navigation/BottomTab';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Auth' component={AuthScreen} />
      <Stack.Screen
        name='Main'
        component={BottomTabs}
        options={{ headerShown: false, gestureEnabled: false }}
      />

      <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  );
}
