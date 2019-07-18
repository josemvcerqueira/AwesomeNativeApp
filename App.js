import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';

const App = () => {
  const [text, useText] = useState('');
  const [places, usePlaces] = useState([]);

  const handleInput = value => useText(value);

  const handleSubmit = () => {
    if (text.trim() === '') return;

    usePlaces(prevState => prevState.concat(text));
  };

  const placesOutput = places.map((place, index) => (
    <Text key={index}>{place}</Text>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Awesome place"
          value={text}
          onChangeText={handleInput}
        />
        <Button title="Add" style={styles.placeButton} onPress={handleSubmit} />
      </View>
      <View>{placesOutput}</View>
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default App;
