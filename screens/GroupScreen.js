import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import GroupTasks from '../compenents/ComponentsGroupScreen/GroupTasks';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { addTasks } from '../redux/actions';
import BottomTabs from '../navigation/BottomTab';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native';

export default function GroupScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [tougle, SetTougle] = React.useState(false);

  let group = useSelector((store) => store.groupName);
  const dispatch = useDispatch();

  let tasksStore = useSelector((store) => store.tasks);

  const isFocused = useIsFocused();

  useEffect(() => {
    getTasks();
  }, [isFocused]);

  async function getTasks() {

    const response = await fetch(`http://192.168.43.13:3100/groupTasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group }),
    });
    const tasks = await response.json();

    dispatch(addTasks(tasks));
  }

  async function saveNewTask() {

    const response = await fetch('http://192.168.43.13:3100/newTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group, value }),
    });

    const tasks = await response.json();

    dispatch(addTasks(tasks));
    SetTougle(false);
    onChangeText('');
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/TaskMaster.jpg')}
    >
      <ScrollView style={styles.container}>
        {tasksStore === undefined && <ActivityIndicator />}
        {tasksStore !== undefined && (
          <View>
            <Button
              title='Leaderboard'
              onPress={() => navigation.navigate('Leaderboard')}
            />

            <Text style={styles.accountName}>Tasks</Text>
            <TouchableOpacity
              onPress={() => (tougle ? SetTougle(false) : SetTougle(true))}
              style={styles.roundButton1}
            >
              <Text>+</Text>
            </TouchableOpacity>
            {tougle !== false && (
              <View>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  placeholder='Enter new task here'
                  onChangeText={(text) => onChangeText(text)}
                  value={value}
                />
                <Button title='Save new task' onPress={() => saveNewTask()} />
              </View>
            )}

            {tasksStore.tasks.map((item) => {
              return (
                <GroupTasks
                  completed={item.completed}
                  title={item.taskName}
                  navigation={navigation}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    height: 1000,
    width: '100%',
    alignSelf: 'stretch',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
    borderRadius: 50,
    fontSize: 25,
    width: 100,
  },
  accountName: {
    fontSize: 25,
    marginTop: 22,
    marginRight: 20,
  },
  roundButton1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 17,
    borderRadius: 100,
    backgroundColor: 'lightblue',
  },
  picture: {},
});
