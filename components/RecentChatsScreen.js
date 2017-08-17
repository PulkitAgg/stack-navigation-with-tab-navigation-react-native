import {Button,View, Text} from 'react-native';
import React from 'react';
import {StackNavigator} from 'react-navigation';

export default class RecentChatsScreen extends React.Component {
     render() {
          return (
               <View>
                    <Text> You can chat with Rahul</Text>
               <Button onPress={() => this.props.navigation.navigate('Chat', {user: 'Rahul'})}
                    title="Chat with Rahul"/>
               </View>);
     }
}
