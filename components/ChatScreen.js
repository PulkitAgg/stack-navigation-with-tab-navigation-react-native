import {
  Text,
  View,
} from 'react-native';
import React from 'react';
 import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
       const {state} = this.props.navigation;
    return (
      <View>
        <Text>Chat with {state.params.user}</Text>
      </View>
    );
  }
}
