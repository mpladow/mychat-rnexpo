import { FlatList, ListView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Message } from './Models/Message';
import { colors } from '../../constants/lighttheme';

type Props = {
	messages: Message[];
};
const MessageContainer: React.FC<Props> = ({ messages }) => {
	const messageRef = useRef();
	useEffect(() => {
		// get the message component details to get the size. So we can scroll to the correct place
		if (messageRef && messageRef.current) {
			// const { scrollHeight, clientHeight } =
			// 	messageRef.current;
			// messageRef.current?.scrollTo({
			// 	left: 0,
			// 	top: scrollHeight - clientHeight,
			// 	behavior: 'smooth',
			// });

		}
	}, [messages]);
	return (
		<View style={styles.messageContainer}>
			<FlatList
			ref={messageRef} 
				data={messages}
				keyExtractor={(item, index) => index.toString()}
				// onLayout={() => messageRef?.current.scrollToEnd({animated: true}) }
				renderItem={({ item, index }) => (
					<View
						key={index}
						style={styles.userMessage}
					>
						<View
							style={[
								styles.message,
								styles.bgPrimary,
							]}
						>
							<Text
								style={
									styles.textWhite
								}
							>
								{item.message}
							</Text>
						</View>
						<View>
							<Text
								style={[
									styles.fromUserText,
								]}
							>
								{item.user}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default MessageContainer;

const styles = StyleSheet.create({
	messageContainer: {
		flex: 4,
		flexDirection: 'column',
	},
	userMessage: {
		textAlign: 'right',
		alignSelf: 'flex-end',
		paddingVertical: 4,
	},
	message: { padding: 6, borderRadius: 6 },
	bgPrimary: { backgroundColor: colors.primary },
	textWhite: { color: colors.textWhite },
	fromUserText: { fontSize: 12 },
});
