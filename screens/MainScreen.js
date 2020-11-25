import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AccountName } from '../compenents/ComponentMain/AccountName'

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AccountName />
      <Button title='Group' onPress={() => navigation.navigate('Group')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
