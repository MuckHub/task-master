import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== 'granted') {
    Alert.alert('Error', 'You might want to enable permission for camera use.');
    return false;
  }
  return true;
}

export default function AddImageScreen({ route, navigation: { goBack } }) {
  const [image, setImage] = useState(null);

  const { taskName } = route.params;
  console.log('taskName>>>', taskName);
  const user = useSelector((store) => store.isAuth);

  const takePhoto = async () => {
    const hasPermission = await askForPermissions();

    if (!hasPermission) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: true,
      aspect: [4, 5],
    });

    setImage(img.uri);
    console.log(img.uri);
  };

  const addPicture = async () => {
    console.log(user);

    const response = await fetch('http://192.168.0.108:3100/addImg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskName, user, imgUrl: image }),
    });

    goBack();
  };

  return (
    <View style={styles.wrapper}>
      {!image && <Button title='Take a Picture' onPress={takePhoto} />}
      {image && <Image style={styles.image} source={{ uri: image }} />}
      {image && <Button title='Add' onPress={addPicture} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
