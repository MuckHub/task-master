import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Image } from "react-native-elements";

export const Groups = () => {
  return (
    <View style={styles.text}>
        <Text style={styles.accountName}>Groups</Text>
        <TouchableOpacity style={styles.roundButton1}><Text>+</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
    borderRadius: 50,
  },
  accountName: {
    fontSize: 25,
    marginTop: 22,
    marginRight: 20,
  }, 
  roundButton1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 17,
    borderRadius: 100,
    backgroundColor: 'lightblue',
  },
  picture: {
    
  },
});
