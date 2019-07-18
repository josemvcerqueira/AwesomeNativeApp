import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const LisItem = ({ placeName, onItemPressed }) => {
	return (
		<TouchableOpacity onPress={onItemPressed}>
			<View style={styles.listItem}>
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
	},
});

export default LisItem;
