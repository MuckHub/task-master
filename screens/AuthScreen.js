import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
      <Button title='Login' onPress={() => navigation.navigate('Main')} />
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
