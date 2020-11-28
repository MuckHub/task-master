import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function TaskImage(props) {
  return (
    <View>
      <Image
        onPress={() => console.log('onPress()')}
        source={{
          uri: props.url           ,
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
