import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AccountName } from '../compenents/ComponentMain/AccountName'
import { Groups } from '../compenents/ComponentMain/Groups'
import GroupPicture from '../compenents/ComponentMain/GroupPicture' 
import GroupContainer from '../compenents/ComponentMain/GroupContainer'

export default function MainScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);

  return (
    <View style={styles.container}>

    <Text>Main screen!!! {user}</Text>
     <Button title='LOGOUT' onPress={() => navigation.navigate('Auth')} />
      <AccountName />
      <Button title='Group' onPress={() => navigation.navigate('Group')} />
      <Groups />
      <GroupContainer>
        <GroupPicture />
        <GroupPicture />
        <GroupPicture />
        <GroupPicture />
      </GroupContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
