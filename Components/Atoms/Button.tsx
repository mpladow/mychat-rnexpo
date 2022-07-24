import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/lighttheme';

type Props = {
	type: 'default' | 'submit' | 'danger' | 'info' | 'warning' | undefined;
	onPress: () => void;
	disabled?: boolean;
};
const Button: React.FC<Props> = ({ type, onPress, disabled, children }) => {
	const getButtonStyle = () => {
		switch (type) {
			case 'default':
				break;
			case 'submit':
				return styles.submit;
				break;
			case 'danger':
				return styles.danger;

				break;
			case 'info':
				break;
			case 'warning':
				break;

			default:
				return styles.default;
		}
	};
	const getTextType = () => {
		switch (type) {
			case 'default':
				return styles.textDark;
				break;
			case 'submit':
				return styles.textLight;
				break;
			case 'danger':
				return styles.textLight;
				break;
			case 'info':
				return styles.textDark;
				break;
			case 'warning':
				return styles.textDark;
				break;
			default:
				return styles.textDark;

				break;
		}
	};
	return (
		<Pressable disabled={disabled} onPress={() => onPress()}>
			<View
				style={[
					disabled && styles.disabled,
					styles.button,
					getButtonStyle(),
				]}
			>
				<Text style={getTextType()}>{children}</Text>
			</View>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		width: '100%',
		padding: 8,
		textAlign: 'center',
		borderRadius: 4,
		marginVertical: 4,
	},
	disabled: {
		opacity: 0.5,
	},
	submit: {
		backgroundColor: colors.submit,
	},
	default: {
		backgroundColor: colors.info,
	},
	danger: {
		backgroundColor: colors.danger,
	},
	textDark: {
		color: colors.textBlack,
	},
	textLight: {
		color: colors.textWhite,
	},
});
