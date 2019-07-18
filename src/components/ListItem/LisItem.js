import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LisItem = ({ placeName }) => {
	return (
		<View style={styles.listItem}>
			<Text>{placeName}</Text>
		</View>
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
