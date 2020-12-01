import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { AccountName } from '../compenents/ComponentMain/AccountName';
import { Groups } from '../compenents/ComponentMain/Groups';
import GroupPicture from '../compenents/ComponentMain/GroupPicture';
import GroupContainer from '../compenents/ComponentMain/GroupContainer';
import { addGroupsMainAC } from '../redux/actions';

const image = {
  uri:
    'https://products.ls.graphics/mesh-gradients/images/44.-Green-Yellow_1.jpg',
};

export default function MainScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  let groupsStore = useSelector((store) => store.groups);

  async function getGroups() {
    const response = await fetch('http://192.168.43.13:3100/account', {
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
    <ImageBackground source={image} style={styles.image}>
      <ScrollView style={styles.container}>
        {groupsStore === undefined && <ActivityIndicator />}
        {groupsStore !== undefined && (
          <ScrollView style={styles.container}>
            <SafeAreaView>
              <View style={styles.account}>
                <AccountName />
              </View>

              <Button
                title='LOGOUT'
                onPress={() => navigation.navigate('Auth')}
              />

              <View style={styles.groups}>
                <Groups />
                <GroupContainer>
                  {groupsStore.map((el) => {
                    return (
                      <View>
                        <GroupPicture
                          name={el.groupName}
                          navigation={navigation}
                        />
                      </View>
                    );
                  })}
                </GroupContainer>
              </View>
            </SafeAreaView>
          </ScrollView>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  account: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 150,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  groups: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 350,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
