import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Atoms/Button';
import Input from './Atoms/Input';

type Props = {
	joinRoom: (user: string, room: string) => void
} 
const Lobby: React.FC<Props> = ({ joinRoom }) => {
	const [user, setUser] = useState('');
	const [room, setRoom] = useState('');

	const onJoinHandler = () => {
		joinRoom(user, room);
	};
	return (
		<View>
		<Text>Username</Text>	
			<Input onChange={(e) => setUser(e.target.value)} />
			<Text>Room Number</Text>
			<Input onChange={(e) => setRoom(e.target.value)} />

			<Button
			type='submit'
				onPress={onJoinHandler}
				disabled={!user || !room}
			>
				Lobby
			</Button>
		</View>
	);
};

export default Lobby;

const styles = StyleSheet.create({});
