import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions';

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');


  async function signupHandler() {
    const request = await fetch('http://192.168.0.108:3100/register', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, pass }),
    });

    const response = await request.json();
    if (response.status === 'ok') {
      dispatch(signUp(login, pass));
      navigation.navigate('Main');
    }
    setLogin('');
    setPass('');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text>Sign Up:</Text>
        <TextInput
          autoCorrect={false}
          secureTextEntry={false}
          style={{ height: 40, width: 120 }}
          placeholder='Login'
          value={login}
          onChangeText={(login) => setLogin(login)}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={false}
          style={{ height: 60, width: 120 }}
          placeholder='Password'
          value={pass}
          onChangeText={(pass) => setPass(pass)}
        />
        <Button title='Register' onPress={signupHandler} />
        <Text>Sign Up Screen</Text>
      </View>
    </TouchableWithoutFeedback>
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
