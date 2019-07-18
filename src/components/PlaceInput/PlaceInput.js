import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const PlaceInput = ({ onPlaceAdded }) => {
	const [text, useText] = useState('');

	const handleInput = value => useText(value);

	const handleSubmit = () => {
		if (text.trim() === '') return;

		onPlaceAdded(text);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.placeInput}
				placeholder="Awesome place"
				value={text}
				onChangeText={handleInput}
			/>
			<Button
				title="Add"
				style={styles.placeButton}
				onPress={handleSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
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

export default PlaceInput;
