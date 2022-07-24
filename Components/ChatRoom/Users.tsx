import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
	users: [];
};
const Users: React.FC<Props> = ({ users }) => {
	return (
		<View>
			<FlatList
				data={users}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) =>(<Text>{item}</Text>)}
			/>
			<Text>Users</Text>
		</View>
	);
};

export default Users;

const styles = StyleSheet.create({});
