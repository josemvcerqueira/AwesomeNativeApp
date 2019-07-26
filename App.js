import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/cloud.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deselectPlace,
  deletePlace,
  selectPlace
} from "./src/redux/actions/";

const App = ({
  places,
  selectedPlace,
  onAddPlace,
  onDeletePlace,
  onSelectPlace,
  onDeselectPlace
}) => {
  const handlePlaces = placeName => onAddPlace(placeName);

  const handleSelected = key => onSelectPlace(key);

  const modalClosedHandler = () => onDeselectPlace();

  const placeDeleteHandler = () => onDeletePlace();

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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = ({ places: { places, selectedPlace } }) => ({
  places,
  selectedPlace
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: name => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: key => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
