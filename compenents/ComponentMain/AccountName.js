import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { useSelector } from 'react-redux';

export const AccountName = (props) => {
  const user = useSelector((store) => store.isAuth);
  let str = user;
  let matches = str.match(/\b(\w)/g);
  return (
    <View style={styles.text}>
      <Avatar activeOpacity={0.5} imageProps={{}} rounded size="large" source={{ uri: "" }} title={matches} />
      <Text style={styles.accountName}>{user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  accountName: {
    fontSize: 25,
    marginTop: 22,
    marginRight: 20,
  }
});
