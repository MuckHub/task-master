import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen({ login, points, navigation }) {
  return (
    <View style={styles.container}>
      <Text>{login}{points}</Text>
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
