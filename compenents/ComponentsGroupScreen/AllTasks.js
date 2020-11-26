import React from 'react';
import { CheckBox, Avatar } from "react-native-elements";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AllTasks() {

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={[styles.item]}>
          <Avatar activeOpacity={0.5} imageProps={{}} rounded size="medium" source={{ uri: "" }} title="G" />
          <Text style={styles.title}>Task Name</Text>
          <CheckBox onIconPress={() => console.log("onIconPress()")} size={30} uncheckedColor="#F00"/>
        </TouchableOpacity>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    justifyContent: 'center',
  },
  item: {
    textAlignVertical: 'center',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    padding: 10,
  },
});
