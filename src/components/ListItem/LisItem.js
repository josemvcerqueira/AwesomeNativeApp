import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const LisItem = ({ placeName, placeImage, onItemPressed }) => {
	return (
		<TouchableOpacity onPress={onItemPressed}>
			<View style={styles.listItem}>
				<Image style={styles.placeImage} source={placeImage} />
				<Text>{placeName}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		backgroundColor: '#eee',
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	placeImage: {
		marginRight: 8,
		height: 30,
		width: 30,
	},
});

export default LisItem;
