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
import { isAuthAC } from '../redux/actions';
import { addGroupsMainAC } from '../redux/actions';

export default function AuthScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const authHandler = async () => {
    console.log(login, pass);
    setError(null);
    let response = await fetch('http://localhost:3100/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, pass }),
    });

    const data = await response;

    if (data.status === 401) setError('Invalid password or login!');
    if (data.status === 400) setError('Please fill all the forms');
    if (data.status === 200) {
      dispatch(isAuthAC(login));
      navigation.navigate('Main');
    }
    setLogin('');
    setPass('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text>Sign In:</Text>
        {error && <Text style={styles.error}>{error}</Text>}
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
          secureTextEntry={true}
          style={{ height: 60, width: 120 }}
          placeholder='Password'
          value={pass}
          onChangeText={(pass) => setPass(pass)}
        />
        <Button title='Login' onPress={authHandler} />

        <Button
          title='Register'
          onPress={() => navigation.navigate('SignUp')}
        />
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
  error: {
    color: 'red',
  },
});
