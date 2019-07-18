import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/cloud.png';

const App = () => {
  const [places, usePlaces] = useState([]);

  const handlePlaces = placeName => {
    usePlaces(prevState =>
      prevState.concat({
        key: `${Math.random()}`,
        name: placeName,
        image: placeImage,
      })
    );
  };

  const handleDelete = key => {
    usePlaces(prevState => prevState.filter(place => place.key !== key));
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={handlePlaces} />
      <PlaceList places={places} onItemDeleted={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
