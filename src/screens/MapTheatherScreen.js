import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
export default function MapTheatherScreen({route, navigation}) {
  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
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
});
