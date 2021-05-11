import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {onChange} from 'react-native-reanimated';
import {Button, TextInput} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import {loginWithEmailPassword} from '../actions/authActions';

const {width, height} = Dimensions.get('screen');

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const _handleLogin = async () => {
    dispatch(loginWithEmailPassword(email, password));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/movie.jpeg')} style={styles.logo} />
      </View>

      <View style={{flex: 3, marginTop: 0}}>
        <View style={styles.inputContainer}>
          {/* <Ant style={{top:10,paddingLeft:10}} color='white'  name='user' size={30}/>     */}
          <TextInput
            style={styles.textInput}
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            theme={{
              colors: {
                primary: 'gray',
                underlineColor: 'transparent',
              },
            }}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          {/* <Ant
            style={{top: 10, paddingLeft: 10}}
            color="white"
            name="eye"
            size={30}
          /> */}
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            label="Password"
            mode="outlined"
            theme={{
              colors: {
                primary: 'gray',
                underlineColor: 'gray',
              },
            }}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View>
        <Button
          onPress={_handleLogin}
          mode="container"
          color="#0095ff"
          style={styles.button}>
          LOGIN
        </Button>
        {/* {state.error ? <Text  style={{paddingTop:15,fontSize:13,textAlign:'center',color:'white'}} >{state.error}</Text> : null} */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingVertical: 50,
  },
  logoContainer: {
    flex: 4,
    paddingTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 500,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingTop: 24,
  },
  textInput: {
    width: width / 1.1,
    height: height / 18,
    paddingLeft: 20,
  },
  button: {
    width: width / 1.5,
    height: height / 16,
    borderRadius: 300,
    alignSelf: 'center',
    paddingTop: 6,
    borderColor: 'white',
    borderWidth: 0.5,
    top: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    alignSelf: 'center',
    paddingTop: 30,
    color: 'white',
  },
});
