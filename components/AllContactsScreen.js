import {
Button , View, Text
} from 'react-native';
import React from 'react';
 import { StackNavigator } from 'react-navigation';

 export default class AllContactsScreen extends React.Component {
   render() {
     return (
          <View>
               <Text> You can chat with Pulkit</Text>
               <Button
             onPress={() => this.props.navigation.navigate('Chat', { user: 'Pulkit' })}
             title="Chat with Pulkit"
           />
          </View>
);
   }
 }
