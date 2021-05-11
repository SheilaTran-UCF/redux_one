import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MovieRender from '../components/MovieRender';

import {fetchList} from '../actions/movieAction';

// Array

const arr = [
  {
    id: 1,
    name: 'Transformer',
    isLike: true,
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Transformer',
    isLike: true,
    image:
      'https://media.gettyimages.com/photos/empty-pavement-with-modern-architecture-picture-id1207663571?s=612x612',
  },
  {
    id: 3,
    name: 'Transformer',
    isLike: true,
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(fetchList(1));
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={state}
          keyExtractor={item => item.id}
          extraData={selectedId}
          //   renderItem={({item}) => <Text>{item.name}</Text>}
          renderItem={({item}) => (
            <MovieRender navigation={navigation} movie={item} />
          )}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
