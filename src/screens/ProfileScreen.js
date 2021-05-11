import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Ant from 'react-native-vector-icons/AntDesign';
import ButtonCustom from '../components/common/ButtonCustom';

import {useDispatch} from 'react-redux';
import {logoutUser} from '../actions/authActions';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuodLRaeukKVv4VIilSPuDhlZ9beJB0JR3w&usqp=CAU';

const UserDetail = custom => {
  return (
    <View
      style={{
        paddingTop: 20,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={{uri: url}}
        style={{width: 100, height: 100, borderRadius: 300}}
      />
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Sheila</Text>
      <Ant name="customerservice" size={40} color="black" />
    </View>
  );
};

const mockData = [
  {
    icon: 'heart',
    feature: 'Favorite',
  },
  {
    icon: 'unlock',
    feature: 'Remove Ads',
  },
  {
    icon: 'hourglass',
    feature: 'Restore Purchase',
  },
  {
    icon: 'star',
    feature: 'Rate this App',
  },
  {
    icon: 'tag',
    feature: 'Feedback',
  },
  {
    icon: 'sharealt',
    feature: 'share this app',
  },
];
const FeatureRenderItem = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          paddingHorizontal: 4,
          borderColor: 'gray',
          borderWidth: 0.2,
        }}>
        <Ant
          style={{paddingHorizontal: 30}}
          name={`${item.icon}`}
          size={30}
          color="black"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            alignSelf: 'center',
            paddingLeft: 10,
          }}>
          {item.feature}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const _handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <UserDetail />
      </View>
      <View style={styles.featureSection}>
        <FlatList
          data={mockData}
          renderItem={({item}) => <FeatureRenderItem item={item} />}
        />
      </View>
      <View style={styles.btnSection}>
        <ButtonCustom onPressHandle={_handleLogout} title="Logout" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    flex: 2 / 10,
  },
  featureSection: {
    flex: 5 / 10,
    marginTop: 20,
  },
  btnSection: {
    flex: 3 / 10,
  },
});
