import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';
import { Image, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  picture: {
    padding: 25,
  },
});

export default function GroupPicture(props) {
  console.log(props);

  return (
    <ScrollView style={styles.picture}>
      <Text>{props.name}</Text>
      <Image
        onPress={() => console.log('onPress()')}
        source={'http://placeimg.com/640/480/nature'}
        style={{ width: 130, height: 130 }}
      />
     
    </ScrollView>
  );
}

