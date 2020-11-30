import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import TaskName from '../compenents/ComponentsTaskScreen/TaskName';
import TaskImage from '../compenents/ComponentsTaskScreen/TaskImage';
import TaskDescription from '../compenents/ComponentsTaskScreen/TaskDescription';
import { addPostsAC, addEmptyPostAC } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { useIsFocused } from '@react-navigation/native';
import { Image } from 'react-native-elements';

export default function TaskScreen({ route, navigation }) {
  const isFocused = useIsFocused();

  useEffect(() => {
    getPosts();
  }, [isFocused]);

  const { taskName } = route.params;
  const dispatch = useDispatch();
  const postsRedux = useSelector((store) => store.posts);

  async function getPosts() {
    const response = await fetch('http://localhost:3100/taskName', {
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

  return (
    <ScrollView>
      <Button
        title='ADD'
        onPress={() =>
          navigation.navigate('AddImage', {
            taskName: taskName,
            navigation: navigation,
          })
        }
      />

      {postsRedux !== undefined && postsRedux.length !== 0 && (
        <ScrollView>
          {postsRedux.map((el) => {
            return (
              <ScrollView>
                <Text>{el.login}</Text>
                <TaskImage url={el.image} />
                <Text>Likes:{el.likesCount}</Text>
              </ScrollView>
            );
          })}
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
