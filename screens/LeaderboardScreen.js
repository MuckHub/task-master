import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LeaderboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Leaderboard Screen</Text>
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
