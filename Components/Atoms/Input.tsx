import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'


const Input = (props: TextInputProps) => {
  return (
		<View>
			<TextInput
				{...props}
				style={[styles.input, props.style]}
			/>
		</View>
  );
}

export default Input

const styles = StyleSheet.create({
	input: {
		padding: 8,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 6,
		marginVertical: 4
	}
})