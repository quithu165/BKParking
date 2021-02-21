import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View, TextInput, Image, TouchableOpacity, Text, Alert} from 'react-native';

const axios = require("axios");
class LoginComponent extends Component {
  state={
    username:"",
    password:""
  }
  
  handleUsername = (text) => {
    this.setState({ username: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = (name, pass) => {
    //alert('email: ' + email + ' password: ' + pass)
    axios.post('http://gogito.duckdns.org:3002/login', {
      username: name,
      password: pass
    })
    .then((response) => {
      console.log(JSON.stringify(response.data.username));
      this.props.navigation.navigate('home')
    }, (error) => {
      console.log("error");
      Alert.alert("Wrong username or password!");
    });
 }

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/homeBackground.jpg')}>
        {/* Logo */}
        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        <Image style={styles.logoName} source={require('../assets/logoName.png')}></Image>
        {/* Input */}
        <View style={styles.inputUsername}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#0D0D0F"
            onChangeText={this.handleUsername}
          />
        </View>

        <View style={styles.inputPassword}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#0D0D0F"
            onChangeText={this.handlePassword}
          />
        </View>
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={
            () => {
              this.login(this.state.username, this.state.password)
            }
          }
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <Text 
              style={styles.signupBtn}
              onPress={
                () => {
                  this.props.navigation.navigate('signup')
                }
              }
            >
               Sign up
            </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputUsername: {
    width: '80%',
    backgroundColor: '#F9FBFC',
    borderRadius: 25,
    borderColor: '#0318FA',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    position:'absolute',
    top: 250,
    padding: 20,
  },
  inputPassword: {
    width: '80%',
    backgroundColor: '#F9FBFC',
    borderRadius: 25,
    borderColor: '#0318FA',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    position:'absolute',
    top: 310,
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  logo:{
      height:120,
      width:120,
      position:'absolute',
      top: 50,
  },
  logoName:{
      height:30,
      width:170,
      position:'absolute',
      top: 175,
  },
  forgot:{
    borderRadius: 5,
    // Set border width.
    borderWidth: 2,
    // Set border Hex Color Code Here.
    borderColor: '#FF5722',
     color:"blue",
    fontSize:13,
    position:'absolute',
    right:0,
    top:370,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#5C5CF0",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    position:'absolute',
    top: 400,
  },
  loginText:{
    color:"white"
  },
  signupTextCont:{
      flexGrow:1,
      alignItems:'center',
      justifyContent:'flex-end',
      marginVertical:16,
      flexDirection:'row',
      position:'absolute',
      bottom:0
  },
  signupText:{
      color:'white',
      fontSize:16,
  },
  signupBtn:{
      color:'#2400FB',
      fontSize:16,
      fontWeight:'500'
  }
});
export default LoginComponent;
