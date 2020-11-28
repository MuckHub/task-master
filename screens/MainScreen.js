import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AccountName } from '../compenents/ComponentMain/AccountName';
import { Groups } from '../compenents/ComponentMain/Groups';
import GroupPicture from '../compenents/ComponentMain/GroupPicture';
import GroupContainer from '../compenents/ComponentMain/GroupContainer';
import { addGroupsMainAC } from '../redux/actions';

export default function MainScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  let groupsStore = useSelector((store) => store.groups);

  async function getGroups() {
    // const response = await fetch('http://192.168.88.247:3100/account', {
      const response = await fetch('http://localhost:3100/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
    const groups = await response.json();
    dispatch(addGroupsMainAC(groups));
  }

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {groupsStore !== undefined && (
        <ScrollView style={styles.container}>
          <AccountName />
          <Button title='LOGOUT' onPress={() => navigation.navigate('Auth')} />

          <Groups />

          <GroupContainer>
            {groupsStore.map((el) => {
              return (
                <View>
                  <GroupPicture name={el.groupName} navigation={navigation} />
                </View>
              );
            })}
          </GroupContainer>
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
