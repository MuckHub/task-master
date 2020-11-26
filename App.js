import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import GroupScreen from './screens/GroupScreen';
import TaskScreen from './screens/TaskScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SignUpScreen from './screens/SignUpScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuth ? 'Main' : 'Auth'}>
          <Stack.Screen name='Auth' component={AuthScreen} />
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen name='Task' component={TaskScreen} />
          <Stack.Screen name='Group' component={GroupScreen} />
          <Stack.Screen name='Leaderboard' component={LeaderboardScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
