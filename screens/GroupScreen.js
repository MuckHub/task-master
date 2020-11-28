import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GroupTasks from '../compenents/ComponentsGroupScreen/GroupTasks';
import AllTasks from '../compenents/ComponentsGroupScreen/AllTasks';
import { useSelector, useDispatch } from 'react-redux';
import { addTasks } from '../redux/actions';
import BottomTabs from '../navigation/BottomTab';

export default function GroupScreen({ navigation }) {
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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View style={styles.container}>
      {tasksStore !== undefined && (
        <View>
          <Button
            title='Leaderboard'
            onPress={() => navigation.navigate('Leaderboard')}
          />
          {tasksStore.map((item) => {
            return <GroupTasks title={item.taskName} navigation={navigation} />;
          })}
        </View>
      )}
    </View>
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
