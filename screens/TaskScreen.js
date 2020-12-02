import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Button, ScrollView, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

import TaskName from '../compenents/ComponentsTaskScreen/TaskName';
import TaskImage from '../compenents/ComponentsTaskScreen/TaskImage';
import TaskDescription from '../compenents/ComponentsTaskScreen/TaskDescription';
import { addPostsAC, addEmptyPostAC } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

export default function TaskScreen({ route, navigation }) {

  const user = useSelector((store) => store.isAuth);
  
  const isFocused = useIsFocused();

  useEffect(() => {
    getPosts();
  }, [isFocused]);

  const { taskName } = route.params;
  const dispatch = useDispatch();
  const postsRedux = useSelector((store) => store.posts);

  async function getPosts() {

    const response = await fetch('http://192.168.88.247:3100/taskName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskName }),
    });
    const posts = await response.json();

    if (posts.error) {
      dispatch(addEmptyPostAC());
    } else {
      dispatch(addPostsAC(posts));
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function addLike(posts) {
    if (posts.error) {
      dispatch(addEmptyPostAC());
    } else {
      dispatch(addPostsAC(posts));
    }
  }

  return (
    <ImageBackground style={styles.background} source={require('../assets/TaskMaster.jpg')} >
          <ScrollView>
             <SafeAreaView>
                <TouchableOpacity style={styles.buttonAdd}>
                      <Text style={styles.button} onPress={()=> navigation.navigate('AddImage', {taskName:taskName, navigation: navigation,})}>ADD</Text>
                    </TouchableOpacity>


          
          {postsRedux !== undefined && postsRedux.length !== 0 && (
            <View >
             {postsRedux.map((el) => {
               console.log('el', el);
                let avatar = require(`../assets/def_ava.jpg`);
                 if (el.login == 'Anton') {
                    avatar = require(`../assets/Anton.jpg`);
                  } else if (el.login == 'Aleksei') {
                    avatar = require(`../assets/Aleksei.jpg`);
                  }
                return (
                 <View style={styles.container}>
                    <View style={styles.login}>
                        <Image style={styles.avatar} source={avatar} />
                        <Text style={styles.accountName}>{el.login}</Text>
                    </View>
                   <TaskImage url={el.image} count={el.likesCount}/>
                   <Text style={styles.likes} >Likes:{el.likesCount.length}</Text>
                 </View>
               );
             })}
            </View>
          )}
           
      </SafeAreaView>

        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    alignSelf: 'stretch',
  },
  container: {
    borderWidth: 0,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRightWidth: 15,
    borderLeftWidth: 15,
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  login: {
    borderWidth: 18,
    borderColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  likes: {
    borderWidth: 18,
    borderColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountName: {
    marginLeft: 30,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 25,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  buttonAdd: {
    marginLeft: 'auto',
    width: '28%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
  },
});
