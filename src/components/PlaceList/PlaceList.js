import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/LisItem';

const PlaceList = ({ places }) => {
	const placeOutput = places.map((place, index) => (
		<ListItem key={index} placeName={place} />
	));
	return <View style={styles.listContainer}>{placeOutput}</View>;
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
	},
});

export default PlaceList;
