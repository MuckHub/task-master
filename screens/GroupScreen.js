import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GroupTasks from '../compenents/ComponentsGroupScreen/GroupTasks';
import AllTasks from '../compenents/ComponentsGroupScreen/AllTasks'

export default function GroupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Group Screen</Text>
      <Button
        title='Leaderboard'
        onPress={() => navigation.navigate('Leaderboard')}
      />
      <Button title='Task1' onPress={() => navigation.navigate('Task')} />
      <Button title='Task2' onPress={() => navigation.navigate('Task')} />
      <AllTasks />
      <GroupTasks />

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
