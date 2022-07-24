import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageContainer from './MessageContainer'
import MessageForm from './MessageForm'
import Button from '../Atoms/Button'
import Users from './Users'

type Props = {
	messages: [],
	users: [],
	sendMessage: () => void,
	closeConnection: () => void
}
const Chat: React.FC<Props> = ({messages, users, sendMessage, closeConnection}) => {
  return (
		<View style={styles.chat}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
				<Button type='danger' onPress={closeConnection}>
					Leave Room
				</Button>
			</View>
			<Users users={users}/>
			<MessageContainer messages={messages} />
			<MessageForm sendMessage={sendMessage} />
		</View>
  );
}

export default Chat

const styles = StyleSheet.create({
	chat: {
		width:"100%",
		flexDirection: 'column',
		flex: 1
	}
})