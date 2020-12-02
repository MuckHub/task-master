import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
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

    const response = await fetch('http://192.168.88.247:3100/allTasks', {
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

    <ImageBackground
      style={styles.background}
      source={require('../assets/TaskMaster.jpg')}
    >
      <ScrollView style={styles.scroll}>
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
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 100,
    alignItems: 'center',
    height: 1000,
    width: '100%',
    alignSelf: 'stretch',
  },
});
