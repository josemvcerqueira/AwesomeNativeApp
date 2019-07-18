import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/LisItem';

const PlaceList = ({ places, onItemPressed, onItemDeleted }) => {
	const handleFlatList = info => (
		<ListItem
			placeName={info.item.value}
			onItemPressed={() => onItemDeleted(info.item.key)}
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
		width: '100%',
	},
});

export default PlaceList;
