import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import GroupTasks from '../compenents/ComponentsGroupScreen/GroupTasks';
import AllTasks from '../compenents/ComponentsGroupScreen/AllTasks';
import { useSelector, useDispatch } from 'react-redux';
import { addTasks } from '../redux/actions';
import BottomTabs from '../navigation/BottomTab';
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from 'react-native';

export default function GroupScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [tougle, SetTougle] = React.useState(false);

  let group = useSelector((store) => store.groupName);
  const dispatch = useDispatch();

  let tasksStore = useSelector((store) => store.tasks);
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
      SetTougle(false)
      onChangeText('')
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ScrollView>
      {tasksStore !== undefined && (
        <View >
          <Button
            title='Leaderboard'
            onPress={() => navigation.navigate('Leaderboard')}
          />
          <Text style={styles.accountName}>Tasks</Text>
          <TouchableOpacity onPress={() => SetTougle(true)} style={styles.roundButton1} ><Text>+</Text></TouchableOpacity>
          {tougle !== false &&
          <View >  
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter new task here"
            onChangeText={text => onChangeText(text)}
            value={value}
            />
          <Button
            title='Save new task'
            onPress={() => saveNewTask()}
            />
            </View>
          }
          {tasksStore.map((item) => {
            return <GroupTasks title={item.taskName} navigation={navigation} />;
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  picture: {
    
  }
});
