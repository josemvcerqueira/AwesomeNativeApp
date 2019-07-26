import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/LisItem";

const PlaceList = ({ places, onItemPressed, onItemSelected }) => {
  const handleFlatList = info => (
    <ListItem
      placeName={info.item.name}
      placeImage={info.item.image}
      onItemPressed={() => onItemSelected(info.item.key)}
    />
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={handleFlatList}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
