import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function TaskImage() {
  return (
    <View>
      <Image
        onPress={() => console.log('onPress()')}
        source={{
          uri:
            'https://images.app.goo.gl/5QkEdrhYe6UmgKLT6',
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
