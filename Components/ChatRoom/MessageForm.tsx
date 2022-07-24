import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

type Props = {
	sendMessage: () => void;
};
const MessageForm = ({ sendMessage }) => {
	const [message, setMessage] = useState('');

	const sendMessageHandler = () => {
		sendMessage(message);
		setMessage('');
	};
	return (
		<View style={styles.messageForm}>
			<View style={{flex: 2, marginRight: 4}}>
				<Input
					onChange={(e) =>
						setMessage(e.target.value)
					}
					value={message}
				/>
			</View>
			<Button
				disabled={!message}
				type={'submit'}
				onPress={sendMessageHandler}
			>
				Send
			</Button>
		</View>
	);
};

export default MessageForm;

const styles = StyleSheet.create({
	messageForm: {
		flexDirection: 'row',
		flex: 1,
		width: '100%',
		alignItems: 'flex-end'
	}
});
