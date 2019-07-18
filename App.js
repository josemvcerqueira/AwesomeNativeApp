import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/cloud.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

const App = () => {
  const [places, usePlaces] = useState([]);
  const [selectedPlace, useSelectedPlace] = useState(null);

  const handlePlaces = placeName => {
    usePlaces(prevState =>
      prevState.concat({
        key: `${Math.random()}`,
        name: placeName,
        image: placeImage,
      })
    );
  };

  const handleSelected = key => {
    const place = places.find(_place => _place.key === key);
    useSelectedPlace(place);
  };

  const modalClosedHandler = () => useSelectedPlace(null);

  const placeDeleteHandler = () => {
    usePlaces(prevState =>
      prevState.filter(place => place.key !== selectedPlace.key)
    );
    modalClosedHandler();
  };

  return (
    <View style={styles.container}>
      <PlaceDetail
        selectedPlace={selectedPlace}
        onItemDeleted={placeDeleteHandler}
        onModalClosed={modalClosedHandler}
      />
      <PlaceInput onPlaceAdded={handlePlaces} />
      <PlaceList places={places} onItemSelected={handleSelected} />
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
