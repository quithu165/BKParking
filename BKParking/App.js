import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native'
import LoginComponent from './view/LoginComponent'
import SignupComponent from './view/SignupComponent'
import HomeComponent from './view/HomeComponent'
const Stack = createStackNavigator();

class LoginScreen extends React.Component{
  render() {
    return (
       <LoginComponent navigation={this.props.navigation}/>
    );
  }
}

class SignupScreen extends React.Component{
  render() {
    return (
       <SignupComponent navigation={this.props.navigation}/>
    );
  }
}

class HomeScreen extends React.Component{
  render() {
    return (
       <HomeComponent navigation={this.props.navigation}/>
    );
  }
}
export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="signup" 
          component={SignupScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="home" 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}