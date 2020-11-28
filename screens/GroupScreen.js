import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import GroupTasks from '../compenents/ComponentsGroupScreen/GroupTasks';
import AllTasks from '../compenents/ComponentsGroupScreen/AllTasks';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { addTasks } from '../redux/actions';
import BottomTabs from '../navigation/BottomTab';

export default function GroupScreen({ navigation }) {
  let group = useSelector((store) => store.groupName);
  const dispatch = useDispatch();

  let tasksStore = useSelector((store) => store.tasks);

  console.log(tasksStore);

  const isFocused = useIsFocused();

  useEffect(() => {
    getTasks();
  }, [isFocused]);

  async function getTasks() {
    const response = await fetch(`http://192.168.0.108:3100/groupTasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group }),
    });
    const tasks = await response.json();
    console.log(tasks);

    dispatch(addTasks(tasks));
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {tasksStore !== undefined && (
        <View>
          <Button
            title='Leaderboard'
            onPress={() => navigation.navigate('Leaderboard')}
          />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
