import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');

export default function BusttonCustom({
  navigation,
  onPressHandle,
  title,
  ...customStyle
}) {
  return (
    <View>
      <Button
        labelStyle={{fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}
        mode="contained"
        style={styles.button}
        onPress={onPressHandle}
        color="red"
        {...customStyle}>
        {title}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '300',
    alignSelf: 'center',
    paddingTop: 30,
    color: 'white',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: width / 2,
    height: height / 18,
    borderRadius: 300,
    justifyContent: 'center',
  },
});
