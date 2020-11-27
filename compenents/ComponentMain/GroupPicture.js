import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { getGroupNameAC } from '../../redux/actions';

const styles = StyleSheet.create({
  picture: {
    padding: 25,
  },
});

export default function GroupPicture({ name, navigation }) {
  const dataFromRedux = useSelector((store) => store);
  const dispatch = useDispatch();

  function getGroupName() {
    dispatch(getGroupNameAC(name));
    navigation.navigate('Group');
  }

  return (
    <ScrollView style={styles.picture}>
      <Text style={styles.text}>{name}</Text>

      <Image
        onPress={() => getGroupName()}
        source={'http://placeimg.com/640/480/nature'}
        style={{ width: 150, height: 150 }}
      />
    </ScrollView>
  );
}
