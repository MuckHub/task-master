import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function GroupPicture() {
  return (
    <View style={styles.picture}>
      <Image
        onPress={() => console.log('onPress()')}
        source={{ uri: '' }}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    padding: 25,
  },
});
