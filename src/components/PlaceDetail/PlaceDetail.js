import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  Button,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetail = ({ selectedPlace, onModalClosed, onItemDeleted }) => {
  let modalContent = null;

  if (selectedPlace) {
    modalContent = (
      <View style={styles.modalContent}>
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={onModalClosed}
      visible={selectedPlace !== null}
      animeationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deletedButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  placeImage: {
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deletedButton: {
    alignItems: "center"
  }
});

export default PlaceDetail;
