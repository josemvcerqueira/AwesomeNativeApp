import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/LisItem';

const PlaceList = ({ places, onItemPressed, onItemDeleted }) => {
	const placeOutput = places.map((place, index) => (
		<ListItem
			key={index}
			placeName={place}
			onItemPressed={() => onItemDeleted(index)}
		/>
	));
	return <ScrollView style={styles.listContainer}>{placeOutput}</ScrollView>;
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
	},
});

export default PlaceList;
