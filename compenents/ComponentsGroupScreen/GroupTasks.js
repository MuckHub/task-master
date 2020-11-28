import React, { useEffect } from 'react';
import { CheckBox } from "react-native-elements";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

export default function GroupTasks({ title, navigation }) {

  const getData = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Task', {taskName:title})} style={[styles.item]}>
          <Text style={styles.title}>{title}</Text>
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
    fontSize:13,
    padding: 9,
  },
});
