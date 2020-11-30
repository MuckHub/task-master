import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AllTasks from '../compenents/ComponentsGroupScreen/AllTasks';
import { useSelector, useDispatch } from 'react-redux';
import { addAllTasks } from '../redux/actions';
import { useIsFocused } from '@react-navigation/native';

export default function AllTasksScreen({ navigation }) {
  let user = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    getAllTasks();
  }, [isFocused]);

  let groupsStore = useSelector((store) => store.groups);
  let allTasksStore = useSelector((store) => store.allTasks);

  async function getAllTasks() {
    const response = await fetch('http://192.168.0.108:3100/allTasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groupsStore }),
    });
    const allTasks = await response.json();

    dispatch(addAllTasks(allTasks));
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {allTasksStore !== undefined && (
        <View>
          {allTasksStore.map((item) => {
            return (
              <AllTasks
                name={item.taskName}
                image={item.image}
                completed={item.completed}
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
  },
});
