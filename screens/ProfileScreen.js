import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function ProfileScreen({ navigation }) {
  const user = useSelector((store) => store.isAuth);
  let avatar = require(`../assets/def_ava.jpg`);

  if (user == 'Anton') {
    avatar = require(`../assets/Anton.jpg`);
  } else if (user == 'Aleksei') {
    avatar = require(`../assets/Aleksei.jpg`);
  }

  return (
      <View style={styles.container}>
          <ImageBackground style={styles.background} source={require('../assets/TaskMaster.jpg')} >
        <View style={styles.profile}>
          <Image style={styles.img} source={avatar} />
        </View>
        <Text style={styles.name}>{user}</Text>
          <SafeAreaView>
            <TouchableOpacity style={[styles.item]}>
              <Text>EMAIL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]}>
              <Text>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]}>
              <Text>Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={() => navigation.navigate('Auth')}>
              <Text >Sign Out</Text>
            </TouchableOpacity>
          </SafeAreaView>
          </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 200,
    padding: 100,
  },
  img: {
    width: 170,
    height: 170,
    borderWidth: 2,
    borderRadius: 100, 
    borderColor: 'white',
    borderWidth: 5,
    
  },
  background: {
    alignItems: 'center',
    height: '100%',
    width: null,
    alignSelf: 'stretch',
  },
  name: {
    padding: 80,
    fontSize: 40,
    fontWeight: 'bold',
  },
  item: {
    textAlignVertical: 'center',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 1,
    borderWidth: 2,
    borderColor: 'white',
    width: 350,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
