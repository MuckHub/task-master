import React from 'react';
import { CheckBox } from "react-native-elements";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GroupTasks() {

  
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={[styles.item]}>
          <Text style={styles.title}>Task Name</Text>
          <CheckBox onIconPress={() => console.log("onIconPress()")} size={30} uncheckedColor="#F00"/>
        </TouchableOpacity>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    padding: 9,
  },
});

// import { Button, CheckBox } from "react-native-elements";
// import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
{/* <Button buttonStyle={{ width: 350 }} containerStyle={{ margin: 5 }} disabled disabledStyle={{ borderWidth: 2, borderColor: "#00F"}} disabledTitleStyle={{ color: "#00F" }} title="Task 1" titleProps={{}} titleStyle={{ marginHorizontal: 5 }} type="clear" /><CheckBox onIconPress={() => console.log("onIconPress()")} size={30} uncheckedColor="#F00"/>
<Button buttonStyle={{ width: 350 }} containerStyle={{ margin: 5 }} disabled disabledStyle={{ borderWidth: 2, borderColor: "#00F"}} disabledTitleStyle={{ color: "#00F" }} title="Task 1" titleProps={{}} titleStyle={{ marginHorizontal: 5 }} type="clear" />
<Button buttonStyle={{ width: 350 }} containerStyle={{ margin: 5 }} disabled disabledStyle={{ borderWidth: 2, borderColor: "#00F"}} disabledTitleStyle={{ color: "#00F" }} title="Task 1" titleProps={{}} titleStyle={{ marginHorizontal: 5 }} type="clear" /> */}
