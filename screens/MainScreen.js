import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AccountName } from '../compenents/ComponentMain/AccountName';
import { Groups } from '../compenents/ComponentMain/Groups';
import { NavigationContainer } from '@react-navigation/native';
import GroupPicture from '../compenents/ComponentMain/GroupPicture';
import GroupContainer from '../compenents/ComponentMain/GroupContainer';

import GroupScreen from '../screens/GroupScreen';
import BottomTab from '../navigation/BottomTab';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function MainScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);

  return (

    <ScrollView style={styles.container}>

      <AccountName />
      <Text>Main screen!!! {user}</Text>
      <Button title='LOGOUT' onPress={() => navigation.navigate('Auth')} />
      <Button title='Group' onPress={() => navigation.navigate('Group')} />
      <Groups />
     <Button title='LOGOUT' onPress={() => navigation.navigate('Auth')} />
      <GroupContainer>
        <GroupPicture />
        <GroupPicture />
        <GroupPicture />
        <GroupPicture />
      </GroupContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
