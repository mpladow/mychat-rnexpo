import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './Components/ChatRoom/Chat';
import Lobby from './Components/Lobby';

export default function App() {
	const [connection, setConnection] = useState()
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([])
	// creates a connection with the room, starts the connection
	const joinRoom = async (user, room) => {
		try {
			// set up connection 
			const connection = new HubConnectionBuilder()
				.withUrl('https://localhost:44329/chat')
				.configureLogging(LogLevel.Information)
				.build();

			// sets up the handler. This function is invoked from the server
			connection.on("ReceiveMessage", (user, message) => {
				console.log('message received', message);
				setMessages(messages => [...messages, { user, message }])
			})
			// connection.on("WelcomeMessage", (user, botmessage) => {
			// 	console.log(`${user} says ${botmessage}`)
			// })

			// close connection
			connection.onclose(e => {
				setConnection();
				setMessages([]);
				setUsers([]);
			})

			connection.on("UsersInRoom", (users) => {
				setUsers(users);
			})

			await connection.start();
			// calls the function that exists in the backend
			await connection.invoke('JoinRoom', { user, room })

			setConnection(connection);

		} catch (e) {
			console.log(e);
		}
	}

	const sendMessage = async (message) => {
		try {
			await connection.invoke("SendMessage", message);
		} catch (e) {
			console.log(e);
		}
	}


	const closeConnection = async () => {
		try {
			await connection.stop();
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<View style={ styles.container }>
			<Text>My Chat Room</Text>
			{ !connection ? <Lobby joinRoom={ joinRoom } /> : <Chat messages={ messages } users={users} sendMessage={ sendMessage } closeConnection={ closeConnection } /> }
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 12
	},
});
