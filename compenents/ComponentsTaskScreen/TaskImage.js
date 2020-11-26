import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from "react-native-elements";

export default function TaskImage(){
  return (
  <View>
    <Image onPress={() => console.log("onPress()")} source={{uri:""}} style={{ width: 200, height: 200 }}/>
  </View>
  
  )
}

const styles = StyleSheet.create({
});
