/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
/**
 * 页面路由
 */
import HomeScreen from './view/home'
import UserScreen from './view/user'
import AgentScreen from './view/agent'
import LoginScreen from './view/login'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Bottom1 = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  User: {
    screen: UserScreen
  }
},{
  initialRouteName: 'Home'
});

const Bottom2 = createBottomTabNavigator({
  Home2: {
    screen: HomeScreen
  },
  Agent2: {
    screen: AgentScreen
  },
  User2: {
    screen: UserScreen
  }
},{
  initialRouteName: 'Home2'
});

const AppIndex = createStackNavigator({
  App1: {
    screen: Bottom1
  },
  App2: {
    screen: Bottom2
  },
  Login: {
    screen: LoginScreen
  }
},{
  initialRouteName: 'App1',
  defaultNavigationOptions: {
    headerStyle: {
        // backgroundColor: '#f4511e',
    },
    headerBackTitle: null,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    header: null
  }
})

const AppContainer = createAppContainer(AppIndex);

export default class App extends Component{

  // 样式渲染完成后 隐藏启动屏幕
  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return <AppContainer></AppContainer>
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>W</Text>
    //     <Text style={styles.instructions}>To get started</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
