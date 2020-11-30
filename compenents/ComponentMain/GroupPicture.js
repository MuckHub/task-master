import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { getGroupNameAC } from '../../redux/actions';

export default function GroupPicture({ name, navigation }) {
  const dataFromRedux = useSelector((store) => store);
  const dispatch = useDispatch();
  const image =
    'https://lh3.googleusercontent.com/PTdoVmYDpLjInuXpv9z5QZWYVfw0V9XUAmqvPnjVhAFxHteAamLeS5MXs5SMH6ir5GOqEQ=s85';

  function getGroupName() {
    dispatch(getGroupNameAC(name));
    navigation.navigate('Group');
  }

  return (
    <ScrollView style={styles.picture}>
      <Image
        onPress={() => getGroupName()}
        source={image}
        style={{
          width: 130,
          height: 130,
          borderRadius: 10,
          alignSelf: 'center',
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  picture: {
    marginTop: 20,
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
    zIndex: 1,
    color: '#fb5b5a',
    fontWeight: 'bold',
  },
});
