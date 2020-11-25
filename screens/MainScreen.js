import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MainScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);

  return (
    <View style={styles.container}>
      <Text>Main screen!!! {user}</Text>
      <Button title='Group' onPress={() => navigation.navigate('Group')} />
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
