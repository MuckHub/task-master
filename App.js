import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import GroupScreen from './screens/GroupScreen';
import TaskScreen from './screens/TaskScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name='Auth' component={AuthScreen} />
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Task' component={TaskScreen} />
        <Stack.Screen name='Group' component={GroupScreen} />
        <Stack.Screen name='Leaderboard' component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
