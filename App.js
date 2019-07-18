import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

const App = () => {
  const [places, usePlaces] = useState([]);

  const handlePlaces = placeName => {
    usePlaces(prevState => prevState.concat(placeName));
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={handlePlaces} />
      <PlaceList places={places} />
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
