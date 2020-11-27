import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TaskName from '../compenents/ComponentsTaskScreen/TaskName';
import TaskImage from '../compenents/ComponentsTaskScreen/TaskImage';
import TaskDescription from '../compenents/ComponentsTaskScreen/TaskDescription';

export default function TaskScreen({ navigation }) {
  console.log('RENDERED');

  return (
    <View style={styles.container}>
      <Button title='ADD' onPress={() => navigation.navigate('AddImage')} />
      <Text>Task Screen</Text>
      <TaskName />
      <TaskImage />
      <TaskDescription />
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
