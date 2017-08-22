import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { TabNavigator } from "react-navigation";

import  ChatScreen  from './components/ChatScreen.js';
 import RecentChatsScreen from './components/RecentChatsScreen.js';
 import AllContactsScreen from './components/AllContactsScreen.js';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};


const FirstProject = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('FirstProject', () => FirstProject);
